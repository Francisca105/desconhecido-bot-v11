const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')

bot.on("raw", async (dados) => {
//Sistema de cargos por reação
    if(dados.t !== "MESSAGE_REACTION_ADD") return
    let servidor = bot.guilds.get(config.guildid)
    let membro = servidor.members.get(dados.d.user_id)
    let verificar = servidor.roles.get(config.membroid)

    if(dados.d.message_id = config.msgid){

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === config.emojiid){
            membro.addRole(verificar)
            
            console.log(bot.users.get(membro).user.username + ' verificado!')
        } else return;

    } else return;

        }   else return;
  })