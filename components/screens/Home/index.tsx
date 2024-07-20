import { View, Text } from 'react-native';
import { styles } from './style';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  return (
    <View>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>20 de Julho de 2024</Text>
      <TextInput
        currentValue={participantName}
        handleFunction={setParticipantName}
      />
      <Button
        content="+"
        handleFunction={() =>
          setParticipants((prevState) => [...prevState, participantName])
        }
      />
    </View>
  );
}
