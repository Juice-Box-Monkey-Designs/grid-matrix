import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Grid Matrix',
    brandUrl: 'https://www.juiceboxmonkeydesigns.com/',
    brandImage: 'https://jbmd-website.s3.amazonaws.com/gridmatrix/grid-matrix-full-01.png',
    brandTarget: '_self',
  }
});