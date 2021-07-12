const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("OwO, what's this?")
//     // res.send("What's popping?")
//     res.send("Did you ever hear the tragedy of Darth Plagueis the Wise?")
// })
app.get('/', (req, res) => {
    console.log("Home")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit`)
})

app.post('/cats', (req, res) => {
    res.send('Oi Bruv')
})

app.get('/cats', (req, res) => {
    console.log("Meow")
})

app.get('/dogs', (req, res) => {
    console.log("Bork")
})

app.get('*', (req, res) => {
    res.send(`I don't know about that chief`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched')
    }
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
})