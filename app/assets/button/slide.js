import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { color } from '../../utils/components/colors';

export const Button = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity disabled={props.disabled} style={[styles(size).shape, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    shape: {
      borderRadius: size / 2,
      width: size*2,
      height: size/3,
      alignItems: 'center',
      borderColor: color.coralOrange,
      borderWidth: 2,
      backgroundColor: color.coralCyan,
    },
    text: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: color.coralOrange,
      fontFamily: 'Pacifico-Regular',
      fontSize: size / 5,
    },
  });
