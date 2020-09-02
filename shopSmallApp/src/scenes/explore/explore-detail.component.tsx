import React, {useRef} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    StatusBar,
    Platform,
} from 'react-native';
import HeaderImageScrollView, {
    TriggeringView,
} from 'react-native-image-header-scroll-view';

import {SafeAreaLayout} from '../../components/safe-area-layout.component';
import * as Animatable from 'react-native-animatable';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import ContentView from "./explore-detail";

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

const CardItemDetailScreen = ({navigation, route}): React.ReactElement => {

    const data = route.params.markerData;
    const navTitleView = useRef(null);

    const [bookmarked, setBookmarked] = React.useState<boolean>(false);

    const BackIcon = (props) => (
        <Icon name='arrow-ios-back' {...props} />
    );

    const BookmarkIcon = (props) => (
        <Icon name='bookmark' {...props} />
    );

    const BookmarkOutlineIcon = (props) => (
        <Icon name='bookmark-outline' {...props} />
    );

    const onBookmarkActionPress = (): void => {
        setBookmarked(!bookmarked);
    };

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack}
        />
    );

    const renderBookmarkAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon}
            onPress={onBookmarkActionPress}
        />
    );

    return (
        <SafeAreaLayout
            style={styles.container}
            insets='top'
        >
            {/*<HeaderImageScrollView*/}
            {/*    maxHeight={MAX_HEIGHT}*/}
            {/*    minHeight={MIN_HEIGHT}*/}
            {/*    maxOverlayOpacity={0.6}*/}
            {/*    minOverlayOpacity={0.3}*/}
            {/*    renderHeader={() => (*/}
            {/*        <Image source={data.image} style={styles.image}/>*/}
            {/*    )}*/}
            {/*    renderForeground={() => (*/}
            {/*        <View style={styles.titleContainer}>*/}
            {/*            <Text style={styles.imageTitle}>{data.title}</Text>*/}
            {/*        </View>*/}
            {/*    )}*/}
            {/*    renderFixedForeground={() => (*/}
            {/*        <Animatable.View style={styles.navTitleView} ref={navTitleView}>*/}
            {/*            <Text style={styles.navTitle}>{data.title}</Text>*/}
            {/*        </Animatable.View>*/}
            {/*    )}*/}
            {/*>*/}
            {/*    <TriggeringView*/}
            {/*        style={styles.section}*/}
            {/*        onHide={() => navTitleView.current.fadeInUp(200)}*/}
            {/*        onDisplay={() => navTitleView.current.fadeOut(100)}>*/}
            {/*        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>*/}
            {/*            <Text style={styles.title}>Overview</Text>*/}
            {/*            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>*/}
            {/*                <FontAwesome name="star" size={16} color="#FF6347"/>*/}
            {/*                <Text style={{marginHorizontal: 2}}>{data.rating}</Text>*/}
            {/*                <Text>({data.reviews})</Text>*/}
            {/*            </View>*/}
            {/*        </View>*/}
            {/*    </TriggeringView>*/}

            {/*    <View style={[styles.section, styles.sectionLarge]}>*/}
            {/*        <Text style={styles.sectionContent}>{data.description}</Text>*/}
            {/*    </View>*/}

            {/*    <View style={styles.section}>*/}
            {/*        <View style={styles.categories}>*/}
            {/*            {data.categories.map((category, index) => (*/}
            {/*                <View style={styles.categoryContainer} key={index}>*/}
            {/*                    <FontAwesome name="tag" size={16} color="#fff"/>*/}
            {/*                    <Text style={styles.category}>{category}</Text>*/}
            {/*                </View>*/}
            {/*            ))}*/}
            {/*        </View>*/}
            {/*    </View>*/}

            {/*    <View style={[styles.section, {height: 250}]}>*/}
            {/*        <MapView*/}
            {/*            provider={PROVIDER_GOOGLE}*/}
            {/*            style={{flex: 1}}*/}
            {/*            region={{*/}
            {/*                latitude: data.coordinate.latitude,*/}
            {/*                longitude: data.coordinate.longitude,*/}
            {/*                latitudeDelta: 0.00864195044303443,*/}
            {/*                longitudeDelta: 0.000142817690068,*/}
            {/*            }}>*/}
            {/*            <Marker*/}
            {/*                coordinate={data.coordinate}*/}
            {/*                image={require('../../assets/images/map_marker.png')}*/}
            {/*            />*/}
            {/*        </MapView>*/}
            {/*    </View>*/}

            {/*</HeaderImageScrollView>*/}

            <TopNavigation
                title='Product Details'
                leftControl={renderBackAction()}
                rightControls={[renderBookmarkAction()]}
            />
            <ContentView/>
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