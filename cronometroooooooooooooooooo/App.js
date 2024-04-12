import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Adicionado

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();
  const [backgroundColor, setBackgroundColor] = useState('#6a0dad'); // Cor inicial do fundo (roxo)

  const startTimer = () => {
    setBackgroundColor('#6a0dad'); // Altera a cor para roxo ao iniciar
    setCustomInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };

  const stopTimer = () => {
    setBackgroundColor('#007bff'); // Altera a cor para azul ao parar
    if (customInterval) {
      clearInterval(customInterval);
    }
  };

  const clear = () => {
    stopTimer(0);
    setMinutes(0);
    setSeconds(0);
    setBackgroundColor('#ff0000'); // Altera a cor para laranja ao limpar
  };

  const changeTime = () => {
    setSeconds((prevState) => {
      if (prevState + 1 === 60) {
        setMinutes(minutes + 1);
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>
        O tempo não para
      </Text>
      <Image source={require("./assets/logo.png")} style={styles.logo} />

      <Text style={styles.textTimer}>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='Start' onPress={startTimer} />
        <Button title='Stop' onPress={stopTimer} />
        <Button title='Clear' onPress={clear} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimer: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
