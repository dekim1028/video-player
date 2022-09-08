import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Video from 'react-native-video';

const MainScreen = () => {
    const [url] = useState(
        'https://d10qaatmmd1f48.cloudfront.net/dD5wGeZdHjoS/2022/1/11/6/6/HtsvZpodLas7/media/hls/360p30/playlist.m3u8'
    );
    const [playToken] = useState(
        'eyJhbGciOiJFUzM4NCJ9.eyJhd3M6Y2hhbm5lbC1hcm4iOiJhcm46YXdzOml2czp1cy1lYXN0LTE6ODgwMDQ3NTA1Mzg5OmNoYW5uZWwvZEQ1d0dlWmRIam9TIiwiYXdzOmFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbiI6IioiLCJleHAiOjkxNjQwMzE4MTM0OTAyfQ.lpr9aV5s4shTD_Eiluf8xix7eqxOWnM5v5DWN9eK9celtjNjE5JRSqrcZbpeF66iFrrNwnVeipr7EbE7R9uAuebO7Mq4iAXCuyWyNexBqW5FFOM9QC4vXa6yEzZ4uyia'
    );

    return (
        <View style={{ flex: 1 }}>
            <Text>MainScreen</Text>
            <Video
                source={{ uri: `${url}?token=${playToken}` }}
                style={{ width: '100%', height: 200 }}
                resizeMode="none"
            />
        </View>
    );
};

export default MainScreen;
