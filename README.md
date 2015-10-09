Global-Shim
===================================

Allow node.js to load global modules from custom paths

## Examples

The code below fails because The grunt module is not installed in current path
	
	> npm install grunt -g
	> node
	require('grunt') // Error: Cannot find module 'grunt'
	
The module 'global-shim' fixes it.

	> npm install grunt -g
	> npm install global-shim --save-dev
	> node
	require('global-shim')()
	require('grunt') // Success
	
## How it works

'global-shim' hacks the internal method of require. It adds the path of node itself, where the global modules is installed, when resolving paths.
	
--------------------------------------------

令 NodeJs 支持从自定义路径加载全局模块

## 示例

以下代码会出现错误，因为 grunt 模块没有在本地安装

	> npm install grunt -g
	> node
	require('grunt') // Error: Cannot find module 'grunt'
	
'global-shim' 模块可以修复它：

	> npm install grunt -g
	> npm install global-shim --save-dev
	> node
	require('global-shim')()
	require('grunt') // Success
	
## 原理

'global-shim' 会更改 nodejs 内部模块加载方式，让它尝试去加载 node 程序本身所在目录的 node_modules。只要是全局安装的模块，都可以顺利加载。

