# Run this file with sh command in HA docker to auto REPLACE the github download website in HACS download.py file /config/custom_components/hacs/helpers/function/download.py
# Script by chuixue
#! /bin/bash

# The following is the default download.py file path. Change it if yours is not the current path.
download_py_path="/config/custom_components/hacs/helpers/functions/download.py"

# Delete the old lines if it is available
sed  -i '/url = url.replace("raw.githubusercontent.com", "raw.fastgit.org")/,/url = url.replace("\/\/github.com\/", "\/\/hub.fastgit.org\/")/d' $download_py_path


# Add the new lines
sed -i '/if "tags\/" in url:/i\    url = url.replace("raw.githubusercontent.com", "raw.fastgit.org")\n    if "releases/download/" in url or "archive/refs/" in url:\n        url = url.replace("//github.com/", "//hub.fastgit.org/")' $download_py_path



