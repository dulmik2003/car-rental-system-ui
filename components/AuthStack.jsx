import { router } from "expo-router";
import { Image, Text, View } from 'react-native'
import React, { useContext } from 'react'
import carImage from "../assets/onboard-screen-car-image.png";
import CustomButton from './CustomButton';

const AuthStack = () => {
  return (
    <View className='w-full justify-center items-center min-h-[100vh] px-4'>
      <Text className="text-black text-3xl font-bold text-center">
        Welcome to the Car Rental App
      </Text>

      <Image source={carImage} resizeMode="contain" className="max-w--[380px] w-full h-[300px]" />

      <CustomButton
        title="Continue with Email"
        //after click this buttont it'll redirect to the 'app/(auth)/sign-in.jsx' file
        handlePress={() => router.push('/sign-in')}
        containerStyles="mt-7"
      />
    </View>
  )
}

export default AuthStack