


const axios = require("axios");
const fs = require("fs");

//jonathan-major

axios
  .get("https://api.github.com/users/jonathan-major")
  .then(function(res) {
console.log(res);
   
    let arr = [];
    

    arr.push(`"picture": "${res.data.avatar_url}"`);
    arr.push(`"userName": "${res.data.login}"`);
    arr.push(`"location": "${res.data.location}"`);
    arr.push(`"profile": "${res.data.html_url}"`);
    arr.push(`"blog": "${res.data.blog}"`);
    arr.push(`"bio": "${res.data.bio}"`);
    arr.push(`"pubRepos": "${res.data.public_repos}"`);
    arr.push(`"followers": "${res.data.followers}"`);
    arr.push(`"stars": "${res.data.location}"`);
    arr.push(`"following": "${res.data.following}"`);

    console.log(`[${arr[1]}]`);



    /*
* Profile image
* user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

*/

    


    fs.writeFile("./gitText.json", `{${arr.join(", \n")}}`, function(err) {

        if(err) {
            return console.log(err);
        }
      
        console.log("The file was saved!");
      }); 


      function readFileAsync(path, encoding) {
        return new Promise(function(resolve, reject) {
          fs.readFile(path, encoding, function(err, data) {
            if (err) {
              return reject(err);
            }
      
            resolve(data);
          });
        });
      }
    
      readFileAsync("gitText.json", "utf8")
      .then(function(data) {
        let jData = JSON.parse(data);
        console.log(jData.location);
       
        
        
      })
      .catch(function(err) {
        console.log(err);
      });
    


  });






 
/*
  * Profile image
* user name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

*/