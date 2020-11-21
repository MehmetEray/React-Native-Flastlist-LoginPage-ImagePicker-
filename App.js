import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from './components/Contacts';
import Login from './components/Login';
// import ImagePicker from './components/ImagePicker';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go Home Charlie"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
// function UploadScreen() {
//   return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ImagePicker />
//       </View>
//   );
// }

function ContactsScreen() {
  return (
    <View style={styles.ContactsArea}>
      <Contacts />
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={{flex: 1}}>
      <Login />
    </View>
  );
}
// const Drawer = createDrawerNavigator(
//   {
//     Login: {
//       screen: LoginScreen,
//       navigationOptions: {
//         drawerLabel: 'Login',
//         drawerLockMode: 'locked-closed',
//       },
//     },
//     Friends: {
//       screen: FriendsScreen,
//       navigationOptions: {
//         drawerLabel: 'Friends',
//       },
//     },
//   },
//   {
//     navigationOptions: {
//       drawerPosition: 'left',
//       drawerWidth: 200,
//     },
//   },
// );
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
            } else if (route.name === 'Contacts') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } else if (route.name === 'Upload') {
              iconName = focused
                ? 'cloud-upload-outline'
                : 'cloud-upload-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
        {/*<Tab.Screen name="Upload" component={UploadScreen} />*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackNavigator: {
    paddingHorizontal: 10,
  },
  ContactsArea: {
    flex: 1,
    marginTop: 50,
  },
});
