const args = process.argv;
const buildType = args[2];

switch (buildType) {
    case 'emojiList':
        const EmojiList = require('./src/build/EmojiList.js');
        const builder = new EmojiList('./db/raw.json', './db/built.json');
        
        builder.build();
        break;
    default:
        console.error('Invalid buildType specified');
}