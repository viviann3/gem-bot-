const { Client, Intents, Collection, MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.on("ready", async() => {
  console.log('xiaoting\'s all ready!')
  client.user.setActivity('.help', {
    type: 'LISTENING'
  })
})

//levelling and other dumb shit

const Levels = require("discord-xp");
Levels.setURL(process.env.mongo);

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  
  const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send({ content: `${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:` });
  }
});


//configuration

client.commands = new Collection()
client.config = require('./config.json')
require('./handler')(client);
require('dotenv').config();
client.on("warn", console.warn);
client.on("error", console.error); 

module.exports = client;

//other

console.log("NodeJS Version: " + process.version);
client.login(process.env.token)