# NodeJS Sound Example for Experimental Platform

[The code](https://github.com/experimental-platform/example-speaker/blob/master/index.js) is easy to understand: It uses mplayer for playing a sound located in the ``sounds`` directory.

## Requirements

* A machine that runs [Experimental Platform](https://github.com/experimental-platform/platform-configure-script)
* A loud speaker, we used [this](http://www.amazon.com/Logitech-S150-Speakers-Digital-Sound/dp/B000ZH98LU)

## Installation

    git clone git@github.com:experimental-platform/example-speaker.git
    cd example-speaker
    git remote add platform ssh://dokku@your-box.local:8022/example-speaker
    git push platform master