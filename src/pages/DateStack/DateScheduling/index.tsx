import React from 'react';
import { format, parseJSON } from 'date-fns';
import { useState } from 'react';

import { Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DateCard from '../../../components/DateCard';
import DateListItem from '../../../components/DateListItem';
import { useDates } from '../../../hooks/useDates';
import { styles } from './styles';

import ptBR from 'date-fns/locale/pt-BR';
import Button from '../../../components/Button';
import UseOrder from '../../../hooks/useOrder';
import Header from '../../../components/Header';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/core';

function DateScheduling() {
  const { dates } = useDates()
  const { setDeliveryDate, deliveryDate } = UseOrder()
  const navigation = useNavigation()

  const [ selectedDate, setSelectedDate ] = useState('')
  const [ dateIndex, setDateIndex ] = useState(0)
  const [ hourIndex, setHourIndex ] = useState(0)
  const [ ableHours, setAbleHours ] = useState<String[]>([])

  function handleViewHours(indexDate: number, id: string) {
    if (dates) {
      setSelectedDate(id)
      setAbleHours(dates[indexDate].ableHours)
    }
  }
  function handleSelectHour(){
    if(hourIndex){
      setDeliveryDate(dates[dateIndex].ableHours[hourIndex])
      showMessage({message: 'A data de entrega foi confirmada com sucesso', type: 'success'})
      navigation.navigate('Basket')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header/>
      <Text style={styles.title}>Escolha o melhor horario para você</Text>
      <View style={{width: '100%', paddingBottom: 32}}>
        <Text style={styles.subtitle}>Datas</Text>
        <FlatList
          horizontal showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 32, paddingRight: 16}}
          data={dates}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item, index}) => (
            <DateCard
            onPress={() => handleViewHours(index, item.id)}
            selected={selectedDate == item.id && true}
            title={format(parseJSON(item.start), 'EEEEEE', { locale: ptBR })}
            day={format(parseJSON(item.start), 'd')}
            />
            )}
        />
      </View>
      <View style={{width: '100%', flex: 1}}>
        <Text style={styles.subtitle}>Horários</Text>
        { ableHours && 
          ableHours.map((hour, index) => (
            <DateListItem
            key={index}
            onPress={() => setHourIndex(index)}
            selected={hourIndex == index && true}
            hour={`${format(parseJSON(hour), 'HH')}:${format(parseJSON(hour), 'mm')}`}
            />
          ))
        }
      </View>
      <View style={{padding: 32}}>
        <Button onPress={handleSelectHour}>Selecionar Horario</Button>
      </View>
    </ScrollView>
  );
};

export default DateScheduling;
