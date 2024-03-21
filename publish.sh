#!/bin/bash

# get commit message
read -p "> Commit message: " commit_msg
# echo $commit_msg

# git stuff in main
git add .
git commit -am "$commit_msg" || { echo 'commit main failed' ; exit 1; }
git push -u origin main || { echo 'push main failed' ; exit 1; }

# build application
npm run build || { echo 'build failed' ; exit 1; }

# checkout to gh-pages
git checkout gh-pages

# replace build files
rm favicon.ico index.html || { echo 'rm files failed' ; exit 1; }
rm -rf ./css ./img ./js || { echo 'rm folders failed' ; exit 1; }

cp ./dist/favicon.ico ./dist/index.html ./ || { echo 'cp files failed' ; exit 1; }

cp -r ./dist/css ./dist/img ./dist/js ./ || { echo 'cp folders failed' ; exit 1; }

# publish in gh-pages
git add .
git commit -am "$commit_msg" || { echo 'commit gh-pages failed' ; exit 1; }
git push -u origin gh-pages || { echo 'push gh-pages failed' ; exit 1; }

# go back to main
git checkout main