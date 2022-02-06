const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "help",
  description: "seek help",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
     embed.setAuthor({name: `Help`, iconURL: message.author.displayAvatarURL({dynamic: true})})
     embed.setDescription(`\`<>\` = Required, \`()\` = Optional, \`@\` = @ Someone`)
     embed.addField(`Fun`, '\`.8ball <message>\`\n\`.hug @\`\n\`.kiss @\`\n\`.topic\`')
    message.reply({ embeds: [embed] })
  }
}