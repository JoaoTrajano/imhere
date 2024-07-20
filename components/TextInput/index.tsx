import { TextInput as TextInputReactNative } from 'react-native';
import { styles } from './style';

type TextInputProps = {
  handleFunction: (data: string) => void;
  currentValue: string;
};

export function TextInput({ handleFunction, currentValue }: TextInputProps) {
  return (
    <TextInputReactNative
      onChangeText={handleFunction}
      value={currentValue}
      style={styles.textInput}
    />
  );
}
