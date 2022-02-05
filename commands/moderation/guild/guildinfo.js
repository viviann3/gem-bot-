const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'guildinfo',
  description: 'get information on your favorite guild',
  run: async (client, message, args) => {
    const guild = message.guild
    let bots = guild.members.cache.filter((member) => !member.user.bot).size
    const embed = new MessageEmbed()
     embed.setTitle(`Information for ${guild.name}`)
     embed.addField('Created at', `<t:${Math.floor(guild.createdAt/1000)}:f>`)
     embed.addField('Server Owner', `<@${guild.ownerId}>`)
     embed.addField('Channels', `#️⃣ ${guild.channels.cache.filter(c => c.type == "GUILD_TEXT").size}\n🔉 ${guild.channels.cache.filter(c => c.type == "GUILD_VOICE").size}`)
     embed.addField('Members', `Total: ${guild.memberCount}`)
     embed.setColor('RANDOM')
     embed.setThumbnail(guild.iconURL())
     embed.setFooter('Thanks for using Gem bot!')
    await message.reply({ content: 'Note: Not everything is 100% accurate', embeds: [embed] }).then(console.log(`The guild that guildinfo was run on: ${guild.name}`))
  }
}