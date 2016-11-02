#!/usr/bin/env sh

echo "Now stopping..."
sh ./bin/stop.sh
echo "Stopped"
echo "Now starting..."
sh ./bin/start.sh
echo "Started"
echo "Reboot completed!"
