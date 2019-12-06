import { configure } from '@storybook/angular';

import '../src/styles.less';

const loaderFn = () => {
  // manual loading
  require('../src/tasks/components/task.stories.ts');
  require('../src/tasks/components/pure-task-list.stories.ts');
  require('../src/tasks/containers/inbox-screen.stories');
};
configure(loaderFn, module);

// automatically import all files ending in *.stories.ts
//const req = require.context('../src/', true, /\.stories.ts$/);
//
//function loadStories() {
//  req.keys().forEach(filename => req(filename));
//}
//
//configure(loadStories, module);


