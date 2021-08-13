export default function authHeader(headers) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return {
            ...headers,
            'Authorization': 'Bearer ' + user.accessToken,
        }
    }
    else return headers;
}