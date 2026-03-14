const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'SUNUCUIgldevs.aternos.me', // örnek play.sunucum.com
  port: 25565,
  username: 'GAME_LOUNGE_AFK_BOT'
})

bot.on('spawn', () => {
  console.log('BOT READY YANİ HAZIR')
})

bot.on('end', () => {
  console.log('Bot atıldı tekrar giriyor')
  setTimeout(createBot, 5000)
})