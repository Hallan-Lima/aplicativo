import { extendTheme } from 'native-base';

export const Style = extendTheme({
    colors:{
        gray: {
            300: '#8D899'
        },
        blue: {
            500: '#339CFF'
        }
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    button: {
        backgroundColor: '#007BFF', // Cor do botão
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff', // Cor do texto do botão
        fontSize: 16,
        textAlign: 'center',
    },

})