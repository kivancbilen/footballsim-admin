import React, { useEffect } from 'react';
import { View, Text, TextInput, FlatList, SafeAreaView } from 'react-native';

import { Attribute } from '../interfaces/attribute';
import { Personality } from '../interfaces/personality';
import { Position } from '../interfaces/position';
import { getAttributes } from '../services/attribute';
import { getPersonalities } from '../services/personality';
import { getPositions } from '../services/position';
import { styles } from '../style/styles';

function CreatePlayerScreen() {
    const [positions, setPositions] = React.useState<Position[]>([]);
    const [personalities, setPersonalities] = React.useState<Personality[]>([]);
    const [attributes, setAttributes] = React.useState<Attribute[]>([]);
    const [attributevals, setAttributevalues] = React.useState<(Attribute & { rating: number })[]>([]);
    const renderItem = ({ item }) => (
        <div style={{width:'25%'}}><Text>{item.name}</Text><TextInput

            style={styles.input}
            onChangeText={newval => {
            }}
            value={item.rating.toString()}
            keyboardType="numeric" /></div>
    );
    useEffect(() => {
        getPositions().then(resp => {
            setPositions(resp['message']);
        });
        getPersonalities().then(resp => {
            setPersonalities(resp['message']);
        });
        getAttributes().then(resp => {
            setAttributes(resp['message']);
            const attrs = resp['message'] as Attribute[];
            let attrvals: (Attribute & { rating: number })[] = [];

            attrs.forEach(attr => {
                attrvals.push({
                    id: attr.id,
                    name: attr.name,
                    rating: 0
                });
            });
            setAttributevalues(attrvals);
        });
    }, []);
    return (
        <SafeAreaView style={styles.safeareacontainer}>
            {
                // attributevals.map((rowdata, index) => (
                //     <><Text>{rowdata.name}</Text><TextInput

                //         style={styles.input}
                //         onChangeText={newval => {
                //         } }
                //         value={rowdata.rating.toString()}
                //         keyboardType="numeric" /></>
                // ))
                <FlatList
                    data={attributevals}
                    renderItem={renderItem}
                    numColumns={4}
                //keyExtractor={item => item.id}
                />
            }


        </SafeAreaView>
    );
}

export default CreatePlayerScreen;