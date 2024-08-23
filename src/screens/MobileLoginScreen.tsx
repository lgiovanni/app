import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 

const backgroundImage = require('../../assets/fondoHome.webp');

type MobileLoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MobileLogin'>;
};

const mobileValidationSchema = Yup.object().shape({
    mobile: Yup.string()
      .matches(/^\+[1-9]\d{1,14}$/, "Ingrese un número de móvil válido con código de país.")
      .required('El número de móvil es obligatorio'),
    code: Yup.string()
      .length(6, 'El código debe tener 6 dígitos.')
      .required('El código de verificación es obligatorio')
});

const MobileLoginScreen: React.FC<MobileLoginScreenProps> = ({ navigation }) => {
  const [step, setStep] = useState(1);

  const handleSendCode = (values: { mobile: string; code?: string }) => {
    console.log("Número enviado:", values.mobile);
    setStep(2);
  };

  const handleVerifyCode = (values: { mobile?: string; code: string }) => {
    console.log("Código ingresado:", values.code);
    navigation.navigate('MainTabs');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Formik
        initialValues={{ mobile: '', code: '' }}
        validationSchema={mobileValidationSchema}
        onSubmit={(values, formikHelpers: FormikHelpers<{ mobile: string; code: string }>) => {
          if (step === 1) {
            handleSendCode(values);
          } else {
            handleVerifyCode(values);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            {step === 1 && (
              <>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('mobile')}
                  onBlur={handleBlur('mobile')}
                  value={values.mobile}
                  placeholder="Número móvil"
                  keyboardType="phone-pad"
                />
                {touched.mobile && errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}
                <Button onPress={handleSubmit as any} title="Enviar código" />
              </>
            )}
            {step === 2 && (
              <>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('code')}
                  onBlur={handleBlur('code')}
                  value={values.code}
                  placeholder="Código de verificación"
                  keyboardType="number-pad"
                />
                {touched.code && errors.code && <Text style={styles.errorText}>{errors.code}</Text>}
                <Button onPress={handleSubmit as any} title="Verificar código" />
              </>
            )}
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
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});

export default MobileLoginScreen;