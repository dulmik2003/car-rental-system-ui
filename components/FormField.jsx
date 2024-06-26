import { View, Text, TextInput } from 'react-native'
import { useState } from 'react'

const FormField = ({ title, value, placeHolder, handleChangeText, containerStyles, inputFieldStyles }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-1 ${containerStyles}`}>
            <Text className="text-base text-black">{title}</Text>

            <View className="flex justify-center items-end">
                <TextInput
                    className={
                        `w-full h-[32px] p-2 border-b-2 text-[#7b7b8b]
                      focus:border-[#1E90FF] ${inputFieldStyles}`
                    }
                    value={value}
                    placeholder={placeHolder} 
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText} 
                    cursorColor="black" selectionColor="#ffd700"
                    secureTextEntry={title === 'Password' && !showPassword}
                />
            </View>
        </View>
    )
}

export default FormField