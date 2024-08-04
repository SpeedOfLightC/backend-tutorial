
require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
const port = 4000

const githubData = {
    "login": "SpeedOfLightC",
    "id": 150227155,
    "node_id": "U_kgDOCPRI0w",
    "avatar_url": "https://avatars.githubusercontent.com/u/150227155?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SpeedOfLightC",
    "html_url": "https://github.com/SpeedOfLightC",
    "followers_url": "https://api.github.com/users/SpeedOfLightC/followers",
    "following_url": "https://api.github.com/users/SpeedOfLightC/following{/other_user}",
    "gists_url": "https://api.github.com/users/SpeedOfLightC/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SpeedOfLightC/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SpeedOfLightC/subscriptions",
    "organizations_url": "https://api.github.com/users/SpeedOfLightC/orgs",
    "repos_url": "https://api.github.com/users/SpeedOfLightC/repos",
    "events_url": "https://api.github.com/users/SpeedOfLightC/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SpeedOfLightC/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Arnab Ghosh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Final Year student of Information Technology\r\n",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-11-08T07:07:38Z",
    "updated_at": "2024-08-03T10:45:47Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("arnabghosh.twitter.com")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login at twitter</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Code With Arnab</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

// have to restart the server to see the changes