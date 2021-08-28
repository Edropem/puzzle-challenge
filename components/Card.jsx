import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const cardWidth = width * 0.7


const Card = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.image[0] }} />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: cardWidth - 20,
        height: height / 3,
        borderRadius: 10
    },
    itemTitle: {
        fontSize: 22,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    }
})

export default Card