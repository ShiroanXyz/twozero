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
    member.sendMessage('**Hello! ♡**\nWould you be kind enough to join my server?\nHere is the link: **https://discord.gg/xsHxkpf**');

client.login(process.env.TOKEN);
