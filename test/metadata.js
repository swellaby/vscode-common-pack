'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Metadata Tests', () => {
  test('Should have correct name', () => {
    assert.deepEqual(manifest.name, 'common-pack');
  });

  test('Should have the correct display name', () => {
    assert.deepEqual(manifest.displayName, 'Swellaby Extension Pack');
  });

  test('Should have the correct publisher', () => {
    assert.deepEqual(manifest.publisher, 'Swellaby');
  });

  test('Should have correct extension categories', () => {
    assert.isTrue(manifest.categories.includes('Extension Packs'));
  });

  test('Should have correct keywords', () => {
    const keywords = manifest.keywords;
    assert.isTrue(keywords.includes('editorconfig'));
    assert.isTrue(keywords.includes('code spell'));
    assert.isTrue(keywords.includes('gitlens'));
    assert.isTrue(keywords.includes('workspace config plus'));
    assert.isTrue(keywords.includes('workspace config+'));
  });

  test('Should have the correct gallery banner', () => {
    const galleryBanner = manifest.galleryBanner;
    assert.deepEqual(galleryBanner.color.toLowerCase(), '#2c3e50');
    assert.deepEqual(galleryBanner.theme, 'dark');
  });

  test('Should have correct VS Code engine', () => {
    assert.deepEqual(manifest.engines.vscode, '^1.0.0');
  });
});
