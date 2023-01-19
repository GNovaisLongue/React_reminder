const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spam")
    .setDescription("send messages one after another in a channel"),
  async execute(interaction, client) {
    await interaction.deferReply({
      fetchReply: false,
    });
    await interaction.editReply({
      content: "Starting SPAM...",
    });

    let i = 0;
    const msg = `AAA - test <:Creep:976151075314864209>`;
    do {
      setTimeout(() => {
        client.channels.cache.get("974779028546408488").send(msg); //spam-channel
      }, 30000);
      i++;
    } while (i <= 150);
  },
};
