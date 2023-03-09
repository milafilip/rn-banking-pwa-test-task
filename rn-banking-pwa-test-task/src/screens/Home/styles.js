import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mainButton: {
    position: 'absolute',
    bottom: 30,
    borderRadius: 90,
    width: 90,
    height: 90,
  },
  iconStyle: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    tintColor: 'white',
  },
});

export default styles;
