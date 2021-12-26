#!/bin/bash

mv ../sidearrow.github.io/.git /tmp/.git
touch ./out/.nojekyll
rm -rf ../sidearrow.github.io
mv ./out ../sidearrow.github.io
mv /tmp/.git ../sidearrow.github.io/.git