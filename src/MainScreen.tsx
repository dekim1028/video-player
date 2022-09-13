import React, { useRef, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View
} from 'react-native';
import Video from 'react-native-video';

const MainScreen = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [rate, setRate] = useState(1);
    const videoRef = useRef<Video>(null);

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
                ref={videoRef}
                source={{ uri: `${url}?token=${playToken}` }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
                paused={isPaused}
                rate={rate}
                ignoreSilentSwitch="ignore"
                onProgress={(e) => setCurrentTime(e.currentTime)}
            />
            <Text>현재 : {Math.floor(currentTime)}</Text>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => setIsPaused(!isPaused)}
            >
                <Text>{isPaused ? '재생' : '일시정지'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => {
                    if (videoRef.current) {
                        videoRef.current.seek(currentTime + 10);
                    }
                }}
            >
                <Text>10초 앞으로</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => {
                    if (videoRef.current) {
                        videoRef.current.seek(currentTime - 10);
                    }
                }}
            >
                <Text>10초 뒤로</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => setRate(1)}
            >
                <Text>1 배속</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => setRate(2)}
            >
                <Text>2 배속</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => {
                    if (videoRef.current) {
                        videoRef.current.presentFullscreenPlayer();
                    }
                }}
            >
                <Text>전체 화면</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        marginVertical: 5,
        padding: 10,
        backgroundColor: 'yellow'
    }
});

export default MainScreen;
