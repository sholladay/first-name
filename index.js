'use strict';

const fullname = require('fullname');

module.exports = () => {

    return fullname().then((name) => {

        const spaceIndex = name.indexOf(' ');

        if (spaceIndex > 0) {
            return name.substring(0, spaceIndex);
        }

        return name;
    });
};
