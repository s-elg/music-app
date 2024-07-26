import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
        flex: 1,
    },

    artist_info_container: {
        flexDirection: 'row',
        alignItems: 'baseline'
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
        height: 30,
    },

    soldout_title: {
        color: 'red'
    },

    album_title: {
        color: 'gray'

    },

    song_title: {
        fontSize: 17
    }

})