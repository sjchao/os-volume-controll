var exec = require('child_process').exec;


function mute(){
  exec("osascript -e 'set volume output muted true'");
}

function unmute(){
  exec("osascript -e 'set volume output muted false'");
}

function incVol(){
  exec("osascript -e 'set volume output volume ((output volume of (get volume settings)) + 10)'");
}

function decVol(){
  exec("osascript -e 'set volume output volume ((output volume of (get volume settings)) - 10)'");
}

exports.mute   = mute;
exports.unmute = unmute;
exports.incVol = incVol;
exports.decVol = decVol;
گ
