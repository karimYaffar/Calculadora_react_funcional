
// Función para manejar el clic de los botones en la calculadora
const manejarClic = (valor, resultado, operacion, setResultado, setOperacion, setError) => {
  setError('');  // Limpiamos cualquier mensaje de error existente

  // Manejo de clic para números y punto decimal
  if (!isNaN(valor) || valor === '.') {
    if (resultado !== '0' && !operacion) {
      setOperacion('');
    }
    setResultado((prevResultado) => (prevResultado === '0' ? valor : prevResultado + valor));
  } 
  // Manejo de clic para el botón 'C' (limpiar)
  else if (valor === 'C') {
    setResultado('0');
    setOperacion('');
  } 
  // Manejo de clic para el botón '=' (igual)
  else if (valor === '=') {
    try {
      // Evaluamos la expresión y actualizamos el resultado
      const nuevoResultado = eval(operacion + resultado);
      setResultado(nuevoResultado.toString());
      setOperacion('');
    } catch (error) {
      // Manejamos errores, restablecemos el estado y mostramos un mensaje de error
      setResultado('0');
      setOperacion('');
      setError('Error');
    }
  } 
  // Manejo de clic para operadores
  else {
    if (resultado !== '0' && !operacion) {
      // Si hay un número en pantalla y no hay operación, establecemos la operación
      setOperacion(resultado + valor);
      setResultado('0');
    }
  }
};

export default manejarClic;