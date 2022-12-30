const webpack = require(`webpack`);

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  console.log('==== Disabling Chunk ====');

  actions.setWebpackConfig({
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  });
};
