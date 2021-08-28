import React from 'react'
import { View, Button } from 'react-native'

export default function ScrollButton() {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button
                title="prev"

            />
            <Button
                title="sig"

                disabled={false}
            />
        </View>
    )
}