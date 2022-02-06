const chance = require('chance')
module.exports = {
  name: 'topic',
  description: 'revive a dead chat',
  run: async (client, message, args) => {
    const ts = ['What are your opinions on Kpop, if any?', 'Do you believe in astrology?', 'What was the moment in your life that made you realize that you\'re messed up?', 'What is the best place to visit for lazy people?']
    const c = new chance()

    message.reply(c.pickone(ts))
  }
}