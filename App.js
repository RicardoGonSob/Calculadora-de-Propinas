import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { TextButton } from './components/TextButton';
import {Stepper} from './components/Stepper'
import { PresentpageButton } from './components/PresentpageButton';
import { Resultado } from './components/Resultados';
import { useState } from 'react';

export default function App() {

  const [importe, setImporte] = useState ('');
  const [personas, setPersonas] = useState ('');
  const [propina, setPropina] = useState ('');
  const [iDePropina, setIPropina] = useState('');
  const [pPPersona, setPPersona] = useState ('');
  const [iTotal, setITotal] = useState ('');
  const [iPPersona, setIPPersona] = useState ('');

  function importeTextInputHandler(enteredText){
    setImporte(enteredText);
  }
  function personasTextHandler(enteredText){
    setPersonas(enteredText);
  }
  function propinaTextHandler(enteredText){
    setPropina(enteredText);
  }

  function onCalcularButtonTapped() {

    const importeNum = parseFloat(importe);
    const propinaNum = parseFloat(propina);
    const personasNum = parseInt(personas);

    const importePropina = importeNum * (propinaNum / 100);
    const importeTotal = importeNum + importePropina;
    const propinaPorPersona = importePropina / personasNum;
    const importePorPersona = importeTotal / personasNum;

    const formatoMoneda = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    });

    setITotal(formatoMoneda.format(importeTotal));
    setIPropina(formatoMoneda.format(importePropina));
    setPPersona(formatoMoneda.format(propinaPorPersona));
    setIPPersona(formatoMoneda.format(importePorPersona));

    // setIPropina(importePropina.toFixed(2));
    // setITotal(importeTotal.toFixed(2));
    // setPPersona(propinaPorPersona.toFixed(2));
    // setIPPersona(importePorPersona.toFixed(2));

  }

  return (
    <View style={styles.mainContainer}>
      {/* Contenedor principal del cuadro */}
      <View style={styles.mainBox}>
        {/* Sección de Importe */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Importe</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={importeTextInputHandler}
            value={importe}
            placeholder="Ingrese la cantidad del importe" 
          />
        </View>
        {/* Sección de Número de Personas */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}># Personas</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={personasTextHandler}
            value={personas} 
            placeholder="Ingrese el # de Personas" 
          />
          <View style={styles.personasButtons}>
            <Stepper/>
          </View>
        </View>
        {/* Sección de Botones de Porcentaje de Propina */}
        <View style={styles.buttonContainer}>
          <TextButton title='8%' style={styles.percentTipButton}/>
          <TextButton title='10%' style={styles.percentTipButton}/>
          <TextButton title='12.5%' style={styles.percentTipButton}/>
          <TextButton title='15%' style={styles.percentTipButton}/>
        </View>
        {/* Sección de Ajuste de % Propina */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>% Propina</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText={propinaTextHandler}
            value={propina} 
            placeholder="Ingrese el % de Propina" 
            keyboardType="numeric"
          />
          <View style={styles.personasButtons}>
            <Stepper/>
          </View>
        </View>
      </View>

      {/* Sección de Comandos */}
      <View style={styles.commandContainer}>
        <TextButton title="Calcular" onPress={onCalcularButtonTapped}/>
        <TextButton title="Limpiar" />
      </View>

      {/* Sección de Resultados */}
      <View style={styles.resultContainer}>
        <Resultado descripcion="Importe de la Propina:" valor={iDePropina} />
        <Resultado descripcion="Propina por Persona:" valor={pPPersona} />
        <Resultado descripcion="Importe Total:" valor={iTotal} />
        <Resultado descripcion="Importe por Persona:" valor={iPPersona} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  mainBox: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: 'lightgrey',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    flex: 1,
    marginRight: 10,
  },
  personasButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  percentTipButton: {
    fontSize: 10,
    minWidth: 50,
    alignItems: 'center'
  },
  commandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  resultContainer: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
