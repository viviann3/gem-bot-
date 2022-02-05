module.exports = {
  name: 'kick',
  description: 'ban but less mean',
  UserPerms: ['KICK_MEMBERS'],
  BotPerms: ['KICK_MEMBERS'],
  run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.cache.find(a => a.id == args[0])
    const reason = args.slice(1).join(" ")

    await user.kick({
      days: 0,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.reply(`✅ User **${user}** has been successfully kicked for: ${reason}.`))
  }
}