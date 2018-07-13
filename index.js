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
    member.sendMessage('**Hello! ♡**\nWould you be kind enough to join my Discord server?\nHere is the link: **https://discord.gg/6Qvc9UF**', {
      embed: {
        image: {
          color: 0xff3366,
          url: 'https://78.media.tumblr.com/51fa570b76b220bed3eb4a6b26c09611/tumblr_p38eq9jjDP1s2htvko1_500.gif'
        }
      }
    });
});

client.login(process.env.TOKEN);
