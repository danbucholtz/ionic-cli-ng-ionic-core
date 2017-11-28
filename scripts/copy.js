const path = require('path');
const coreBuild = path.join(process.cwd(), 'node_modules', '@ionic', 'core', 'dist');

let existingConfig = require('@ionic/app-scripts/config/copy.config');

existingConfig['copyCoreBuild'] = {
  src: [path.join(coreBuild, 'ionic.js')],
  dest: '{{WWW}}/build'
}

existingConfig['coreCollection'] = {
  src: [path.join(coreBuild, 'ionic', '**', '*.js')],
  dest: '{{WWW}}/build/ionic'
}