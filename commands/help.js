exports.run = (client, message, args, ops) => {
  message.reply("I sended you a private message with a list of my commands.");
  message.author.send(`**List of my commands:**\n__%help__ » Get a private message with a list of commands\n__%leave__ » Makes the bot leave from the current voice channel\n__%pause__ » Pauses the current song\n__%play__ » Play a song in the current voice channel\n__%resume__ » Resumes the current song\n__%search__ » Same use of %play, only that you can't paste a link\n__%skip__ » Opens a vote to skip the current song.\nIf you want to report any bug, give some suggestions, the right place is our Discord server.\nhttps://discord.gg/HKqb6V7`);
}