import React, {useState} from 'react';

import HappyPeople from '../../../assets/happy_people.jpg'

import UseAuthFirebase from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Header from '../../../components/Header';

import { styles } from './styles';
import { loginWithEmail, registerWithEmail } from '../../../services/firebase';
import { showMessage } from 'react-native-flash-message';

interface Params {
  isLogin: boolean
}
function LoginWithEmail() {
  const route = useRoute()
  const { 
    isLogin
  } = route.params as Params
  const navigation = useNavigation();
  const { setUserId } = UseAuthFirebase()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  async function handleSubmit(){
    if(isLogin){
      handleLogin()
    }else{
      handleRegister()
    }
  }
  async function handleRegister(){
    registerWithEmail(email, password).then((userCredential) => {
      const { uid } = userCredential.user?.providerData[0]
      setUserId(uid)

      navigation.navigate({name: 'Successful', params: {isNewUser: true}})
      showMessage({message: 'Parabéns Sua conta foi criada com sucesso!', type: 'success'})
    }).catch(error => {
      showMessage({message: error.message, type: 'danger'})
    })
  }
  async function handleLogin(){
    await loginWithEmail(email, password).then((userCredential) => {
      const { uid } = userCredential.user?.providerData[0]
      setUserId(uid)

      navigation.navigate({name: 'Successful', params: {isNewUser: false}})
      showMessage({message: 'Seja bem vindo!', type: 'success'})
    }).catch(error => {
      showMessage({message: error.message, type: 'danger'})
    })
  }

  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior={Platform.OS === 'ios' ? 'padding': 'height'} >
      <Header/>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={HappyPeople}/>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.brandText}>Caseirinhos</Text>
          <Text style={styles.title}>Seja muito Bem vindo</Text>
          <Text style={styles.subtitle}>
            {isLogin? 'Faça Login agora mesmo': 'Criar sua conta'}
          </Text>
        </View>
        <View style={{marginBottom: 6, marginTop: 22}}>
          <Input setText={setEmail} stateText={email} placeholder="Email"/>
          <Input setText={setPassword} secureTextEntry={true} stateText={password} placeholder="Senha"/>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={{marginBottom: 26,}}>
         {isLogin && <Text onPress={() => navigation.navigate('PasswordReset')} style={styles.forgotPassword}>Esqueci minha senha</Text>} 
        </TouchableOpacity>
        <Button onPress={handleSubmit}>
          {isLogin? 'Entrar': 'Criar conta'}
        </Button>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginWithEmail;
