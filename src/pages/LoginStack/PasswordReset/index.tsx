import React, {useState} from 'react';

import Key from '../../../assets/Key-pana.jpg'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import { styles } from './styles';
import { showMessage } from 'react-native-flash-message';

function PasswordReset() {
  const [ email, setEmail ] = useState('')
  
  function handleResetPassword(){
    if(email != ''){
      showMessage({message: 'Um email foi enviado para recuperação de senha'})
    }
  }

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior={Platform.OS === 'ios' ? 'padding': 'height'} >
      <Header/>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Key}/>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.brandText}>Caseirinhos</Text>
          <Text style={styles.title}>Recuperar senha</Text>
          <Text style={styles.subtitle}>Agora mesmo</Text>
        </View>
        <View style={{marginBottom: 32, marginTop: 22}}>
          <Input setText={setEmail} stateText={email} placeholder="Email"/>
        </View>
        <Button onPress={handleResetPassword}>Recuperar senha</Button>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PasswordReset;
