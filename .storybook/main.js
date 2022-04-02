const path = require('path')

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
      fallback: {
        fs: false,
        path: false,
      },
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/globalStates': path.resolve(__dirname, '../src/globalStates'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
    }
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
  staticDirs: ['../public'],
}
