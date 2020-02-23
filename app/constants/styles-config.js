import { build } from '@shipt/react-native-tachyons';
import { Dimensions } from 'react-native';
import COLORS from './colors';

const { screenWidth } = Dimensions.get('window');

const rem = screenWidth > 340 ? 18 : 16;

const colors = COLORS;

// define your style shorthands
const customStyles = {
  'full-height': { height: '100%' },
  'full-width': { width: '100%' },
};

// Run build
build({
  rem,
  colors,
  customStyles,
});
