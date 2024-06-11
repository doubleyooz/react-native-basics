import { Stack } from "expo-router";

import { ChatProvider } from "stream-chat-expo";


export default function HomeLayout() {

  return (
    <ChatProvider>

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>


    </ChatProvider>)
}
