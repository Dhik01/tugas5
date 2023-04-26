import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login'
import Biodata from './biodata'


const Stack = createStackNavigator();

const home = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <View style={styles.mainBox}>
            <TouchableOpacity         
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}> Halaman Login </Text>
            </TouchableOpacity>
            <TouchableOpacity         
            style={styles.button1} 
            onPress={() => navigation.navigate('Biodata')}
            >
              <Text style={styles.buttonText}> Halaman Biodata </Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Biodata" component={Biodata} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    color: 'white'
  },
    mainBox: {
    width: '80%',
    height: 240,
    backgroundColor: '#F4FCEF',
    borderRadius: 25,
    marginBottom: '50%',
    marginTop: '50%',
    alignItems: 'center',
  },
  button1: {
    width: '50%',
    backgroundColor: '#5AD72F',
    height: 50,
    padding: 13,
    borderRadius: 35,
    marginTop: 40
  },
  button: {
    width: '50%',
    backgroundColor: '#40493B',
    height: 50,
    padding: 13,
    borderRadius: 35,
    marginTop: 40
  },
    buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
