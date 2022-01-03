# zp-HomeAssistant

## Description
一些homeassistant配置

## Software Architecture
Software architecture description

## Installation

1.  docker 
		sudo docker run -d   --name homeassistant   -p 8123:8123   --privileged   --restart=unless-stopped   -e TZ=Asia/Shanghai   -v /home/pi/homeassistant:/config   --network=bridge   ghcr.io/home-assistant/raspberrypi4-homeassistant:stable
2.  xxxx
3.  xxxx

#### 配置属于自己的docker镜像
1.		sudo docker pull ubuntu:latest
2.		*sudo docker run -itd --name ubuntu-test ubuntu
3.		sudo docker run --name zphass -p 8124:8123 -it zpskt/hass-cmd64:0.0.1 /bin/bash
####进入容器后：
####更新源
4.		apt update -y && apt upgrade -y
5.		apt-get install -y python3.9 python3.9-dev python3.9-venv python3.9-pip libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 libturbojpeg tzdata
##安装python3和pip
6.		apt-get install python3.9 -y
7.		apt-get install python3.9-pip -y
##安装homeassistant
		pip3 install wheel -i https://pypi.tuna.tsinghua.edu.cn/simple
8.		pip3 install homeassistant -i https://pypi.tuna.tsinghua.edu.cn/simple
##安装完命令行执行hass
9.		hass / hass --open-ui
10.		sudo docker cp ./config hass-test:/root
11.		sudo docker commit -m "hass-0.0.1" -a "zp" hass zpskt/hass-0.0.1:amd64
12.		sudo docker commit -m "hass-0.0.1" -a "zp" hass-test(你的容器名字) zpskt/hass-0.0.1:amd64
13.		sudo docker push zpskt/hass-0.0.1:amd64（你的镜像名字）
14.		sudo docker run --name zphass -p 8124:8123 -it zpskt/hass-amd64:0.0.1 /bin/bash
		apt-get install -y systemctl nano
		nano /etc/systemd/system/home-assistant.service 
>[Unit]
Description=Home Assistant
After=network.target
[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/hass -c "/root/.homeassistant" 
[Install]
WantedBy=multi-user.target
>
	apt-get install systemctl
	systemctl --system daemon-reload
	systemctl enable home-assistant.service
	systemctl start home-assistant.service

	cd /root
	nano hass_start.sh
>/usr/local/bin/hass -c "/root/.homeassistant"	
>
	nano Dockerfile

>FROM zpskt/hass-armv7:0.0.1
CMD ["/bin/sh","/root/hass_start.sh"]
> 
	sudo docker build -t zpskt/hass-0.0.2 .
#####执行容器
	sudo docker run --name hass-test -p 8124:8123 -it zpskt/hass-0.0.1 /bin/bash
#### Instructions

1.  xxxx
2.  xxxx
3.  xxxx

#### Contribution

1.  Fork the repository
2.  Create Feat_xxx branch
3.  Commit your code
4.  Create Pull Request


#### Gitee Feature

1.  You can use Readme\_XXX.md to support different languages, such as Readme\_en.md, Readme\_zh.md
2.  Gitee blog [blog.gitee.com](https://blog.gitee.com)
3.  Explore open source project [https://gitee.com/explore](https://gitee.com/explore)
4.  The most valuable open source project [GVP](https://gitee.com/gvp)
5.  The manual of Gitee [https://gitee.com/help](https://gitee.com/help)
6.  The most popular members  [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
