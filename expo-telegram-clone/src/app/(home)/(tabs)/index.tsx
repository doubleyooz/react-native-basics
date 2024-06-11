import { useState } from "react";
import { router } from "expo-router";
import { Text } from "react-native";
import { ChannelList, Channel, MessageList, MessageInput } from 'stream-chat-expo'


export default function MainTabScreen() {



  return <ChannelList onSelect={(channel) => router.push(`/channel/${channel.cid}`)} />
}
