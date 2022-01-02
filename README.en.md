# zp-HomeAssistant

#### Description
一些homeassistant配置

#### Software Architecture
Software architecture description

#### Installation

1.  docker
	sudo docker run -d   --name homeassistant   -p 8123:8123   --privileged   --restart=unless-stopped   -e TZ=Asia/Shanghai   -v /home/pi/homeassistant:/config   --network=bridge   ghcr.io/home-assistant/raspberrypi4-homeassistant:stable
2.  xxxx
3.  xxxx

#### 配置属于自己的docker镜像
1.	sudo docker pull ubuntu:latest
2.	sudo docker run -itd --name ubuntu-test ubuntu
3.	sudo docker run --name hass-test -p 8124:8123 -it ubuntu /bin/bash
##进入容器后：
##更新源
4.	apt update -y
5.	apt upgrade -y
##安装python3和pip
6.	apt-get install python3 -y
7.	apt-get install python3-pip -y
##安装homeassistant
8.	pip install homeassistant -i https://pypi.tuna.tsinghua.edu.cn/simple
##安装完命令行执行hass
9.	hass / hass --open-ui
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
