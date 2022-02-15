import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Attribute } from '../interfaces/attribute';
import { createAttribute, getAttributes } from '../services/attribute';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { styles } from '../style/styles';

function CreateAttributeScreen() {
    const [attributes, setData] = React.useState<Attribute[]>([]);
    const [attributename, setAttributename] = React.useState('');
    const countRef = useRef(0);
    const state = {
        tableHead: ['id', 'name']
    };
    useEffect(() => {
        getAttributes().then(resp => {
            setData(resp['message']);
            countRef.current++;
        });
    }, []);

    return (

        <View style={styles.tableview}>

            <TextInput
                style={styles.TextInput}
                placeholder="Attribute Name"
                placeholderTextColor="#003f5c"
                onChangeText={(attributename) => setAttributename(attributename)}
            />
            <TouchableOpacity style={styles.loginBtn}
                onPress={async () => {
                    await createAttribute(new Attribute(attributename));
                    getAttributes().then(resp => {
                        setData(resp['message']);
                        countRef.current++;
                    });
                }}>
                <Text>Create Attribute</Text>
            </TouchableOpacity>

            <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={attributes.map(x => ({ 'id': x.id, 'name': x.name })).map(y => Object.entries(y).map(x => x[1]))} textStyle={styles.text} />
                </Table>
            </ScrollView>
        </View>
    );
}

export default CreateAttributeScreen;


