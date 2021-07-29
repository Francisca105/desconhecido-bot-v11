exports.run = (client, message, args, err) => {

const discord = require('discord.js');
let mensagem = args.slice(0).join(" ")
    if(!mensagem) return message.reply('indique a mensagem para eu dizer!!!')

    let e = new discord.RichEmbed()
    .setTitle('Aviso')
    .setDescription(mensagem)
    .setFooter('Desenvolvido pela Francisca.105#8965')

    message.channel.send(e)
    
    
}
module.exports.help = {
        name: "msg",
        aliases: ["falar", "say"]
}