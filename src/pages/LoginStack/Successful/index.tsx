import React from 'react';

import { Image, Text, View } from 'react-native';
import Button from '../../../components/Button';
import { styles } from './styles';

import person1 from '../../../assets/people/person1.jpg'
import person2 from '../../../assets/people/person2.jpg'
import person3 from '../../../assets/people/person3.jpg'
import person4 from '../../../assets/people/person4.jpg'
import person5 from '../../../assets/people/person5.jpg'
import person6 from '../../../assets/people/person6.jpg'
import person7 from '../../../assets/people/person7.jpg'
import person8 from '../../../assets/people/person8.jpg'
import { useNavigation, useRoute } from '@react-navigation/core';
import UseAuthFirebase from '../../../hooks/useAuth';

interface Params {
  isNewUser: boolean
  // userName: string
}
function Successful() {
  const route = useRoute()
  const { 
    isNewUser,
    // userName
  } = route.params as Params
  const navigation = useNavigation();
  const { setLogged } = UseAuthFirebase()

  return (
    <View style={styles.container}>
      <Text style={styles.brandText}>Caseirinhos</Text>
      <RotativeImage/>
      <Text style={styles.messageTitle}>
        {/* {isNewUser? 'Parabéns sua conta foi criada com sucesso!': `Bem vindo de volta\n${userName} `} */}
        {isNewUser? 'Parabéns sua conta foi criada com sucesso!': `Bem vindo de volta`}
      </Text>
      <Button onPress={() => {
        setLogged(true)
      }}>Vamos lá!</Button>
    </View>
  );
};
function RotativeImage(){
  const avatars = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
  ]
  const ramdomAvatar = Math.floor(Math.random() * 8);

  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={avatars[ramdomAvatar]}/>
    </View>
  )
}
export default Successful;
