const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["link", "botlink", "minibot"],
    desc: "Get bot pairing link",
    react: "🔗",
    category: "main",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    try {
        // 👇 Change your image URL here
        const imageURL = 'https://files.catbox.moe/13nyhx.jpg';
        
        // 👇 Change your pairing link here
        const pairLink = 'https://whatsapp.com/channel/0029Vb6NveDBPzjPa4vIRt3n/';

        const caption = `╭─────────────────╮
│  🤖 *ᴍɪɴɪ ʙᴏᴛ ᴘᴀɪʀɪɴɢ*
╰─────────────────╯

┌─❏ *ɪɴғᴏ* ❏
│
│ ✦ ᴛʜɪꜱ ɪꜱ ᴍɪɴɪ ʙᴏᴛ
│ ✦ ᴄʟɪᴄᴋ ʟɪɴᴋ ᴛᴏ ᴘᴀɪʀ
│ ✦ ᴇɴᴛᴇʀ ʏᴏᴜʀ ɴᴜᴍʙᴇʀ
│ ✦ ɢᴇᴛ ᴘᴀɪʀ ᴄᴏᴅᴇ
│ ✦ ᴇɴᴊᴏʏ ʙᴏᴛ 🎉
│
└─────────────────

🔗 *ᴘᴀɪʀ ʟɪɴᴋ:*
> ${pairLink}

╭─────────────────╮
│ ᴛʜᴀɴᴋꜱ ғᴏʀ ᴜꜱɪɴɢ 💕
╰─────────────────╯`;

        await conn.sendMessage(from, {
            image: { url: imageURL },
            caption: caption,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421104812135@newsletter',
                    newsletterName: 'ᴍɪɴɪ ʙᴏᴛ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in pair command:", error);
        reply("❌ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ!");
    }
});
