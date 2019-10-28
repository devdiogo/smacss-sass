#!/usr/bin/env node

const fs = require('fs')

function create(type, path, content = '', cb) {
    if(type == 'dir') {
        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) throw err;
            cb(path)
        })
    } else if (type == 'file') {
        fs.writeFile(path, content, (err) => {
            if (err) throw err;
            cb(path)
        })
    }
}

create('dir', './sass', '', (path) => {
    console.log(`Created: ${path}`)
    create('file', path+'/app.sass', `@import "base/import"\n@import "layout/import"\n@import "module/import"\n@import "state/import"\n@import "theme/import"\n`, (path) => console.log(`Created: ${path}`))
    create('dir', path+'/base', '', (path) => {
        console.log(`Created: ${path}`)
        create('file', path+'/_mixins.sass',      '// General mixins\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_variables.sass',   '// Variables\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_fonts.sass',       '// All font imports\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_reset.sass',       '// Resets\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_base.sass',        '// Base styles\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_import.sass',      `@import "mixins"\n@import "variables"\n@import "fonts"\n@import "reset"\n@import "base"\n`, (path) => console.log(`Created: ${path}`))
    })
    create('dir', path+'/layout', '', (path) => {
        console.log(`Created: ${path}`)
        create('file', path+'/_layout.sass',      '// Layout\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_import.sass',      `@import "layout"\n`, (path) => console.log(`Created: ${path}`))
    })
    create('dir', path+'/module', '', (path) => {
        console.log(`Created: ${path}`)
        create('file', path+'/_import.sass',      `// Import your modules here\n`, (path) => console.log(`Created: ${path}`))
    })
    create('dir', path+'/state', '', (path) => {
        console.log(`Created: ${path}`)
        create('file', path+'/_state.sass',      '// States\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_import.sass',      `@import "state"\n`, (path) => console.log(`Created: ${path}`))
    })
    create('dir', path+'/theme', '', (path) => {
        console.log(`Created: ${path}`)
        create('file', path+'/_theme.sass',      '// Themes\n', (path) => console.log(`Created: ${path}`))
        create('file', path+'/_import.sass',      `@import "theme"\n`, (path) => console.log(`Created: ${path}`))
    })
})