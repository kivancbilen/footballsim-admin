import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert, Modal, Pressable } from 'react-native';
import { createAttribute, getAttributes } from '../services/attribute';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { styles } from '../style/styles';
import { PositionRelationship } from '../interfaces/positionRelationship';
import { createPositionRelationships, getPositionRelationships } from '../services/positionRelationship';
import { Position } from '../interfaces/position';
import { getPositions } from '../services/position';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';

function CreatePositionRelationshipScreen() {
    const [positionrels, setData] = React.useState<PositionRelationship[]>([]);
    const [positions, setPositionData] = React.useState<Position[]>([]);
    const [position1, setPosition1] = React.useState(1);
    const [position2, setPosition2] = React.useState(1);
    const Item: any = Picker.Item;
    const countRef = useRef(0);
    const [modalVisible, setModalVisible] = React.useState(false);
    const element = (rowdata: Number | undefined) => (

        <Picker
            selectedValue={rowdata}
            mode="dropdown">
            {
                <Item label={positions.find(x => x.id === rowdata)?.name} value={rowdata} />
            }
        </Picker>
    );
    const state = {
        tableHead: ['id', 'position1Id', 'position2Id']
    };
    useEffect(() => {
        getPositionRelationships().then(resp => {

            setData(resp['message']);
            countRef.current++;
        });
        getPositions().then(resp => {
            setPositionData(resp['message']);
        });
    }, []);

    return (

        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible);
                            }} style={[styles.buttonClose, { backgroundColor: 'white' }]}>
                                <Icon name={'close'} size={15} />
                            </TouchableOpacity>
                        </div>
                        <Text style={styles.modalText}>Select Positions</Text>
                        <View style={styles.elementContainer} key="Position 1">
                            <Text style={styles.title}> Position 1 </Text>
                            <Picker
                                selectedValue={position1}
                                onValueChange={(v) => setPosition1(v)}
                                mode="dropdown">
                                {
                                    positions.map((cellData, cellIndex) => (

                                        <Item label={cellData.id + '-' + cellData.name} value={cellData.id} />
                                    ))
                                }
                            </Picker>
                        </View>
                        <View style={styles.elementContainer} key="Position 2">
                            <Text style={styles.title}> Position 2 </Text>
                            <Picker
                                selectedValue={position2}
                                onValueChange={(v) => setPosition2(v)}
                                mode="dropdown">
                                {
                                    positions.map((cellData, cellIndex) => (

                                        <Item label={cellData.id + '-' + cellData.name} value={cellData.id} />
                                    ))
                                }
                            </Picker>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                const rels = JSON.parse(JSON.stringify(positionrels));
                                rels.push(new PositionRelationship(parseInt(position1.toString(), 10), parseInt(position2.toString(), 10)));
                                setData(rels);
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text>Add Line</Text>
            </TouchableOpacity>
            <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {/* <Rows data={getPositionRelData(positionrels)} textStyle={styles.text} /> */}
                    {
                        getPositionRelData(positionrels).map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (

                                        <Cell key={cellIndex} data={cellIndex !== 0 ? element(cellData) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </ScrollView>

            <TouchableOpacity style={styles.loginBtn}
                onPress={async () => {
                    await createPositionRelationships(positionrels);
                    getPositionRelationships().then(resp => {
                        setData(resp['message']);
                        countRef.current++;
                    });
                }}>
                <Text>Update Position Relationships</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreatePositionRelationshipScreen;




function getPositionRelData(positionrels: PositionRelationship[]): any[][] {
    return positionrels.map(x => ({ 'id': x.id, 'position1Id': x.position1Id, 'position2Id': x.position2Id }))
        .map(y => Object.entries(y).map(x => x[1]));
}

