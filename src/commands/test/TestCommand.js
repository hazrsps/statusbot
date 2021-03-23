const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', []);
  }

  async run(client, message, args) {
    message.channel.send('There are [5/5] Advertising Bots ONLINE on your **Lenovo:tm: Ideapad 320S!** Make sure to restart the app to check up-to-date status!');
  }
}