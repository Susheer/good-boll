import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native'
import * as theme from '../constants/theme'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Patient = ({pateint}) => {
    const id = parseInt(pateint.id)
    return(
        <View style={styles.container}>
            <Image
            
                source={{uri:pateint.profile_pic}}
                borderRadius={10}
                style={{width: 40, height: 40}} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{pateint.name}</Text>
                <Text style={styles.parentsNm}>{pateint.prents}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name="more-vert" size={30} color={theme.colors.black} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 17,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: theme.colors.white
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    },
    iconContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    parentsNm: {
        fontSize: theme.sizes.h2,
        color: theme.colors.silver
    },
})

export default Patient