const fse = require('fs-extra');
const path = require('path');
const topDir = __dirname;
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'));
fse.copySync(path.join(topDir, 'node_modules', 'tinymce'), path.join(topDir, 'public', 'tinymce'), { overwrite: true });
fse.copySync(path.join(topDir, 'public', 'tinytheme', 'skins', 'content', 'ArisCorp'), path.join(topDir, 'public', 'tinymce', 'skins', 'content', 'ArisCorp'), { overwrite: true });
fse.copySync(path.join(topDir, 'public', 'tinytheme', 'skins', 'ui', 'ArisCorp'), path.join(topDir, 'public', 'tinymce', 'skins', 'ui', 'ArisCorp'), { overwrite: true });