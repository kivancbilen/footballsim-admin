import axios from 'axios';
import { Personality } from '../interfaces/personality';

export async function getPersonalities() {

    const response = await fetch('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/personalities', {
        'method': 'GET'
    });
    return response.json();
}

export async function createPersonality(newPersonality: Personality) {

    return await axios.post('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/personality',
        {
            'name': newPersonality.name
        });
}

