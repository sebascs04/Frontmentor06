import { StyleSheet,View } from "react-native"
import Product from "./Product"

export default function Products({texts}) {

    return (
        <View style={styles.container}>
            {
                texts.map((text, index)=>{
                    return (
                        <Product text={text} key={index} />
                    )})
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 130,
        paddingTop: 18,
        marginHorizontal: 25,
        justifyContent: 'space-between'
    }
})