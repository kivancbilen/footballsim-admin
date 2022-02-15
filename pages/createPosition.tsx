import _default from '@react-navigation/native-stack/lib/typescript/src/navigators/createNativeStackNavigator';
import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { Table, Rows, Row, TableWrapper, Cell } from 'react-native-table-component';
import { Position } from '../interfaces/position';
import { createPosition, getPositions } from '../services/position';
import { styles } from '../style/styles';

function CreatePositionScreen() {
    const [positions, setData] = React.useState<Position[]>([]);
    const [isSelected, setSelection] = React.useState(false);
    const [positionname, setPositionName] = React.useState('');
    const countRef = useRef(0);
    const state = {
        tableHead: ['id', 'name', 'default']
    };
    const element = (rowdata: any | undefined) => (


        <CheckBox
            center
            checked={getRowData(rowdata)}
        />
    );

    useEffect(() => {
        getPositions().then(resp => {
            setData(resp['message']);
            console.log(positions);
            countRef.current++;
        });
    }, []);
    return (
        <View style={styles.tableview}>
            <div style={{display:'flex'}}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Position Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(positionname) => setPositionName(positionname)}
                />
                <CheckBox
                    center
                    title="Default"
                    checked={isSelected}
                    onPress={() => setSelection(!isSelected)}
                />
            </div>
            <TouchableOpacity style={styles.loginBtn}
                onPress={async () => {
                    await createPosition(new Position(positionname, isSelected));
                    getPositions().then(resp => {
                        setData(resp['message']);
                        countRef.current++;
                    });
                }}>
                <Text>Create Position</Text>
            </TouchableOpacity>

            <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    {/* <Rows data={positions.map(x => ({ 'id': x.id, 'name': x.name, 'default': x._default })).map(y => Object.entries(y).map(x => x[1]))} textStyle={styles.text} /> */}
                    {
                        getProcessedData(positions).map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (

                                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
            </ScrollView>
        </View>
    );
}

export default CreatePositionScreen;

function getProcessedData(positions: Position[]) {
    return positions.map(x => ({ 'id': x.id, 'name': x.name, 'default': x.default })).map(y => Object.entries(y).map(x => x[1]));
}


function getRowData(rowdata: any): boolean | undefined {
    return rowdata;
}

