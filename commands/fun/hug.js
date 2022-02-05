const { MessageEmbed } = require('discord.js')
const chance = require('chance')
const hugs1 = require('../../json/hug.json')

module.exports = {
  name: 'hug',
  description: 'give someone the hug they deserve',
  run: async (client, message, args) => {
    const c = new chance()
    const hugs = [
      "https://c.tenor.com/Fu8qqpYlbHIAAAAC/red-velvet-joy.gif",
      "https://c.tenor.com/7ERO3rUl-3wAAAAC/mina-twice.gif",
      "https://c.tenor.com/KRjC3Ab4KTQAAAAC/stray-kids.gif",
      "https://c.tenor.com/pVtLMCUcZkIAAAAC/txt-tomorrow-x-together.gif",
      "https://c.tenor.com/_GRxMKCgVm4AAAAC/heejin-chuu.gif"
    ]

    const embed = new MessageEmbed()
     embed.setDescription(`<@${message.author.id}> gives ${message.mentions.users.first()} a hug`)
     embed.setImage(c.pickone(hugs))
     embed.setColor(0x2f3136)
    return message.reply({ content: 'make sure to hug them back <3', embeds: [embed] })
  }
}