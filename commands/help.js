const discord = require('discord.js')

exports.run = (client, message, args) => {

    var embed = new discord.MessageEmbed()
    .addFields(
        { name: 'Help Command' , value: '$Minecraft\n$Spotify'}
    )
    .setColor("#D40004")
    .setTimestamp()

    message.channel.send(embed);
}
