module.exports = function (context) {

    console.log('PLS IT SHOULD WORK');

    let fs = require('fs');
    let path = require('path');
    let deferral = require('q').defer();

    // android platform directory
    let platformAndroidDir = path.join(context.opts.projectRoot, 'platforms/android');
    platformAndroidDir += '//app//src//main';
    let androidManifestFile = path.join(platformAndroidDir, 'AndroidManifest.xml');
    console.log(androidManifestFile);
}
