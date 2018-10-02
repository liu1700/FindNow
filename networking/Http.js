
const baseURL = 'http://192.168.0.102:8087'
const apiVersion = '/v1'
const requestURL = baseURL + apiVersion

export function BuildPost(reqBody) {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
    }
}

export default {
    URL: requestURL,
    LoginURL: requestURL + '/login',
}