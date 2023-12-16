import {  View, Text } from "react-native"
import List from './svgs/List'

export default function Product({text}) {
    return (
        <View style={{flexDirection:'row'}}>
            <List style={{marginRight: 13}}/>
            <Text style={{width: 240}}>{text}</Text>
        </View>
    )
}
