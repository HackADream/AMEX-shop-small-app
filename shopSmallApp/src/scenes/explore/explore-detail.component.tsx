import React, {useRef} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform, Linking,
} from 'react-native';

import Share from "react-native-share";

import {SafeAreaLayout} from '../../components/safe-area-layout.component';
import {
    Icon,
    Input,
    MenuItem,
    OverflowMenu,
    TextProps,
    TopNavigation,
    TopNavigationAction
} from "@ui-kitten/components";
import ContentView from "./explore-detail";

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetailScreen = ({navigation, route}): React.ReactElement => {

    const itemData = route.params.markerData;
    const [visible, setVisible] = React.useState(false);

    const BackIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const MoreIcon = (props) => (
        <Icon name='more-vertical-outline' {...props} />
    );

    const onMoreActionPress = (): void => {
        setVisible(true);
    };

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack}
        />
    );

    const renderMoreAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={MoreIcon}
            onPress={onMoreActionPress}
        />
    );

    const renderOverflowMenu = (): React.ReactElement => (
        <OverflowMenu
            anchor={renderMoreAction}
            visible={visible}
            onBackdropPress={() => setVisible(false)}
        >
            <MenuItem title='Navigation' onPress={onNavigationPress}/>
            <MenuItem title='Share' onPress={onSharePress}/>
            <MenuItem title='Save' onPress={onSavePress}/>
        </OverflowMenu>
    );

    const onNavigationPress = () => {
        setVisible(false);
        const url = "google.navigation:q=" + itemData.coordinate.latitude+ "+" + itemData.coordinate.longitude;
        Linking.openURL(url);
    };


    const myCustomShare = async() => {
        const shareOptions = {
            message: 'Our Shop Small Partner: \"' + itemData.title + "\" sincerely welcomed you to visit at " + itemData.postcode + ". There are so many offers for you to explore!",
        };

        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(ShareResponse));
        } catch(error) {
            console.log('Error => ', error);
        }
    };


    const onSharePress = () => {
        myCustomShare();
        setVisible(false);
    };

    const onSavePress = () => {
        setVisible(false);
    };

    return (
        <SafeAreaLayout
            style={styles.container}
            insets='top'
        >
            <TopNavigation
                title={itemData.title}
                accessoryLeft={renderBackAction}
                accessoryRight={renderOverflowMenu}
            />

            <ContentView data={itemData}/>
        </SafeAreaLayout>
    );
};

export default CardItemDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
    },
    name: {
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    categoryContainer: {
        flexDirection: 'row',
        backgroundColor: '#FF6347',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        paddingHorizontal: 15,
    },
    category: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 5,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
    },
    sectionLarge: {
        minHeight: 300,
    },
});