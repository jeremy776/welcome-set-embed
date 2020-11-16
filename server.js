const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.js');
const fs = require('fs');
const db = require('quick.db');

client.on('ready', () => {
  console.log(client.user.tag + ' online');
});

client.on('message', async message => {
  if(!message.content.startsWith(config.prefix)) return;
  
  let args = message.content.slice(config.prefix.length).split(" ");
  let cmd = args.shift().toLowerCase();
  
  try{
    let command = require(`./commands/${cmd}`)
    command.run(client, message, args)
  }catch(e){
    console.log(e.message)
  };
});
