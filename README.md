# zp-HomeAssistant

## 介绍
config放置homeassistant配置文件
install放置开机服务，脚本，dockerfile等  
一个厉害的人的教程：https://shaonianzhentan.github.io/ha-docs/#/    
官方文档：  
前端文档：https://developers.home-assistant.io/docs/frontend/  
HASS开始：https://www.home-assistant.io/getting-started/  
中文论坛：https://bbs.hassbian.com/  
外文论坛：https://community.home-assistant.io/categories
### 前端架构
	frontend/src/entrypoints/core.js 
	这是一个非常小的脚本，它是页面上加载的第一件事。它负责检查身份验证凭据并设置与后端的 websocket 连接。
	frontend/src/entrypoints/app.js
	这是渲染侧边栏和处理路由所需的一切
	frontend/src/panels/
	Home Assistant 中的每个页面都是一个面板。组件可以注册额外的面板以显示给用户。面板的示例是“状态”、“地图”、“日志”和“历史”。
	frontend/src/dialogs
	某些信息和数据条目以流的形式呈现给用户。对话框可以在任何页面上触发。最常见的是实体更多信息对话框，它允许用户深入了解实体状态、历史和设置  
	frontend/package.json 位于模块的目录下，用于定义包的属性.   
项目采用node进行管理设置。
> Node 是一个服务器端 JavaScript 解释器，用于方便地搭建响应速度快、易于扩展的网络应用。Node.js 使用事件驱动， 非阻塞I/O 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。  
>Node.js 是一个可以让 JavaScript 运行在浏览器之外的平台  
Node.js 就是运行在服务端的 JavaScript
node可以直接执行js文件  >  

		node helloworld.js  
如果我们使用 PHP 来编写后端的代码时，需要 Apache 或者 Nginx 的 HTTP 服务器，并配上 mod_php5 模块和 php-cgi。
使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。


## Docker安装
docker介绍  
>zpskt/hass-raspi4:0.0.1 树莓派4Bhass，里面组件多但是有些报错  
zpskt/hass-raspi4:0.0.2 树莓派4Bhass，侧边栏，文件管理  
zpskt/hass-mac:0.0.1 mac上的镜像  

### 官方的docker安装  
		sudo docker run -d   --name homeassistant   -p 8123:8123   --privileged   --restart=unless-stopped   -e TZ=Asia/Shanghai   -v /home/pi/homeassistant:/config   --network=host   ghcr.io/home-assistant/raspberrypi4-homeassistant:stable

### 配置属于自己的docker镜像并配置homeassistant
***你可以用这个代码安装，无论你是amd64还是arm架构***  
下载ubuntu基础镜像
1.		sudo docker pull ubuntu:latest
2.		sudo docker run -itd --name hass-test ubuntu
安装python3.9.8 这里我采用源码安装    
1.		apt update -y && apt upgrade -y
2.		apt install -y build-essential gdb lcov libbz2-dev libffi-dev libgdbm-dev liblzma-dev libncurses5-dev libreadline6-dev libsqlite3-dev libssl-dev lzma lzma-dev tk-dev uuid-dev zlib1g-dev wget   
下载python源码包  

3.		wget https://www.python.org/ftp/python/3.9.8/Python-3.9.8.tgz
4.		tar -zxvf Python-3.9.8.tgz && cd Python-3.9.8  
5.		./configure prefix=/usr/local/python3   
6.		make && make install   
7.		ln -s /usr/local/python3/bin/python3.9 /usr/bin/python3   
8.		ln -s /usr/local/python3/bin/pip3.9 /usr/bin/pip3   
检查你的pip3版本，我用的是20.2.4成功的
		pip3 -V #查看版本
		/usr/local/python3/bin/python3.9 -m pip install pip==20.2.4 #降级命令

9.		pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

再次更新源，并且安装依赖  

10.		apt update -y && apt upgrade -y
11.		apt-get install -y  libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 libturbojpeg tzdata  
安装homeassistant  

