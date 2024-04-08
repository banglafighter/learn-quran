#!/bin/bash

echo "Preparing Development Source Dependency"
DEPENDENCIES="dependencies"
mkdir -p "$DEPENDENCIES"
APPLICATION="application"
mkdir -p "$APPLICATION"

cd "$DEPENDENCIES"

git clone -b dev https://github.com/banglafighter/react-rapid-app.git
git clone -b dev https://github.com/banglafighter/react-rapid-bootstrap.git
git clone -b dev https://github.com/banglafighter/react-rapid-i18n.git
git clone -b dev https://github.com/banglafighter/react-boot-spec.git

cd ..
echo "Installing yarn";
npm install -g yarn

echo "Installing Dependency";
yarn install