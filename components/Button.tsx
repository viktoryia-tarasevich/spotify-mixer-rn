import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import SpotifyLogo from '../SVG/SVG';
import { LogInButtonProps } from '../types';

export default function Button(props:LogInButtonProps) {
  const { onPress, title = 'Log in' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.logo}><SpotifyLogo/></View><Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 24,
    paddingLeft:12,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingHorizontal: 12,
  }
});
