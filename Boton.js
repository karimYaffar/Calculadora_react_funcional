// BotonNumero.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Estilos';

const Boton = ({ valor, estilo, onPress }) => (
  <TouchableOpacity
    style={estilo}
    onPress={() => onPress(valor)}
  >
    <Text style={styles.botonTexto}>{valor}</Text>
  </TouchableOpacity>
);

export default Boton;