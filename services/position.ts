import axios from 'axios';
import { Position } from '../interfaces/position';

export async function getPositions() {

    const response = await fetch('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/positions', {
        'method': 'GET'
    });
    return response.json();
}

export async function createPosition(newPosition: Position) {

    return await axios.post('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/position',
        {
            'name': newPosition.name,
            'default': newPosition.default
        });
}

