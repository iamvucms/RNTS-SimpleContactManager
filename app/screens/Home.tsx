import React from 'react'
import { StyleSheet, View } from 'react-native'
import List from '../components/List'
const Home = () => {
    return (
        <View style={styles.container}>
            <List title="Contacts List" limit={false} />
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative'
    }
})
