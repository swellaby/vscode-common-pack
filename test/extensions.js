'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Extension Pack Tests', () => {
    const extensions = manifest.extensionPack;

    it ('Should include XYZ', () => {
        assert.isTrue(true);
    });
});
