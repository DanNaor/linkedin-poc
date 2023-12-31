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

// post a text share -
const myURN= `urn:li:person:NJHtUMA1Xv`
restliClient.create({
  resourcePath: `/posts`,
  entity: {
    author:myURN,
    lifecycleState:"PUBLISHED",
    ShareContent:{
      shareCommentary:{
        text:"Hello World! This is my first Share on LinkedIn!"
      }
    },
    visibility: {
      MemberNetworkVisibility:"PUBLIC"
    }
  },
  accessToken: process.env.THREE_LEGGED_TOKEN,
  versionString: '202303'
}).then(response => {
  // const createdEntityId = response.createdEntityId;
  console.log(response)
});
