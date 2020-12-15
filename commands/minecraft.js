const Discord = require("discord.js")
const fs = require("fs")

exports.run = (client, message, args) => {
    message.delete(message)
    if (message.member.roles.cache.find(r => r.id === "788126889931833414")){ 
        let logs = message.guild.channels.cache.find(l => l.id === '780522981901860894')
        fs.readFile('./minecraft.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let embed = new Discord.MessageEmbed()
            .addField("Minecraft Alt", `Here is your Minecraft Alt: ` + "\n```" + `${random}` + "```")
            .setThumbnail("http://www.blocksandgold.com//media/catalog/product/cache/3/image/200x/6cffa5908a86143a54dc6ad9b8a7c38e/g/r/grass.png")
            .setColor("#D40004")
            .setTimestamp()
            message.author.send(embed);

            var gened = new Discord.MessageEmbed()
            .addFields(
                { name: 'Gened new Minecraft alt' , value: `By: ${message.author}`}
            )
            .setAuthor(message.author.username , message.author.avatarURL())
            .setColor("#D40004")
            .setTimestamp()
            logs.send(gened);

            message.reply("Sent you Minecraft Alt!").then(m => {
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
