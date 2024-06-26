import React, { useContext, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../components/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const SignInScreen = ({ navigation }) => {
  const { setUserToken } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = () => {
    console.log(form);

    axios.post('http://192.168.1.10:8088/api/v1/auth/authenticate', form)
      .then(function (response) {
        console.log(response);

        setUserToken(response.token);
        AsyncStorage.setItem("userToken", response.token);
        router.push('/')
      })
      .catch(function (error) {
        console.log(error);
      });

    //to clear the form values after clicking sign up button
    setForm({})
  };

  return (
    <View className="w-full flex ite justify-center min-h-[67vh] px-4">

      <Text className="text-black text-2xl font-semibold text-center">
        Sign in to the Car Rental App
      </Text>

      <FormField
        title="Email"
        value={form.email}
        placeHolder="Email"
        handleChangeText={(e) => setForm({ ...form, email: e })}
        containerStyles="mt-7"
        keyBoardType="email-address"
      />

      <FormField
        title="Password"
        value={form.password}
        placeHolder="Password"
        handleChangeText={(e) => setForm({ ...form, password: e })}
        containerStyles="mt-7"
      />

      <CustomButton
        title="Sign In"
        handlePress={handleSignIn}
        containerStyles="w-full mt-7"
      />

      <View className="justify-center items-center mt-6">
        <Text className="text-black">
          Don't have an account?  <Link href="/sign-up" className="text-[#1E90FF] underline">Sign Up</Link>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;
