import {RestliClient} from "linkedin-api-client"
import { config } from "dotenv"
import axios from "axios"
config()
const restliClient = new RestliClient()
//get my user info
restliClient
  .get({
    resourcePath: '/userinfo',
    accessToken: process.env.THREE_LEGGED_TOKEN,
  })
  .then((response) => {
    const profile = response.data
    console.log("got user data-",profile)
    createSimplePost(profile.sub,"happy new year")
    })
  .catch((error) => {
    console.error(error) 
  })

function  createSimplePost(userId:string,text:string){
  const url = 'https://api.linkedin.com/v2/ugcPosts';
  const bearerToken = process.env.THREE_LEGGED_TOKEN
  
  const headers = {
    'Content-Type': 'application/json',
    'X-Restli-Protocol-Version': '2.0.0',
    'Authorization': `Bearer ${bearerToken}`,
  };
  const data = {
    "author": `urn:li:person:${userId}`,
    "lifecycleState": "PUBLISHED",
    "specificContent": {
      "com.linkedin.ugc.ShareContent": {
        "shareCommentary": {
          "text": text
        },
        "shareMediaCategory": "NONE"
      }
    },
    "visibility": {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
    }
  };
  
  axios.post(url, data, { headers })
    .then(response => {
      console.log('LinkedIn API response:', response.data);
    })
    .catch(error => {
      console.error('Error making LinkedIn API request:', error);
    });
}