12.		pip3 install wheel -i https://pypi.tuna.tsinghua.edu.cn/simple
13.		pip3 install homeassistant -i https://pypi.tuna.tsinghua.edu.cn/simple  
 
14.		ln -s /usr/local/python3/bin/hass /usr/bin/hass  
安装完命令行执行hass，此时hass命令在/usr/local/bin/hass中  

15.		hass / hass -c /path/xx
/path/xx是你个人的配置路径
此时hass检查有没有 -c，如果没有默认在/root/.homeassistant新建配置文件

如果你看到http://yourpath:8123正常运行了，那么恭喜你此时这个容器就已经建设完成了，我们要保存这个容器为镜像。

16.		sudo docker commit -m "hass-0.0.1" -a "zp" hass-test(你的容器名字) zpskt/hass-raspi4:0.0.1(你要保存的镜像名，可以自定义)
此时的镜像已经在你本机，没有上传到dockerhub，你也可以选择上传到dockerhub  
		sudo docker push zpskt/hass-raspi4:0.0.1（你的镜像名字）
现在我们用已经设置完的镜像来生成一个新容器  

17.		sudo docker run --name zphass -p 8124:8123 -it zpskt/hass-raspi4:0.0.1（刚才你的镜像名字） /bin/bash  
进入容器执行hass手动打开

18.		sudo docker exec -it zphass /bin/bash
		容器id#: hass
大功告成
### 常用Docker命令  
复制本地文件到容器中  

		sudo docker cp ./config hass-test:/root
提交自己的容器生成一个镜像

		sudo docker commit -m "hass-0.0.1" -a "zp" hass-test(你的容器名字) zpskt/hass-raspi4:0.0.1
提交自己的镜像到dockerhub。（要在终端进行登陆你的docker账号）

		sudo docker push zpskt/hass-raspi4:0.0.1（你的镜像名字）
开启此容器

		sudo docker run --name zphass -p 8124:8123 -it zpskt/hass-raspi4:0.0.1 /bin/bash
进入docker容器

		sudo docker exec -it zphass /bin/bash  
创建dockerfile

		nano Dockerfile  

>  FROM zpskt/hass-raspi4:0.0.2  
	   ENTRYPOINT ["/usr/local/bin/hass", "-c"]  
	   CMD ["/root/.homeassistant"]>


根据dockerfile建立镜像  

		sudo docker build -t myhass .
执行容器

		sudo docker run --name hass-test -d -p 8124:8123 -it myhass /bin/bash
编排docker，设置容器开机启动hass  .是指根据当前文件夹的

	
### 修改属于自己的frontend 
首先git下来frontend源码，我已经fork了  

		git clone https://github.com/zpskt/frontend.git
1.开启hass容器，设置文件映射，一共两个：配置文件和frontend  

		sudo docker run -itd   --name hass -p 8124:8123  -v /Users/zp/Desktop/homeassistant/:/root/.homeassistant   -v /Users/zp/Desktop/frontend:/frontend   zpskt/hass-mac:0.0.1
2.开启容器后你需要在配置文件configuration.yaml，添加配置
>frontend:    
>（缩进）development_repo: /path/to/hass/frontend/  

/path/to/hass/frontend/ 是你在容器中frontend的路径  
3.你需要安装nvm，node，yarn，node版本在frontend文件夹都已经被设置了，执行代码即可  
安装连接：https://developers.home-assistant.io/docs/frontend/development/ 

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

web容器，部署代码， 官方dockerfile，docker里面    ts也用框架 
hass core   展现web
hass启动命令
	import re
	import sys
	from homeassistant.__main__ import main
	if __name__ == '__main__':
		sys.argv[0] = re.sub(r'(-script\.pyw|\.exe)?$', '', sys.argv[0])
		sys.exit(main())




nodejs 解析web 有自己的服务器 =vue
为什么引用ts
有个文件调用hass core

loadingdata 图标
