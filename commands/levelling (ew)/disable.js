/*const disabled = require('./disable.js')

module.exports = {
  name: 'disable',
  description: 'disable levelling (lol)',
  run: async (client, message, args) => {
    await message.reply('Levelling has been disabled for this guild, use \.enable`\` to re-enable it.').then(disabled.updateOne({ guildID: message.guild.id}, { disabled: true }))
  }
}*/