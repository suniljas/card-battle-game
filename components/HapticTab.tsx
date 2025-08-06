// Add the correct type for the event object from react-native
import { GestureResponderEvent } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      // Explicitly type the 'ev' parameter to fix the 'implicit any' error.
      onPressIn={(ev: GestureResponderEvent) => {
        // Use a more robust check for the OS
        if (Haptics.impactAsync && Haptics.ImpactFeedbackStyle && process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}