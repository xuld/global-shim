// Allow NodeJs to load modules from custom directories.

// ʹ NodeJs ֧�ִ�ָ��·������ȫ��ģ�顣
// Ĭ��֧�ִ� Node ��������·���� node_modules ����ģ�顣

// �ο���
// https://github.com/nodejs/node/blob/master/lib/module.js

/**
 * ���� require ȫ������·����
 * @param {String/Array} [paths] ���� require ������·����Ĭ��Ϊ require-global ģ�鱾������·����
 * @example 
 * requireGlobal() // ֧���� require ֱ�Ӽ��� require-global ģ�鱾������·����
 * requireGlobal("D:\\Node\\node_modules") // ֧���� require ����ָ��Ŀ¼�µ�ģ�顣
 */
function requireGlobal(paths){
	paths = paths ? Array.isArray(paths) ? path : [path] : [__dirname.replace(/([\/\\])[^\/\\]*$/, '$1')];
	var Module = module.constructor;
	if(!Module._resolveLookupPaths){
		throw new Error("requireGlobal is currently not supported for Nodejs " + process.version);
	}
	if(!requireGlobal.paths){
		requireGlobal.paths = [];
		Module.__resolveLookupPaths = Module._resolveLookupPaths;
		Module._resolveLookupPaths = function(request, parent){
			var result = Module.__resolveLookupPaths(request, parent);
			/^\.[\.\\]/.test(request) || result[1].push.apply(result[1], requireGlobal.paths);
			return result;
		};
	}
	requireGlobal.paths.push.apply(requireGlobal.paths, paths);
}

module.exports = requireGlobal;