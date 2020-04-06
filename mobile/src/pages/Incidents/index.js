import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import style from './style'
import logoImg from '../../assets/logo.png'

export const Incident = () => {
    const navigation = useNavigation()

    const navigateToDetail = () => {
        navigation.navigate('Details')
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={style.incidentList}
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={style.incident}>
                        <Text style={style.incidentProp}>ONG:</Text>
                        <Text style={style.incidentValue}>APAD</Text>

                        <Text style={style.incidentProp}>CASO:</Text>
                        <Text style={style.incidentValue}>Caso 1</Text>

                        <Text style={style.incidentProp}>VALOR:</Text>
                        <Text style={style.incidentValue}>120</Text>

                        <TouchableOpacity style={style.detailsButton} onPress={navigateToDetail}>
                            <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}