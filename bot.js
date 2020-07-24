// Init arguments
// --telegram-bot-token
// --telegram-admin-chat
// --vps-link
// --vps-app-key
// --vps-secret-key
// --vps-consumer-key
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

bot.launch()