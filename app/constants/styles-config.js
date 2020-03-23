import { build } from '@shipt/react-native-tachyons';
import { Dimensions, StyleSheet } from 'react-native';
import COLORS from './colors';

const { screenWidth } = Dimensions.get('window');

const rem = screenWidth > 340 ? 18 : 16;

const colors = COLORS;

// define your style shorthands
const styles = {
  'full-height': { height: '100%' },
  'full-width': { width: '100%' },
  bt: { borderTopWidth: StyleSheet.hairlineWidth },
  bb: { borderBottomWidth: StyleSheet.hairlineWidth },
};

// Run build
build({
  rem,
  colors,
  styles,
});
