import axios from 'axios';
import { PersonalityRelationship } from '../interfaces/PersonalityRelationship';

export async function getPersonalityRelationships() {

    const response = await fetch('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/personalityrelationships', {
        'method': 'GET'
    });
    return response.json();
}

export async function createPersonalityRelationships(newPersonalityRels: PersonalityRelationship[]) {

    return await axios.post('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/personalityrelationships', newPersonalityRels);
}

