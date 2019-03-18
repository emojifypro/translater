const fs = require('fs');

class EmojiList {
    constructor(input, output) {
        this.output = output;
        this.dbContents = fs.readFileSync(input, 'utf8');
        this.dbData = JSON.parse(this.dbContents);
        this.built = [];
    }

    build() {
        const aliasKeys = {};

        const wordCounts = [];
        const wordCharacterCounts = {};

        this.dbData.forEach((emoji) => {
            if (typeof emoji.emoji === 'undefined') {
                return;
            }
            
            const emojiKeys = [];

            emojiKeys.push(emoji.description.toLowerCase());
            
            emoji.aliases.forEach((alias) => {
                alias = alias.split('_').join(' ');
                if (emojiKeys.includes(alias)) {
                    return;
                }
                
                emojiKeys.push(alias);
            });

            emojiKeys.forEach((alias) => {
                const wordCount = alias.split(' ').length;
                const characterCount = alias.length;

                if (typeof aliasKeys[wordCount] === 'undefined') {
                    aliasKeys[wordCount] = {};
                    wordCounts.push(wordCount);
                    wordCharacterCounts[wordCount] = [];
                }

                if (typeof aliasKeys[wordCount][characterCount] === 'undefined') {
                    aliasKeys[wordCount][characterCount] = [];
                    wordCharacterCounts[wordCount].push(characterCount);
                }

                aliasKeys[wordCount][characterCount].push({
                    alias,
                    emoji: emoji.emoji
                });
            });
        });

        this.rsortArray(wordCounts).forEach((wordCount) => {
            this.rsortArray(wordCharacterCounts[wordCount]).forEach((characterCount) => {
                aliasKeys[wordCount][characterCount].forEach((alias) => {
                    this.built.push(alias);
                });
            });
        });

        this.builtString = JSON.stringify(this.built);

        fs.writeFile(this.output, this.builtString, (err) => {
            if (err) {
                return console.error(err);
            }

            console.log('Build complete.');
        });
    }

    rsortArray(array) {
        return array.sort((a,b) => {
            return (a>b) ? -1 : (a<b) ? 1 : 0;
        });
    }
}

module.exports = EmojiList;