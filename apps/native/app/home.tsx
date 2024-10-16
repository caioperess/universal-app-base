import { Box } from '@repo/components';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export function Home() {
  return (
    <View className="flex-1 bg-blue-400 items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>

      <Box className="w-12 h-12 bg-red-300 justify-center items-center">
        <Text>BOX</Text>
      </Box>

      <StatusBar style="auto" />
    </View>
  );
}
