// Init arguments
// --telegram-bot-token
// --telegram-admin-chat
// --vps-link
// --vps-app-key
// --vps-secret-key
// --vps-consumer-key
// --webhook-auth-key
const {argv} = require('yargs')

// Init VPS connection
const ovh = require('ovh')({
    appKey: argv.vpsAppKey,
    appSecret: argv.vpsAppSecret,
    consumerKey: argv.vpsConsumerKey
});

// Init telegram bot
const { Telegraf } = require('telegraf')
const bot = new Telegraf(argv.telegramBotToken)

// Init express web framework
const express = require('express')
const app = express()

// Init trigger & commands
bot.command('reboot', (ctx) => {

    if('' + ctx.message.chat.id == argv.telegramAdminChat){
        
        ovh.request("POST", "/vps/" + argv.vpsLink + "/reboot", function(err, res){
        
            if(err) 
                ctx.reply("Error: " + err);
            else
                ctx.reply("Done.");
    
        });

    }
    else ctx.reply("Not allowed.");

})

// Init trigger & webhook
app.get('/' + argv.webhookAuthKey + '/reboot', function (request, response) {

    ovh.request("POST", "/vps/" + argv.vpsLink + "/reboot", function(err, res){
        
        if(err) { // Error

            response.json({
                success: false,
                error: err
            });

        }
        else { // Success

            response.json({
                success: true
            });

            bot.telegram.sendMessage(argv.telegramAdminChat, argv.vpsLink + ' just restarted.')
        }

    });

});

// Start all
bot.launch()
app.listen(3000)