var TelegramBot = require('node-telegram-bot-api'),
telegram = new TelegramBot("520684278:AAEQK9CdBPuuBxWQJynoQSFVN822GSzDp6Y", { polling: true });

telegram.on("text", (message) => {
    telegram.sendMessage(message.chat.id, "Muy pronto lanzamiento bot");
    });

    telegram.onText(/\/hola/, (message) => {
        telegram.sendMessage(message.chat.id, "Hola cliente "+message.from.first_name);
    });
    telegram.onText( /\/mayor (.+) (.+)/, (msg, match) => {
       
       
        const chatId = msg.chat.id;
        const numero1 =  match[1]; 
        const numero2 =  match[2]; 
        if(numero1>numero2){
            telegram.sendMessage(chatId,"El numero mayor es ======>"+ numero1);
        }
        else{
            telegram.sendMessage(chatId,"El numero mayor es ======>"+ numero2);
        }
       
        
        
      });

