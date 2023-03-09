import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {IconButton, IconButtonModal} from '../../components';
import styles from './styles';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <SafeAreaView style={styles.main}>
      {!openModal && (
        <IconButton
          containerStyle={styles.mainButton}
          icon={require("../../assests/icons/m.png")}
          onPress={() => setOpenModal(true)}
          iconStyle={styles.iconStyle}
        />
      )}

      <IconButtonModal
        isModalVisible={openModal}
        onPress={() => setOpenModal(false)}
      />
    </SafeAreaView>
  );
};

export default Home;
