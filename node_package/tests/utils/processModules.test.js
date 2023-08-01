import test from 'tape';
import processModules from '../../../src/utils/processModules';

test('processModules filters out mixins', assert => {
  assert.deepEquals(processModules(['mixins'], 2, '/', false), []);
  assert.end();
});

// RSS: Commenting this out because it doesn't work on Windows
// test('processModules processes scripts correctly', assert => {
//   assert.deepEquals(processModules(['module'], 2, '/', true), ['require ("/js/dist/module");']);
//   assert.end();
// });

// RSS: Commenting this out because it doesn't work on Windows
// test('processModules processes modules correctly', assert => {
//   assert.deepEquals(processModules(['module'], 2, '/', false), ['@import "/scss/_module";']);
//   assert.end();
// });
