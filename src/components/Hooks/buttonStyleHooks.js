import {HP} from '../../../utilities';
import {Platform} from 'react-native';

const buttonStyleHooks = () => {
  const getButtonCustomStyle = index => {
    switch (index) {
      case 0:
        return  Platform.OS === 'default'  ? HP('-8'): -30;
      case 1:
       return  Platform.OS === 'default'  ? HP('-2'): -10;
      case 2:
        return 0;
      case 3:
       return  Platform.OS === 'default'  ? HP('-2'): -10;
      case 4:
       return  Platform.OS === 'default'  ? HP('-8'): -30;
      default:
        return index;
    }
  };
  return {getButtonCustomStyle};
};

export default buttonStyleHooks;
