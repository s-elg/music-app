import React from "react";
import { View, Text, Image } from 'react-native';

const SongCard = (props) => {
    return (
        <View>
            <Image source = {{uri: props.song.imageUrl}}/>
            <View>
                <Text>{props.song.title}</Text>
                <View>
                    <Text>{props.song.artist}</Text>
                    <Text>{props.song.year}</Text>
                </View>
            </View>
        </View>
    )
};


export default SongCard;