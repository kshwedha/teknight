import React, { useEffect, useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { color } from '../utils/components/colors';
import { fontSize, spaceSize } from '../utils/components/sizes';
import { Card } from '../utils/components/Kanban';
import { Button } from '../assets/button/slide';
import { ErrorBoundary } from './ErrorScreen/ErrorBoundary';
import { title, name, msg } from '../prime';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme
} from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';
import { SCREENS } from '../navigation/ScreenNames';
import Config from "../config";
// import styles from '../assets/css/main.css';
// import Login from "./assets/login";

interface HomeScreenProps {
    navigation: any;
  }

const MainScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };

    // const msg = `I'm the service AI, designed near to very precise fabric to bring you the eternal luxury and freedom of life. My delight unfolds at serving you until, attain the life which you dream to live. Reaching every corner of globe, up until the farthest knowledge of universe- down to the level of sea, I study to make your living better than best of today., \n\t\t\t\t\t- ${name}`;

    const [username, setUserName] = useState('');
    const [validName, setValidName] = useState(false);
    const [fontColor, setFontColor] = useState('red');
    const [recoveredFromError, setRecoveredFromError] = React.useState(false)

    useEffect(() =>{
        if (username.length > 1) {
          fetch("http://127.0.0.1:8000/api/users")
          .then((res)=> res.json())
          .catch(() => console.log('users could not be fetched.'))
          .then((user)=> {
            let users = [];
            for (var i=0; i<user.length;i++) {
              users.push(user[i]['pixel'].toLowerCase())
            }
            console.log(users)
            if (users.includes(username)) {
              setFontColor('#f00');
              setValidName(false);
              // enable button + green text
            } else {
              setFontColor('#0f0');
              setValidName(true);
            }
          })
        }
      }, [username]);

    const findAvailability = (name: string) => {
    setUserName(name.toLowerCase())
    }

    return (
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content': 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
          <View style={styles.container}>
            <View>
              <Text style={styles.titleText}>{title}</Text>
            </View>
            <View>
              <Card name={"Greetings!!"} message={msg} signature={name}/>
            </View>
            <View>
              {/* <ErrorBoundary catchErrors={Config.catchErrors} onReset={() => setRecoveredFromError(true)}></ErrorBoundary> */}
              <TextInput style={styles.input}
                placeholder='unicName'
                placeholderTextColor='#f4f'
                value={username}
                onChangeText={(name) => findAvailability(name)}
              />
              <Button
                title="»»»"
                onPress={() =>
                  navigation.navigate(SCREENS.PROFILE, {name: 'maath'})
                }
              />
            </View>
          </View>
      </SafeAreaView>
    );
    // return (
    //     <SafeAreaView>
    //         <View style={styles.container}>
    //             <Text style={styles.titleText}>lenilove</Text>
    //             <Card name={"Greetings!!"} message={msg}/>
    //             <ErrorBoundary catchErrors={Config.catchErrors} onReset={() => setRecoveredFromError(true)}>
    //                 <TextInput style={styles.input}
    //                     placeholder= "unicName"
    //                     placeholderTextColor="#f4f"
    //                     // underlineColoriOS='green'
    //                     // label="UnicName"
    //                     // keyboardType="numeric"
    //                     value={username}
    //                     onChangeText={(name) => findAvailability(name)}
    //                     />
    //             </ErrorBoundary>
    //             <View style={[styles.buttonDiv, color.black]}>
    //             <Button
    //                 disabled={!validName}
    //                 onPress={() => {navigation.navigate(SCREENS.HOME)}}
    //                 title='Live Inn >>'
    //                 size={fontSize.xxxl+fontSize.xxl}/>
    //             </View>
    //             <StatusBar />
    //         </View>
    //   </SafeAreaView>
    // );
}

export default MainScreen;


const styles = StyleSheet.create({

    mainDiv: {
      fontWeight: 800,
      backgroundColor: "#7fffd4"
    },
    
    container: {
      flex: 0,
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#07ffbb',
      justifyContent: 'center'
    },

    titleText: {
      marginTop: 10,
      fontFamily: 'Pacifico-Regular',
      backgroundColor: 'inherit',
      fontWeight: 'bold',
      fontSize: fontSize.xl
    },
    
    title: {
    },
    
    kanban: {
    },
    
    welcomeDiv: {
    },
    
    viewContainer: {
    },
    
    header: {
    },
    
    sectionTitle: {
    },
    
    sectionDescription: {
    },
    
    highlight: {
    },

    buttonDiv: {
    },

    input: {
    }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: color.coralCyan,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonDiv: {
//     marginBottom: '10%',
//     padding: 20,
//   },
//   input:{
//     height: fontSize.xxl,
//     width: 300,
//     borderColor: color.gold,
//     borderStyle: 'solid',
//     backgroundColor: color.white,
//     fontStyle: 'italic',
//     color: '#f00',
//   },
//   titleText: {
//     fontWeight: 'bold',
//     // marginTop: Constants.statusBarHeight,
//     padding: 10,
//     justifyContent: 'center',
//     fontSize: fontSize.xxl,
//     fontStyle: 'normal',
//     fontFamily: 'Pacifico-Regular',
//     color: color.coralRed,
//   }
// });
