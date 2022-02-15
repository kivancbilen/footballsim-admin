import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { createAttribute, getAttributes } from '../services/attribute';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { styles } from '../style/styles';
import { PositionRelationship } from '../interfaces/positionRelationship';

function CreatePositionRelationshipScreen() {
    const [positionrels, setData] = React.useState<PositionRelationship[]>([]);
    const state = {
        tableHead: ['id', 'position1Id', 'position2Id']
    };
    useEffect(() => {
        getPositionRelationships().then(resp => {
            setData(resp['message']);
        });
    }, []);

    return (

        <View style={styles.tableview}>
            <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={positionrels.map(x => ({ 'id': x.id, 'position1Id': x.position1Id, 'position2Id': x.position2Id }))
                        .map(y => Object.entries(y).map(x => x[1]))} textStyle={styles.text} />
                </Table>
            </ScrollView>
        </View>
    );
}

export default CreatePositionRelationshipScreen;


