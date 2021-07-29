exports.run = async (client, message) => {
const discord = require('discord.js')
let ajuda= new discord.RichEmbed()
.setTitle('Ajuda')
.setDescription('Todos os meus comandos:')

    message.channel.send(ajuda)
}
module.exports.help = {
    name: "ajuda",
    aliases: ["?", "help"]
}    