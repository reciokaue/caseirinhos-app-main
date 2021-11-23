import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Text, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import UseAuthFirebase from '../../hooks/useAuth';
import { useProducts } from '../../hooks/useProducts';
import useRequests from '../../hooks/useRequests';
import { styles } from './styles';

function Home() {
  const { products } = useProducts()
  const { setRequest } = useRequests()
  const { userId } = UseAuthFirebase()
  const navigation = useNavigation()
  const admin = userId == 'kaue.recio2@gmail.com' ? true : false

  const request = {
    "author": "kaue.recio2@gmail.com",
    "deliveryDate": "\"2021-11-25T16:00:00.000Z\"",
    "deliveryPlace": {
      "complement": "Babs",
      "homeNumber": "4994",
      "latitude": -23.4835024,
      "longitude": -23.4835024,
      "referencePoint": "Bsba",
      "residenceType": "home",
      "street": "Bshs",
    },
    "items": [
      {
        "about": "Eu preciso",
        "amount": 3,
        "imageUrls": [
          "https://firebasestorage.googleapis.com/v0/b/caseirinhos-e9a9b.appspot.com/o/images%2Ffbf5f24b-de26-4f59-a1e0-f499bffc1fb1.jpg?alt=media&token=67124253-2ed8-4da3-9c6e-6213dfff7db9",
          "https://firebasestorage.googleapis.com/v0/b/caseirinhos-e9a9b.appspot.com/o/images%2F4bc6f2dd-cf4a-4651-a7cc-b12332d6a822.jpg?alt=media&token=3665f491-aeee-4ba0-a307-aa09fbf7f5e9",
        ],
        "itemId": "-MjjGw2go9lCus7FfYV5",
        "price": "25",
        "title": "brigadeiro",
      },
      {
        "about": "Sjs djan",
        "amount": 1,
        "imageUrls": [
          "https://firebasestorage.googleapis.com/v0/b/caseirinhos-e9a9b.appspot.com/o/images%2Fb6228084-b27b-4403-8eef-7000dc8f7683.jpg?alt=media&token=00cd4c23-13ff-4790-9739-50ae84a60a89",
        ],
        "itemId": "-MkTU4cFHQPJV6zQ8DY7",
        "price": "9564",
        "title": "Jajsbwusa",
      },
      {
        "about": "Cacete pessegonfinaomente",
        "amount": 1,
        "imageUrls": [
          "https://firebasestorage.googleapis.com/v0/b/caseirinhos-e9a9b.appspot.com/o/images%2F906d6fcf-4989-4e53-9c13-8965f4912aeb.jpg?alt=media&token=6b8c0264-44a1-4745-9118-fd96759931ac",
        ],
        "itemId": "-MmjMEQ2gtBlbj5nXCFh",
        "price": "12",
        "title": "Pessegi",
      },
    ],
    "paymentMethod": {
      "method": "Crédito",
      "payment": "Visa",
    },
    "total": 9656,
    "whenDone": "\"2021-11-22T21:49:47.986Z\"",
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ width: '100%', paddingHorizontal: 32, marginBottom: 20, }}>
        <Text style={styles.title}>Home</Text>
        {admin && <Button onPress={() => navigation.navigate('CreateProduct')}>Cadastrar novo Produto</Button>}
        {admin && <Button onPress={() => {
          setRequest([request])
        }}>Cadastrar Reqquest</Button>}
      </View>
      <View style={styles.scrollContainer}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            itemId={item.id}
            title={item.title}
            about={item.about}
            price={item.price}
            amount={1}
            imageUrls={item.img.url}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
