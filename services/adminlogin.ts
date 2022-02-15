async function fetchApiCall(adminlogin: AdminLogin) {

    const response = await fetch('https://n7rw9y9h86.execute-api.us-east-1.amazonaws.com/dev/login', {
        'method': 'POST',
        body: JSON.stringify(adminlogin),
    });
    return response.json();
}

export default fetchApiCall;