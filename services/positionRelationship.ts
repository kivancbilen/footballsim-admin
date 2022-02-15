import axios from 'axios';
import { PositionRelationship } from '../interfaces/positionRelationship';

export async function getPositionRelationships() {

    const response = await fetch('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/positionrelationships', {
        'method': 'GET'
    });
    return response.json();
}

export async function createPositionRelationships(newPositionRels: PositionRelationship[]) {

    return await axios.post('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/positionrelationships', newPositionRels);
}

