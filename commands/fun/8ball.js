const { MessageEmbed } = require('discord.js')
const chance = require('chance')
module.exports = {
  name: '8ball',
  description: 'go away',
  run: async (client, message, args) => {
    let q = args.slice(0).join(" ")
    let a = ['I highly doubt it,', 'Yes,', 'No,', 'Its best if i do not say,', 'Go for it,']
    const c = new chance()

    await message.reply(`${c.pickone(a)} ${message.author.username}`)
    console.log(q)
  }
}