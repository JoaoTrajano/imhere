import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './style';
import { TextInput } from '@/components/TextInput';
import { useState } from 'react';
import { Participant } from '@/components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const addParticipant = (): void => {
    if (participants.includes(participantName)) {
      Alert.alert(
        'Não é possível inserir mais de um participante com o mesmo nome',
      );
      return;
    }

    setParticipants((prevState) => [...prevState, participantName]);
  };

  const removeParticipant = (name: string): void => {
    Alert.alert('Exluir participante', `Exluir participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((state) => state !== name),
          ),
      },
    ]);
  };

  return (
    <View>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>20 de Julho de 2024</Text>
      <TextInput
        currentValue={participantName}
        handleFunction={setParticipantName}
      />
      <TouchableOpacity
        onPress={addParticipant}
        style={{ backgroundColor: '#FFF' }}
      >
        <Text>+</Text>
      </TouchableOpacity>
      <FlatList
        data={participants}
        renderItem={({ item }) => (
          <Participant
            handleFunction={() => removeParticipant(item)}
            participantName={item}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={{ color: '#FFF' }}>Nenhum participante cadastrado</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
