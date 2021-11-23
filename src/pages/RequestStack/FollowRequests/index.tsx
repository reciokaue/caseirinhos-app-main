import React from 'react';

import { Image, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import RequestCard from '../../../components/RequestCard';
import useRequests from '../../../hooks/useRequests';
import { styles } from './styles';
import cake from '../../../assets/cake.jpg'

function FollowRequests() {
  const { request } = useRequests()

  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Acompanhe seus Pedidos</Text>
      </View>
      {request[0]?
        request.map((item, index) => (
          <RequestCard key={item.id} index={index}/>
        )):
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.subtitle}>Sem pedidos por enquanto</Text>
          <Image style={styles.image} source={ cake}/>
        </View>
      }
    </ScrollView>
  );
};

export default FollowRequests;
