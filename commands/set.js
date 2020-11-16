const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports.run = async(client, msg, args) => { 
  
  if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send("You need `MANAGE_CHANNELS` perms") //IF USER NOT HAVE PERMISSION
  
  let ch = msg.mentions.channels.first() //Mention channel example: #welcome
  if(!ch) return msg.channel.send('Please mention channel') //If user not mention channel
  
  let channel = new MessageEmbed()
  .setAuthor('SET WELCOME EMBED')
  .setColor('random')
  .setThumbnail(msg.guild.iconURL({dynamic:true}))
  .addField("Set channel to:", ch)
  msg.channel.send(channel)
  return db.set(`channel-${msg.guild.id}`, ch.id)
}
