# zp-HomeAssistant

## 介绍
config放置homeassistant配置文件
install放置开机服务，脚本，dockerfile等  
官方文档：  
前端文档：https://developers.home-assistant.io/docs/frontend/  
HASS开始：https://www.home-assistant.io/getting-started/  
中文论坛：https://bbs.hassbian.com/  
外文论坛：https://community.home-assistant.io/categories

## Software Architecture
Software architecture description

## Docker安装
docker介绍  
>zpskt/hass-raspi4:0.0.1 树莓派4Bhass，里面组件多但是有些报错  
zpskt/hass-raspi4:0.0.2 树莓派4Bhass，侧边栏，文件管理  
zpskt/hass-mac:0.0.1 mac上的镜像  

### 官方的docker安装  
		sudo docker run -d   --name homeassistant   -p 8123:8123   --privileged   --restart=unless-stopped   -e TZ=Asia/Shanghai   -v /home/pi/homeassistant:/config   --network=bridge   ghcr.io/home-assistant/raspberrypi4-homeassistant:stable

### 配置属于自己的docker镜像
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
9.		pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

再次更新源，并且安装依赖  

1.		apt update -y && apt upgrade -y
2.		apt-get install -y  libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 libturbojpeg tzdata  
安装homeassistant  

3.		pip3 install wheel -i https://pypi.tuna.tsinghua.edu.cn/simple
4.		pip3 install homeassistant -i https://pypi.tuna.tsinghua.edu.cn/simple
5.		ln -s /usr/local/python3/bin/hass /usr/bin/hass  
安装完命令行执行hass，此时hass命令在/usr/local/bin/hass中  

6.		hass / hass -c /path/xx
/path/xx是你个人的配置路径
此时hass检查有没有 -c，如果没有默认在/root/.homeassistant新建配置文件

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
编排docker，设置容器开机启动hass  .是指根据当前文件夹的Dockerfile文件构建

		sudo docker build -t zpskt/hass-raspi4:latest .
执行容器

		sudo docker run --name hass-test -d -p 8124:8123 -it zpskt/hass-raspi4:latest /bin/bash
### 修改属于自己的frontend 
首先git下来frontend源码，我已经fork了  

		git clone https://github.com/zpskt/frontend.git
1.开启hass容器，设置文件映射，一共两个：配置文件和frontend  

		sudo docker run -itd   --name hass -p 8124:8123  -v /Users/zp/Desktop/homeassistant/:/root/.homeassistant   -v /Users/zp/mygit/HomeAssistant/frontend:/frontend   zpskt/hass-mac:0.0.1
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

