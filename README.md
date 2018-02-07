# OS Volume Controll
Part of [Presentation Remote](https://github.com/amiraslanaslani/presentation-remote) project.

## Supported Operating Systems
- Mac OS
- Gnu/Linux
- MS Windows

## Usage
After loading module you can do this actions:
- Mute with `.mute()`
- Unmute with `.unmute()`
- Increase volume with `.incVol()`
- Decrease volume with `.decVol()`

For example:
```
var osvc = require(__dirname + "/node_modules/os-volume-controll");

osvc.mute();    # Mute
osvc.unmute();  # Unmute
osvc.incVol();  # Increase volume
osvc.decVol();  # Decrease volume
```
