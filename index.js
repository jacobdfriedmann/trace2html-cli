#! /usr/bin/env node
var userArgs = process.argv.slice(2);
var exec = require('child_process').exec;

exec(
  __dirname + '/catapult/tracing/bin/trace2html ' + userArgs.join(' '),
  function(err, stdout, stderr) {
    console.log(err);
    console.log(stdout);
    console.log(stderr);
  }
);
