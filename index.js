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
    member.sendMessage({
      embed: {
        author: {
          name: 'Hello! ♡'
        },
        description: 'I have create a new discord server, Do you want join us?\n**Here is the link: __https://discord.gg/fFuQcpz__**',
        color: 0xff3366,
        image: {
          url: 'https://78.media.tumblr.com/51fa570b76b220bed3eb4a6b26c09611/tumblr_p38eq9jjDP1s2htvko1_500.gif'
        }
      }
    });
});

client.login(process.env.TOKEN);