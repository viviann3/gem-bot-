const { MessageEmbed } = require('discord.js')
const chance = require('chance')

module.exports = {
  name: 'kiss',
  description: 'kiss someone either platonicaly or not',
  run: async (client, message, args) => {
    const c = new chance()
    const kisses = [
      "https://c.tenor.com/id3rvkpeS9QAAAAC/twice-kpop.gif",
      "https://c.tenor.com/zH5hDhnIsHsAAAAC/korean-drama-kdrama.gif",
      "https://c.tenor.com/08EhHE2m8vsAAAAC/nct-dream-kpop.gif"
    ]
    const embed = new MessageEmbed()
     embed.setDescription(`<@${message.author.id}> gives ${message.mentions.users.first()} a kiss`)
     embed.setColor(0x2f3136)
     embed.setImage(c.pickone(kisses))
    return message.reply({ content: `mwah!`, embeds: [embed] })
  }
}