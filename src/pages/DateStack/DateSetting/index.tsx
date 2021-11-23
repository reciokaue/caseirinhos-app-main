import React, { useEffect } from 'react';
import { useState } from 'react';

import { Alert, Platform, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { eachHourOfInterval, format, isBefore, set, parseJSON   } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import DateCard from '../../../components/DateCard';
import DateListItem from '../../../components/DateListItem';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';
import { useDates } from '../../../hooks/useDates';
import Header from '../../../components/Header';

function DateSetting() {
  const navigation = useNavigation()

  const [selectedDateTime, setSelectedDateTime] = useState(new Date);
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

  const { dates } = useDates()
  const [ selectedDate, setSelectedDate ] = useState('')

  const [ dateIndex, setDateIndex ] = useState(0)
  const [ ableHours, setAbleHours ] = useState<String[]>([])

  useEffect(() => {
    dates.unshift({
      id: 'add',
      start: '',
      end: '',
      step: '',
      ableHours: ['']
    })
  }, [dates])

  function handleChangeTime(event: Event, dateTime: Date | undefined){
    if(Platform.OS === 'android'){
      setShowDatePicker(!showDatePicker)
    }
    if(dateTime && isBefore(dateTime, new Date())){
      return Alert.alert('Escolha uma data no futuro 🕓')
    }
    if(dateTime){
      setSelectedDateTime(dateTime)
      navigation.navigate({
        name: 'HourSetting',
        params: {
          dateString: JSON.stringify(dateTime)
        }
      })
    }
  }
  function handleOpenTimePickerAndroid(){
    setShowDatePicker(!showDatePicker)
  }

  // const dateToStart = set(selectedDateTime, {hours: 10})
  // const dateToFinish = set(selectedDateTime, {hours: 20})
  // const result = eachHourOfInterval({
  //   start: dateToStart,
  //   end: dateToFinish,
  // })

  function handleViewHours(indexDate: number, id: string) {
    
    if (dates) {
      if(id == 'add'){
        handleOpenTimePickerAndroid()
      }else{
        setSelectedDate(id)
        setAbleHours(dates[indexDate].ableHours)
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header/>
      <Text style={styles.title}>Adicionar nova data de entrega</Text>
      <View style={{width: '100%', paddingBottom: 32}}>
        <Text style={styles.subtitle}>Datas</Text>
        <FlatList
          horizontal showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 32, paddingRight: 16}}
          data={dates}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item, index}) => (
            <DateCard
              onPress={ () => handleViewHours(index, item.id)}
              selected={selectedDate == item.id && true}
              title={item.id === 'add'? '' : format(parseJSON(item.start), 'EEEEEE', { locale: ptBR })}
              day={item.id === 'add'? '+' : format(parseJSON(item.start), 'd')}
            />
          )}
        />
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode='datetime'
          display='spinner'
          onChange={handleChangeTime}
        />
      )}
      <View style={{width: '100%', flex: 1}}>
        <Text style={styles.subtitle}>Horários</Text>
        { ableHours && 
          ableHours.map((hour, index) => (
            <DateListItem
              key={index}
              hour={`${format(parseJSON(hour), 'HH')}:${format(parseJSON(hour), 'mm')}`}
            />
          ))
        }
      </View>
    </ScrollView>
  );
};

export default DateSetting;
