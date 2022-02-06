module.exports = {
  name: 'ban',
  description: 'ban some weird people',
  UserPerms: ['BAN_MEMBERS'],
  BotPerms: ['BAN_MEMBERS'],
  run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.cache.find(a => a.id == args[0])
    const reason = args.slice(1).join(" ")
    if (!message.member.permissions.has('BAN_MEMBERS')) {
     message.reply('Ban Failed: Command was runned by a user who did not have the correct permissions to Ban members.')
    } else if (!user) {
      message.reply(`Please mention a user to ban.`)
    } else if (user.id === message.guild.ownerId) {
      message.reply(`You cannot ban the owner of this guild.`)
    } else {
      
    }

    await user.ban({
      days: 0,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.reply(`<:check:935052019192954930> User **${user}** has been successfully banned for: ${reason}.`))
  }
}