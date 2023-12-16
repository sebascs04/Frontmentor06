import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import SignUp from './components/svgs/SignUp'
import Products from './components/Products';
import { useState } from 'react';
import Success from './components/Success';
import Button from './components/Button';


export default function App() {
  const [text,setText]= useState('')
  const [bool,setBool] = useState(false)
  const [valid,setValid] = useState(false)
  const [isFocused, setFocused] = useState(false);

  const texts = ['Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!']

  var re = /^[a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/
  var result = re.test(text)

  function handleFocus() {
    setFocused(true)
  }
  
  function handleBlur() {
    setFocused(false)
  }

  function Submit() {
      if (text.trim() && result) {
        setBool(false)
        setValid(true)

      } else {
        setBool(true)
      }
  }

  function Dismiss() {
        setValid(false)
  }

  return (
    <View style={{flex: 1}} >
        {
          valid ? <Success email={text} Dismiss={Dismiss} /> : 
        <ScrollView >
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
              <SignUp />
            </View>
            <View style={styles.text}>
              <Text style={{fontWeight: '700', fontSize: 35}} >Stay updated!</Text>
              <Text style={{paddingTop: 18}} >Join 60,000+ product managers receiving monthly updates on:</Text>
            </View>
            <Products texts={texts} />
            <View style={styles.email}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700', fontSize: 13}}>Email address</Text>
                <Text style={{color: 'rgba(255,0,0,0.75)',fontWeight: '700',fontSize: 13}}>
                  {
                    !bool ? '' : 'Valid email required'
                  }
                </Text>
              </View>
              <TextInput 
                      id='text-input'
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={[styles.input, 
                      {borderColor: bool ? 'rgba(255,0,0,0.6)' : (isFocused ? '#000000' : '#rgba(0,0,0,0.3)')  ,
                      backgroundColor: bool ? 'rgba(255,0,0,0.2)' : '#fff',
                      color: bool ? 'rgba(255,0,0,0.75)' : '#000000'}]}
                      placeholder="email@company.com" 
                      onChangeText={setText}
                      value={text}
                      />
              <Button funct={Submit} text={'Subscribe to monthly newsletter'} />
            </View>
        </View>
        </ScrollView>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 30
  },
  text: {
    paddingTop: 35, 
    marginHorizontal: 25,
    width: 260
  },
  email: {
    marginHorizontal: 25,
    marginTop: 40
  },
  input: {
      borderWidth: 1,
      height:52,
      paddingHorizontal: 25,
      borderRadius: 10,
      marginVertical: 10,
  }
});
