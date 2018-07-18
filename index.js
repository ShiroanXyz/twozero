const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '~~ping') {
    msg.reply('Pong!');
  }
});

client.on('guildMemberAdd', (member) => {
    member.sendMessage('**Hello! ♡**\nWould you be kind enough to join my server?\nHere is the link: **https://discord.gg/TaN42wa**', {
      embed: {
        color: 0xd10000,
        image: {
          url: 'https://pa1.narvii.com/6715/4c6e81d7a5f2f5f642f40cf23a3cfe19881cb76e_hq.gif'
        }
      }
    });
});

client.login(process.env.TOKEN);
