import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/categories'
import FeatureRow from '../components/featuredRow'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Turkey</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                </View>
            </View>

            <ScrollView showVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}>
                <Categories />

                <View className="mt-5">
                    {
                        Categories.map((item, index) => {
                            return (
                                <FeatureRow
                                    key={index}
                                    title={item.title}
                                    resturants={item.resturants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}