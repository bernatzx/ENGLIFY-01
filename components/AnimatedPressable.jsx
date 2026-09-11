import React from 'react';
import { Pressable } from 'react-native';

export default function AnimatedPressable({
  children,
  onPress,
  style,
  disabled = false,
  ...props
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        style,
        pressed && {
          opacity: 0.8,
          transform: [{ scale: 0.97 }],
        },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
}