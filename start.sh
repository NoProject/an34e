#!/bin/bash
cd "server/"
npm run dev &
cd "../client"
npm run dev
wait
