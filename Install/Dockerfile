FROM zpskt/hass-raspi4:0.0.1
#复制文件
COPY hass_start.sh /
#复制文件，tar等自动解压
#ADD
#定参
#启动 node-red
ENTRYPOINT ["/usr/local/bin/hass", "-c"]
CMD ["/root/.homeassistant"]
