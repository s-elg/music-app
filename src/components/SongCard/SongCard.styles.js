import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },

    image: {
        width: 122,
        height: 126,
        borderRadius: 56,
    },

    inner_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 27,
    },

    content_container: {
        flexDirection: 'row',
    },

    info_container: {
        flexDirection: 'row',
        flex: 1,
    },

    year: {
        fontSize: 12,
        marginLeft: 10,
        color: 'gray',
        fontWeight: 'bold'
    },

    soldout_container: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 5,
        borderRadius: 6,
    },

    soldout_title: {
        color: 'red'
    }

})