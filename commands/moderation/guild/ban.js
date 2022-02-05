module.exports = {
  name: 'ban',
  description: 'ban some weird people',
  UserPerms: ['BAN_MEMBERS'],
  BotPerms: ['BAN_MEMBERS'],
  run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.cache.find(a => a.id == args[0])
    const reason = args.slice(1).join(" ")

    await user.ban({
      days: 0,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.reply(`✅ User **${user}** has been successfully banned for: ${reason}.`))
  }
}