import React, { useState } from "react";
import { Text, TextInput, KeyboardTypeOptions, View, TouchableOpacity } from "react-native";
import styles from "../styles";
import { AntDesign } from "@expo/vector-icons";

interface CustomTextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
}

export default function CustomTextInput({
    placeholder,
    value,
    onChangeText,
    keyboardType = "default",
    secureTextEntry = false
}: CustomTextInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={[styles.inputContainer, isFocused && styles.textInputFocused]}>

            <AntDesign
                name={
                    secureTextEntry ? "lock" : 
                        keyboardType === "email-address" ? "mail" : "user"
                }
                style={styles.inputIcon}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={!isPasswordVisible}
                style={styles.textInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />

            {secureTextEntry && (
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Text style={styles.toggleText}>
                        {isPasswordVisible ? "HIDE" : "SHOW"}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
