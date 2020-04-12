import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListItemProps } from 'app/components/List/ListItem';
import { RootStackParamList } from 'app/navigations/HomeStack';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
export interface ContactDetailRouteParams {
    contact: ListItemProps,
    preImagePosition: {
        x: number,
        y: number,
        width: number,
        height: number
    }
}
type ContactDetailRouteProp = RouteProp<RootStackParamList, 'ContactDetail'>;
type ContactDetailNavigationProp = StackNavigationProp<
    RootStackParamList,
    'ContactDetail'
>;

type ContactDetailProps = {
    route: ContactDetailRouteProp;
    navigation: ContactDetailNavigationProp;
};
const ContactDetail = ({ navigation, route }: ContactDetailProps): JSX.Element => {
    const [isAnimating, setisAnimating] = useState(true)
    const { contact, preImagePosition } = route.params
    const positionX = useRef<Animated.Value>(new Animated.Value(preImagePosition.x))
    const positionY = useRef<Animated.Value>(new Animated.Value(preImagePosition.y))
    const preWidth = useRef<Animated.Value>(new Animated.Value(preImagePosition.width))
    const preHeight = useRef<Animated.Value>(new Animated.Value(preImagePosition.height))
    const preBorderRadius = useRef<Animated.Value>(new Animated.Value(50))
    const contentOpacity = useRef<Animated.Value>(new Animated.Value(0))
    useEffect(() => {
        Animate(contentOpacity, preBorderRadius, positionX, positionY, preWidth, preHeight, setisAnimating);
        return () => {

        }
    }, [])
    const onPressGoBackHandler = (): void => {
        setisAnimating(true)
        AnimateBack(contentOpacity, preBorderRadius, navigation, positionX, preImagePosition, setisAnimating, positionY, preWidth, preHeight);
    }
    return (
        <View style={styles.container}>
            <Animated.View style={{
                overflow: 'hidden',
                width: preWidth.current,
                height: preHeight.current,
                top: positionY.current,
                left: positionX.current,
                borderRadius: preBorderRadius.current,
                position: isAnimating ? 'absolute' : 'relative',
            }}>
                <ImageBackground style={{
                    ...styles.imageBg,
                }}
                    resizeMode="cover"
                    source={{ uri: contact.avatar_url }}>
                    <Animated.View style={{
                        opacity: contentOpacity.current
                    }}>
                        <LinearGradient style={{ ...styles.navigationBar }} colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.1)']} >
                            <TouchableOpacity
                                onPress={onPressGoBackHandler}
                                style={styles.btnOption}>
                                <Ionicons name="ios-arrow-back" size={30} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.leftOptionsWrapper}>
                                <TouchableOpacity style={styles.btnLeftOption}>
                                    <Ionicons name="ios-create" size={24} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnLeftOption}>
                                    <Ionicons name="ios-trash" size={24} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnLeftOption}>
                                    <Ionicons name="ios-menu" size={24} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </Animated.View>
                    <Animated.View style={{
                        ...styles.nameWrapper,
                        opacity: contentOpacity.current
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: '#fff',
                            fontSize: 30
                        }}>{contact.name}</Text>
                    </Animated.View>
                </ImageBackground>
            </Animated.View>
            <Animated.View style={{
                ...styles.infosWrapper,
                opacity: contentOpacity.current
            }}>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-home" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.phone}</Text>
                </View>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-call" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.mobile}</Text>
                </View>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-mail" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.email}</Text>
                </View>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-car" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.street}</Text>
                </View>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-business" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.district}</Text>
                </View>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-map" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.city}</Text>
                </View>
                <View style={styles.infoLine}>
                    <View style={styles.iconWrapper}>
                        <Ionicons name="ios-code" size={30} color="#333" />
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: '500'
                    }}>{contact.phone}</Text>
                </View>
            </Animated.View>
        </View>
    )
}

export default ContactDetail
const SCREEN_WIDTH: number = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    navigationBar: {
        height: 94,
        paddingTop: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    imageBg: {
        width: '100%',
        height: '100%'
    },
    btnOption: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnLeftOption: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    leftOptionsWrapper: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameWrapper: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    infosWrapper: {
        padding: 15
    },
    infoLine: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5
    },
    iconWrapper: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
function AnimateBack(contentOpacity: React.MutableRefObject<Animated.Value>, preBorderRadius: React.MutableRefObject<Animated.Value>, navigation: StackNavigationProp<RootStackParamList, "ContactDetail">, positionX: React.MutableRefObject<Animated.Value>, preImagePosition: { x: number; y: number; width: number; height: number; }, setisAnimating: React.Dispatch<React.SetStateAction<boolean>>, positionY: React.MutableRefObject<Animated.Value>, preWidth: React.MutableRefObject<Animated.Value>, preHeight: React.MutableRefObject<Animated.Value>) {
    contentOpacity.current.setValue(0)
    Animated.timing(preBorderRadius.current, {
        toValue: 50,
        duration: 400,
        useNativeDriver: false
    }).start();
    Animated.timing(preBorderRadius.current, {
        toValue: 50,
        duration: 400,
        useNativeDriver: false
    }).start(() => {
        navigation.goBack();
    });
    Animated.timing(positionX.current, {
        toValue: preImagePosition.x,
        duration: 400,
        useNativeDriver: false
    }).start(() => setisAnimating(false));
    Animated.timing(positionY.current, {
        toValue: preImagePosition.y,
        duration: 400,
        useNativeDriver: false
    }).start();
    Animated.timing(preWidth.current, {
        toValue: preImagePosition.width,
        duration: 400,
        useNativeDriver: false
    }).start();
    Animated.timing(preHeight.current, {
        toValue: preImagePosition.height,
        duration: 400,
        useNativeDriver: false
    }).start();
}

function Animate(contentOpacity: React.MutableRefObject<Animated.Value>,
    positionX: React.MutableRefObject<Animated.Value>,
    preBorderRadius: React.MutableRefObject<Animated.Value>,
    positionY: React.MutableRefObject<Animated.Value>,
    preWidth: React.MutableRefObject<Animated.Value>,
    preHeight: React.MutableRefObject<Animated.Value>,
    setisAnimating: React.Dispatch<React.SetStateAction<boolean>>) {
    Animated.timing(preBorderRadius.current, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
    }).start(() => {
        setisAnimating(false)
        contentOpacity.current.setValue(1)
    });
    Animated.timing(positionX.current, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
    }).start(() => setisAnimating(false));
    Animated.timing(positionY.current, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
    }).start();
    Animated.timing(preWidth.current, {
        toValue: SCREEN_WIDTH,
        duration: 400,
        useNativeDriver: false
    }).start();
    Animated.timing(preHeight.current, {
        toValue: 250,
        duration: 400,
        useNativeDriver: false
    }).start();
}

