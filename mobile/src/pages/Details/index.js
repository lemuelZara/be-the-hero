import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import { Linking } from 'react-native'

import style from './style'
import logoImg from '../../assets/logo.png'

export const Details = () => {
    const navigation = useNavigation()
    const message = 'Olá APAD, estou entrando em contato com você!'

    const navigateBack = () => {
        navigation.goBack()
    }

    const sendMail = () => {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro atropelado',
            recipients: ['lemuel_zara@outlook.com'],
            body: message
        })
    }

    const sendWhatsapp = () => {
        Linking.openURL(`whatsapp://send?phone=5517997876822&text=${message}`)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={[style.incidentProp, { marginTop: 0 }]}>ONG:</Text>
                <Text style={style.incidentValue}>APAD</Text>

                <Text style={style.incidentProp}>CASO:</Text>
                <Text style={style.incidentValue}>Caso 1</Text>

                <Text style={style.incidentProp}>VALOR:</Text>
                <Text style={style.incidentValue}>120</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={style.heroDescription}>Entre em contato:</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}