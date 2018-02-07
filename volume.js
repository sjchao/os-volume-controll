var osName = '';
if( /^win/.test(process.platform) ){ // Windows
    osName = 'windows';
}
else if(process.platform == 'darwin'){ // Mac
    osName = 'mac';
}
else{ // Gnu/Linux
    osName = 'linux';
}

var os = require(__dirname + '/operating-systems/' + osName);

exports.mute = os.mute;
exports.unmute = os.unmute;
exports.incVol = os.incVol;
exports.decVol = os.decVol;
