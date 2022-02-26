
import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tableview: {
        flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'
    },
    divstyle: {
        display: 'flex'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content'
    },
    inputView: {
        backgroundColor: "#808080",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#808080",
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    dataWrapper: { marginTop: 10 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    elementContainer: {
        marginTop: 8,
    },
    title: {
        fontSize: 18,
    },
    input: {
        height: 40,
        margin: 12,
        width: 40,
        borderWidth: 0,
        padding: 10,
    },
    safeareacontainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});