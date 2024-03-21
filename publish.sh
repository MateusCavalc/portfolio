#!/bin/bash

# get commit message
read -p "> Commit message: " commit_msg
# echo $commit_msg

# git stuff in main
git add .
git commit -am $commit_msg
git push -u origin main

# build application
npm run build

# checkout to gh-pages
git checkout gh-pages

# replace build files
rm favicon.ico index.html
rm -rf ./css ./img ./js

cp ./dist/favicon.ico ./dist/index.html ./

cp -r ./dist/css ./dist/img ./dist/js ./

# publish in gh-pages
git add .
git commit -am $commit_msg
git push -u origin gh-pages

# go back to main
git checkout main