const execFile = require('child_process').execFile;
const path = require("path");
let nircmdc_path = path.join(__dirname, "./", "nircmdc.exe");

function mute(){
  execFile(nircmdc_path, ['mutesysvolume', 1]);
}
function unmute(){
  execFile(nircmdc_path, ['mutesysvolume', 0]);
}
function incVol(){
  execFile(nircmdc_path, ['changesysvolume', 6553]);
}
function decVol(){
  execFile(nircmdc_path, ['changesysvolume', -6553]);
}

exports.mute   = mute;
exports.unmute = unmute;
exports.incVol = incVol;
exports.decVol = decVol;
