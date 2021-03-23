const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('none', 'small', []);
  }

  async run(client, message, args) {
    message.channel.send('WARNING! There are NO BOTS currently online on your **Lenovo:tm: Ideapad 320S!** The reasons for this could be: Permanently Banned/Idle, PC Battery, or the PC is currently on Sleep Mode. Please turn power on your computer to start checking [BOT] Status!');
  }
}