import path from 'path';
import test from 'tape';
import getFontsPath from '../../../src/utils/getFontsPath';

test('getFontsPath works as expected', assert => {
  assert.equals(getFontsPath('../'), path.join('../assets/fonts/bootstrap/'));
  assert.end();
});
