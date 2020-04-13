import React, { RefObject, useRef } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { navigation } from '../../../rootNavigation'
import { ContactDetailRouteParams } from '../../screens/ContactDetail'

export interface ListItemProps {
    id: number,
    index?: number,
    avatar_url: string,
    name: string,
    phone: string,
    email: string,
    mobile: string,
    street: string,
    zipcode: string,
    district: string,
    onDeleteHandler?: Function,
    onModifyHandler?: Function,
    city: string,
    scrollOffsetY?: RefObject<number> | undefined
}
const ListItem = ({
    id, avatar_url,
    index,
    name, phone, mobile,
    street, zipcode, district,
    city, email, onDeleteHandler,
    onModifyHandler }: ListItemProps): JSX.Element => {
    const imageRef = useRef<Image>(null)
    const onPressItemHandler = () => {
        imageRef.current?.measure((fx, fy, widthx, heightx, px, py) => {
            const transferData: ContactDetailRouteParams = {
                contact: {
                    id, index, avatar_url, name, phone, mobile,
                    street, zipcode, district,
                    city, email
                },
                onDeleteHandler: onDeleteHandler || Function,
                onModifyHandler: onModifyHandler || Function,
                preImagePosition: {
                    x: px,
                    y: py,
                    width: widthx,
                    height: heightx,
                }
            }
            navigation.navigate('ContactDetail', transferData)
        })
    }
    return (
        <TouchableOpacity onPress={onPressItemHandler} style={styles.container}>
            <Text style={{
                textAlign: 'center',
                width: 50,
                fontWeight: '600',
                fontSize: 20
            }}>{id}</Text>

            <Image
                ref={imageRef}
                style={{
                    ...styles.avatar,
                }} source={{ uri: avatar_url }} />
            <View>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 16
                }}>{name}</Text>
                <Text>{phone}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    avatar: {
        height: 64,
        width: 64,
        borderRadius: 64,
        marginRight: 10
    }
})
