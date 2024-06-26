import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const Authprovider = ({ children }) => {
    // const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        isLogedIn();
    }, []);

    const isLogedIn = async () => {
        try {
            let userToken = await AsyncStorage.getItem("userToken");
            setUserToken(userToken);
        } catch (error) {
            console.log(`isLogedIn error ${error}`);
        }
    }



    return (
        <AuthContext.Provider value={{ setUserToken, userToken }} >
            {children}
        </AuthContext.Provider>
    )
}