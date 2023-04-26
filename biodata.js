import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon_2 from 'react-native-vector-icons/FontAwesome';


const Biodata = () => {


  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <View style={styles.imageContainer}>
          <Image style={styles.tinyLogo} source={require('./assets/myphoto.png')} />
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.titleText}>Profil Saya <Image source={require('./assets/icon/icon-Notes.png')} style={styles.iconTitle} /></Text>

          <View style={styles.boxIdent}>
            <Icon_2 name="user" size={19} color="#40493B" style={styles.icon} />
            <Text style={styles.label}>Nama Lengkap</Text>
            <Text style={styles.idenValue}>Andika Muhammad Aditya</Text>
          </View>

          <View style={styles.boxIdent}>
            <Icon name="graduation-cap" size={17} color="#40493B" style={styles.icon2} />
            <Text style={[styles.label, { top: '50%', transform: [{ translateX: -82 }, { translateY: -15 }] }]}>Program Studi</Text>
            <Text style={[styles.idenValue, { top: '50%', transform: [{ translateX: -77 }, { translateY: 0 }] }]}>Teknik Informatika</Text>
          </View>

          <View style={styles.boxIdent}>
            <Icon_2 name="users" size={19} color="#40493B" style={ {transform: [{ translateX: -11 }, { translateY: 18 }] }} />
            <Text style={[styles.label, { top: '50%', transform: [{ translateX: -82 }, { translateY: 3 }] }]}>Kelas</Text>
            <Text style={[styles.idenValue, { top: '50%', transform: [{ translateX: -77 }, { translateY: 18 }] }]}>Pagi B</Text>
          </View>

          <View style={styles.boxIdent}>
            <Icon name="facebook-square" size={19} color="#40493B" style={ {transform: [{ translateX: -13 }, { translateY: 36 }] }} />
            <Text style={[styles.label, { top: '50%', transform: [{ translateX: -84 }, { translateY: 21 }] }]}>Akun Facebook</Text>
            <Text style={[styles.idenValue, { top: '50%', transform: [{ translateX: -79 }, { translateY: 36 }] }]}>Andika</Text>
          </View>

          <View style={styles.boxIdent}>
            <Icon name="twitter-square" size={19} color="#40493B" style={ {transform: [{ translateX: -13 }, { translateY: 55 }] }} />
            <Text style={[styles.label, { top: '50%', transform: [{ translateX: -84 }, { translateY: 39 }] }]}>Akun Twitter</Text>
            <Text style={[styles.idenValue, { top: '50%', transform: [{ translateX: -79 }, { translateY: 54 }] }]}>Andika</Text>    
          </View>

          <View style={styles.boxIdent}>
            <Icon name="instagram-square" size={19} color="#40493B" style={ {transform: [{ translateX: -13 }, { translateY: 73 }] }} />
            <Text style={[styles.label, { top: '50%', transform: [{ translateX: -84 }, { translateY: 57 }] }]}>Akun Instagram</Text>
            <Text style={[styles.idenValue, { top: '50%', transform: [{ translateX: -79 }, { translateY: 72 }] }]}>Andika</Text>    
          </View>
        </View>                            
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    FontFace: 'Inter'
  },
  mainBox: {
    width: '90%',
    height: 380,
    backgroundColor: '#F4FCEF',
    borderRadius: 25,
    marginBottom: -20,
    marginTop: 10,
  },
  boxContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13%',
    backgroundColor: '#F4FCEF',
    borderColor: '#40493B',
    borderWidth: 0.5,
    marginVertical: 20,
    marginHorizontal: 60,
    marginBottom: '8%'
  },
  boxIdent:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateX: -65 }, { translateY: -35 }]
  },
    imageContainer: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 10,
  },
  tinyLogo: {
    width: 90,
    height: 90,
    borderRadius: 9
  },
  iconTitle: {
    width: 23,
    height: 20,
    marginLeft: 30,
    backgroundColor: '#5AD72F',
  },
  icon: {
    width: 40,
    height: 40,
    transform: [{ translateX: 3 }, { translateY: 6 }],
  },
  icon2: {
    width: 22,
    height: 22,
    transform: [{ translateX: -11 }, { translateY: 4 }],
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -75 }, { translateY: -20 }],
    color: '#5AD72F',
    fontSize: 14,
    fontWeight: 'bold',
  },
  idenValue: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -68 }, { translateY: -6 }],
    color: '#40493B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -113 }, { translateY: -144 }],
    backgroundColor: '#F4FCEF',
    color: '#5AD72F',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Biodata;
