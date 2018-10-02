
const baseURL = 'http://192.168.0.102:8087'
const apiVersion = '/v1'
const requestURL = baseURL + apiVersion

const version = '0.0.1'
const name = 'findnow'
const content = 'techs'

export function BuildPost(reqBody) {
    return {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'FINDNOW-NAME-ID': version + name + content,
        },
        body: JSON.stringify(reqBody),
    }
}

export default {
    URL: requestURL,
    LoginURL: requestURL + '/login',
}