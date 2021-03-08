#!/bin/bash

PORT := 8080
NAME := wearemoka

run:
	docker run --name ${NAME} --rm -p ${PORT}:80 -v ${PWD}:/usr/share/nginx/html:ro -d nginx
