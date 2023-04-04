// This won't work unless you set up a Node.JS project! Install Mineflayer using npm install mineflayer, and I'll see you in your Minecraft server/world!
const mineflayer = require('mineflayer')
// Set daname to whatever your Minecraft username is.
const daname = ""
const bot = createBot({
  host: 'localhost',
  port: '',
  username: 'bot',
  auth: 'offline'
})

// AI
function onSpawn () {
  bot.chat('/skin set ' + bot.username + ' TBNRfrags')
  bot.chat('See this? This could be you programming. FORK ME! Have full control over me.')
}
function onPhysicsTick () {
  const player = bot.players[daname]
  lookAtEntity(player.entity, true)
}
bot.once('spawn', onSpawn)
bot.on('physicsTick', onPhysicsTick)
