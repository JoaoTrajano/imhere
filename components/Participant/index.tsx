import {
  Text,
  TouchableOpacity,
  View,
  type GestureResponderEvent,
} from 'react-native';

type ParticipantProps = {
  participantName: string;
  handleFunction: (event: GestureResponderEvent) => void;
};

export function Participant({
  participantName,
  handleFunction,
}: ParticipantProps) {
  return (
    <View>
      <Text style={{ color: '#FFF' }}>{participantName}</Text>
      <TouchableOpacity
        style={{ backgroundColor: '#FFF' }}
        onPress={handleFunction}
      >
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
}
