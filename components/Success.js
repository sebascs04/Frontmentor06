import { StyleSheet,View, Text } from "react-native";
import Valid from './svgs/Valid'
import Button from "./Button";

export default function Success({email,Dismiss}) {
    
    return (
        <View style={{marginHorizontal: 25 }}>
            <Valid style={styles.icon} />
            <Text style={styles.title} >Thanks for subscribing!</Text>
            <Text style={{marginTop:16, marginBottom: 180}}>A confirmation email has been sent to{
                email && <Text style={{fontWeight: '700'}} > {email} </Text>
            }. 
            Please open it and click the button inside to confirm your subscription
            </Text>
            <Button funct={Dismiss} text={'Dismiss message'} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40, 
        fontWeight: '700', 
        marginTop: 28
    },
    icon: {
        marginTop: 150
    },
    button: {
        backgroundColor: '#08142D',
        height:52,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressed: {
        elevation: 25,
        shadowColor: '#FF3600',
      },
    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    }
})