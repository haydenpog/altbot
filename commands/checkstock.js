const discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
    fs.readFile('./minecraft.txt', 'utf8', (err, mc) => {

        fs.readFile('./spotify.txt', 'utf8', (err, spo) => {

            var embed = new discord.MessageEmbed()
            .addFields(
                { name: 'Currect Stock:' , value: `* Minecraft: ${mc.split('\n').length} \n* Spotify: ${spo.split('\n').length}`}
            )
            .setColor("#D40004")
            .setTimestamp()
            message.channel.send(embed);

        });
    });


    
}
