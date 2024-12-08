import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MultipleAccounts from "./MultipleAccounts";
import ManageAccounts from "./ManageAccounts";


export default function MultipleAccountsScreen(){

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="MultipleAccounts"
            component={MultipleAccounts}/>
            <Stack.Screen
            name="ManageAccounts"
            component={ManageAccounts}/>
        </Stack.Navigator>
    );
}