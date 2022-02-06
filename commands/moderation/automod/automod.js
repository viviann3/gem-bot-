const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
  name: 'automod',
  description: 'goddamnit',
  run: async (client, message, args) => {

    const user = message.author

    const embed = new MessageEmbed()
     embed.setAuthor({ name: `AutoMod`, iconURL: message.author.displayAvatarURL({dynamic: true})})
     embed.setDescription('There are multiple features of AutoMod features, and here is a list of them!\n\`1.\` \ `Mass/Spam \` (Pinging, etc.)')
     embed.setThumbnail(message.guild.iconURL())
    const row = new MessageActionRow()
     .addComponents(
       new MessageButton()
        .setCustomId('home')
        .setLabel('🏠 Automod')
        .setStyle('PRIMARY'),
       new MessageButton()
        .setCustomId('masspam')
        .setLabel('1️⃣ Mass/Spam')
        .setStyle('SECONDARY'),
     );

     let pageButtons = "masspam"
     let filter = i => pageButtons.includes(i.customId) && i.user.id === i.user.id;
     const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });



     collector.on('collect', async i => {
       if (i.customId === 'masspam') {
         const newembed = new MessageEmbed()
          .setAuthor({ name: 'Mass/Spam', iconURL: message.author.displayAvatarURL({dynamic: true})})
          .setDescription('die')
         i.update({ embeds: [newembed] })
       }
     })

    await message.reply({ embeds: [embed], components: [row] })
  }
}