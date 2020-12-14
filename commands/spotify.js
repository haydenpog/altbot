const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)

    if (message.member.roles.cache.find(r => r.id === "788126889931833414")){
        fs.readFile('./spotify.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let embed = new Discord.MessageEmbed()
            .addField("Spotify Alt", `Here is your Spotify account: ` + "\n```" + `${random}` + "```")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png")
            .setColor("#D40004")
            .setTimestamp()
            message.author.send(embed)

            message.reply("Sent you Spotify Account!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
        })
    })
    }else {

        var noperms = new Discord.MessageEmbed()
        .addFields(
            { name: 'No permissions' , value: 'You must be a buyer to execute this command!'}
        )
        .setColor("#D40004")
        .setTimestamp()

        return message.channel.send(noperms).then(msg => {msg.delete({ timeout: 5000 })}).catch(console.error);
    }

}