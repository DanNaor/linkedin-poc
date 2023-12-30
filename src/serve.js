const { RestliClient } = require('linkedin-api-client');
require('dotenv').config()

const restliClient = new RestliClient();

restliClient.get({
  resourcePath: '/userinfo',
  accessToken: process.env.THREE_LEGGED_TOKEN,
}).then(response => {
  const profile = response.data
  console.log(profile);
}).catch(error => {
  console.error(error);
});