const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")

bot.on("ready", function() {
    bot.user.setGame("Commande: !help");
    console.log("Connected");
});

bot.login("NDQ3NTIwMDY4ODg5MjE0OTg2.DeJQjw.L2Ftif1m4ZuMuct4q4HZDqay0oc");


bot.on("message", message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("liste des commandes: \n -!help");
    }

    if (message.content === "salut"){
        message.reply("bien le bonjour. :)");
        console.log("Commande salut effectué");
    }
});
