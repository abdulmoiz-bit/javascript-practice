/*
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('we can only talk on google')
        }
    })
}
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('processing Request')
        resolve(`Extra information + ${response}`)
    })
}

async function doWork() {
    try {
        const response = await makeRequest('Google')
        console.log('Response Recieved')
        const processResponse = await processRequest(response)
        console.log('processedRequest')
    } catch (err) {
        console.log(err)
    }   
}

doWork()

// THROUGH PROMISE

makeRequest().then((response) => {
    console.log('Request Recieved')
    return processRequest(response)
}).then((processResponse) => {
    console.log(processResponse)
}).catch((error) => {
    console.log(error)

})

*/




