const { Permissions } = require('discord.js');

module.exports = {
  name: 'unlock',
  UserPerms: ['MANAGE_CHANNELS'],
  BotPerms: ['MANAGE_CHANNELS'],
  run: async (client, message, args) => {
    const channel = message.channel || message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find((u) => u.name === args[0])

    if (!channel) return message.reply({ content: 'I could not find that channel.'})

    let msg = await message.channel.send({ content: 'Unlocking...'})


      channel.permissionOverwrites.edit(message.guild.roles.cache.find( (e) => e.name.toLowerCase().trim() === "@everyone" ),
      {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true,
      })
      msg.edit({ content: `<:check:935052019192954930> <#${channel.id}> is now unlocked.`})
  }
}