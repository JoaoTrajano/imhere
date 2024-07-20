import { View, Text } from 'react-native';
import { styles } from './style';
import { TextInput } from '@/components/TextInput';

export function Home() {
  return (
    <View>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>20 de Julho de 2024</Text>
      <TextInput />
    </View>
  );
}
