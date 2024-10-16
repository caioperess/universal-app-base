import { Box, Button } from '@repo/components';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export function Home() {
  return (
    <View className="flex-1 bg-blue-400 items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>

      <Box className="w-40 h-40 bg-red-300" />

      <Button className='bg-red-500' variant="solid" action="positive">
        <Text>BUTTON</Text>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}
