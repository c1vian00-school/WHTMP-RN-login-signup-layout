import React, { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import styles from "../styles";

type SignupScreenNavigationProp = StackNavigationProp<{ Login: undefined; Signup: undefined }>;

interface Props {
    navigation: SignupScreenNavigationProp;
}

export default function SignupView({ navigation }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.fullScreen}>

            <ImageBackground source={require("../../../assets/top-art.png")} style={styles.topArt} resizeMode="cover" />


            <AntDesign name="arrowleft" style={styles.backButton} />

            <View style={styles.container}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subTitle}>Sign up to get started.</Text>

                <CustomTextInput
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                    keyboardType="default"
                />

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

                <CustomTextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />

                <CustomButton title="SIGN UP" onPress={() => console.log("Sign Up pressed")} />
            </View>

            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signUpText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
