import axios from 'axios';
import { Attribute } from '../interfaces/attribute';


export async function getAttributes() {

    const response = await fetch('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/attributes', {
        'method': 'GET'
    });
    return response.json();
}

export async function createAttribute(newAttribute: Attribute) {

    return await axios.post('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/attribute',newAttribute);
}

