const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('checking3', 'small', []);
  }

  async run(client, message, args) {
    message.channel.send('WARNING! ONLY [3/5] Accounts are currently logged in on your **Lenovo:tm: Ideapad 320S!** The reasons for this could be: Permanently Banned/Idle, PC Battery, or the PC is currently on Sleep Mode. Make sure to restart the app to check up-to-date status!');
  }
}