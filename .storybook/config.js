import { configure } from '@storybook/angular';

import '../src/styles.less';

const loaderFn = () => {
  // manual loading
  require('../src/tasks/task.stories.ts');
};

// automatically import all files ending in *.stories.ts
//const req = require.context('../src/', true, /\.stories.ts$/);
//
//function loadStories() {
//  req.keys().forEach(filename => req(filename));
//}

configure(loaderFn, module);
