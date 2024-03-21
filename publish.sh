#!/bin/bash

# get commit message
read -p "> Commit message: " commit_msg
# echo $commit_msg

echo
echo " --- starting deploy --- "

# git stuff in main
echo " --- at main --- "

echo
echo " --- add --- "
git add .

echo
echo " --- commit --- "
git commit -am "$commit_msg" || { echo 'commit main failed' ; exit 1; }

echo
echo " --- push --- "
git push -u origin main || { echo 'push main failed' ; exit 1; }

# build application
echo
echo " --- build --- "
npm run build || { echo 'build failed' ; exit 1; }

# checkout to gh-pages
echo
echo " --- checking out to gh-pages --- "
git checkout gh-pages

# replace build files
echo
echo " --- remove old ./dist files --- "
rm favicon.ico index.html || { echo 'rm files failed' ; exit 1; }
rm -rf ./css ./img ./js || { echo 'rm folders failed' ; exit 1; }

echo
echo " --- copy new ./dist files --- "
cp ./dist/favicon.ico ./dist/index.html ./ || { echo 'cp files failed' ; exit 1; }
cp -r ./dist/css ./dist/img ./dist/js ./ || { echo 'cp folders failed' ; exit 1; }

# publish in gh-pages
echo
echo " --- at gh-pages --- "

echo
echo " --- add --- "
git add .

echo
echo " --- commit --- "
git commit -am "$commit_msg" || { echo 'commit gh-pages failed' ; exit 1; }

echo
echo " --- push --- "
git push -u origin gh-pages || { echo 'push gh-pages failed' ; exit 1; }

# go back to main
echo
echo " --- checking out back to main --- "
git checkout main

echo
echo " --- deploy is finished :) --- "