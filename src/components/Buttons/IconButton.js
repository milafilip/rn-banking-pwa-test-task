import {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from 'react-native';
import PropTypes from 'prop-types';
import {HP} from '../../../utilities';

const IconButton = ({
  icon,
  title,
  onPress,
  containerStyle,
  iconStyle,
  container,
}) => {
  const getHeight = containerStyle ? containerStyle?.height : 50;
  const getWidth = containerStyle ? containerStyle?.width : 50;
  const getBorderRadius = containerStyle ? containerStyle?.borderRadius : 50;

  const [dim, setDim] = useState({
    height: getHeight,
    width: getWidth,
    borderRadius: getBorderRadius,
  });

  return (
    <TouchableOpacity style={[styles.mainContainer, {...container}]}>
      {title && <Text style={styles.textStyle}>{title}</Text>}

      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          containerStyle,
          {
            height: dim?.height,
            width: dim?.width,
            borderRadius: dim?.borderRadius,
          },
        ]}
        onPressIn={() =>
          setDim({
            height: getHeight + HP('5'),
            width: getWidth + HP('5'),
            borderRadius: getBorderRadius + HP('5'),
          })
        }
        onPressOut={() =>
          setDim({
            height: getHeight,
            width: getWidth,
            borderRadius: getBorderRadius,
          })
        }>
        <Image source={icon} style={[styles.iconStyle, iconStyle]} />
      </Pressable>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  container: PropTypes.object,
  iconStyle: PropTypes.object,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgb(227, 11, 92)',
    borderRadius: 50,
    margin: 2,
    height: 50,
    width: 50,
  },
  iconStyle: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifContent: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
});

export {IconButton};
