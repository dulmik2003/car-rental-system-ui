import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from './CustomButton'
import { AuthContext } from './context/AuthContext';

const AppStack = () => {
  const { setUserToken } = useContext(AuthContext);

  const handleSignOut = () => {
    setUserToken(null)
    AsyncStorage.removeItem("userToken");
}

  return (
    <View className="h-full justify-center items-center px-4">
      <Text>AppStack</Text>

      <CustomButton
        title="Sign out"
        handlePress={handleSignOut}
        containerStyles="mt-7"
      />
    </View>
  )
}

export default AppStack