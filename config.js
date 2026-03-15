// config.js - Centralized configuration 
require('dotenv').config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://sana:jawadsaan@cluster0.39ezrfs.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'erfan-x0',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_DOWNLOADER: 'true',
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'false',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false', // New env
    ALWAYS_ONLINE: 'true', // New env
    VERSION: '2.0.1 Bᴇᴛᴀ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ TEDDY-XMD*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'true',
    STICKER_NAME: 'TEDDY',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*',
    
    // Bot Identity
    BOT_NAME: 'TEDDY-XMD',
    OWNER_NAME: 'TEDDY-XMD',
    OWNER_NUMBER: '254799963583',
    DEV: '254799963583',
    IK_IMAGE_PATH: './lib/ERFAN.jpg',
    BOT_IMAGE: 'https://files.catbox.moe/13nyhx.jpg', // New env
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363421104812135@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',
    
    // Reaction Emojis
    AUTO_LIKE_EMOJI: ['❤️', '💚', '🌚', '😍', '💀', '🧡', '💛', '💙', '👻', '🖤', '🤍', '🥀'],
    REACTXEMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    ADMIN_LIST_PATH: './admin.json',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029Vb6NveDBPzjPa4vIRt3n',
    BANNED: [],
    SUDO: [
        "254799963583@s.whatsapp.net",
        "254769787515@s.whatsapp.net" 
    ],
    
    // Newsletter JIDs for auto-follow
    NEWSLETTER_JIDS: [ '120363421104812135@newsletter',
'120363412042273829@newsletter',
'120363422168827630@newsletter' ],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'false',
        AUTO_RECORDING: 'true',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'true', // New
        ALWAYS_ONLINE: 'true', // New
        VERSION: '2.0.0 Bᴇᴛᴀ',        
        OWNER_NAME: 'Teddy',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_CALL: 'false',
        REJECT_MSG: '*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*',
        OWNER_NUMBER: '254799963583',
        DEV: '254799963583',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ TEDDY-XMD*',
        ANTI_DELETE: 'true',
        ANTI_LINK: 'true',
        STICKER_NAME: 'TEDDY-XMD',
        WELCOME: 'false',
        ADMIN_ACTION: 'false',
        MODE: 'public',
        PREFIX: '.',
        BOT_IMAGE: 'https://files.catbox.moe/13nyhx.jpg', // New
        AUTO_LIKE_EMOJI: ['❤️', '💚', '🌚', '😍', '💀', '🧡', '💛', '💙', '👻', '🖤', '🤍', '🥀'],
        REACTXEMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        BANNED: [],
        SUDO: [
            "254799963583@s.whatsapp.net",
            "254769787515@s.whatsapp.net" 
        ]
    }
};

module.exports = config;
