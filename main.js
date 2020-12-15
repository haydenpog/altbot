const { Console } = require("console");
const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

var quotes = ["$Minecraft" , "$Spotify"]

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(() => {
        client.user.setActivity(
           quotes[Math.floor(quotes.length * Math.random())], 
            {type: 'PLAYING'}
        );
      }, 5000);
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
      
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});
client.login(config.token)
