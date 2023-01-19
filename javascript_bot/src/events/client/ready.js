module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`\n ${client.user.tag} is logged in and online. \n`);
  },
};
