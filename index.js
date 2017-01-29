'use strict';

const fullname = require('fullname');

const firstName = () => {
    return fullname().then((name) => {
        if (!name) {
            return name;
        }
        const spaceIndex = name.indexOf(' ');
        return spaceIndex > 0 ? name.substring(0, spaceIndex) : name;
    });
};

module.exports = firstName;
