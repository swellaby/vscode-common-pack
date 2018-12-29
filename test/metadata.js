'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Metadata Tests', () => {
    it ('Should have correct extension name', () => {
        assert.deepEqual(manifest.name, 'common-pack');
    });
});
