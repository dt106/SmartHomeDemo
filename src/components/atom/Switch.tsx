import { Animated, PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { black, yellow } from '../../assets/color/Color'

export default function Switch() {
    const pan: any = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }],
                {useNativeDriver: false}    
            ),
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        }),
    ).current;
    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }],
                }}
                {...panResponder.panHandlers}
            >
                <TouchableOpacity style={styles.switch}></TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 30,
        backgroundColor: yellow,
        borderRadius: 25,
        justifyContent: 'center'
    },
    switch: {
        width: 25,
        height: 25,
        backgroundColor: black,
        borderRadius: 50,
        marginHorizontal: 5,
        elevation: 10,
    }
})