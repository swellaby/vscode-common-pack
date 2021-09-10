'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Included Extensions Tests', () => {
  const extensions = manifest.extensionPack;

  test('Should have the correct number of extensions', () => {
    assert.deepEqual(extensions.length, 4);
  });

  test('Should include EditorConfig extension', () => {
    assert.isTrue(extensions.includes('editorconfig.editorconfig'));
  });

  test('Should include CodeSpell Checker extension', () => {
    assert.isTrue(extensions.includes('streetsidesoftware.code-spell-checker'));
  });

  test('Should include Git Lens extension', () => {
    assert.isTrue(extensions.includes('eamodio.gitlens'));
  });

  test('Should include our Workspace Config+ extension', () => {
    assert.isTrue(extensions.includes('swellaby.workspace-config-plus'));
  });
});
