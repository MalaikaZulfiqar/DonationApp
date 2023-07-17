import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProgressBar = ({ progress }) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{
                    height: 20,
                    borderRadius: 10,
                    overflow: 'hidden',
                }}
            >
                <View
                    style={{
                        width: `${progress}%`,
                        height: 20,
                        backgroundColor: 'white',
                    }}
                />
            </LinearGradient>
            <Text style={{ textAlign: 'center' }}>{progress}%</Text>
        </View>
    );
};

export default ProgressBar;
