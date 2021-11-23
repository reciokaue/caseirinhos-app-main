import React, { useRef, useState } from 'react';

import { Alert, Dimensions, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import DateListItem from '../../../components/DateListItem';
import Input from '../../../components/Input';

import { eachMinuteOfInterval, format, parseJSON, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/core';
import Button from '../../../components/Button';
import { Modalize } from 'react-native-modalize';
import { showMessage } from 'react-native-flash-message';
import { database } from '../../../services/firebase';
import Header from '../../../components/Header';

interface ToSaveProps {
  start: string,
  end: string,
  step: string,
}
interface Params {
  dateString: string
}

function HourSetting() {
  const route = useRoute()
  const {
    dateString
  } = route.params as Params
  
  const dateTime = parseJSON(dateString)
  const [AvailabelHours, setAvailabelHours] = useState<Date[]>([])
  const [toSaveHours, setToSaveHours] = useState({})
  
  const [hourStart, setHourStart] = useState('10')
  const [hourFinish, setHourFinish] = useState('15')
  const [steps, setSteps] = useState('15')
  
  const dayWeek = format(dateTime, 'EEEEEE', { locale: ptBR })
  const day = format(dateTime, 'd')
  const month = format(dateTime, 'MMM', { locale: ptBR })
  const year = format(dateTime, 'uuuu')

  const navigation = useNavigation()

  const windowHeight = Dimensions.get('window').height;

  function handleCreateHours() {
    if (Number(hourStart) > Number(hourFinish)) {
      Alert.alert('O Horario final deve ser maior que o horario de inicio')
      return
    }
    const dateToStart = set(dateTime, { hours: Number(hourStart) | 0, minutes: 0 })
    const dateToFinish = set(dateTime, { hours: Number(hourFinish) | 1, minutes: 0 })
    const stepsFor = Number(steps)

    const result = eachMinuteOfInterval({
        start: dateToStart,
        end: dateToFinish,
      },{ step: stepsFor })

    const hoursToSave:Array<String> = []
    result.map((item) => {
      hoursToSave.push(JSON.stringify(item))
    })
    setToSaveHours({
      start: JSON.stringify(dateToStart),
      end: JSON.stringify(dateToFinish),
      step: JSON.stringify(stepsFor),
      ableDates: hoursToSave
    })
    
    setAvailabelHours(result)
  }
  async function handleAddDate(){
    await database.ref(`dates/`).push(toSaveHours)
    
    navigation.navigate('Basket')
    showMessage({message: 'Dia de trabalho foi adicionado com sucesso', type: 'success'})
  }
  const modalizeRef = useRef<Modalize>(null);
  function handleOpenModal(){
    modalizeRef.current?.open();
  };

  return (
    <>
      <Header/>
      <ScrollView  contentContainerStyle={styles.container}>
        <View style={styles.dateCard}>
          <RectButton style={styles.dateButton}>
            <Text style={styles.dateTitle}>{dayWeek}</Text>
            <Text style={styles.dateSubtitle}>{day}</Text>
            <Text style={styles.dateTitle}>{month}</Text>
            <Text style={styles.dateTitle}>{year}</Text>
          </RectButton>
        </View>
        <Text style={styles.title}>Selecione os horários disponiveis para este dia</Text>
        <Text style={styles.subtitle}>Horas</Text>
        <View style={styles.inputField}>
          <View style={{ width: '30%' }}>
            <Input placeholder="De" setText={setHourStart} stateText={hourStart} keyboardType="numeric" />
          </View>
          <View style={{ width: '33%' }}>
            <Input placeholder="Intervalo" setText={setSteps} stateText={steps} keyboardType="numeric" />
          </View>
          <View style={{ width: '30%' }}>
            <Input placeholder="Até" setText={setHourFinish} stateText={hourFinish} keyboardType="numeric" />
          </View>
        </View>
        <View style={{ width: '100%', paddingHorizontal: 32, marginBottom: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ width: '48%'}}><Button redFit onPress={handleCreateHours}>Gerar Horarios</Button></View>
          <View style={{ width: '48%'}}><Button redFit onPress={handleOpenModal}>Confirmar</Button></View>
        </View>
        <Text style={styles.subtitle}>Total de {AvailabelHours.length} entregas disponíveis </Text>
        <RectButton >
        </RectButton>
        <View style={{ width: '100%', flex: 1, paddingTop: 32, }}>
          {AvailabelHours.map((item) => (
            <DateListItem
              key={JSON.stringify(item)}
              hour={`${format(item, 'HH')}:${format(item, 'mm')}`}
              selected
            />
          ))}
        </View>
      </ScrollView>
      <Modalize
        modalStyle={{marginTop: windowHeight - 459,}}
        handleStyle={{ width: 105}}
        childrenStyle={styles.modalContainer}
        overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.45)'}}
        ref={modalizeRef}
      >
        <Text style={styles.modalTitle}>Confirmar horários disponiveis para este dia</Text>
        <View style={styles.hourShow}>
          <HourCard  title="De" timeText="horas" time={hourStart}/>
          <HourCard  title="Intervalo" timeText="min" time={steps}/>
          <HourCard  title="Até" timeText="horas" time={hourFinish}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', paddingHorizontal: 32}}>
          <Text style={styles.timeText}>{AvailabelHours.length}</Text>
          <Text style={styles.possibleRequests}>Pedidos disponiveis</Text>
        </View>
        <View style={{paddingHorizontal: 32, marginTop: 37}}>
          <Button onPress={handleAddDate} redFit>Adicionar</Button>
        </View>
      </Modalize>
    </>
  );
};
interface HourCardProps{
  title: string
  timeText: string
  time: string
}
const HourCard = ({ title, timeText, time}: HourCardProps) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.hourContainer}>
      <Text style={styles.cardSubitle}>{timeText}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  </View>
)

export default HourSetting;
