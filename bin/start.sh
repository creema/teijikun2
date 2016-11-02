#!/usr/bin/env sh

source ./.env
nohup ./bin/hubot --adapter slack > out.log 2> error.log &
