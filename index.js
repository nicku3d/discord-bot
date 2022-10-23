const { Client, REST, Routes } = require("discord.js")
// const fetch = require("node-fetch")
const keepAlive = require("./server")
const Database = require("@replit/database")

const db = new Database();
const token = process.env['TOKEN']
const client = new Client();

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

  
})

keepAlive()
client.login(token)