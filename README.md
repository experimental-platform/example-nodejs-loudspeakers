# Sound Example for Experimental Platform

[The node.js code](https://github.com/experimental-platform/example-nodejs-loudspeakers/blob/master/index.js) only contains a few lines and is easy to understand. It uses [mplayer](https://help.ubuntu.com/community/MPlayer) for playing a sound located in the ``sounds/`` directory. There's also an example written in [Ruby on Rails](https://github.com/experimental-platform/example-rails-loudspeakers).

## Requirements

* A machine that runs [Experimental Platform](https://github.com/experimental-platform/platform-configure-script)
* A loud speaker, we used [this](http://www.amazon.com/Logitech-S150-Speakers-Digital-Sound/dp/B000ZH98LU)

## Installation

    git clone https://github.com/experimental-platform/example-nodejs-loudspeakers.git
    cd example-nodejs-loudspeakers
    git remote add platform ssh://dokku@your-box.local:8022/example-nodejs-loudspeakers
    git push platform master
