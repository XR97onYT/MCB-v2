// Comment Bot V2
// Some stuff taken from github.com/TheDreamFoxy/GDCommentBot
// Crypto from GDBrowser.com

// Cleaner, no need to manually input level ID's, faster bot and yep

// A note: Did take a while to figure out loops, because there's no sleep function
// Settled on using setTimeout until a condition is met, so it's 2 functions looping each other.
// To use this bot, fork this repl, and add 3 environment variables called USERNAME, PASSWORD, and AccountID
// Spelled exactly like that, in the exact same letter case
// The values of those will be your username, password, and accountID. To get your accountID, go to this website
// gdbrowser.com/api/profile/[your username here] without the brackets []
// And it will return to you a list of data, copy accountID without the quotes and paste it into the env variable.
// Then, run the bot, and BOOM! You are now spamming GD at a nice rate.

const crypto = require("./crypto.js")
const request = require("request")
const base64 = require('nodejs-base64-encode')
const JSON = require("JSON")
const config = require("./config.json")
const User = config.Username
const Pass = config.Password
const ID = config.AccountID

function doLoop(levelData, index, filter) {
  setTimeout(function() {
    if (index < 10) {
      postComment(levelData[index]["id"], levelData[index]["name"])
      index++
      doLoop(levelData, index, filter)
    } else {
      commentLevels(filter - 1)
    }
  }, 17000)
}

function getRandom(items) {
  return items[Math.floor(Math.random()*items.length)];
}

let messages = ["gg ez 1 att mobile", "yo i beat it first try omg on phone", "FINALLY BEAT THIS TRASH, 1 ATTEMPT EASY", "LOL!, THIS WASNT EVEN HARD I BEAT IN ONE ATTEMPT ON MY PHONE!!"]

function commentLevels(filter) {
  if (filter > 0) {
    request.get({
      url: "https://www.gdbrowser.com/api/search/*?page=0&diff=-2&demonFilter=" + filter.toString()
    }, function(err, response, body) {
      if (err) {
        console.log(err.message)
      } else {
        console.log("Starting comment loop " + filter.toString())
        levelData = JSON.parse(body)
        doLoop(levelData, 0, parseInt(filter))
      }
    })
  } else {
    console.log("Bot has finished")
  }
}

function postComment(data, name) {
  let comment = getRandom(messages)

  request.post({
    url: "http://www.boomlings.com/database/uploadGJComment21.php",
    form: {
      "gameVersion": "21",
      "binaryVersion": "35",
      "gdw": "0",
      "accountID": ID,
      "gjp": crypto.encrypt(Pass, 37526),
      "userName": User,
      "comment": base64.encode(comment, "base64"),
      "secret": "Wmfd2893gb7",
      "levelID": data,
      "percent": "100",
      "chk": chk(data, base64.encode(comment, "base64"), 100)
    }
  }, function(err, response, body) {
    if (err) {
      console.log(err.message)
    } else {
      console.log("Commented on " + name + " and said " + comment)
    }
  })
}

function chk(id, comment, percent){
    let chk = User + comment + id + percent + "0xPT6iUrtws0J"
    chk = crypto.sha1(chk)
    chk = crypto.encrypt(chk, 29481)
    return chk
}

console.log("[MCB v2]: Initialized")
console.log("[MCB v2]: Created by XR5 / XR97, Description: A better version of MCB v1")
commentLevels(5) // Initialize the bot starting with extreme demons
