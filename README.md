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

�� NodeJs ֧�ִ��Զ���·������ȫ��ģ��

## ʾ��

���´������ִ�����Ϊ grunt ģ��û���ڱ��ذ�װ

	> npm install grunt -g
	> node
	require('grunt') // Error: Cannot find module 'grunt'
	
'global-shim' ģ������޸�����

	> npm install grunt -g
	> npm install global-shim --save-dev
	> node
	require('global-shim')()
	require('grunt') // Success
	
## ԭ��

'global-shim' ����� nodejs �ڲ�ģ����ط�ʽ����������ȥ���� node ����������Ŀ¼�� node_modules��ֻҪ��ȫ�ְ�װ��ģ�飬������˳�����ء�

