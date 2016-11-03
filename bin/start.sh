#!/usr/bin/env sh

source ./.env
nohup ./bin/hubot --adapter slack > logs/out.log 2> logs/error.log &
