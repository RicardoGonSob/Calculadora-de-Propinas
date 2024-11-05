import { StyleSheet, View } from "react-native";
import { TextButton } from "./TextButton";

export function Stepper(){
    return(
        <View style={styles.mainContainer}>
            <TextButton title='-' 
            buttonStyle={styles.minusButtonStyle} 
            textStyle={styles.buttonTextStyle}/>
            <TextButton title='+' 
            buttonStyle={styles.plusButtonStyle} 
            textStyle={styles.buttonTextStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    plusButtonStyle:{
        borderColor: 'lightgray',
        backgroundColor: 'lightgray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    minusButtonStyle:{
        borderColor: 'light-gray',
        backgroundColor: 'light-gray',
        minWidth: 36,
        minHeight: 36,
        alignItems: 'center'
    },
    buttonTextStyle: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})