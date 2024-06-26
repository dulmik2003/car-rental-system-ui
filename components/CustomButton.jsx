import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={() => handlePress()}
            activeOpacity={0.7}
            disabled={isLoading}
            className={`
                rounded-lg min-h-[55px] w-full items-center justify-center bg-black
                ${containerStyles} ${isLoading ? 'opacity-50' : ''}`
            }
        >
            <Text className={`text-sm text-white font-bold ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton