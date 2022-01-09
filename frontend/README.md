# hass的前端  
## 使用教程
### 修改属于自己的frontend 
首先git下来frontend源码，我已经fork了  

		git clone https://github.com/zpskt/frontend.git
1.开启hass容器，设置文件映射，一共两个：配置文件和frontend  

		sudo docker run -itd   --name hass -p 8124:8123  -v /Users/zp/Desktop/homeassistant/:/root/.homeassistant   -v /Users/zp/mygit/frontend:/frontend   zpskt/hass-mac:0.0.1
2.开启容器后你需要在配置文件configuration.yaml，添加配置
>frontend:    
>（缩进）development_repo: /path/to/hass/frontend/  

/path/to/hass/frontend/ 是你在容器中frontend的路径  
3.你需要安装nvm，node，yarn，node版本在frontend文件夹都已经被设置了，执行代码即可  

		nvm install
		nvm use
		npm install --global yarn
		script/bootstrap   

4.此时你所有的基础环境已经配置完毕，现在开始运行开发脚本，当您更改任何源文件时，该构建会自动更新。要运行此服务器，请运行：  

		nvm use
		script/develop
或者也可以选择另一种方式，用vscode编译：在 VSCode 中使用 Ctrl+Shift+P 打开指令面板，Tasks: Run Task -> Develop Frontend 即可开启动态编译  
5.设置浏览器禁用缓存：通过勾选Network>中的框禁用缓存Disable cache  
6.构建前端 

		script/build_frontend
		pip3 install -e /path/to/hass/frontend/
		hass --skip-pip