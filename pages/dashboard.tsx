import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { MainRoutes } from '../routing/routes';
import { MainNavigationProp } from '../routing/types';


type DashboardScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Login>
}
function DashboardScreen({ navigation }: DashboardScreenProps): React.ReactElement {
    return (
        <Grid>
            <Col>
                <Row>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate(MainRoutes.CreatePlayer)}>
                        <Text>Create Player</Text>
                    </TouchableOpacity>

                </Row>
                <Row>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate(MainRoutes.CreateAttribute)}>
                        <Text>Create Attribute</Text>
                    </TouchableOpacity>
                </Row>
            </Col>
            <Col>
                <Row>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate(MainRoutes.CreatePosition)}>
                        <Text>Create Position</Text>
                    </TouchableOpacity>
                </Row>
                <Row>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate(MainRoutes.CreatePositionRelationship)}>
                        <Text>Create Position Relationship</Text>
                    </TouchableOpacity>
                </Row>
            </Col>
            <Col>
                <Row>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate(MainRoutes.CreatePersonality)}>
                        <Text>Create Personality</Text>
                    </TouchableOpacity>
                </Row>
                <Row>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate(MainRoutes.CreatePersonalityRelationship)}>
                        <Text>Create Personality Relationship</Text>
                    </TouchableOpacity>
                </Row>
            </Col>
        </Grid>
    );
}

export default DashboardScreen;


const styles = StyleSheet.create({
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#808080",
    },
});
