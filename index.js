const dotenv = require('dotenv')
dotenv.config()

const Mastodon = require('mastodon-api')

const { CLIENT_KEY, CLIENT_SECRET, ACCESS_TOKEN, DOMAIN } = process.env
const M = new Mastodon({
  client_key: CLIENT_KEY,
  client_secret: CLIENT_SECRET,
  access_token: ACCESS_TOKEN,
  timeout_ms: 60 * 1000,
  api_url: `${DOMAIN}/api/v1`
})

// setInterval(toot, 5000)
toot()
function toot () {
  const num = Math.floor(Math.random() * 100)
  
  const params = {
    status: `This is ${num}`
  }

  M.post('/statuses', params, (error, data) => {
    if (error) {
      console.log(error)
    }
    else {
      console.log(data)
    }
  })
}