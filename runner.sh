#!/bin/bash
echo "===== RUNNER ====="

JSON1=\'$1\'
JSON2=\'$2\'

echo "
var data = {};
data = {
    password: $JSON1,
    objBff: $JSON2
}" > ./data.js

node root.js