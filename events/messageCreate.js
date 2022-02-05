const client = require("../index");
const Discord = require('discord.js')

client.on("messageCreate", async (message) => {

  
  if (message.author.bot || message.author === client.user) return;
  if (message.channel.type === "dm") return;
          if (!message.content.toLowerCase().startsWith(client.config.prefix)) return; //message.reply({embeds: [embed]})

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");
  
 const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
  console.log(`[Logs] User "${message.author.tag}" ran a cmd "${cmd}". Guild ID "${message.guild.id}"`);

await command.run(client, message, args)
})
