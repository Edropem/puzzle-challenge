import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
    View,
    Dimensions,
    FlatList,
    Button,
    Text
} from 'react-native';
import Card from './Card';

const { width } = Dimensions.get('window')
const itemSize = width * 0.7
const spacer = (width - itemSize) / 2
let listViewRef
let currentIndex = 1

export default function Carousel({ blocks }) {

    /////////LOCAL STATES////////

    const [activeIndex, setActiveIndex] = useState(1)

    ////////BUTTONS HANDLERS/////

    const nextButonHandler = () => {
        if (currentIndex <= blocks.length - 1) {
            currentIndex++;
            listViewRef.scrollToIndex({ index: currentIndex, viewPosition: 0.5 })
            setActiveIndex(currentIndex + 1)
        }
    }
    const prevButonHandler = () => {
        if (currentIndex > 1) {
            currentIndex = currentIndex - 1;
            listViewRef.scrollToIndex({ index: currentIndex, viewPosition: 0.5 })
            setActiveIndex(currentIndex)
        }
    }

    ////////SCROLL HANDLERS///////

    const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems[0]?.index) {
            viewableItems.length === 1 ? currentIndex = viewableItems[0]?.index : (
                viewableItems[0]?.index === 0 ? currentIndex = 1 : currentIndex = blocks.length
            )
        }
    }, [])

    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 100
    };

    const handleScrollEnd = () => {
        currentIndex === 1 ? setActiveIndex(1) : setActiveIndex(currentIndex + 1);
    }

    return (
        <View>
            <FlatList
                onViewableItemsChanged={handleViewableItemsChanged}
                onMomentumScrollEnd={handleScrollEnd}
                viewabilityConfig={_viewabilityConfig}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={[{ key: "first spacer" }, ...blocks, { key: "last spacer" }]}
                snapToInterval={itemSize}
                decelerationRate={0}
                ref={(ref) => { listViewRef = ref }}
                renderItem={({ item, index }) =>
                    (item.image ? <Card item={item} key={index} /> : <View style={{ width: spacer }} key={item.key} />)
                }
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>


                <Button
                    title="<"
                    onPress={prevButonHandler}
                    disabled={activeIndex <= 1}
                />
                <Button
                    title=">"
                    onPress={nextButonHandler}
                    disabled={activeIndex >= blocks.length + 1}
                />
            </View>
        </View>
    )
}