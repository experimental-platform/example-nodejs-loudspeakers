# NodeJS Sound Example for Experimental Platform

The code is easy to understand: It uses mplayer for playing a sound located in the ``sounds`` directory.

## Requirements

* A machine that runs [Experimental Platform](https://github.com/experimental-platform/platform-configure-script)
* A loud speaker, we used [this](http://www.amazon.com/Logitech-S150-Speakers-Digital-Sound/dp/B000ZH98LU)

## Installation

    git clone git@github.com:experimental-platform/example-speakers.git
    cd example-speakers
    git remote add platform ssh://dokku@your-box.local:8022/example-speakers
    git push platform master