#!/bin/sh
echo ""
echo "nebula relay"
while true
	do
		echo ""
		java -jar EaglerSPRelay.jar --debug
		echo ""
		echo "to cancel restart, press ctrl+c"
	sleep 5
done
