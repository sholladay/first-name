'use strict';

const fullname = require('fullname');

const firstName = () => {
    return fullname().then((name) => {
        const spaceIndex = name.indexOf(' ');

        if (spaceIndex > 0) {
            return name.substring(0, spaceIndex);
        }

        return name;
    });
};

module.exports = firstName;
