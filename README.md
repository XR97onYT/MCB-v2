# MCB-v2
A better version of MCB v1, which comments on every demon of each difficulty on the first page of said difficulty.

# Things To Know
1: Some of the code (specifically chk, crypto.js and the data to post to Geometry Dash servers) is taken from GitHub: TheDreamFoxy/GDCommentBot repository.
Basically, I was not going to find out how to decrypt and encrypt all of that shit and ye, the rest is mine.

# What's Improved
MCB v1 was not on this GitHub, but let me tell you, after using MCB v2, it makes v1 look like a joke.
In MCB v1, you had to MANUALLY INPUT LEVEL IDs. And it used a very slow API wrapper because I didn't know how to post to Geometry Dash's servers.
It only commented once a minute, very slow pace. If it went any faster, it would error and stop.
This new bot, searches levels on it's own in the demons difficulty. And then comments on the first page of search.
It comments every 17 seconds as well. If you know how to code and tinker with people's projects and such, you can even mess around with the searching to make it only search Easy-Insane levels, NA, Auto, etc. But for those, you would have to tinker with the Filter variable (which is the demon's difficulty search) a little
And yep that's all, one more thing: Don't set the delay below 17 or 16 seconds. The rate limit is 15, but that limit is going faster on your client than on the server, so it will just skip over that comment.

# How to Set Up
You will need to install the modules nodejs-base64-encode and request using NPM and you will need to store all files in a folder where they're all accessible.
In Config.JSON, replace Username with your username, Password with your password, and AccountID with your accountID
To Find your account ID, go to this website:
https://www.gdbrowser.com/api/profile/[your username] without the brackets []
And then, copy the accountID data without the quotes and then paste it in config.JSON
After that, all you have to do is run and it will spam comments on every first page of demon difficulty.
