import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({ children }) => (
    <ImageBackground
        source={require('../assets/image/logo3.jpeg')}
        style={{ height: '115%', position: 'relative' }}>
        <View style={{ position: 'absolute' }}>{children}</View>
    </ImageBackground>
);

export default Background;
