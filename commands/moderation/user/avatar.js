const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'avatar',
  aliases: ['av'],
  run: async (client, message, args) => {
    const user = message.author || message.mentions.users.first() || args[0]
    const embed = new MessageEmbed()
     embed.setDescription(`Viewing the Profile Picture of **${user.username}**.`)
     embed.setImage(message.author.displayAvatarURL({dynamic: true, size: 4096}))
    await message.reply({ embeds: [embed] })
  }
}