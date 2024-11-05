import { Pressable, StyleSheet, Text, View } from 'react-native';

export function TextButton(props) {
    function onButtonTapped() {
        props.onPress();
    }

    return(
      <View>
        <Pressable onPress={onButtonTapped}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{props.title}</Text>
            </View>
          </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderColor: 'purple',
        borderWidth: 2,
        borderRadius: 5,
        padding: 8,
        backgroundColor: 'purple',
      },
      buttonText: {
        color: 'white',
        fontSize: 18
      }
});