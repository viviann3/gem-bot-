module.exports = {
  name: 'kick',
  description: 'ban but less mean',
  UserPerms: ['KICK_MEMBERS'],
  BotPerms: ['KICK_MEMBERS'],
  run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.cache.find(a => a.id == args[0])
    const reason = args.slice(1).join(" ")
    if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('Kick Failed: Command was runned by a user who did not have the correct permissions to Kick members.')
    await user.kick({
      days: 0,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.reply(`<:check:935052019192954930> User **${user}** has been successfully kicked for: ${reason}.`))
  }
}