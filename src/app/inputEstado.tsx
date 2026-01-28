import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


//esta tela é mais para meu conhecimento do que para por no app depois será removida


export default function Teste() {
  // Estado para armazenar o texto digitado
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite algo:</Text>

      {/* Campo de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Escreva aqui..."
        value={texto} // valor controlado pelo estado
        onChangeText={setTexto} // atualiza o estado a cada digitação
      />

      {/* Texto exibindo o que foi digitado */}
      <Text style={styles.resultado}>
        Você digitou: {texto || 'Nada ainda'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
