import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topArt: {
        width: "100%",
        height: 250,
        position: "absolute",
        top: 0,
        right: 0,
    },
    backButton: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 40,
        opacity: 0.5
    },
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        marginTop: 150,
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 10
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
        opacity: 0.4
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 5,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    textInput: {
        flex: 1,
        height: 50,
        fontWeight: '900',
        fontSize: 16,
        paddingLeft: 15
    },
    inputIcon: {
        fontSize: 20,
        fontWeight: "900"
    },
    textInputFocused: {
        elevation: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
    },
    toggleButton: {
        padding: 0
    },
    toggleText: {
        fontSize: 12,
        opacity: 0.3,
        fontWeight: "900"
    },
    forgotPasswordText: {
        alignSelf: "flex-end",
        marginTop: 10,
        fontSize: 12,
        color: "#FF9800",
        fontWeight: "900",
    },
    customButton: {
        marginTop: 30,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: "center",
        elevation: 5,
        width: "50%",
        alignSelf: "flex-end"
    },
    customButtonText: {
        fontSize: 18,
        fontWeight: "900",
        color: "#fff",
        textAlign: "center",
    },
    bottomTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginBottom: 10
    },
    bottomText: {
        fontSize: 16,
        fontWeight: "500",
        opacity: 0.5
    },
    signUpText: {
        fontSize: 16,
        fontWeight: "900",
        color: "#FF9800",
    },
});

export default styles;
