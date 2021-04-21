const Discord = require('discord.js');

const client = new Discord.Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const fs = require('fs');

const prefix = 'n!'

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Made by Hanako#0007 <3", {
    type: "PLAYING"
  });
});


client.on('message', message => {

    if(message.content.toLowerCase().includes('andrea')) {
        message.channel.send('hot')
    } else if(message.content.toLowerCase().includes('wlcy')) {
        message.channel.send('welcome cutie ! make sure to invite your friends and boost babe <3 !')
    }
});

//made by Hanako#0007 !

client.login('ODM0MjU0NzY1ODQzNjc3MTg0.YH-OSw.JM53MDjj_Eq0uC2dAJcFa_o5GFI');