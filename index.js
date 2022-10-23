const { Client, Guild, REST, Routes } = require("discord.js")
// const fetch = require("node-fetch")
const keepAlive = require("./server")
// const Database = require("@replit/database")

// const db = new Database();
const token = process.env['TOKEN']
const client = new Client();
const guild = new Guild();

const commands = [
  {
    name: '!ping',
    description: 'Replies with pong',
  },
  {
    name: '!inspire',
    description: "Sends inspirational quote",
  },
  {
    name: '!list',
    description: "Lists commands",
  }
];


client.on("ready", () => {
  console.log(`Ready! Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return;

  if (msg.content === "!inspire") {
    msg.channel.send("Nie ma dla Ciebie inspiracji");
    return;
  }

  if (msg.content == "!ping") {
    msg.channel.send("pong");
    return;
  }

  if (msg.content.search(/janek/gi) !== -1) {
    msg.channel.send("Janek weź się ogarnij");
    return;
  }

  if (msg.content === "!list") {
    msg.channel.send(commands.map((command) => {
      return `${command.name} : ${command.description} \n`;
    }));
    return;
  }

  if (msg.content === '!users') {
    msg.channel.send("Kamil słuchaj tak wygląda kodowanie, że czasami działa czasami nie");

    // First use guild.members.fetch to make sure all members are cached
    guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
      const totalOnline = fetchedMembers.filter(member =>
        member.presence.status && member.presence.status === 'online');
      // Now you have a collection with all online member objects in the totalOnline variable
      msg.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
    });

    return;
  }


})

keepAlive();
client.login(token);