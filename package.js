Package.describe({
    name: 'zakm:transducers',
    summary: 'A small library for generalized transformation of data',
    version: '0.1.0',
    git: 'https://github.com/zakm/meteor-transducers'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles('transducers.js');
    api.export('transducers');
});
