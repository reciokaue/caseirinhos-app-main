import React, {useState} from 'react';

import { Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import Input from '../../../components/Input';
import { RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { ImageCardButton, ImageAddButton } from '../../../components/imageCardButton';
import { database, storage } from '../../../services/firebase';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/core';
import Header from '../../../components/Header';

interface DataImageProps {
  cancelled: boolean,
  height: number,
  width: number,
  type: string,
  uri: string,
}

function CreateProduct() {
  const [ title, setTitle ] = useState('')
  const [ about, setAbout ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ images, setImages] = useState<DataImageProps[]>([]);
  const [ remoteUrls, setRemoteUrls] = useState<String[]>([]);
  const [ references, setReferences] = useState<String[]>([]);

  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertMessge, setAlertMessage ] = useState('')

  const navigation = useNavigation()

  async function imagePickerCall() {
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (data.cancelled) {
      return;
    }
    setImages([...images, data]);
  }
  async function HandleCreateProduct(){
    if(title.trim() === '' || about.trim() === '' || price === ''){
      setAlertMessage('Empty input')
      setShowAlert(true)
      return
    }else if(images.length <= 0){
      setAlertMessage('Image not found')
      setShowAlert(true)
      return
    }
    for (let index = 0; index < images.length; index++) {
      const { uri } = images[index];
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const reference = `/images/${filename}`
      references.push(reference)

      const blob: Blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", images[index].uri, true);
        xhr.send(null);
      });
      
      const ref = storage.ref(`images/${filename}`);
      const snapshot = await ref.put(blob, { contentType: "image/png" });
      const remoteURL = await snapshot.ref.getDownloadURL();
      remoteUrls.push(remoteURL)
      
      const product ={
        title: title,
        about: about,
        price: price,
        img: {
          url: remoteUrls,
          reference: references
        }
      }
      await database.ref(`products/`).push(product)
      showMessage({message: `Produto ${title} criado com sucesso`, type: 'success'})
      ClearData()
      navigation.navigate('Home')
    }
  }
  function ClearData(){
    setTitle('')
    setAbout('')
    setPrice('')
    setImages([])
    setRemoteUrls([])
    setReferences([])
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <Header/>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{paddingHorizontal: 32}}>

      <Text style={styles.title}>Criar Produto</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
        <View style={{width: '63%'}}><Input placeholder="Nome" setText={setTitle} stateText={title}/></View>
        <View style={{width: '33%'}}><Input placeholder="Preço" keyboardType='numeric' setText={setPrice} stateText={price}/></View>
      </View>
      <Input placeholder="Sobre" textAlignVertical="top" setText={setAbout} stateText={about} multiline numberOfLines={4}/>
      <Text style={styles.subtitle}>Fotos</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageAddButton onPress={imagePickerCall}/> 
        {images && images.map((image) => 
          <ImageCardButton key={image.uri} uri={image.uri}/>
        )}
      </View>
      <View style={{
        maxWidth: '100%',
        width: '100%',
        paddingHorizontal: 32,
        paddingBottom: 50,
        paddingTop: 20,
      }}>
        <View  style={styles.button}>
          <RectButton onPress={() => {
            ClearData()
            showMessage({message: 'Dados limpos'})
          }} style={styles.close}>
            <Ionicons name="close" size={24} color="#fff" />
          </RectButton>
          <View style={{width: 1.5, height: 46, backgroundColor: '#E1E3E6'}}/>
          <RectButton onPress={HandleCreateProduct} style={styles.textWrapper}>
            <Text style={styles.buttonText}>Create Product</Text>
          </RectButton>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    <AwesomeAlert
      show={showAlert}
      title="Preencha todos os dados"
      message={alertMessge}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showConfirmButton={true}
      confirmText="Confirmar"
      confirmButtonColor="#E83F5B"
      onConfirmPressed={() => setShowAlert(false)}
    />
    </ScrollView>
  );
};

export default CreateProduct;
