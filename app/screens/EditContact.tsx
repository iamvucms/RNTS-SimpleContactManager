import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TextFiled from '../components/Adding/TextField'
import { useNavigation, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigations/HomeStack'
import { StackNavigationProp } from '@react-navigation/stack'
import { ListItemProps } from '../components/List/ListItem'

export interface EditContactRouteParams {
    contact: ListItemProps,
    onModifyHandler: Function
}
type EditContactRouteProp = RouteProp<RootStackParamList, 'EditContact'>;

type EditContactNavigationProp = StackNavigationProp<
    RootStackParamList,
    'EditContact'
>;
type Props = {
    navigation: EditContactNavigationProp,
    route: EditContactRouteProp
}
const EditContact = (props: Props): JSX.Element => {
    const route = props.route
    const { contact, onModifyHandler } = route.params
    const { fnameRef, lnameRef, phoneRef,
        mobileRef, emailRef, streetRef,
        districtRef, cityRef, zipcodeRef } = useInputRefs()
    const [fname, setfname] = useState(contact.name.split(' ')[0])
    const [lname, setlname] = useState(contact.name.split(' ')[1])
    const [phone, setphone] = useState(contact.phone)
    const [mobile, setmobile] = useState(contact.mobile)
    const [email, setemail] = useState(contact.email)
    const [street, setstreet] = useState(contact.street)
    const [district, setdistrict] = useState(contact.district)
    const [city, setcity] = useState(contact.city)
    const [zipcode, setzipcode] = useState(contact.zipcode)

    const navigation = useNavigation()
    const onPressGoBackHandler = (): void => {
        navigation.goBack()
    }
    const onPressSaveHandler = (): void => {
        setTimeout(() => {
            const modifiedContact: ListItemProps = {
                id: contact.id,
                avatar_url: 'https://pbs.twimg.com/media/DXWqHuzU8AA2wVw.jpg',
                city: city,
                zipcode: zipcode,
                name: fname + ' ' + lname,
                street: street,
                district: district,
                email: email,
                mobile: mobile,
                phone: phone,
            }
            onModifyHandler(contact.index, modifiedContact)
            navigation.goBack()
            navigation.goBack()
        }, 300);
    }
    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    onPress={onPressGoBackHandler}
                    style={styles.btnOptions}>
                    <Ionicons name="ios-close" color="#fff" size={40} />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Create a new contact
                </Text>
                <TouchableOpacity
                    onPress={onPressSaveHandler}
                    style={styles.btnSave}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: "#fff"
                    }}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.addingToolWrapper}>
                <ImageBackground style={styles.cover}
                    source={require('../assets/Images/user-default-cover.png')} />
                <View style={styles.addingForm}>
                    <TextFiled
                        defaultValue={[fname, lname]}
                        inputSetStates={[setfname, setlname]}
                        refs={[fnameRef, lnameRef]}
                        placeHolder={["First Name", "Last Name"]}
                        highlightColor="red"
                        iconLabelName="ios-person" />
                    <TextFiled
                        defaultValue={[phone, mobile]}
                        inputSetStates={[setphone, setmobile]}
                        refs={[phoneRef, mobileRef]}
                        placeHolder={["Phone Number", "Mobile"]}
                        highlightColor="red"
                        iconLabelName="ios-call" />
                    <TextFiled
                        defaultValue={[email]}
                        inputSetStates={[setemail]}
                        refs={[emailRef]}
                        placeHolder="Email"
                        highlightColor="red"
                        iconLabelName="ios-mail" />
                    <TextFiled
                        defaultValue={[street, district, city, contact.zipcode]}
                        inputSetStates={[setstreet, setdistrict, setcity, setzipcode]}
                        refs={[streetRef, districtRef, cityRef, zipcodeRef]}
                        placeHolder={["Street", "District", "City", "Zip Code"]}
                        highlightColor="red"
                        iconLabelName="ios-map" />
                </View>
            </View>
        </View>
    )
}

export default EditContact
const SCREEN_WIDTH: number = Math.round(Dimensions.get("screen").width)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    navigationBar: {
        height: 94,
        paddingTop: 44,
        backgroundColor: "tomato",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10
    },
    btnOptions: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSave: {
        height: 50,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: SCREEN_WIDTH - 120,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff"
    },
    addingToolWrapper: {

    },
    cover: {
        width: SCREEN_WIDTH,
        height: 250
    },
    addingForm: {
        padding: 15
    },
    formGroup: {
        flexDirection: 'row',
        marginVertical: 5
    },
    iconLabel: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputWrapper: {
        width: SCREEN_WIDTH - 50 - 30,
        paddingRight: 10
    },
    input: {
        fontWeight: '500',
        height: 36,
        width: '100%',
        borderBottomColor: "#333",
        borderBottomWidth: 1
    }
})
function useInputRefs() {
    const fnameRef = useRef<TextInput>(null)
    const lnameRef = useRef<TextInput>(null)
    const phoneRef = useRef<TextInput>(null)
    const mobileRef = useRef<TextInput>(null)
    const emailRef = useRef<TextInput>(null)
    const streetRef = useRef<TextInput>(null)
    const districtRef = useRef<TextInput>(null)
    const cityRef = useRef<TextInput>(null)
    const zipcodeRef = useRef<TextInput>(null)
    return {
        fnameRef, lnameRef, phoneRef,
        mobileRef, emailRef, streetRef,
        districtRef, cityRef, zipcodeRef
    }
}

