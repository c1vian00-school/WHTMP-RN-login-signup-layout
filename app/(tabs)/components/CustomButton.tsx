import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import styles from "../styles";

interface CustomButton {
    title: string;
    onPress: () => void;
    textStyle?: TextStyle;
}

export default function CustomButton({ title, onPress, textStyle }: CustomButton) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <LinearGradient
                colors={["#FFC107", "#FF9800"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.customButton}
            >
                <Text style={[styles.customButtonText, textStyle]}>{title} <AntDesign name="arrowright" size={24} color="white" /></Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
