fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("RESPONSE", res)
        return res.json()
    })
    .then(data => {
        console.log("DATA PARSED...")
        console.log(data.ticker.price)
    })
    .catch(e => {
        console.log("oh no", e)
    })