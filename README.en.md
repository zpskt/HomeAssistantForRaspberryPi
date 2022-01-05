# zp-HomeAssistant

## Description
config放置homeassistant配置文件
install放置开机服务，脚本，dockerfile等
## Software Architecture
Software architecture description

## 安装

docker安装 官方hass 
1.		sudo docker run -d   --name homeassistant   -p 8123:8123   --privileged   --restart=unless-stopped   -e TZ=Asia/Shanghai   -v /home/pi/homeassistant:/config   --network=bridge   ghcr.io/home-assistant/raspberrypi4-homeassistant:stable

### 配置属于自己的docker镜像
1.		sudo docker pull ubuntu:latest
2.		sudo docker run -itd --name hass-test ubuntu
进入容器更新源
3.		apt update -y && apt upgrade -y
4.		apt-get install -y python3.9 python3.9-dev python3.9-venv python3.9-pip libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 libturbojpeg tzdata
安装python3和pip
5.		apt-get install python3.9 -y
6.		apt-get install python3.9-pip -y
安装homeassistant
7.		pip3 install wheel -i https://pypi.tuna.tsinghua.edu.cn/simple
8.		pip3 install homeassistant -i https://pypi.tuna.tsinghua.edu.cn/simple
安装完命令行执行hass，此时hass命令在>/usr/local/bin/hass中
9.		hass / hass --open-ui
复制自己的配置文件到容器中
10.		sudo docker cp ./config hass-test:/root
提交自己的容器生成一个镜像
11.		sudo docker commit -m "hass-0.0.1" -a "zp" hass-test(你的容器名字) zpskt/hass-raspi4:0.0.1
提交自己的镜像到dockerhub。（要在终端进行登陆你的docker账号）
12.		sudo docker push zpskt/hass-raspi4:0.0.1（你的镜像名字）
开启此容器
14.		sudo docker run --name zphass -p 8124:8123 -it zpskt/hass-amd64:0.0.1 /bin/bash
编排docker，设置容器开机启动hass 
15.		nano Dockerfile
16.	>  FROM zpskt/hass-raspi4:0.0.1  
	   ENTRYPOINT ["/usr/local/bin/hass", "-c"]
	   CMD ["/root/.homeassistant"]>
	   > 
根据dockerfile建立镜像
17.		sudo docker build -t zpskt/hass-raspi4:latest.
执行容器
18.		sudo docker run --name hass-test -d -p 8124:8123 -it zpskt/hass-raspi4:latest /bin/bash
## Instructions

1.  xxxx
2.  xxxx
3.  xxxx

## Contribution

1.  Fork the repository
2.  Create Feat_xxx branch
3.  Commit your code
4.  Create Pull Request


## Gitee Feature

1.  You can use Readme\_XXX.md to support different languages, such as Readme\_en.md, Readme\_zh.md
2.  Gitee blog [blog.gitee.com](https://blog.gitee.com)
3.  Explore open source project [https://gitee.com/explore](https://gitee.com/explore)
4.  The most valuable open source project [GVP](https://gitee.com/gvp)
5.  The manual of Gitee [https://gitee.com/help](https://gitee.com/help)
6.  The most popular members  [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
