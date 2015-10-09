// Allow NodeJs to load modules from custom directories.

// 使 NodeJs 支持从指定路径载入全局模块。
// 默认支持从 Node 进程所在路径的 node_modules 加载模块。

// 参考：
// https://github.com/nodejs/node/blob/master/lib/module.js

function globalShim(paths){
	paths = paths || [process.execPath.replace(/([\/\\])[^\/\\]*$/, '$1node_modules')];
	var Module = module.constructor;
	if(!Module._resolveLookupPaths){
		throw new Error("globalShim is currently not supported for Nodejs " + process.version);
	}
	if(Module._resolveLookupPaths.paths){
		Module._resolveLookupPaths.paths.push.apply(Module._resolveLookupPaths.paths, paths);
		return;
	}
	Module.__resolveLookupPaths = Module._resolveLookupPaths;
	Module._resolveLookupPaths = function(request, parent){
		var result = Module.__resolveLookupPaths(request, parent);
		var start = request.substring(0, 2);
		if (start !== './' && start !== '..') {
			result[1].push.apply(result[1], Module._resolveLookupPaths.paths);
		}
		return result;
	};
	Module._resolveLookupPaths.paths = paths;
}

module.exports = globalShim;