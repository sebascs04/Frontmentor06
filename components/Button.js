import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text,Pressable } from "react-native"

export default function Button({funct, text}) {
    return (
        <Pressable style={({pressed})=> [
            styles.button, pressed ? styles.pressed : ''
          ]} onPress={funct}>
            {
              ({pressed})=> pressed ? 
              <LinearGradient
                style={styles.gradient}
                colors={['rgba(255,80,80,1)','rgba(255,118,39,1)']}
                start={{x:0.4,y:0.4}}
                end={{x:0.9,y:0.9}}>
                <Text style={{color: '#FFFFFF',fontWeight: '600', marginRight: 3}}> {text}</Text>                
              </LinearGradient>
                :<Text style={{color: '#FFFFFF',fontWeight: '600'}}>{text}</Text>
            }              
          </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#08142D',
        height:52,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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