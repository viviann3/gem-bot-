const { Client, Intents, Collection } = require('discord.js')
const mongoose = require('mongoose')


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.on("ready", async() => {
  console.log('xiaoting\'s all ready!')
  client.user.setActivity('.help', {
    type: 'LISTENING'
  })
})

//configuration
client.commands = new Collection()
client.config = require('./config.json')
require('./handler')(client);
require('dotenv').config();
client.on("warn", console.warn);
client.on("error", console.error); 

module.exports = client;

console.log("NodeJS Version: " + process.version);
client.login(process.env.token)