const sass = require('@stencil/sass');

exports.config = {
  outputTarget: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{js,css,json,html,ico,png,jpg,jpeg}'
        ]
      }
    }
  ],
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
