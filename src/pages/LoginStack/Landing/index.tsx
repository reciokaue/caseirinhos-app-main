import React from 'react';

import IconImage from '../../../assets/icone_caseirinhos_image.jpg'

import { Image, Text, View } from 'react-native';
import Button from '../../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TitlesText/>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={IconImage}/>
      </View>
      <View>
        <Button onPress={() => navigation.navigate({name: 'LoginWithEmail', params: {isLogin: true}})} outlined>Fazer Login</Button>
          <View style={{height: 15}}/>
        <Button onPress={() => navigation.navigate({name: 'LoginWithEmail', params: {isLogin: false}})}>Criar Conta</Button>
      </View>
      {/* <LineSeparator/> */}
    </View>
  );
};

const TitlesText = () => (
  <View>
    <Text style={styles.subtitle}>Caseirinhos</Text>
    <Text style={styles.title}>Os melhores doces, na porta da sua casa</Text>
    <Text style={styles.subtitle}>Com todo amor, carinho e confiança que temos a oferecer</Text>
  </View>
)
const LineSeparator = () => (
  <View style={styles.separator}>
    <View style={styles.line}/>
    <Text style={styles.separatorText}>ou</Text>
    <View style={styles.line}/>
  </View>
)

export default Login;
