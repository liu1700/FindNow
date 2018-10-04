
const baseURL = 'ws://192.168.0.102:8087/v1/realtime/'

const version = '0.0.1'
const name = 'findnow'
const content = 'techs'

var ws = {}

export function InitWS(userID, onOpen, onReceived, onError, onClose) {
    ws = new WebSocket(baseURL + userID, '', {
        headers: {
            'X-FINDNOW-NAME-ID': version + name + content
        }
    })

    ws.onopen = onOpen
    ws.onmessage = onReceived
    ws.onerror = onError
    ws.onclose = onClose
}

export function Send(data) {
    ws.send(JSON.stringify(data))
}