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
    member.sendMessage('**Hello! ♡**\nWould you be kind enough to join my server?\nHere is the link: **https://discord.gg/H7PR2Yq**', {
      embed: {
        color: 0xDDA0DD,
        image: {
          url: 'https://78.media.tumblr.com/33b36e4d8dccc88921ae19109b22c8d9/tumblr_p3p4iyTQwZ1qg67clo1_500.gif'
        }
      }
    });
});

client.login(process.env.TOKEN);
