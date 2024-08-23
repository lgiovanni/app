import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

const backgroundImage = require('../../assets/fondoHome.webp');

type EmailLoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EmailLogin'>;
};

const emailLoginSchema = Yup.object().shape({
  email: Yup.string().email('Correo inválido').required('Ingrese Correo Electronico'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Ingrese Contraseña')
});

const EmailLoginScreen: React.FC<EmailLoginScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={emailLoginSchema}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('Rooms');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Correo electrónico"
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Contraseña"
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <Button onPress={() => handleSubmit()} title="Iniciar Sesión" />
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0)',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'justify'
  }
});

export default EmailLoginScreen;