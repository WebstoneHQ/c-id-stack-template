#!/bin/bash

if nc -z localhost 4321 </dev/null; then
	echo "Server already running"
else
	(cd ../webstone-education/app && pnpm dev)
fi
