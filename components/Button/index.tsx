import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

type ButtonProps = {
  handleFunction: () => void;
  content: string;
};

export function Button({ handleFunction, content }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleFunction}>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}
