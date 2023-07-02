import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from './colors';
import { fontSize } from './sizes';

const Card = (props) => {
  const { name, message, signature } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{name}</Text>
      </View>
      <View>
        <Text style={styles.textView}>{message}</Text>
      </View>
      <View>
        <Text style={styles.signature}>{signature}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '70%',
    marginTop: '10%',
    paddingTop: '10%',
    backgroundColor: color.coralOrange,
    opacity: 0.9,
    borderColor: color.black,
    borderStyle: 'solid',
    shadowColor: "#000",
    shadowOffset: {
	     width: 4,
	     height: 4,
     },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  header: {
    textAlign: 'center',
    color: color.black,
    fontWeight: 'bold',
    fontSize: fontSize.m,
    fontFamily: 'Pacifico-Regular',
    textShadowOffset: {
	     width: 2,
	     height: 2,
     },
    textShadowRadius: 3.84,
    elevation: 5,
  },
  textView: {
    textAlign: 'center',
    padding: 10,
    color: color.balck,
    justifyContent: 'center',
    fontSize:fontSize.m,
    fontStyle: 'italic',
    fontFamily: 'Pacifico-Regular',
    elevation: 50,
  },
  signature: {
    fontFamily: 'Pacifico-Regular',
    padding: 20,
    textAlign: 'right'
  },
});


export {Card,};
