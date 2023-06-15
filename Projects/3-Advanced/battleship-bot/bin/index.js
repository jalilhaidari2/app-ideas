#!/usr/bin/env node

const { read } = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question('what is your name?', answere =>{
    console.log(`Hello ${answere}`);
    readline.close();
})