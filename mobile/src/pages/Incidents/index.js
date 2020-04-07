import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import style from './style'
import logoImg from '../../assets/logo.png'
import api from '../../services/api'

export const Incident = () => {
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)

    const navigation = useNavigation()

    const navigateToDetail = () => {
        navigation.navigate('Details')
    }

    useEffect(() => {
        async function loadIncidents() {
            const response = await api.get('/incidents')

            setIncidents(response.data)
            setTotal(response.headers['x-total-count'])
        }

        loadIncidents()
    }, [])

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={style.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={style.incident}>
                        <Text style={style.incidentProp}>ONG:</Text>
                        <Text style={style.incidentValue}>{incident.name}</Text>

                        <Text style={style.incidentProp}>CASO:</Text>
                        <Text style={style.incidentValue}>{incident.title}</Text>

                        <Text style={style.incidentProp}>VALOR:</Text>
                        <Text style={style.incidentValue}>
                            {Intl
                                .NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                                .format(incident.value)}
                        </Text>

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