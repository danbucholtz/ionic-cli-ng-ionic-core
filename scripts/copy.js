const path = require('path');
const coreBuild = path.join(process.cwd(), 'ionic-core', 'build');
const coreCollection = path.join(process.cwd(), 'ionic-core', 'collection');
let existingConfig = require('@ionic/app-scripts/config/copy.config');

existingConfig['copyCoreBuild'] = {
  src: [path.join(coreBuild, '**', '*')],
  dest: '{{WWW}}/build'
}

existingConfig['coreCollection'] = {
  src: [path.join(coreBuild, '**', '*')],
  dest: '{{WWW}}/collection'
}