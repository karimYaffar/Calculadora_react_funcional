import React, { useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { styles } from './Estilos';
import Boton from './Boton';

import manejarClic from './manejarClick';

// Definimos el componente principal de la aplicación
export default function App() {
  // Estados para manejar el resultado, operación actual y mensajes de error
  const [resultado, setResultado] = useState('0');
  const [operacion, setOperacion] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el clic de los botones
  const handleButtonClick = (valor) => {
    manejarClic(valor, resultado, operacion, setResultado, setOperacion, setError);
  };

  // Definimos los botones disponibles en la calculadora
  const botones = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '', '0', '.', '/', '=', 'C'];

  // Función para renderizar los botones
  const renderBotones = () => {
    return botones.map((valor) => (
      <Boton
        key={valor}
        valor={valor}
        estilo={valor === '=' ? styles.botonOperadorGrande : styles.boton}
        onPress={handleButtonClick}
      />
    ));
  };

  // Renderizamos la estructura principal de la aplicación
  return (
    <View style={styles.container}>
      {/* Vista para mostrar el resultado y mensajes de error */}
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTexto}>{resultado}</Text>
        {error && <Text style={styles.errorTexto}>{error}</Text>}
      </View>
      {/* Vista para mostrar los botones de la calculadora */}
      <View style={styles.botonesContainer}>{renderBotones()}</View>
      {/* Barra de estado */}
      <StatusBar style="light" />
    </View>
  );
}