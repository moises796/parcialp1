var TelegramBot = require('node-telegram-bot-api'),
telegram = new TelegramBot("520684278:AAEQK9CdBPuuBxWQJynoQSFVN822GSzDp6Y", { polling: true });

telegram.on("text", (message) => {
    telegram.sendMessage(message.chat.id, "Muy pronto lanzamiento bot");
    });

    telegram.onText(/\/hola/, (message) => {
        telegram.sendMessage(message.chat.id, "Hola cliente "+message.from.first_name);
    });

