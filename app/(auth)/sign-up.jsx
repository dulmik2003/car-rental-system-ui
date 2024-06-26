import { Text, View } from 'react-native'
import { useState } from 'react'
import { Link } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';

const signUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = () => {
    console.log(form);

    axios.post('http://192.168.1.10:8088/api/v1/auth/register', form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    //to clear the form values after clicking sign up button
    setForm({})
  };

  return (
    <View className="w-full justify-center min-h-[80vh] px-4">
      <Text className="text-black text-center text-2xl font-semibold">
        Sign up to the Car Rental App
      </Text>

      <View className="flex-row justify-between">
        <FormField
          title="First Name"
          placeHolder="First Name"
          handleChangeText={(e) => setForm({ ...form, firstName: e })}
          containerStyles="mt-7 w-[45%]"
          value={form.firstName}
        />

        <FormField
          title="Last Name"
          placeHolder="Last Name"
          handleChangeText={(e) => setForm({ ...form, lastName: e })}
          containerStyles="mt-7 w-[45%]"
          value={form.lastName}
        />
      </View>

      <FormField
        title="Email"
        placeHolder="Email"
        containerStyles="mt-7"
        handleChangeText={(e) => setForm({ ...form, email: e })}
        keyBoardType="email-address"
        value={form.email}
      />

      <FormField
        title="Password"
        containerStyles="mt-7"
        placeHolder="Password"
        handleChangeText={(e) => setForm({ ...form, password: e })}
        value={form.password}
      />

      <CustomButton
        title="Sign Up"
        containerStyles="mt-7"
        isLoading={isSubmitting}
        handlePress={handleSignUp}
      />

      <View className="justify-center items-center mt-6">
        <Text className="text-black">
          Have an account already?  <Link href="/sign-in" className="text-[#1E90FF] underline">Sign In</Link>
        </Text>
      </View>
    </View>
  )
}

export default signUp