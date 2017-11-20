#!/bin/bash
cd "server/"
npm install
npm run dev &
cd "../client"
npm install
npm run dev
wait
