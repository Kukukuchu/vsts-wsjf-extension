"use strict";

var exec = require("child_process").exec;

// Package extension
var command = `tfx extension create --root ./ --output-path ../publish/ --manifests ./vss-extension.json --overrides-file ./release.json`;
exec(command, { 
    "cwd": "./dist"
}, (error, stdout) => {
    if (error) {
        console.error(`Could not create package: '${error}'`);
        return;
    }
    
    console.log(`Package created`);
    
    var command = `tfx extension publish --vsix ${output.path} --no-prompt`;
    exec(command, (error, stdout) => {
        if (error) {
            console.error(`Could not publish package: '${error}'`);
            return;
        }
        
        console.log("Package published.");
    });
});