const {
  FuseBox,
  EnvPlugin,
  SVGPlugin,
  CSSPlugin,
  SassPlugin,
  CSSModules,
  // PostCSSPlugin,
  // BabelPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box');

let fuse, app, vendor, isProduction;

Sparky.task('config', () => {
  fuse = new FuseBox({
    homeDir: 'src/',
    sourceMaps: !isProduction,
    hash: isProduction,
    target: 'browser',
    output: 'dist/$name.js',
    log: true,
    useTypescriptCompiler: true,
    experimentalFeatures: true,
    plugins: [
      EnvPlugin({ NODE_ENV: isProduction ? 'production' : 'development' }),
      SVGPlugin(),
      // PostCSSPlugin(),
      [ /\.s?css$/,
        SassPlugin({importer : true}),
        CSSModules(),
        CSSPlugin({
          // group: "bundle.css",
          // outFile: `dist/bundle.css`
        })],
      WebIndexPlugin({
        template: 'src/index.html'
      }),
      isProduction &&
        QuantumPlugin({
          treeshake: true,
          uglify: true
        })
    ]
  });
  // vendor
  vendor = fuse.bundle('vendor').instructions('~ index.tsx');

  // bundle app
  app = fuse.bundle('app').instructions('> [index.tsx]');
});

Sparky.task('default', ['clean', 'config'], () => {
  fuse.dev({
    port:3000
  });
  // add dev instructions
  app.watch().hmr();
  return fuse.run();
});

Sparky.task('clean', () => Sparky.src('dist/').clean('dist/'));
Sparky.task('prod-env', ['clean'], () => {
  isProduction = true;
});
Sparky.task('dist', ['prod-env', 'config'], () => {
  // comment out to prevent dev server from running (left for the demo)
  fuse.dev();
  return fuse.run();
});
