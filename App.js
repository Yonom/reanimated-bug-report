import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export default function App() {
  const style = useAnimatedStyle(() => {
    return {};
  });

  return <Animated.View style={[[style]]} />;
}
