import React, { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import styles from "../styles";

type LoginScreenNavigationProp = StackNavigationProp<{ Login: undefined; Signup: undefined }>;

interface Props {
    navigation: LoginScreenNavigationProp;
}

export default function LoginView({ navigation }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <View style={styles.fullScreen}>

            <ImageBackground source={require("../../../assets/top-art.png")} style={styles.topArt} resizeMode="cover" />

            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subTitle}>Please sign in to continue.</Text>

                <CustomTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <CustomTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => console.log("Forgot Password clicked")}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <CustomButton title="LOGIN" onPress={() => console.log("Login pressed")} />

            </View>

            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
