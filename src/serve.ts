import {RestliClient} from "linkedin-api-client"
  require('dotenv').config()

const restliClient = new RestliClient()

//get my user info
restliClient
  .get({
    resourcePath: '/userinfo',
    accessToken: process.env.THREE_LEGGED_TOKEN,
  })
  .then((response) => {
    const profile = response.data
    console.log(profile)
  })
  .catch((error) => {
    console.error(error)
  })

// // comment on a random post -
// const myURN= `urn:li:person:NJHtUMA1Xv`
// const postURN = 'urn:li:activity:7146564642033639424'
// restliClient.create({
//   resourcePath: `/socialActions/comments`,
//   entity: {
//     actor: myURN,
//     object:postURN,
//     message: {
//       text: 'great post!',
//     },
//   },
//   accessToken: process.env.THREE_LEGGED_TOKEN,
//   versionString: '202207'
// }).then(response => {
//   // const createdEntityId = response.createdEntityId;
//   console.log(response)
// });
