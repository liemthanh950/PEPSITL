import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity,StatusBar } from 'react-native';
import React from 'react';
import images from '../constants/image'
import styles from './style';

interface subNavigation {
	navigate: (where: string, params?: string) => void;
}

interface typeProps {
	navigation: subNavigation;
}


const handleNavigation = (myEvent: subNavigation) => {
	myEvent.navigate("InforScreen");
}
const index = (prop: typeProps) => {
	const { navigation } = prop
	return (
		<ImageBackground source={images.bg} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
			<Image source={images.nav} style={styles.nav_style} />
			<Image source={images.textHome} style={styles.text_home_style} />
			<Image source={images.rewardHome} style={styles.reward_home_style} />
			<TouchableOpacity onPress={() => handleNavigation(navigation)}>
				<Image source={images.btnHome} style={styles.btn_home_style} />
			</TouchableOpacity>

		</ImageBackground>
	);
};

export default index;

