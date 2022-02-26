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
import { PersonalityRelationship } from '../interfaces/personalityRelationship';
import { Personality } from '../interfaces/personality';
import { createPersonalityRelationships, getPersonalityRelationships } from '../services/personalityRelationship';
import { getPersonalities } from '../services/personality';

function CreatePersonalityRelationshipScreen() {
    const [personalityrels, setData] = React.useState<PersonalityRelationship[]>([]);
    const [personalities, setPersonalityData] = React.useState<Personality[]>([]);
    const [relations, setRelations] = React.useState<any[]>([]);
    const [number, onChangeNumber] = React.useState('0');

    const Item: any = Picker.Item;
    const countRef = useRef(0);
    const [modalVisible, setModalVisible] = React.useState(false);
    const element = (rowdata: string | undefined, rowindex: number, colindex: number) => (

        <TextInput
            style={styles.input}
            onChangeText={
                newval => {


                    onChangeNumber(newval);
                    if (newval !== '' && parseInt(newval, 10) !== NaN) {
                        let rels: any[] = JSON.parse(JSON.stringify(relations));
                        rels[rowindex][personalities[colindex - 1].name] = parseInt(newval, 10);
                        setRelations(rels);
                    }
                }
            }
            value={rowdata}
            placeholder=""
            keyboardType="numeric"
        />
    );
    const state = {
        tableHead: GetPersonalityTableHeads(personalities)
    };
    useEffect(() => {
        getPersonalityRelationships().then(resp1 => {

            setData(resp1['message']);
            countRef.current++;
            getPersonalities().then(resp2 => {
                setPersonalityData(resp2['message']);
                let objects: any[] = getRelationsFromPeronalities(resp2['message'] as Personality[], resp1['message'] as PersonalityRelationship[]);
                setRelations(objects);
            });
        });

    }, []);

    return (

        <View style={styles.container2}>
            <ScrollView
                horizontal
                bounces={false}
            >
                <ScrollView style={styles.dataWrapper} bounces={false}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {/* <Rows data={getPositionRelData(positionrels)} textStyle={styles.text} /> */}
                        {
                            getPersonalityRelData(relations).map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => (

                                            <Cell key={cellIndex} data={cellIndex !== 0 ? element(cellData, index, cellIndex) : cellData} textStyle={styles.text} />
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </ScrollView>
            </ScrollView>
            <TouchableOpacity style={styles.loginBtn}
                onPress={async () => {
                    const persrelsnew = wrapupRelations(relations,personalities);
                    //console.log(persrelsnew);
                    await createPersonalityRelationships(persrelsnew);
                    getPersonalityRelationships().then(resp1 => {
                        setData(resp1['message']);
                        let objects: any[] = getRelationsFromPeronalities(personalities, resp1['message'] as PersonalityRelationship[]);
                        setRelations(objects);
                    });
                }}>
                <Text>Update Position Relationships</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreatePersonalityRelationshipScreen;




function getRelationsFromPeronalities(personalities: Personality[], personalityrels: PersonalityRelationship[]) {
    let objects: any[] = [];
    personalities.forEach((personality1, i) => {
        let obj: any = {
            'Personality': personality1.name
        };

        personalities.forEach((personality2, j) => {
            obj[personality2.name] = personalityrels.find(x => x.personality1Id === personality1.id && x.personality2Id === personality2.id)?.harmony ?? '';
        });
        objects.push(obj);
    });
    return objects;
}

function GetPersonalityTableHeads(personalities: Personality[]) {
    let res = ['Personality'];
    if (personalities != null && personalities.length > 0) {
        personalities.forEach(per => {
            res.push(per.name);
        });
    }
    return res;
}

function getPersonalityRelData(rels: any[]): any[][] {
    return rels.map(y => Object.entries(y).map(x => x[1]));
}

function wrapupRelations(relations: any[], personalities: Personality[]): PersonalityRelationship[] {
    let res: PersonalityRelationship[] = [];
    for (const rel of relations) {
        let objs: PersonalityRelationship[] = [];
        const pers1id = personalities.find(x => x.name === rel['Personality'])?.id;
        if (pers1id != null) {
            Object.keys(rel).forEach(rk => {
                if (rk !== 'Personality') {
                    const pers2id = personalities.find(x => x.name === rk)?.id;
                    if (pers2id != null && rel[rk] != null && rel[rk] !== '') {
                        objs.push(new PersonalityRelationship(pers1id, pers2id, rel[rk]));
                    }
                }
            });
        }
        res = res.concat(objs);
    }
    return res;
}

