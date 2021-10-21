#!/bin/bash

if [ ! "$(docker ps -q -f name=chargo-mysql)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=chargo-mysql)" ]; then
        echo -e "\033[32m=========== 删除镜像 ==========\033[0m"
        docker rm -f chargo-mysql
        docker rmi -f mysql-img
        echo -e "\033[32m=========== 删除容器 ==========\033[0m"
    fi
    echo -e "\033[32m=========== 开始构建镜像和容器 ==========\033[0m"
    docker build -t mysql-img .
    docker run -it -p 3306:3306 -d --name chargo-mysql mysql-img --character-set-server=utf8mb4
fi
