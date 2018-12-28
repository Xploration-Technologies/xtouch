// @xt-filename fuse.ts
import { FuseBox, Sparky } from 'fuse-box';

Sparky.task('default', () => {
  const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'lib/$name.js',
    target: 'npm@es6',
    plugins: [],
  });

  fuse.bundle('__NAME__').instructions('> xtouch.ts');
  fuse.run();
});
