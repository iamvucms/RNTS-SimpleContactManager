import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { navigation } from '../../../rootNavigation'
import ListItem, { ListItemProps } from './ListItem'
interface ListProps {
    title: 'Contacts List' | 'People List',
    limit: number | false
}
const index = ({ title, limit }: ListProps) => {
    const list: ListItemProps[] = [
        {
            id: 1,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        },
        {
            id: 2,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        },
        {
            id: 3,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 4,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 5,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 6,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 7,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 8,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 9,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 10,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 11,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 12,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }, {
            id: 13,
            avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            name: 'Vucms',
            phone: '0123456789',
            email: 'vuzero007@gmail.com',
            mobile: '000111222555',
            city: 'Da Nang',
            zipcode: '550000',
            district: 'Hoa Vang',
            street: '123 ABC',
        }
    ]
    const [myContacts, setMyContacts] = useState(list)
    const onPressAddContactHandler = (): void => {
        navigation.navigate('AddContact', {
            setMyContacts,
            myContacts
        })
    }
    let displayContacts;
    if (!limit) displayContacts = [...myContacts]
    else displayContacts = [...myContacts].splice(0, limit);
    return (
        <View style={styles.container}>
            {console.log("render home")}
            <View style={styles.titleWrapper}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 24
                }}>{title}</Text>
            </View>
            <ScrollView
                scrollEventThrottle={70}
                bounces={false}
                style={styles.listItemsWrapper}>
                {displayContacts.map((contact, index) => (
                    <ListItem
                        key={index}
                        email={contact.email}
                        city={contact.city}
                        district={contact.district}
                        street={contact.street}
                        zipcode={contact.zipcode}
                        mobile={contact.mobile}
                        avatar_url={contact.avatar_url}
                        name={contact.name}
                        phone={contact.phone}
                        id={contact.id}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity onPress={onPressAddContactHandler} style={styles.addingIconWrapper}>
                <Ionicons name="ios-add" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default index
const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    titleWrapper: {
        height: 44 + 50,
        paddingTop: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    listItemsWrapper: {
        height: SCREEN_HEIGHT - 94,
    },
    addingIconWrapper: {
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        right: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    }
})
