//https://raw.githubusercontent.com/muan/emojilib/master/emojis.json with minor reformatting for valid regex

const data = {
    "grinning": {
        "keywords": ["face", "smile", "happy", "joy", ":D", "grin"],
        "char": "😀",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "grimacing": {
        "keywords": ["face", "grimace", "teeth"],
        "char": "😬",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "grin": {
        "keywords": ["face", "happy", "smile", "joy", "kawaii"],
        "char": "😁",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "joy": {
        "keywords": ["face", "cry", "tears", "weep", "happy", "happytears", "haha"],
        "char": "😂",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "rofl": {
        "keywords": ["face", "rolling", "floor", "laughing", "lol", "haha"],
        "char": "🤣",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "partying": {
        "keywords": ["face", "celebration", "woohoo"],
        "char": "🥳",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smiley": {
        "keywords": ["face", "happy", "joy", "haha", ":D", ":\\\\)", "smile", "funny"],
        "char": "😃",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smile": {
        "keywords": ["face", "happy", "joy", "funny", "haha", "laugh", "like", ":D", ":\\\\)"],
        "char": "😄",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sweat_smile": {
        "keywords": ["face", "hot", "happy", "laugh", "sweat", "smile", "relief"],
        "char": "😅",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "laughing": {
        "keywords": ["happy", "joy", "lol", "satisfied", "haha", "face", "glad", "XD", "laugh"],
        "char": "😆",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "innocent": {
        "keywords": ["face", "angel", "heaven", "halo"],
        "char": "😇",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "wink": {
        "keywords": ["face", "happy", "mischievous", "secret", ";\\\\)", "smile", "eye"],
        "char": "😉",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "blush": {
        "keywords": ["face", "smile", "happy", "flushed", "crush", "embarrassed", "shy", "joy"],
        "char": "😊",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "slightly_smiling_face": {
        "keywords": ["face", "smile"],
        "char": "🙂",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "upside_down_face": {
        "keywords": ["face", "flipped", "silly", "smile"],
        "char": "🙃",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "relaxed": {
        "keywords": ["face", "blush", "massage", "happiness"],
        "char": "☺️",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "yum": {
        "keywords": ["happy", "joy", "tongue", "smile", "face", "silly", "yummy", "nom", "delicious", "savouring"],
        "char": "😋",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "relieved": {
        "keywords": ["face", "relaxed", "phew", "massage", "happiness"],
        "char": "😌",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "heart_eyes": {
        "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "crush", "heart"],
        "char": "😍",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smiling_face_with_three_hearts": {
        "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "crush", "hearts", "adore"],
        "char": "🥰",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kissing_heart": {
        "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "kiss"],
        "char": "😘",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kissing": {
        "keywords": ["love", "like", "face", "3", "valentines", "infatuation", "kiss"],
        "char": "😗",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kissing_smiling_eyes": {
        "keywords": ["face", "affection", "valentines", "infatuation", "kiss"],
        "char": "😙",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kissing_closed_eyes": {
        "keywords": ["face", "love", "like", "affection", "valentines", "infatuation", "kiss"],
        "char": "😚",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "stuck_out_tongue_winking_eye": {
        "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile", "wink", "tongue"],
        "char": "😜",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "zany": {
        "keywords": ["face", "goofy", "crazy"],
        "char": "🤪",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "raised_eyebrow": {
        "keywords": ["face", "distrust", "scepticism", "disapproval", "disbelief", "surprise"],
        "char": "🤨",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "monocle": {
        "keywords": ["face", "stuffy", "wealthy"],
        "char": "🧐",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "stuck_out_tongue_closed_eyes": {
        "keywords": ["face", "prank", "playful", "mischievous", "smile", "tongue"],
        "char": "😝",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "stuck_out_tongue": {
        "keywords": ["face", "prank", "childish", "playful", "mischievous", "smile", "tongue"],
        "char": "😛",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "money_mouth_face": {
        "keywords": ["face", "rich", "dollar", "money"],
        "char": "🤑",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "nerd_face": {
        "keywords": ["face", "nerdy", "geek", "dork"],
        "char": "🤓",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sunglasses": {
        "keywords": ["face", "cool", "smile", "summer", "beach", "sunglass"],
        "char": "😎",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "star_struck": {
        "keywords": ["face", "smile", "starry", "eyes", "grinning"],
        "char": "🤩",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "clown_face": {
        "keywords": ["face"],
        "char": "🤡",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "cowboy_hat_face": {
        "keywords": ["face", "cowgirl", "hat"],
        "char": "🤠",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "hugs": {
        "keywords": ["face", "smile", "hug"],
        "char": "🤗",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smirk": {
        "keywords": ["face", "smile", "mean", "prank", "smug", "sarcasm"],
        "char": "😏",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "no_mouth": {
        "keywords": ["face", "hellokitty"],
        "char": "😶",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "neutral_face": {
        "keywords": ["indifference", "meh", ":\\\\|", "neutral"],
        "char": "😐",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "expressionless": {
        "keywords": ["face", "indifferent", "-_-", "meh", "deadpan"],
        "char": "😑",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "unamused": {
        "keywords": ["indifference", "bored", "straight face", "serious", "sarcasm", "unimpressed", "skeptical", "dubious", "side_eye"],
        "char": "😒",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "roll_eyes": {
        "keywords": ["face", "eyeroll", "frustrated"],
        "char": "🙄",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "thinking": {
        "keywords": ["face", "hmmm", "think", "consider"],
        "char": "🤔",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "lying_face": {
        "keywords": ["face", "lie", "pinocchio"],
        "char": "🤥",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "hand_over_mouth": {
        "keywords": ["face", "whoops", "shock", "surprise"],
        "char": "🤭",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "shushing": {
        "keywords": ["face", "quiet", "shhh"],
        "char": "🤫",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "symbols_over_mouth": {
        "keywords": ["face", "swearing", "cursing", "cussing", "profanity", "expletive"],
        "char": "🤬",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "exploding_head": {
        "keywords": ["face", "shocked", "mind", "blown"],
        "char": "🤯",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "flushed": {
        "keywords": ["face", "blush", "shy", "flattered"],
        "char": "😳",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "disappointed": {
        "keywords": ["face", "sad", "upset", "depressed", ":\\\\("],
        "char": "😞",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "worried": {
        "keywords": ["face", "concern", "nervous", ":\\\\("],
        "char": "😟",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "angry": {
        "keywords": ["mad", "face", "annoyed", "frustrated"],
        "char": "😠",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "rage": {
        "keywords": ["angry", "mad", "hate", "despise"],
        "char": "😡",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "pensive": {
        "keywords": ["face", "sad", "depressed", "upset"],
        "char": "😔",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "confused": {
        "keywords": ["face", "indifference", "huh", "weird", "hmmm", ":/"],
        "char": "😕",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "slightly_frowning_face": {
        "keywords": ["face", "frowning", "disappointed", "sad", "upset"],
        "char": "🙁",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "frowning_face": {
        "keywords": ["face", "sad", "upset", "frown"],
        "char": "☹",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "persevere": {
        "keywords": ["face", "sick", "no", "upset", "oops"],
        "char": "😣",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "confounded": {
        "keywords": ["face", "confused", "sick", "unwell", "oops", ":S"],
        "char": "😖",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "tired_face": {
        "keywords": ["sick", "whine", "upset", "frustrated"],
        "char": "😫",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "weary": {
        "keywords": ["face", "tired", "sleepy", "sad", "frustrated", "upset"],
        "char": "😩",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "pleading": {
        "keywords": ["face", "begging", "mercy"],
        "char": "🥺",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "triumph": {
        "keywords": ["face", "gas", "phew", "proud", "pride"],
        "char": "😤",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "open_mouth": {
        "keywords": ["face", "surprise", "impressed", "wow", "whoa", ":O"],
        "char": "😮",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "scream": {
        "keywords": ["face", "munch", "scared", "omg"],
        "char": "😱",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "fearful": {
        "keywords": ["face", "scared", "terrified", "nervous", "oops", "huh"],
        "char": "😨",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "cold_sweat": {
        "keywords": ["face", "nervous", "sweat"],
        "char": "😰",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "hushed": {
        "keywords": ["face", "woo", "shh"],
        "char": "😯",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "frowning": {
        "keywords": ["face", "aw", "what"],
        "char": "😦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "anguished": {
        "keywords": ["face", "stunned", "nervous"],
        "char": "😧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "cry": {
        "keywords": ["face", "tears", "sad", "depressed", "upset", ":'\\\\("],
        "char": "😢",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "disappointed_relieved": {
        "keywords": ["face", "phew", "sweat", "nervous"],
        "char": "😥",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "drooling_face": {
        "keywords": ["face"],
        "char": "🤤",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sleepy": {
        "keywords": ["face", "tired", "rest", "nap"],
        "char": "😪",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sweat": {
        "keywords": ["face", "hot", "sad", "tired", "exercise"],
        "char": "😓",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "hot": {
        "keywords": ["face", "feverish", "heat", "red", "sweating"],
        "char": "🥵",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "cold": {
        "keywords": ["face", "blue", "freezing", "frozen", "frostbite", "icicles"],
        "char": "🥶",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sob": {
        "keywords": ["face", "cry", "tears", "sad", "upset", "depressed"],
        "char": "😭",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "dizzy_face": {
        "keywords": ["spent", "unconscious", "xox", "dizzy"],
        "char": "😵",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "astonished": {
        "keywords": ["face", "xox", "surprised", "poisoned"],
        "char": "😲",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "zipper_mouth_face": {
        "keywords": ["face", "sealed", "zipper", "secret"],
        "char": "🤐",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "nauseated_face": {
        "keywords": ["face", "vomit", "gross", "green", "sick", "throw up", "ill"],
        "char": "🤢",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sneezing_face": {
        "keywords": ["face", "gesundheit", "sneeze", "sick", "allergy"],
        "char": "🤧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "vomiting": {
        "keywords": ["face", "sick"],
        "char": "🤮",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "mask": {
        "keywords": ["face", "sick", "ill", "disease"],
        "char": "😷",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "face_with_thermometer": {
        "keywords": ["sick", "temperature", "thermometer", "cold", "fever"],
        "char": "🤒",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "face_with_head_bandage": {
        "keywords": ["injured", "clumsy", "bandage", "hurt"],
        "char": "🤕",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "woozy": {
        "keywords": ["face", "dizzy", "intoxicated", "tipsy", "wavy"],
        "char": "🥴",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sleeping": {
        "keywords": ["face", "tired", "sleepy", "night", "zzz"],
        "char": "😴",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "zzz": {
        "keywords": ["sleepy", "tired", "dream"],
        "char": "💤",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "poop": {
        "keywords": ["hankey", "shitface", "fail", "turd", "shit"],
        "char": "💩",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smiling_imp": {
        "keywords": ["devil", "horns"],
        "char": "😈",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "imp": {
        "keywords": ["devil", "angry", "horns"],
        "char": "👿",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "japanese_ogre": {
        "keywords": ["monster", "red", "mask", "halloween", "scary", "creepy", "devil", "demon", "japanese", "ogre"],
        "char": "👹",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "japanese_goblin": {
        "keywords": ["red", "evil", "mask", "monster", "scary", "creepy", "japanese", "goblin"],
        "char": "👺",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "skull": {
        "keywords": ["dead", "skeleton", "creepy", "death"],
        "char": "💀",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "ghost": {
        "keywords": ["halloween", "spooky", "scary"],
        "char": "👻",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "alien": {
        "keywords": ["UFO", "paul", "weird", "outer_space"],
        "char": "👽",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "robot": {
        "keywords": ["computer", "machine", "bot"],
        "char": "🤖",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smiley_cat": {
        "keywords": ["animal", "cats", "happy", "smile"],
        "char": "😺",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smile_cat": {
        "keywords": ["animal", "cats", "smile"],
        "char": "😸",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "joy_cat": {
        "keywords": ["animal", "cats", "haha", "happy", "tears"],
        "char": "😹",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "heart_eyes_cat": {
        "keywords": ["animal", "love", "like", "affection", "cats", "valentines", "heart"],
        "char": "😻",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "smirk_cat": {
        "keywords": ["animal", "cats", "smirk"],
        "char": "😼",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kissing_cat": {
        "keywords": ["animal", "cats", "kiss"],
        "char": "😽",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "scream_cat": {
        "keywords": ["animal", "cats", "munch", "scared", "scream"],
        "char": "🙀",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "crying_cat_face": {
        "keywords": ["animal", "tears", "weep", "sad", "cats", "upset", "cry"],
        "char": "😿",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "pouting_cat": {
        "keywords": ["animal", "cats"],
        "char": "😾",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "palms_up": {
        "keywords": ["hands", "gesture", "cupped", "prayer"],
        "char": "🤲",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "raised_hands": {
        "keywords": ["gesture", "hooray", "yea", "celebration", "hands"],
        "char": "🙌",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "clap": {
        "keywords": ["hands", "praise", "applause", "congrats", "yay"],
        "char": "👏",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "wave": {
        "keywords": ["hands", "gesture", "goodbye", "solong", "farewell", "hello", "hi", "palm"],
        "char": "👋",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "call_me_hand": {
        "keywords": ["hands", "gesture"],
        "char": "🤙",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "\\\\+1": {
        "keywords": ["thumbsup", "yes", "awesome", "good", "agree", "accept", "cool", "hand", "like"],
        "char": "👍",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "-1": {
        "keywords": ["thumbsdown", "no", "dislike", "hand"],
        "char": "👎",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "facepunch": {
        "keywords": ["angry", "violence", "fist", "hit", "attack", "hand"],
        "char": "👊",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "fist": {
        "keywords": ["fingers", "hand", "grasp"],
        "char": "✊",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "fist_left": {
        "keywords": ["hand", "fistbump"],
        "char": "🤛",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "fist_right": {
        "keywords": ["hand", "fistbump"],
        "char": "🤜",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "v": {
        "keywords": ["fingers", "ohyeah", "hand", "peace", "victory", "two"],
        "char": "✌",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "ok_hand": {
        "keywords": ["fingers", "limbs", "perfect", "ok", "okay"],
        "char": "👌",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "raised_hand": {
        "keywords": ["fingers", "stop", "highfive", "palm", "ban"],
        "char": "✋",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "raised_back_of_hand": {
        "keywords": ["fingers", "raised", "backhand"],
        "char": "🤚",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "open_hands": {
        "keywords": ["fingers", "butterfly", "hands", "open"],
        "char": "👐",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "muscle": {
        "keywords": ["arm", "flex", "hand", "summer", "strong", "biceps"],
        "char": "💪",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "pray": {
        "keywords": ["please", "hope", "wish", "namaste", "highfive"],
        "char": "🙏",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "foot": {
        "keywords": ["kick", "stomp"],
        "char": "🦶",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "leg": {
        "keywords": ["kick", "limb"],
        "char": "🦵",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "handshake": {
        "keywords": ["agreement", "shake"],
        "char": "🤝",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "point_up": {
        "keywords": ["hand", "fingers", "direction", "up"],
        "char": "☝",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "point_up_2": {
        "keywords": ["fingers", "hand", "direction", "up"],
        "char": "👆",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "point_down": {
        "keywords": ["fingers", "hand", "direction", "down"],
        "char": "👇",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "point_left": {
        "keywords": ["direction", "fingers", "hand", "left"],
        "char": "👈",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "point_right": {
        "keywords": ["fingers", "hand", "direction", "right"],
        "char": "👉",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "fu": {
        "keywords": ["hand", "fingers", "rude", "middle", "flipping"],
        "char": "🖕",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "raised_hand_with_fingers_splayed": {
        "keywords": ["hand", "fingers", "palm"],
        "char": "🖐",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "love_you": {
        "keywords": ["hand", "fingers", "gesture"],
        "char": "🤟",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "metal": {
        "keywords": ["hand", "fingers", "evil_eye", "sign_of_horns", "rock_on"],
        "char": "🤘",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "crossed_fingers": {
        "keywords": ["good", "lucky"],
        "char": "🤞",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "vulcan_salute": {
        "keywords": ["hand", "fingers", "spock", "star trek"],
        "char": "🖖",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "writing_hand": {
        "keywords": ["lower_left_ballpoint_pen", "stationery", "write", "compose"],
        "char": "✍",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "selfie": {
        "keywords": ["camera", "phone"],
        "char": "🤳",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "nail_care": {
        "keywords": ["beauty", "manicure", "finger", "fashion", "nail"],
        "char": "💅",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "lips": {
        "keywords": ["mouth", "kiss"],
        "char": "👄",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "tooth": {
        "keywords": ["teeth", "dentist"],
        "char": "🦷",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "tongue": {
        "keywords": ["mouth", "playful"],
        "char": "👅",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "ear": {
        "keywords": ["face", "hear", "sound", "listen"],
        "char": "👂",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "nose": {
        "keywords": ["smell", "sniff"],
        "char": "👃",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "eye": {
        "keywords": ["face", "look", "see", "watch", "stare"],
        "char": "👁",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "eyes": {
        "keywords": ["look", "watch", "stalk", "peek", "see"],
        "char": "👀",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "brain": {
        "keywords": ["smart", "intelligent"],
        "char": "🧠",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "bust_in_silhouette": {
        "keywords": ["user", "person", "human"],
        "char": "👤",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "busts_in_silhouette": {
        "keywords": ["user", "person", "human", "group", "team"],
        "char": "👥",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "speaking_head": {
        "keywords": ["user", "person", "human", "sing", "say", "talk"],
        "char": "🗣",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "baby": {
        "keywords": ["child", "boy", "girl", "toddler"],
        "char": "👶",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "child": {
        "keywords": ["gender-neutral", "young"],
        "char": "🧒",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "boy": {
        "keywords": ["man", "male", "guy", "teenager"],
        "char": "👦",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "girl": {
        "keywords": ["female", "woman", "teenager"],
        "char": "👧",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "adult": {
        "keywords": ["gender-neutral", "person"],
        "char": "🧑",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man": {
        "keywords": ["mustache", "father", "dad", "guy", "classy", "sir", "moustache"],
        "char": "👨",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman": {
        "keywords": ["female", "girls", "lady"],
        "char": "👩",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "blonde_woman": {
        "keywords": ["woman", "female", "girl", "blonde", "person"],
        "char": "👱‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "blonde_man": {
        "keywords": ["man", "male", "boy", "blonde", "guy", "person"],
        "char": "👱",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "bearded_person": {
        "keywords": ["person", "bewhiskered"],
        "char": "🧔",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "older_adult": {
        "keywords": ["human", "elder", "senior", "gender-neutral"],
        "char": "🧓",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "older_man": {
        "keywords": ["human", "male", "men", "old", "elder", "senior"],
        "char": "👴",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "older_woman": {
        "keywords": ["human", "female", "women", "lady", "old", "elder", "senior"],
        "char": "👵",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_with_gua_pi_mao": {
        "keywords": ["male", "boy", "chinese"],
        "char": "👲",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_with_headscarf": {
        "keywords": ["female", "hijab", "mantilla", "tichel"],
        "char": "🧕",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_with_turban": {
        "keywords": ["female", "indian", "hinduism", "arabs", "woman"],
        "char": "👳‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_with_turban": {
        "keywords": ["male", "indian", "hinduism", "arabs"],
        "char": "👳",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "policewoman": {
        "keywords": ["woman", "police", "law", "legal", "enforcement", "arrest", "911", "female"],
        "char": "👮‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "policeman": {
        "keywords": ["man", "police", "law", "legal", "enforcement", "arrest", "911"],
        "char": "👮",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "construction_worker_woman": {
        "keywords": ["female", "human", "wip", "build", "construction", "worker", "labor", "woman"],
        "char": "👷‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "construction_worker_man": {
        "keywords": ["male", "human", "wip", "guy", "build", "construction", "worker", "labor"],
        "char": "👷",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "guardswoman": {
        "keywords": ["uk", "gb", "british", "female", "royal", "woman"],
        "char": "💂‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "guardsman": {
        "keywords": ["uk", "gb", "british", "male", "guy", "royal"],
        "char": "💂",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "female_detective": {
        "keywords": ["human", "spy", "detective", "female", "woman"],
        "char": "🕵️‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "male_detective": {
        "keywords": ["human", "spy", "detective"],
        "char": "🕵",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_health_worker": {
        "keywords": ["doctor", "nurse", "therapist", "healthcare", "woman", "human"],
        "char": "👩‍⚕️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_health_worker": {
        "keywords": ["doctor", "nurse", "therapist", "healthcare", "man", "human"],
        "char": "👨‍⚕️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_farmer": {
        "keywords": ["rancher", "gardener", "woman", "human"],
        "char": "👩‍🌾",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_farmer": {
        "keywords": ["rancher", "gardener", "man", "human"],
        "char": "👨‍🌾",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_cook": {
        "keywords": ["chef", "woman", "human"],
        "char": "👩‍🍳",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_cook": {
        "keywords": ["chef", "man", "human"],
        "char": "👨‍🍳",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_student": {
        "keywords": ["graduate", "woman", "human"],
        "char": "👩‍🎓",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_student": {
        "keywords": ["graduate", "man", "human"],
        "char": "👨‍🎓",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_singer": {
        "keywords": ["rockstar", "entertainer", "woman", "human"],
        "char": "👩‍🎤",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_singer": {
        "keywords": ["rockstar", "entertainer", "man", "human"],
        "char": "👨‍🎤",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_teacher": {
        "keywords": ["instructor", "professor", "woman", "human"],
        "char": "👩‍🏫",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_teacher": {
        "keywords": ["instructor", "professor", "man", "human"],
        "char": "👨‍🏫",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_factory_worker": {
        "keywords": ["assembly", "industrial", "woman", "human"],
        "char": "👩‍🏭",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_factory_worker": {
        "keywords": ["assembly", "industrial", "man", "human"],
        "char": "👨‍🏭",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_technologist": {
        "keywords": ["coder", "developer", "engineer", "programmer", "software", "woman", "human", "laptop", "computer"],
        "char": "👩‍💻",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_technologist": {
        "keywords": ["coder", "developer", "engineer", "programmer", "software", "man", "human", "laptop", "computer"],
        "char": "👨‍💻",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_office_worker": {
        "keywords": ["business", "manager", "woman", "human"],
        "char": "👩‍💼",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_office_worker": {
        "keywords": ["business", "manager", "man", "human"],
        "char": "👨‍💼",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_mechanic": {
        "keywords": ["plumber", "woman", "human", "wrench"],
        "char": "👩‍🔧",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_mechanic": {
        "keywords": ["plumber", "man", "human", "wrench"],
        "char": "👨‍🔧",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_scientist": {
        "keywords": ["biologist", "chemist", "engineer", "physicist", "woman", "human"],
        "char": "👩‍🔬",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_scientist": {
        "keywords": ["biologist", "chemist", "engineer", "physicist", "man", "human"],
        "char": "👨‍🔬",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_artist": {
        "keywords": ["painter", "woman", "human"],
        "char": "👩‍🎨",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_artist": {
        "keywords": ["painter", "man", "human"],
        "char": "👨‍🎨",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_firefighter": {
        "keywords": ["fireman", "woman", "human"],
        "char": "👩‍🚒",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_firefighter": {
        "keywords": ["fireman", "man", "human"],
        "char": "👨‍🚒",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_pilot": {
        "keywords": ["aviator", "plane", "woman", "human"],
        "char": "👩‍✈️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_pilot": {
        "keywords": ["aviator", "plane", "man", "human"],
        "char": "👨‍✈️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_astronaut": {
        "keywords": ["space", "rocket", "woman", "human"],
        "char": "👩‍🚀",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_astronaut": {
        "keywords": ["space", "rocket", "man", "human"],
        "char": "👨‍🚀",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_judge": {
        "keywords": ["justice", "court", "woman", "human"],
        "char": "👩‍⚖️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_judge": {
        "keywords": ["justice", "court", "man", "human"],
        "char": "👨‍⚖️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_superhero": {
        "keywords": ["woman", "female", "good", "heroine", "superpowers"],
        "char": "🦸‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_superhero": {
        "keywords": ["man", "male", "good", "hero", "superpowers"],
        "char": "🦸‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_supervillain": {
        "keywords": ["woman", "female", "evil", "bad", "criminal", "heroine", "superpowers"],
        "char": "🦹‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_supervillain": {
        "keywords": ["man", "male", "evil", "bad", "criminal", "hero", "superpowers"],
        "char": "🦹‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "mrs_claus": {
        "keywords": ["woman", "female", "xmas", "mother christmas"],
        "char": "🤶",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "santa": {
        "keywords": ["festival", "man", "male", "xmas", "father christmas"],
        "char": "🎅",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "sorceress": {
        "keywords": ["woman", "female", "mage", "witch"],
        "char": "🧙‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "wizard": {
        "keywords": ["man", "male", "mage", "sorcerer"],
        "char": "🧙‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_elf": {
        "keywords": ["woman", "female"],
        "char": "🧝‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_elf": {
        "keywords": ["man", "male"],
        "char": "🧝‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_vampire": {
        "keywords": ["woman", "female"],
        "char": "🧛‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_vampire": {
        "keywords": ["man", "male", "dracula"],
        "char": "🧛‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_zombie": {
        "keywords": ["woman", "female", "undead", "walking dead"],
        "char": "🧟‍♀️",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "man_zombie": {
        "keywords": ["man", "male", "dracula", "undead", "walking dead"],
        "char": "🧟‍♂️",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "woman_genie": {
        "keywords": ["woman", "female"],
        "char": "🧞‍♀️",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "man_genie": {
        "keywords": ["man", "male"],
        "char": "🧞‍♂️",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "mermaid": {
        "keywords": ["woman", "female", "merwoman", "ariel"],
        "char": "🧜‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "merman": {
        "keywords": ["man", "male", "triton"],
        "char": "🧜‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_fairy": {
        "keywords": ["woman", "female"],
        "char": "🧚‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_fairy": {
        "keywords": ["man", "male"],
        "char": "🧚‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "angel": {
        "keywords": ["heaven", "wings", "halo"],
        "char": "👼",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "pregnant_woman": {
        "keywords": ["baby"],
        "char": "🤰",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "breastfeeding": {
        "keywords": ["nursing", "baby"],
        "char": "🤱",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "princess": {
        "keywords": ["girl", "woman", "female", "blond", "crown", "royal", "queen"],
        "char": "👸",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "prince": {
        "keywords": ["boy", "man", "male", "crown", "royal", "king"],
        "char": "🤴",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "bride_with_veil": {
        "keywords": ["couple", "marriage", "wedding", "woman", "bride"],
        "char": "👰",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_in_tuxedo": {
        "keywords": ["couple", "marriage", "wedding", "groom"],
        "char": "🤵",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "running_woman": {
        "keywords": ["woman", "walking", "exercise", "race", "running", "female"],
        "char": "🏃‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "running_man": {
        "keywords": ["man", "walking", "exercise", "race", "running"],
        "char": "🏃",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "walking_woman": {
        "keywords": ["human", "feet", "steps", "woman", "female"],
        "char": "🚶‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "walking_man": {
        "keywords": ["human", "feet", "steps"],
        "char": "🚶",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "dancer": {
        "keywords": ["female", "girl", "woman", "fun"],
        "char": "💃",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_dancing": {
        "keywords": ["male", "boy", "fun", "dancer"],
        "char": "🕺",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "dancing_women": {
        "keywords": ["female", "bunny", "women", "girls"],
        "char": "👯",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "dancing_men": {
        "keywords": ["male", "bunny", "men", "boys"],
        "char": "👯‍♂️",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "couple": {
        "keywords": ["pair", "people", "human", "love", "date", "dating", "like", "affection", "valentines", "marriage"],
        "char": "👫",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "two_men_holding_hands": {
        "keywords": ["pair", "couple", "love", "like", "bromance", "friendship", "people", "human"],
        "char": "👬",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "two_women_holding_hands": {
        "keywords": ["pair", "friendship", "couple", "love", "like", "female", "people", "human"],
        "char": "👭",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "bowing_woman": {
        "keywords": ["woman", "female", "girl"],
        "char": "🙇‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "bowing_man": {
        "keywords": ["man", "male", "boy"],
        "char": "🙇",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_facepalming": {
        "keywords": ["man", "male", "boy", "disbelief"],
        "char": "🤦‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_facepalming": {
        "keywords": ["woman", "female", "girl", "disbelief"],
        "char": "🤦‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_shrugging": {
        "keywords": ["woman", "female", "girl", "confused", "indifferent", "doubt"],
        "char": "🤷",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_shrugging": {
        "keywords": ["man", "male", "boy", "confused", "indifferent", "doubt"],
        "char": "🤷‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "tipping_hand_woman": {
        "keywords": ["female", "girl", "woman", "human", "information"],
        "char": "💁",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "tipping_hand_man": {
        "keywords": ["male", "boy", "man", "human", "information"],
        "char": "💁‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "no_good_woman": {
        "keywords": ["female", "girl", "woman", "nope"],
        "char": "🙅",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "no_good_man": {
        "keywords": ["male", "boy", "man", "nope"],
        "char": "🙅‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "ok_woman": {
        "keywords": ["women", "girl", "female", "pink", "human", "woman"],
        "char": "🙆",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "ok_man": {
        "keywords": ["men", "boy", "male", "blue", "human", "man"],
        "char": "🙆‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "raising_hand_woman": {
        "keywords": ["female", "girl", "woman"],
        "char": "🙋",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "raising_hand_man": {
        "keywords": ["male", "boy", "man"],
        "char": "🙋‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "pouting_woman": {
        "keywords": ["female", "girl", "woman"],
        "char": "🙎",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "pouting_man": {
        "keywords": ["male", "boy", "man"],
        "char": "🙎‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "frowning_woman": {
        "keywords": ["female", "girl", "woman", "sad", "depressed", "discouraged", "unhappy"],
        "char": "🙍",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "frowning_man": {
        "keywords": ["male", "boy", "man", "sad", "depressed", "discouraged", "unhappy"],
        "char": "🙍‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "haircut_woman": {
        "keywords": ["female", "girl", "woman"],
        "char": "💇",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "haircut_man": {
        "keywords": ["male", "boy", "man"],
        "char": "💇‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "massage_woman": {
        "keywords": ["female", "girl", "woman", "head"],
        "char": "💆",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "massage_man": {
        "keywords": ["male", "boy", "man", "head"],
        "char": "💆‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "woman_in_steamy_room": {
        "keywords": ["female", "woman", "spa", "steamroom", "sauna"],
        "char": "🧖‍♀️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "man_in_steamy_room": {
        "keywords": ["male", "man", "spa", "steamroom", "sauna"],
        "char": "🧖‍♂️",
        "fitzpatrick_scale": true,
        "category": "people"
    },
    "couple_with_heart_woman_man": {
        "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
        "char": "💑",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "couple_with_heart_woman_woman": {
        "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
        "char": "👩‍❤️‍👩",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "couple_with_heart_man_man": {
        "keywords": ["pair", "love", "like", "affection", "human", "dating", "valentines", "marriage"],
        "char": "👨‍❤️‍👨",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "couplekiss_man_woman": {
        "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
        "char": "💏",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "couplekiss_woman_woman": {
        "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
        "char": "👩‍❤️‍💋‍👩",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "couplekiss_man_man": {
        "keywords": ["pair", "valentines", "love", "like", "dating", "marriage"],
        "char": "👨‍❤️‍💋‍👨",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_woman_boy": {
        "keywords": ["home", "parents", "child", "mom", "dad", "father", "mother", "people", "human"],
        "char": "👪",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_woman_girl": {
        "keywords": ["home", "parents", "people", "human", "child"],
        "char": "👨‍👩‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_woman_girl_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👩‍👧‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_woman_boy_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👩‍👦‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_woman_girl_girl": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👩‍👧‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_woman_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👩‍👩‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_woman_girl": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👩‍👩‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_woman_girl_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👩‍👩‍👧‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_woman_boy_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👩‍👩‍👦‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_woman_girl_girl": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👩‍👩‍👧‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_man_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👨‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_man_girl": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👨‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_man_girl_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👨‍👧‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_man_boy_boy": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👨‍👦‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_man_girl_girl": {
        "keywords": ["home", "parents", "people", "human", "children"],
        "char": "👨‍👨‍👧‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_boy": {
        "keywords": ["home", "parent", "people", "human", "child"],
        "char": "👩‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_girl": {
        "keywords": ["home", "parent", "people", "human", "child"],
        "char": "👩‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_girl_boy": {
        "keywords": ["home", "parent", "people", "human", "children"],
        "char": "👩‍👧‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_boy_boy": {
        "keywords": ["home", "parent", "people", "human", "children"],
        "char": "👩‍👦‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_woman_girl_girl": {
        "keywords": ["home", "parent", "people", "human", "children"],
        "char": "👩‍👧‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_boy": {
        "keywords": ["home", "parent", "people", "human", "child"],
        "char": "👨‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_girl": {
        "keywords": ["home", "parent", "people", "human", "child"],
        "char": "👨‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_girl_boy": {
        "keywords": ["home", "parent", "people", "human", "children"],
        "char": "👨‍👧‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_boy_boy": {
        "keywords": ["home", "parent", "people", "human", "children"],
        "char": "👨‍👦‍👦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "family_man_girl_girl": {
        "keywords": ["home", "parent", "people", "human", "children"],
        "char": "👨‍👧‍👧",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "yarn": {
        "keywords": ["ball", "crochet", "knit"],
        "char": "🧶",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "thread": {
        "keywords": ["needle", "sewing", "spool", "string"],
        "char": "🧵",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "coat": {
        "keywords": ["jacket"],
        "char": "🧥",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "labcoat": {
        "keywords": ["doctor", "experiment", "scientist", "chemist"],
        "char": "🥼",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "womans_clothes": {
        "keywords": ["fashion", "shopping_bags", "female"],
        "char": "👚",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "tshirt": {
        "keywords": ["fashion", "cloth", "casual", "shirt", "tee"],
        "char": "👕",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "jeans": {
        "keywords": ["fashion", "shopping"],
        "char": "👖",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "necktie": {
        "keywords": ["shirt", "suitup", "formal", "fashion", "cloth", "business"],
        "char": "👔",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "dress": {
        "keywords": ["clothes", "fashion", "shopping"],
        "char": "👗",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "bikini": {
        "keywords": ["swimming", "female", "woman", "girl", "fashion", "beach", "summer"],
        "char": "👙",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kimono": {
        "keywords": ["dress", "fashion", "women", "female", "japanese"],
        "char": "👘",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "lipstick": {
        "keywords": ["female", "girl", "fashion", "woman"],
        "char": "💄",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "kiss": {
        "keywords": ["face", "lips", "love", "like", "affection", "valentines"],
        "char": "💋",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "footprints": {
        "keywords": ["feet", "tracking", "walking", "beach"],
        "char": "👣",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "flat_shoe": {
        "keywords": ["ballet", "slip-on", "slipper"],
        "char": "🥿",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "high_heel": {
        "keywords": ["fashion", "shoes", "female", "pumps", "stiletto"],
        "char": "👠",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "sandal": {
        "keywords": ["shoes", "fashion", "flip flops"],
        "char": "👡",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "boot": {
        "keywords": ["shoes", "fashion"],
        "char": "👢",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "mans_shoe": {
        "keywords": ["fashion", "male"],
        "char": "👞",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "athletic_shoe": {
        "keywords": ["shoes", "sports", "sneakers"],
        "char": "👟",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "hiking_boot": {
        "keywords": ["backpacking", "camping", "hiking"],
        "char": "🥾",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "socks": {
        "keywords": ["stockings", "clothes"],
        "char": "🧦",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "gloves": {
        "keywords": ["hands", "winter", "clothes"],
        "char": "🧤",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "scarf": {
        "keywords": ["neck", "winter", "clothes"],
        "char": "🧣",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "womans_hat": {
        "keywords": ["fashion", "accessories", "female", "lady", "spring"],
        "char": "👒",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "tophat": {
        "keywords": ["magic", "gentleman", "classy", "circus"],
        "char": "🎩",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "billed_hat": {
        "keywords": ["cap", "baseball"],
        "char": "🧢",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "rescue_worker_helmet": {
        "keywords": ["construction", "build"],
        "char": "⛑",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "mortar_board": {
        "keywords": ["school", "college", "degree", "university", "graduation", "cap", "hat", "legal", "learn", "education"],
        "char": "🎓",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "crown": {
        "keywords": ["king", "kod", "leader", "royalty", "lord"],
        "char": "👑",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "school_satchel": {
        "keywords": ["student", "education", "bag", "backpack"],
        "char": "🎒",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "luggage": {
        "keywords": ["packing", "travel"],
        "char": "🧳",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "pouch": {
        "keywords": ["bag", "accessories", "shopping"],
        "char": "👝",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "purse": {
        "keywords": ["fashion", "accessories", "money", "sales", "shopping"],
        "char": "👛",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "handbag": {
        "keywords": ["fashion", "accessory", "accessories", "shopping"],
        "char": "👜",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "briefcase": {
        "keywords": ["business", "documents", "work", "law", "legal", "job", "career"],
        "char": "💼",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "eyeglasses": {
        "keywords": ["fashion", "accessories", "eyesight", "nerdy", "dork", "geek"],
        "char": "👓",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "dark_sunglasses": {
        "keywords": ["face", "cool", "accessories"],
        "char": "🕶",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "goggles": {
        "keywords": ["eyes", "protection", "safety"],
        "char": "🥽",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "ring": {
        "keywords": ["wedding", "propose", "marriage", "valentines", "diamond", "fashion", "jewelry", "gem", "engagement"],
        "char": "💍",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "closed_umbrella": {
        "keywords": ["weather", "rain", "drizzle"],
        "char": "🌂",
        "fitzpatrick_scale": false,
        "category": "people"
    },
    "dog": {
        "keywords": ["animal", "friend", "nature", "woof", "puppy", "pet", "faithful"],
        "char": "🐶",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cat": {
        "keywords": ["animal", "meow", "nature", "pet", "kitten"],
        "char": "🐱",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "mouse": {
        "keywords": ["animal", "nature", "cheese_wedge", "rodent"],
        "char": "🐭",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hamster": {
        "keywords": ["animal", "nature"],
        "char": "🐹",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "rabbit": {
        "keywords": ["animal", "nature", "pet", "spring", "magic", "bunny"],
        "char": "🐰",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "fox_face": {
        "keywords": ["animal", "nature", "face"],
        "char": "🦊",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "bear": {
        "keywords": ["animal", "nature", "wild"],
        "char": "🐻",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "panda_face": {
        "keywords": ["animal", "nature", "panda"],
        "char": "🐼",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "koala": {
        "keywords": ["animal", "nature"],
        "char": "🐨",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "tiger": {
        "keywords": ["animal", "cat", "danger", "wild", "nature", "roar"],
        "char": "🐯",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "lion": {
        "keywords": ["animal", "nature"],
        "char": "🦁",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cow": {
        "keywords": ["beef", "ox", "animal", "nature", "moo", "milk"],
        "char": "🐮",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "pig": {
        "keywords": ["animal", "oink", "nature"],
        "char": "🐷",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "pig_nose": {
        "keywords": ["animal", "oink"],
        "char": "🐽",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "frog": {
        "keywords": ["animal", "nature", "croak", "toad"],
        "char": "🐸",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "squid": {
        "keywords": ["animal", "nature", "ocean", "sea"],
        "char": "🦑",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "octopus": {
        "keywords": ["animal", "creature", "ocean", "sea", "nature", "beach"],
        "char": "🐙",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "shrimp": {
        "keywords": ["animal", "ocean", "nature", "seafood"],
        "char": "🦐",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "monkey_face": {
        "keywords": ["animal", "nature", "circus"],
        "char": "🐵",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "gorilla": {
        "keywords": ["animal", "nature", "circus"],
        "char": "🦍",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "see_no_evil": {
        "keywords": ["monkey", "animal", "nature", "haha"],
        "char": "🙈",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hear_no_evil": {
        "keywords": ["animal", "monkey", "nature"],
        "char": "🙉",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "speak_no_evil": {
        "keywords": ["monkey", "animal", "nature", "omg"],
        "char": "🙊",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "monkey": {
        "keywords": ["animal", "nature", "banana", "circus"],
        "char": "🐒",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "chicken": {
        "keywords": ["animal", "cluck", "nature", "bird"],
        "char": "🐔",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "penguin": {
        "keywords": ["animal", "nature"],
        "char": "🐧",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "bird": {
        "keywords": ["animal", "nature", "fly", "tweet", "spring"],
        "char": "🐦",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "baby_chick": {
        "keywords": ["animal", "chicken", "bird"],
        "char": "🐤",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hatching_chick": {
        "keywords": ["animal", "chicken", "egg", "born", "baby", "bird"],
        "char": "🐣",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hatched_chick": {
        "keywords": ["animal", "chicken", "baby", "bird"],
        "char": "🐥",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "duck": {
        "keywords": ["animal", "nature", "bird", "mallard"],
        "char": "🦆",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "eagle": {
        "keywords": ["animal", "nature", "bird"],
        "char": "🦅",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "owl": {
        "keywords": ["animal", "nature", "bird", "hoot"],
        "char": "🦉",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "bat": {
        "keywords": ["animal", "nature", "blind", "vampire"],
        "char": "🦇",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "wolf": {
        "keywords": ["animal", "nature", "wild"],
        "char": "🐺",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "boar": {
        "keywords": ["animal", "nature"],
        "char": "🐗",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "horse": {
        "keywords": ["animal", "brown", "nature"],
        "char": "🐴",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "unicorn": {
        "keywords": ["animal", "nature", "mystical"],
        "char": "🦄",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "honeybee": {
        "keywords": ["animal", "insect", "nature", "bug", "spring", "honey"],
        "char": "🐝",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "bug": {
        "keywords": ["animal", "insect", "nature", "worm"],
        "char": "🐛",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "butterfly": {
        "keywords": ["animal", "insect", "nature", "caterpillar"],
        "char": "🦋",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "snail": {
        "keywords": ["slow", "animal", "shell"],
        "char": "🐌",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "beetle": {
        "keywords": ["animal", "insect", "nature", "ladybug"],
        "char": "🐞",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "ant": {
        "keywords": ["animal", "insect", "nature", "bug"],
        "char": "🐜",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "grasshopper": {
        "keywords": ["animal", "cricket", "chirp"],
        "char": "🦗",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "spider": {
        "keywords": ["animal", "arachnid"],
        "char": "🕷",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "scorpion": {
        "keywords": ["animal", "arachnid"],
        "char": "🦂",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "crab": {
        "keywords": ["animal", "crustacean"],
        "char": "🦀",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "snake": {
        "keywords": ["animal", "evil", "nature", "hiss", "python"],
        "char": "🐍",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "lizard": {
        "keywords": ["animal", "nature", "reptile"],
        "char": "🦎",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "t-rex": {
        "keywords": ["animal", "nature", "dinosaur", "tyrannosaurus", "extinct"],
        "char": "🦖",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sauropod": {
        "keywords": ["animal", "nature", "dinosaur", "brachiosaurus", "brontosaurus", "diplodocus", "extinct"],
        "char": "🦕",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "turtle": {
        "keywords": ["animal", "slow", "nature", "tortoise"],
        "char": "🐢",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "tropical_fish": {
        "keywords": ["animal", "swim", "ocean", "beach", "nemo"],
        "char": "🐠",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "fish": {
        "keywords": ["animal", "food", "nature"],
        "char": "🐟",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "blowfish": {
        "keywords": ["animal", "nature", "food", "sea", "ocean"],
        "char": "🐡",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dolphin": {
        "keywords": ["animal", "nature", "fish", "sea", "ocean", "flipper", "fins", "beach"],
        "char": "🐬",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "shark": {
        "keywords": ["animal", "nature", "fish", "sea", "ocean", "jaws", "fins", "beach"],
        "char": "🦈",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "whale": {
        "keywords": ["animal", "nature", "sea", "ocean"],
        "char": "🐳",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "whale2": {
        "keywords": ["animal", "nature", "sea", "ocean"],
        "char": "🐋",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "crocodile": {
        "keywords": ["animal", "nature", "reptile", "lizard", "alligator"],
        "char": "🐊",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "leopard": {
        "keywords": ["animal", "nature"],
        "char": "🐆",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "zebra": {
        "keywords": ["animal", "nature", "stripes", "safari"],
        "char": "🦓",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "tiger2": {
        "keywords": ["animal", "nature", "roar"],
        "char": "🐅",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "water_buffalo": {
        "keywords": ["animal", "nature", "ox", "cow"],
        "char": "🐃",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "ox": {
        "keywords": ["animal", "cow", "beef"],
        "char": "🐂",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cow2": {
        "keywords": ["beef", "ox", "animal", "nature", "moo", "milk"],
        "char": "🐄",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "deer": {
        "keywords": ["animal", "nature", "horns", "venison"],
        "char": "🦌",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dromedary_camel": {
        "keywords": ["animal", "hot", "desert", "hump"],
        "char": "🐪",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "camel": {
        "keywords": ["animal", "nature", "hot", "desert", "hump"],
        "char": "🐫",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "giraffe": {
        "keywords": ["animal", "nature", "spots", "safari"],
        "char": "🦒",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "elephant": {
        "keywords": ["animal", "nature", "nose", "th", "circus"],
        "char": "🐘",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "rhinoceros": {
        "keywords": ["animal", "nature", "horn"],
        "char": "🦏",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "goat": {
        "keywords": ["animal", "nature"],
        "char": "🐐",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "ram": {
        "keywords": ["animal", "sheep", "nature"],
        "char": "🐏",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sheep": {
        "keywords": ["animal", "nature", "wool", "shipit"],
        "char": "🐑",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "racehorse": {
        "keywords": ["animal", "gamble", "luck"],
        "char": "🐎",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "pig2": {
        "keywords": ["animal", "nature"],
        "char": "🐖",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "rat": {
        "keywords": ["animal", "mouse", "rodent"],
        "char": "🐀",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "mouse2": {
        "keywords": ["animal", "nature", "rodent"],
        "char": "🐁",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "rooster": {
        "keywords": ["animal", "nature", "chicken"],
        "char": "🐓",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "turkey": {
        "keywords": ["animal", "bird"],
        "char": "🦃",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dove": {
        "keywords": ["animal", "bird"],
        "char": "🕊",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dog2": {
        "keywords": ["animal", "nature", "friend", "doge", "pet", "faithful"],
        "char": "🐕",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "poodle": {
        "keywords": ["dog", "animal", "101", "nature", "pet"],
        "char": "🐩",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cat2": {
        "keywords": ["animal", "meow", "pet", "cats"],
        "char": "🐈",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "rabbit2": {
        "keywords": ["animal", "nature", "pet", "magic", "spring"],
        "char": "🐇",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "chipmunk": {
        "keywords": ["animal", "nature", "rodent", "squirrel"],
        "char": "🐿",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hedgehog": {
        "keywords": ["animal", "nature", "spiny"],
        "char": "🦔",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "raccoon": {
        "keywords": ["animal", "nature"],
        "char": "🦝",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "llama": {
        "keywords": ["animal", "nature", "alpaca"],
        "char": "🦙",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hippopotamus": {
        "keywords": ["animal", "nature"],
        "char": "🦛",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "kangaroo": {
        "keywords": ["animal", "nature", "australia", "joey", "hop", "marsupial"],
        "char": "🦘",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "badger": {
        "keywords": ["animal", "nature", "honey"],
        "char": "🦡",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "swan": {
        "keywords": ["animal", "nature", "bird"],
        "char": "🦢",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "peacock": {
        "keywords": ["animal", "nature", "peahen", "bird"],
        "char": "🦚",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "parrot": {
        "keywords": ["animal", "nature", "bird", "pirate", "talk"],
        "char": "🦜",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "lobster": {
        "keywords": ["animal", "nature", "bisque", "claws", "seafood"],
        "char": "🦞",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "mosquito": {
        "keywords": ["animal", "nature", "insect", "malaria"],
        "char": "🦟",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "paw_prints": {
        "keywords": ["animal", "tracking", "footprints", "dog", "cat", "pet", "feet"],
        "char": "🐾",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dragon": {
        "keywords": ["animal", "myth", "nature", "chinese", "green"],
        "char": "🐉",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dragon_face": {
        "keywords": ["animal", "myth", "nature", "chinese", "green"],
        "char": "🐲",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cactus": {
        "keywords": ["vegetable", "plant", "nature"],
        "char": "🌵",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "christmas_tree": {
        "keywords": ["festival", "vacation", "december", "xmas", "celebration"],
        "char": "🎄",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "evergreen_tree": {
        "keywords": ["plant", "nature"],
        "char": "🌲",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "deciduous_tree": {
        "keywords": ["plant", "nature"],
        "char": "🌳",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "palm_tree": {
        "keywords": ["plant", "vegetable", "nature", "summer", "beach", "mojito", "tropical"],
        "char": "🌴",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "seedling": {
        "keywords": ["plant", "nature", "grass", "lawn", "spring"],
        "char": "🌱",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "herb": {
        "keywords": ["vegetable", "plant", "medicine", "weed", "grass", "lawn"],
        "char": "🌿",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "shamrock": {
        "keywords": ["vegetable", "plant", "nature", "irish", "clover"],
        "char": "☘",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "four_leaf_clover": {
        "keywords": ["vegetable", "plant", "nature", "lucky", "irish"],
        "char": "🍀",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "bamboo": {
        "keywords": ["plant", "nature", "vegetable", "panda", "pine_decoration"],
        "char": "🎍",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "tanabata_tree": {
        "keywords": ["plant", "nature", "branch", "summer"],
        "char": "🎋",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "leaves": {
        "keywords": ["nature", "plant", "tree", "vegetable", "grass", "lawn", "spring"],
        "char": "🍃",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "fallen_leaf": {
        "keywords": ["nature", "plant", "vegetable", "leaves"],
        "char": "🍂",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "maple_leaf": {
        "keywords": ["nature", "plant", "vegetable", "ca", "fall"],
        "char": "🍁",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "ear_of_rice": {
        "keywords": ["nature", "plant"],
        "char": "🌾",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "hibiscus": {
        "keywords": ["plant", "vegetable", "flowers", "beach"],
        "char": "🌺",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sunflower": {
        "keywords": ["nature", "plant", "fall"],
        "char": "🌻",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "rose": {
        "keywords": ["flowers", "valentines", "love", "spring"],
        "char": "🌹",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "wilted_flower": {
        "keywords": ["plant", "nature", "flower"],
        "char": "🥀",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "tulip": {
        "keywords": ["flowers", "plant", "nature", "summer", "spring"],
        "char": "🌷",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "blossom": {
        "keywords": ["nature", "flowers", "yellow"],
        "char": "🌼",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cherry_blossom": {
        "keywords": ["nature", "plant", "spring", "flower"],
        "char": "🌸",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "bouquet": {
        "keywords": ["flowers", "nature", "spring"],
        "char": "💐",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "mushroom": {
        "keywords": ["plant", "vegetable"],
        "char": "🍄",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "chestnut": {
        "keywords": ["food", "squirrel"],
        "char": "🌰",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "jack_o_lantern": {
        "keywords": ["halloween", "light", "pumpkin", "creepy", "fall"],
        "char": "🎃",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "shell": {
        "keywords": ["nature", "sea", "beach"],
        "char": "🐚",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "spider_web": {
        "keywords": ["animal", "insect", "arachnid", "silk"],
        "char": "🕸",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "earth_americas": {
        "keywords": ["globe", "world", "USA", "international"],
        "char": "🌎",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "earth_africa": {
        "keywords": ["globe", "world", "international"],
        "char": "🌍",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "earth_asia": {
        "keywords": ["globe", "world", "east", "international"],
        "char": "🌏",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "full_moon": {
        "keywords": ["nature", "yellow", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌕",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "waning_gibbous_moon": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep", "waxing_gibbous_moon"],
        "char": "🌖",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "last_quarter_moon": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌗",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "waning_crescent_moon": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌘",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "new_moon": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌑",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "waxing_crescent_moon": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌒",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "first_quarter_moon": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌓",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "waxing_gibbous_moon": {
        "keywords": ["nature", "night", "sky", "gray", "twilight", "planet", "space", "evening", "sleep"],
        "char": "🌔",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "new_moon_with_face": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌚",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "full_moon_with_face": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌝",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "first_quarter_moon_with_face": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌛",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "last_quarter_moon_with_face": {
        "keywords": ["nature", "twilight", "planet", "space", "night", "evening", "sleep"],
        "char": "🌜",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sun_with_face": {
        "keywords": ["nature", "morning", "sky"],
        "char": "🌞",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "crescent_moon": {
        "keywords": ["night", "sleep", "sky", "evening", "magic"],
        "char": "🌙",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "star": {
        "keywords": ["night", "yellow"],
        "char": "⭐",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "star2": {
        "keywords": ["night", "sparkle", "awesome", "good", "magic"],
        "char": "🌟",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dizzy": {
        "keywords": ["star", "sparkle", "shoot", "magic"],
        "char": "💫",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sparkles": {
        "keywords": ["stars", "shine", "shiny", "cool", "awesome", "good", "magic"],
        "char": "✨",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "comet": {
        "keywords": ["space"],
        "char": "☄",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sunny": {
        "keywords": ["weather", "nature", "brightness", "summer", "beach", "spring"],
        "char": "☀️",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sun_behind_small_cloud": {
        "keywords": ["weather"],
        "char": "🌤",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "partly_sunny": {
        "keywords": ["weather", "nature", "cloudy", "morning", "fall", "spring"],
        "char": "⛅",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sun_behind_large_cloud": {
        "keywords": ["weather"],
        "char": "🌥",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sun_behind_rain_cloud": {
        "keywords": ["weather"],
        "char": "🌦",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cloud": {
        "keywords": ["weather", "sky"],
        "char": "☁️",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cloud_with_rain": {
        "keywords": ["weather"],
        "char": "🌧",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cloud_with_lightning_and_rain": {
        "keywords": ["weather", "lightning"],
        "char": "⛈",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cloud_with_lightning": {
        "keywords": ["weather", "thunder"],
        "char": "🌩",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "zap": {
        "keywords": ["thunder", "weather", "lightning bolt", "fast"],
        "char": "⚡",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "fire": {
        "keywords": ["hot", "cook", "flame"],
        "char": "🔥",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "boom": {
        "keywords": ["bomb", "explode", "explosion", "collision", "blown"],
        "char": "💥",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "snowflake": {
        "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas"],
        "char": "❄️",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "cloud_with_snow": {
        "keywords": ["weather"],
        "char": "🌨",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "snowman": {
        "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen", "without_snow"],
        "char": "⛄",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "snowman_with_snow": {
        "keywords": ["winter", "season", "cold", "weather", "christmas", "xmas", "frozen"],
        "char": "☃",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "wind_face": {
        "keywords": ["gust", "air"],
        "char": "🌬",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "dash": {
        "keywords": ["wind", "air", "fast", "shoo", "fart", "smoke", "puff"],
        "char": "💨",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "tornado": {
        "keywords": ["weather", "cyclone", "twister"],
        "char": "🌪",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "fog": {
        "keywords": ["weather"],
        "char": "🌫",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "open_umbrella": {
        "keywords": ["weather", "spring"],
        "char": "☂",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "umbrella": {
        "keywords": ["rainy", "weather", "spring"],
        "char": "☔",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "droplet": {
        "keywords": ["water", "drip", "faucet", "spring"],
        "char": "💧",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "sweat_drops": {
        "keywords": ["water", "drip", "oops"],
        "char": "💦",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "ocean": {
        "keywords": ["sea", "water", "wave", "nature", "tsunami", "disaster"],
        "char": "🌊",
        "fitzpatrick_scale": false,
        "category": "animals_and_nature"
    },
    "green_apple": {
        "keywords": ["fruit", "nature"],
        "char": "🍏",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "apple": {
        "keywords": ["fruit", "mac", "school"],
        "char": "🍎",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "pear": {
        "keywords": ["fruit", "nature", "food"],
        "char": "🍐",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "tangerine": {
        "keywords": ["food", "fruit", "nature", "orange"],
        "char": "🍊",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "lemon": {
        "keywords": ["fruit", "nature"],
        "char": "🍋",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "banana": {
        "keywords": ["fruit", "food", "monkey"],
        "char": "🍌",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "watermelon": {
        "keywords": ["fruit", "food", "picnic", "summer"],
        "char": "🍉",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "grapes": {
        "keywords": ["fruit", "food", "wine"],
        "char": "🍇",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "strawberry": {
        "keywords": ["fruit", "food", "nature"],
        "char": "🍓",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "melon": {
        "keywords": ["fruit", "nature", "food"],
        "char": "🍈",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cherries": {
        "keywords": ["food", "fruit"],
        "char": "🍒",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "peach": {
        "keywords": ["fruit", "nature", "food"],
        "char": "🍑",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "pineapple": {
        "keywords": ["fruit", "nature", "food"],
        "char": "🍍",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "coconut": {
        "keywords": ["fruit", "nature", "food", "palm"],
        "char": "🥥",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "kiwi_fruit": {
        "keywords": ["fruit", "food"],
        "char": "🥝",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "mango": {
        "keywords": ["fruit", "food", "tropical"],
        "char": "🥭",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "avocado": {
        "keywords": ["fruit", "food"],
        "char": "🥑",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "broccoli": {
        "keywords": ["fruit", "food", "vegetable"],
        "char": "🥦",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "tomato": {
        "keywords": ["fruit", "vegetable", "nature", "food"],
        "char": "🍅",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "eggplant": {
        "keywords": ["vegetable", "nature", "food", "aubergine"],
        "char": "🍆",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cucumber": {
        "keywords": ["fruit", "food", "pickle"],
        "char": "🥒",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "carrot": {
        "keywords": ["vegetable", "food", "orange"],
        "char": "🥕",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "hot_pepper": {
        "keywords": ["food", "spicy", "chilli", "chili"],
        "char": "🌶",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "potato": {
        "keywords": ["food", "tuber", "vegatable", "starch"],
        "char": "🥔",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "corn": {
        "keywords": ["food", "vegetable", "plant"],
        "char": "🌽",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "leafy_greens": {
        "keywords": ["food", "vegetable", "plant", "bok choy", "cabbage", "kale", "lettuce"],
        "char": "🥬",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "sweet_potato": {
        "keywords": ["food", "nature"],
        "char": "🍠",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "peanuts": {
        "keywords": ["food", "nut"],
        "char": "🥜",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "honey_pot": {
        "keywords": ["bees", "sweet", "kitchen"],
        "char": "🍯",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "croissant": {
        "keywords": ["food", "bread", "french"],
        "char": "🥐",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "bread": {
        "keywords": ["food", "wheat", "breakfast", "toast"],
        "char": "🍞",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "baguette_bread": {
        "keywords": ["food", "bread", "french"],
        "char": "🥖",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "bagel": {
        "keywords": ["food", "bread", "bakery", "schmear"],
        "char": "🥯",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "pretzel": {
        "keywords": ["food", "bread", "twisted"],
        "char": "🥨",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cheese": {
        "keywords": ["food", "chadder"],
        "char": "🧀",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "egg": {
        "keywords": ["food", "chicken", "breakfast"],
        "char": "🥚",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "bacon": {
        "keywords": ["food", "breakfast", "pork", "pig", "meat"],
        "char": "🥓",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "steak": {
        "keywords": ["food", "cow", "meat", "cut", "chop", "lambchop", "porkchop"],
        "char": "🥩",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "pancakes": {
        "keywords": ["food", "breakfast", "flapjacks", "hotcakes"],
        "char": "🥞",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "poultry_leg": {
        "keywords": ["food", "meat", "drumstick", "bird", "chicken", "turkey"],
        "char": "🍗",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "meat_on_bone": {
        "keywords": ["good", "food", "drumstick"],
        "char": "🍖",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "bone": {
        "keywords": ["skeleton"],
        "char": "🦴",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "fried_shrimp": {
        "keywords": ["food", "animal", "appetizer", "summer"],
        "char": "🍤",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "fried_egg": {
        "keywords": ["food", "breakfast", "kitchen", "egg"],
        "char": "🍳",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "hamburger": {
        "keywords": ["meat", "fast food", "beef", "cheeseburger", "mcdonalds", "burger king"],
        "char": "🍔",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "fries": {
        "keywords": ["chips", "snack", "fast food"],
        "char": "🍟",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "stuffed_flatbread": {
        "keywords": ["food", "flatbread", "stuffed", "gyro"],
        "char": "🥙",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "hotdog": {
        "keywords": ["food", "frankfurter"],
        "char": "🌭",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "pizza": {
        "keywords": ["food", "party"],
        "char": "🍕",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "sandwich": {
        "keywords": ["food", "lunch", "bread"],
        "char": "🥪",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "canned_food": {
        "keywords": ["food", "soup"],
        "char": "🥫",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "spaghetti": {
        "keywords": ["food", "italian", "noodle"],
        "char": "🍝",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "taco": {
        "keywords": ["food", "mexican"],
        "char": "🌮",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "burrito": {
        "keywords": ["food", "mexican"],
        "char": "🌯",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "green_salad": {
        "keywords": ["food", "healthy", "lettuce"],
        "char": "🥗",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "shallow_pan_of_food": {
        "keywords": ["food", "cooking", "casserole", "paella"],
        "char": "🥘",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "ramen": {
        "keywords": ["food", "japanese", "noodle", "chopsticks"],
        "char": "🍜",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "stew": {
        "keywords": ["food", "meat", "soup"],
        "char": "🍲",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "fish_cake": {
        "keywords": ["food", "japan", "sea", "beach", "narutomaki", "pink", "swirl", "kamaboko", "surimi", "ramen"],
        "char": "🍥",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "fortune_cookie": {
        "keywords": ["food", "prophecy"],
        "char": "🥠",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "sushi": {
        "keywords": ["food", "fish", "japanese", "rice"],
        "char": "🍣",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "bento": {
        "keywords": ["food", "japanese", "box"],
        "char": "🍱",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "curry": {
        "keywords": ["food", "spicy", "hot", "indian"],
        "char": "🍛",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "rice_ball": {
        "keywords": ["food", "japanese"],
        "char": "🍙",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "rice": {
        "keywords": ["food", "china", "asian"],
        "char": "🍚",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "rice_cracker": {
        "keywords": ["food", "japanese"],
        "char": "🍘",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "oden": {
        "keywords": ["food", "japanese"],
        "char": "🍢",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "dango": {
        "keywords": ["food", "dessert", "sweet", "japanese", "barbecue", "meat"],
        "char": "🍡",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "shaved_ice": {
        "keywords": ["hot", "dessert", "summer"],
        "char": "🍧",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "ice_cream": {
        "keywords": ["food", "hot", "dessert"],
        "char": "🍨",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "icecream": {
        "keywords": ["food", "hot", "dessert", "summer"],
        "char": "🍦",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "pie": {
        "keywords": ["food", "dessert", "pastry"],
        "char": "🥧",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cake": {
        "keywords": ["food", "dessert"],
        "char": "🍰",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cupcake": {
        "keywords": ["food", "dessert", "bakery", "sweet"],
        "char": "🧁",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "moon_cake": {
        "keywords": ["food", "autumn"],
        "char": "🥮",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "birthday": {
        "keywords": ["food", "dessert", "cake"],
        "char": "🎂",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "custard": {
        "keywords": ["dessert", "food"],
        "char": "🍮",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "candy": {
        "keywords": ["snack", "dessert", "sweet", "lolly"],
        "char": "🍬",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "lollipop": {
        "keywords": ["food", "snack", "candy", "sweet"],
        "char": "🍭",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "chocolate_bar": {
        "keywords": ["food", "snack", "dessert", "sweet"],
        "char": "🍫",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "popcorn": {
        "keywords": ["food", "movie theater", "films", "snack"],
        "char": "🍿",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "dumpling": {
        "keywords": ["food", "empanada", "pierogi", "potsticker"],
        "char": "🥟",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "doughnut": {
        "keywords": ["food", "dessert", "snack", "sweet", "donut"],
        "char": "🍩",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cookie": {
        "keywords": ["food", "snack", "oreo", "chocolate", "sweet", "dessert"],
        "char": "🍪",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "milk_glass": {
        "keywords": ["beverage", "drink", "cow"],
        "char": "🥛",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "beer": {
        "keywords": ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"],
        "char": "🍺",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "beers": {
        "keywords": ["relax", "beverage", "drink", "drunk", "party", "pub", "summer", "alcohol", "booze"],
        "char": "🍻",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "clinking_glasses": {
        "keywords": ["beverage", "drink", "party", "alcohol", "celebrate", "cheers", "wine", "champagne", "toast"],
        "char": "🥂",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "wine_glass": {
        "keywords": ["drink", "beverage", "drunk", "alcohol", "booze"],
        "char": "🍷",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "tumbler_glass": {
        "keywords": ["drink", "beverage", "drunk", "alcohol", "liquor", "booze", "bourbon", "scotch", "whisky", "glass", "shot"],
        "char": "🥃",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cocktail": {
        "keywords": ["drink", "drunk", "alcohol", "beverage", "booze", "mojito"],
        "char": "🍸",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "tropical_drink": {
        "keywords": ["beverage", "cocktail", "summer", "beach", "alcohol", "booze", "mojito"],
        "char": "🍹",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "champagne": {
        "keywords": ["drink", "wine", "bottle", "celebration"],
        "char": "🍾",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "sake": {
        "keywords": ["wine", "drink", "drunk", "beverage", "japanese", "alcohol", "booze"],
        "char": "🍶",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "tea": {
        "keywords": ["drink", "bowl", "breakfast", "green", "british"],
        "char": "🍵",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "cup_with_straw": {
        "keywords": ["drink", "soda"],
        "char": "🥤",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "coffee": {
        "keywords": ["beverage", "caffeine", "latte", "espresso"],
        "char": "☕",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "baby_bottle": {
        "keywords": ["food", "container", "milk"],
        "char": "🍼",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "salt": {
        "keywords": ["condiment", "shaker"],
        "char": "🧂",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "spoon": {
        "keywords": ["cutlery", "kitchen", "tableware"],
        "char": "🥄",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "fork_and_knife": {
        "keywords": ["cutlery", "kitchen"],
        "char": "🍴",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "plate_with_cutlery": {
        "keywords": ["food", "eat", "meal", "lunch", "dinner", "restaurant"],
        "char": "🍽",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "bowl_with_spoon": {
        "keywords": ["food", "breakfast", "cereal", "oatmeal", "porridge"],
        "char": "🥣",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "takeout_box": {
        "keywords": ["food", "leftovers"],
        "char": "🥡",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "chopsticks": {
        "keywords": ["food"],
        "char": "🥢",
        "fitzpatrick_scale": false,
        "category": "food_and_drink"
    },
    "soccer": {
        "keywords": ["sports", "football"],
        "char": "⚽",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "basketball": {
        "keywords": ["sports", "balls", "NBA"],
        "char": "🏀",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "football": {
        "keywords": ["sports", "balls", "NFL"],
        "char": "🏈",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "baseball": {
        "keywords": ["sports", "balls"],
        "char": "⚾",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "softball": {
        "keywords": ["sports", "balls"],
        "char": "🥎",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "tennis": {
        "keywords": ["sports", "balls", "green"],
        "char": "🎾",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "volleyball": {
        "keywords": ["sports", "balls"],
        "char": "🏐",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "rugby_football": {
        "keywords": ["sports", "team"],
        "char": "🏉",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "flying_disc": {
        "keywords": ["sports", "frisbee", "ultimate"],
        "char": "🥏",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "8ball": {
        "keywords": ["pool", "hobby", "game", "luck", "magic"],
        "char": "🎱",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "golf": {
        "keywords": ["sports", "business", "flag", "hole", "summer"],
        "char": "⛳",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "golfing_woman": {
        "keywords": ["sports", "business", "woman", "female"],
        "char": "🏌️‍♀️",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "golfing_man": {
        "keywords": ["sports", "business"],
        "char": "🏌",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "ping_pong": {
        "keywords": ["sports", "pingpong"],
        "char": "🏓",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "badminton": {
        "keywords": ["sports"],
        "char": "🏸",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "goal_net": {
        "keywords": ["sports"],
        "char": "🥅",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "ice_hockey": {
        "keywords": ["sports"],
        "char": "🏒",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "field_hockey": {
        "keywords": ["sports"],
        "char": "🏑",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "lacrosse": {
        "keywords": ["sports", "ball", "stick"],
        "char": "🥍",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "cricket": {
        "keywords": ["sports"],
        "char": "🏏",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "ski": {
        "keywords": ["sports", "winter", "cold", "snow"],
        "char": "🎿",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "skier": {
        "keywords": ["sports", "winter", "snow"],
        "char": "⛷",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "snowboarder": {
        "keywords": ["sports", "winter"],
        "char": "🏂",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "person_fencing": {
        "keywords": ["sports", "fencing", "sword"],
        "char": "🤺",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "women_wrestling": {
        "keywords": ["sports", "wrestlers"],
        "char": "🤼‍♀️",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "men_wrestling": {
        "keywords": ["sports", "wrestlers"],
        "char": "🤼‍♂️",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "woman_cartwheeling": {
        "keywords": ["gymnastics"],
        "char": "🤸‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "man_cartwheeling": {
        "keywords": ["gymnastics"],
        "char": "🤸‍♂️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "woman_playing_handball": {
        "keywords": ["sports"],
        "char": "🤾‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "man_playing_handball": {
        "keywords": ["sports"],
        "char": "🤾‍♂️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "ice_skate": {
        "keywords": ["sports"],
        "char": "⛸",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "curling_stone": {
        "keywords": ["sports"],
        "char": "🥌",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "skateboard": {
        "keywords": ["board"],
        "char": "🛹",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "sled": {
        "keywords": ["sleigh", "luge", "toboggan"],
        "char": "🛷",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "bow_and_arrow": {
        "keywords": ["sports"],
        "char": "🏹",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "fishing_pole_and_fish": {
        "keywords": ["food", "hobby", "summer"],
        "char": "🎣",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "boxing_glove": {
        "keywords": ["sports", "fighting"],
        "char": "🥊",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "martial_arts_uniform": {
        "keywords": ["judo", "karate", "taekwondo"],
        "char": "🥋",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "rowing_woman": {
        "keywords": ["sports", "hobby", "water", "ship", "woman", "female"],
        "char": "🚣‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "rowing_man": {
        "keywords": ["sports", "hobby", "water", "ship"],
        "char": "🚣",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "climbing_woman": {
        "keywords": ["sports", "hobby", "woman", "female", "rock"],
        "char": "🧗‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "climbing_man": {
        "keywords": ["sports", "hobby", "man", "male", "rock"],
        "char": "🧗‍♂️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "swimming_woman": {
        "keywords": ["sports", "exercise", "human", "athlete", "water", "summer", "woman", "female"],
        "char": "🏊‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "swimming_man": {
        "keywords": ["sports", "exercise", "human", "athlete", "water", "summer"],
        "char": "🏊",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "woman_playing_water_polo": {
        "keywords": ["sports", "pool"],
        "char": "🤽‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "man_playing_water_polo": {
        "keywords": ["sports", "pool"],
        "char": "🤽‍♂️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "woman_in_lotus_position": {
        "keywords": ["woman", "female", "meditation", "yoga", "serenity", "zen", "mindfulness"],
        "char": "🧘‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "man_in_lotus_position": {
        "keywords": ["man", "male", "meditation", "yoga", "serenity", "zen", "mindfulness"],
        "char": "🧘‍♂️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "surfing_woman": {
        "keywords": ["sports", "ocean", "sea", "summer", "beach", "woman", "female"],
        "char": "🏄‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "surfing_man": {
        "keywords": ["sports", "ocean", "sea", "summer", "beach"],
        "char": "🏄",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "bath": {
        "keywords": ["clean", "shower", "bathroom"],
        "char": "🛀",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "basketball_woman": {
        "keywords": ["sports", "human", "woman", "female"],
        "char": "⛹️‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "basketball_man": {
        "keywords": ["sports", "human"],
        "char": "⛹",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "weight_lifting_woman": {
        "keywords": ["sports", "training", "exercise", "woman", "female"],
        "char": "🏋️‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "weight_lifting_man": {
        "keywords": ["sports", "training", "exercise"],
        "char": "🏋",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "biking_woman": {
        "keywords": ["sports", "bike", "exercise", "hipster", "woman", "female"],
        "char": "🚴‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "biking_man": {
        "keywords": ["sports", "bike", "exercise", "hipster"],
        "char": "🚴",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "mountain_biking_woman": {
        "keywords": ["transportation", "sports", "human", "race", "bike", "woman", "female"],
        "char": "🚵‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "mountain_biking_man": {
        "keywords": ["transportation", "sports", "human", "race", "bike"],
        "char": "🚵",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "horse_racing": {
        "keywords": ["animal", "betting", "competition", "gambling", "luck"],
        "char": "🏇",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "business_suit_levitating": {
        "keywords": ["suit", "business", "levitate", "hover", "jump"],
        "char": "🕴",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "trophy": {
        "keywords": ["win", "award", "contest", "place", "ftw", "ceremony"],
        "char": "🏆",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "running_shirt_with_sash": {
        "keywords": ["play", "pageant"],
        "char": "🎽",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "medal_sports": {
        "keywords": ["award", "winning"],
        "char": "🏅",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "medal_military": {
        "keywords": ["award", "winning", "army"],
        "char": "🎖",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "1st_place_medal": {
        "keywords": ["award", "winning", "first"],
        "char": "🥇",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "2nd_place_medal": {
        "keywords": ["award", "second"],
        "char": "🥈",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "3rd_place_medal": {
        "keywords": ["award", "third"],
        "char": "🥉",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "reminder_ribbon": {
        "keywords": ["sports", "cause", "support", "awareness"],
        "char": "🎗",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "rosette": {
        "keywords": ["flower", "decoration", "military"],
        "char": "🏵",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "ticket": {
        "keywords": ["event", "concert", "pass"],
        "char": "🎫",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "tickets": {
        "keywords": ["sports", "concert", "entrance"],
        "char": "🎟",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "performing_arts": {
        "keywords": ["acting", "theater", "drama"],
        "char": "🎭",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "art": {
        "keywords": ["design", "paint", "draw", "colors"],
        "char": "🎨",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "circus_tent": {
        "keywords": ["festival", "carnival", "party"],
        "char": "🎪",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "woman_juggling": {
        "keywords": ["juggle", "balance", "skill", "multitask"],
        "char": "🤹‍♀️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "man_juggling": {
        "keywords": ["juggle", "balance", "skill", "multitask"],
        "char": "🤹‍♂️",
        "fitzpatrick_scale": true,
        "category": "activity"
    },
    "microphone": {
        "keywords": ["sound", "music", "PA", "sing", "talkshow"],
        "char": "🎤",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "headphones": {
        "keywords": ["music", "score", "gadgets"],
        "char": "🎧",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "musical_score": {
        "keywords": ["treble", "clef", "compose"],
        "char": "🎼",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "musical_keyboard": {
        "keywords": ["piano", "instrument", "compose"],
        "char": "🎹",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "drum": {
        "keywords": ["music", "instrument", "drumsticks", "snare"],
        "char": "🥁",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "saxophone": {
        "keywords": ["music", "instrument", "jazz", "blues"],
        "char": "🎷",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "trumpet": {
        "keywords": ["music", "brass"],
        "char": "🎺",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "guitar": {
        "keywords": ["music", "instrument"],
        "char": "🎸",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "violin": {
        "keywords": ["music", "instrument", "orchestra", "symphony"],
        "char": "🎻",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "clapper": {
        "keywords": ["movie", "film", "record"],
        "char": "🎬",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "video_game": {
        "keywords": ["play", "console", "PS4", "controller"],
        "char": "🎮",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "space_invader": {
        "keywords": ["game", "arcade", "play"],
        "char": "👾",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "dart": {
        "keywords": ["game", "play", "bar", "target", "bullseye"],
        "char": "🎯",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "game_die": {
        "keywords": ["dice", "random", "tabletop", "play", "luck"],
        "char": "🎲",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "chess_pawn": {
        "keywords": ["expendable"],
        "char": "♟",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "slot_machine": {
        "keywords": ["bet", "gamble", "vegas", "fruit machine", "luck", "casino"],
        "char": "🎰",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "jigsaw": {
        "keywords": ["interlocking", "puzzle", "piece"],
        "char": "🧩",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "bowling": {
        "keywords": ["sports", "fun", "play"],
        "char": "🎳",
        "fitzpatrick_scale": false,
        "category": "activity"
    },
    "red_car": {
        "keywords": ["red", "transportation", "vehicle"],
        "char": "🚗",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "taxi": {
        "keywords": ["uber", "vehicle", "cars", "transportation"],
        "char": "🚕",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "blue_car": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚙",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "bus": {
        "keywords": ["car", "vehicle", "transportation"],
        "char": "🚌",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "trolleybus": {
        "keywords": ["bart", "transportation", "vehicle"],
        "char": "🚎",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "racing_car": {
        "keywords": ["sports", "race", "fast", "formula", "f1"],
        "char": "🏎",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "police_car": {
        "keywords": ["vehicle", "cars", "transportation", "law", "legal", "enforcement"],
        "char": "🚓",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "ambulance": {
        "keywords": ["health", "911", "hospital"],
        "char": "🚑",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "fire_engine": {
        "keywords": ["transportation", "cars", "vehicle"],
        "char": "🚒",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "minibus": {
        "keywords": ["vehicle", "car", "transportation"],
        "char": "🚐",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "truck": {
        "keywords": ["cars", "transportation"],
        "char": "🚚",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "articulated_lorry": {
        "keywords": ["vehicle", "cars", "transportation", "express"],
        "char": "🚛",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "tractor": {
        "keywords": ["vehicle", "car", "farming", "agriculture"],
        "char": "🚜",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "kick_scooter": {
        "keywords": ["vehicle", "kick", "razor"],
        "char": "🛴",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "motorcycle": {
        "keywords": ["race", "sports", "fast"],
        "char": "🏍",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "bike": {
        "keywords": ["sports", "bicycle", "exercise", "hipster"],
        "char": "🚲",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "motor_scooter": {
        "keywords": ["vehicle", "vespa", "sasha"],
        "char": "🛵",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "rotating_light": {
        "keywords": ["police", "ambulance", "911", "emergency", "alert", "error", "pinged", "law", "legal"],
        "char": "🚨",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "oncoming_police_car": {
        "keywords": ["vehicle", "law", "legal", "enforcement", "911"],
        "char": "🚔",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "oncoming_bus": {
        "keywords": ["vehicle", "transportation"],
        "char": "🚍",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "oncoming_automobile": {
        "keywords": ["car", "vehicle", "transportation"],
        "char": "🚘",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "oncoming_taxi": {
        "keywords": ["vehicle", "cars", "uber"],
        "char": "🚖",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "aerial_tramway": {
        "keywords": ["transportation", "vehicle", "ski"],
        "char": "🚡",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "mountain_cableway": {
        "keywords": ["transportation", "vehicle", "ski"],
        "char": "🚠",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "suspension_railway": {
        "keywords": ["vehicle", "transportation"],
        "char": "🚟",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "railway_car": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚃",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "train": {
        "keywords": ["transportation", "vehicle", "carriage", "public", "travel"],
        "char": "🚋",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "monorail": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚝",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "bullettrain_side": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚄",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "bullettrain_front": {
        "keywords": ["transportation", "vehicle", "speed", "fast", "public", "travel"],
        "char": "🚅",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "light_rail": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚈",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "mountain_railway": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚞",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "steam_locomotive": {
        "keywords": ["transportation", "vehicle", "train"],
        "char": "🚂",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "train2": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚆",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "metro": {
        "keywords": ["transportation", "blue-square", "mrt", "underground", "tube"],
        "char": "🚇",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "tram": {
        "keywords": ["transportation", "vehicle"],
        "char": "🚊",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "station": {
        "keywords": ["transportation", "vehicle", "public"],
        "char": "🚉",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "flying_saucer": {
        "keywords": ["transportation", "vehicle", "ufo"],
        "char": "🛸",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "helicopter": {
        "keywords": ["transportation", "vehicle", "fly"],
        "char": "🚁",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "small_airplane": {
        "keywords": ["flight", "transportation", "fly", "vehicle"],
        "char": "🛩",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "airplane": {
        "keywords": ["vehicle", "transportation", "flight", "fly"],
        "char": "✈️",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "flight_departure": {
        "keywords": ["airport", "flight", "landing"],
        "char": "🛫",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "flight_arrival": {
        "keywords": ["airport", "flight", "boarding"],
        "char": "🛬",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "sailboat": {
        "keywords": ["ship", "summer", "transportation", "water", "sailing"],
        "char": "⛵",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "motor_boat": {
        "keywords": ["ship"],
        "char": "🛥",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "speedboat": {
        "keywords": ["ship", "transportation", "vehicle", "summer"],
        "char": "🚤",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "ferry": {
        "keywords": ["boat", "ship", "yacht"],
        "char": "⛴",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "passenger_ship": {
        "keywords": ["yacht", "cruise", "ferry"],
        "char": "🛳",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "rocket": {
        "keywords": ["launch", "ship", "staffmode", "NASA", "outer space", "outer_space", "fly"],
        "char": "🚀",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "artificial_satellite": {
        "keywords": ["communication", "gps", "orbit", "spaceflight", "NASA", "ISS"],
        "char": "🛰",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "seat": {
        "keywords": ["sit", "airplane", "transport", "bus", "flight", "fly"],
        "char": "💺",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "canoe": {
        "keywords": ["boat", "paddle", "water", "ship"],
        "char": "🛶",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "anchor": {
        "keywords": ["ship", "ferry", "sea", "boat"],
        "char": "⚓",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "construction": {
        "keywords": ["wip", "progress", "caution", "warning"],
        "char": "🚧",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "fuelpump": {
        "keywords": ["gas station", "petroleum"],
        "char": "⛽",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "busstop": {
        "keywords": ["transportation", "wait"],
        "char": "🚏",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "vertical_traffic_light": {
        "keywords": ["transportation", "driving"],
        "char": "🚦",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "traffic_light": {
        "keywords": ["transportation", "signal"],
        "char": "🚥",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "checkered_flag": {
        "keywords": ["contest", "finishline", "race", "gokart"],
        "char": "🏁",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "ship": {
        "keywords": ["transportation", "titanic", "deploy"],
        "char": "🚢",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "ferris_wheel": {
        "keywords": ["photo", "carnival", "londoneye"],
        "char": "🎡",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "roller_coaster": {
        "keywords": ["carnival", "playground", "photo", "fun"],
        "char": "🎢",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "carousel_horse": {
        "keywords": ["photo", "carnival"],
        "char": "🎠",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "building_construction": {
        "keywords": ["wip", "working", "progress"],
        "char": "🏗",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "foggy": {
        "keywords": ["photo", "mountain"],
        "char": "🌁",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "tokyo_tower": {
        "keywords": ["photo", "japanese"],
        "char": "🗼",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "factory": {
        "keywords": ["building", "industry", "pollution", "smoke"],
        "char": "🏭",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "fountain": {
        "keywords": ["photo", "summer", "water", "fresh"],
        "char": "⛲",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "rice_scene": {
        "keywords": ["photo", "japan", "asia", "tsukimi"],
        "char": "🎑",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "mountain": {
        "keywords": ["photo", "nature", "environment"],
        "char": "⛰",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "mountain_snow": {
        "keywords": ["photo", "nature", "environment", "winter", "cold"],
        "char": "🏔",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "mount_fuji": {
        "keywords": ["photo", "mountain", "nature", "japanese"],
        "char": "🗻",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "volcano": {
        "keywords": ["photo", "nature", "disaster"],
        "char": "🌋",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "japan": {
        "keywords": ["nation", "country", "japanese", "asia"],
        "char": "🗾",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "camping": {
        "keywords": ["photo", "outdoors", "tent"],
        "char": "🏕",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "tent": {
        "keywords": ["photo", "camping", "outdoors"],
        "char": "⛺",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "national_park": {
        "keywords": ["photo", "environment", "nature"],
        "char": "🏞",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "motorway": {
        "keywords": ["road", "cupertino", "interstate", "highway"],
        "char": "🛣",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "railway_track": {
        "keywords": ["train", "transportation"],
        "char": "🛤",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "sunrise": {
        "keywords": ["morning", "view", "vacation", "photo"],
        "char": "🌅",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "sunrise_over_mountains": {
        "keywords": ["view", "vacation", "photo"],
        "char": "🌄",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "desert": {
        "keywords": ["photo", "warm", "saharah"],
        "char": "🏜",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "beach_umbrella": {
        "keywords": ["weather", "summer", "sunny", "sand", "mojito"],
        "char": "🏖",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "desert_island": {
        "keywords": ["photo", "tropical", "mojito"],
        "char": "🏝",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "city_sunrise": {
        "keywords": ["photo", "good morning", "dawn"],
        "char": "🌇",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "city_sunset": {
        "keywords": ["photo", "evening", "sky", "buildings"],
        "char": "🌆",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "cityscape": {
        "keywords": ["photo", "night life", "urban"],
        "char": "🏙",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "night_with_stars": {
        "keywords": ["evening", "city", "downtown"],
        "char": "🌃",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "bridge_at_night": {
        "keywords": ["photo", "sanfrancisco"],
        "char": "🌉",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "milky_way": {
        "keywords": ["photo", "space", "stars"],
        "char": "🌌",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "stars": {
        "keywords": ["night", "photo"],
        "char": "🌠",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "sparkler": {
        "keywords": ["stars", "night", "shine"],
        "char": "🎇",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "fireworks": {
        "keywords": ["photo", "festival", "carnival", "congratulations"],
        "char": "🎆",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "rainbow": {
        "keywords": ["nature", "happy", "unicorn_face", "photo", "sky", "spring"],
        "char": "🌈",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "houses": {
        "keywords": ["buildings", "photo"],
        "char": "🏘",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "european_castle": {
        "keywords": ["building", "royalty", "history"],
        "char": "🏰",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "japanese_castle": {
        "keywords": ["photo", "building"],
        "char": "🏯",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "stadium": {
        "keywords": ["photo", "place", "sports", "concert", "venue"],
        "char": "🏟",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "statue_of_liberty": {
        "keywords": ["american", "newyork"],
        "char": "🗽",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "house": {
        "keywords": ["building", "home"],
        "char": "🏠",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "house_with_garden": {
        "keywords": ["home", "plant", "nature"],
        "char": "🏡",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "derelict_house": {
        "keywords": ["abandon", "evict", "broken", "building"],
        "char": "🏚",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "office": {
        "keywords": ["building", "bureau", "work"],
        "char": "🏢",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "department_store": {
        "keywords": ["building", "shopping", "mall"],
        "char": "🏬",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "post_office": {
        "keywords": ["building", "envelope", "communication"],
        "char": "🏣",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "european_post_office": {
        "keywords": ["building", "email"],
        "char": "🏤",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "hospital": {
        "keywords": ["building", "health", "surgery", "doctor"],
        "char": "🏥",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "bank": {
        "keywords": ["building", "money", "sales", "cash", "business", "enterprise"],
        "char": "🏦",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "hotel": {
        "keywords": ["building", "accomodation", "checkin"],
        "char": "🏨",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "convenience_store": {
        "keywords": ["building", "shopping", "groceries"],
        "char": "🏪",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "school": {
        "keywords": ["building", "student", "education", "learn", "teach"],
        "char": "🏫",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "love_hotel": {
        "keywords": ["like", "affection", "dating"],
        "char": "🏩",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "wedding": {
        "keywords": ["love", "like", "affection", "couple", "marriage", "bride", "groom"],
        "char": "💒",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "classical_building": {
        "keywords": ["art", "culture", "history"],
        "char": "🏛",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "church": {
        "keywords": ["building", "religion", "christ"],
        "char": "⛪",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "mosque": {
        "keywords": ["islam", "worship", "minaret"],
        "char": "🕌",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "synagogue": {
        "keywords": ["judaism", "worship", "temple", "jewish"],
        "char": "🕍",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "kaaba": {
        "keywords": ["mecca", "mosque", "islam"],
        "char": "🕋",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "shinto_shrine": {
        "keywords": ["temple", "japan", "kyoto"],
        "char": "⛩",
        "fitzpatrick_scale": false,
        "category": "travel_and_places"
    },
    "watch": {
        "keywords": ["time", "accessories"],
        "char": "⌚",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "iphone": {
        "keywords": ["technology", "apple", "gadgets", "dial"],
        "char": "📱",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "calling": {
        "keywords": ["iphone", "incoming"],
        "char": "📲",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "computer": {
        "keywords": ["technology", "laptop", "screen", "display", "monitor"],
        "char": "💻",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "keyboard": {
        "keywords": ["technology", "computer", "type", "input", "text"],
        "char": "⌨",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "desktop_computer": {
        "keywords": ["technology", "computing", "screen"],
        "char": "🖥",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "printer": {
        "keywords": ["paper", "ink"],
        "char": "🖨",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "computer_mouse": {
        "keywords": ["click"],
        "char": "🖱",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "trackball": {
        "keywords": ["technology", "trackpad"],
        "char": "🖲",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "joystick": {
        "keywords": ["game", "play"],
        "char": "🕹",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "clamp": {
        "keywords": ["tool"],
        "char": "🗜",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "minidisc": {
        "keywords": ["technology", "record", "data", "disk", "90s"],
        "char": "💽",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "floppy_disk": {
        "keywords": ["oldschool", "technology", "save", "90s", "80s"],
        "char": "💾",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "cd": {
        "keywords": ["technology", "dvd", "disk", "disc", "90s"],
        "char": "💿",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "dvd": {
        "keywords": ["cd", "disk", "disc"],
        "char": "📀",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "vhs": {
        "keywords": ["record", "video", "oldschool", "90s", "80s"],
        "char": "📼",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "camera": {
        "keywords": ["gadgets", "photography"],
        "char": "📷",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "camera_flash": {
        "keywords": ["photography", "gadgets"],
        "char": "📸",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "video_camera": {
        "keywords": ["film", "record"],
        "char": "📹",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "movie_camera": {
        "keywords": ["film", "record"],
        "char": "🎥",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "film_projector": {
        "keywords": ["video", "tape", "record", "movie"],
        "char": "📽",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "film_strip": {
        "keywords": ["movie"],
        "char": "🎞",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "telephone_receiver": {
        "keywords": ["technology", "communication", "dial"],
        "char": "📞",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "phone": {
        "keywords": ["technology", "communication", "dial", "telephone"],
        "char": "☎️",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pager": {
        "keywords": ["bbcall", "oldschool", "90s"],
        "char": "📟",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "fax": {
        "keywords": ["communication", "technology"],
        "char": "📠",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "tv": {
        "keywords": ["technology", "program", "oldschool", "show", "television"],
        "char": "📺",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "radio": {
        "keywords": ["communication", "music", "podcast", "program"],
        "char": "📻",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "studio_microphone": {
        "keywords": ["sing", "recording", "artist", "talkshow"],
        "char": "🎙",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "level_slider": {
        "keywords": ["scale"],
        "char": "🎚",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "control_knobs": {
        "keywords": ["dial"],
        "char": "🎛",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "compass": {
        "keywords": ["magnetic", "navigation", "orienteering"],
        "char": "🧭",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "stopwatch": {
        "keywords": ["time", "deadline"],
        "char": "⏱",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "timer_clock": {
        "keywords": ["alarm"],
        "char": "⏲",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "alarm_clock": {
        "keywords": ["time", "wake"],
        "char": "⏰",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mantelpiece_clock": {
        "keywords": ["time"],
        "char": "🕰",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hourglass_flowing_sand": {
        "keywords": ["oldschool", "time", "countdown"],
        "char": "⏳",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hourglass": {
        "keywords": ["time", "clock", "oldschool", "limit", "exam", "quiz", "test"],
        "char": "⌛",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "satellite": {
        "keywords": ["communication", "future", "radio", "space"],
        "char": "📡",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "battery": {
        "keywords": ["power", "energy", "sustain"],
        "char": "🔋",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "electric_plug": {
        "keywords": ["charger", "power"],
        "char": "🔌",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bulb": {
        "keywords": ["light", "electricity", "idea"],
        "char": "💡",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "flashlight": {
        "keywords": ["dark", "camping", "sight", "night"],
        "char": "🔦",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "candle": {
        "keywords": ["fire", "wax"],
        "char": "🕯",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "fire_extinguisher": {
        "keywords": ["quench"],
        "char": "🧯",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "wastebasket": {
        "keywords": ["bin", "trash", "rubbish", "garbage", "toss"],
        "char": "🗑",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "oil_drum": {
        "keywords": ["barrell"],
        "char": "🛢",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "money_with_wings": {
        "keywords": ["dollar", "bills", "payment", "sale"],
        "char": "💸",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "dollar": {
        "keywords": ["money", "sales", "bill", "currency"],
        "char": "💵",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "yen": {
        "keywords": ["money", "sales", "japanese", "dollar", "currency"],
        "char": "💴",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "euro": {
        "keywords": ["money", "sales", "dollar", "currency"],
        "char": "💶",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pound": {
        "keywords": ["british", "sterling", "money", "sales", "bills", "uk", "england", "currency"],
        "char": "💷",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "moneybag": {
        "keywords": ["dollar", "payment", "coins", "sale"],
        "char": "💰",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "credit_card": {
        "keywords": ["money", "sales", "dollar", "bill", "payment", "shopping"],
        "char": "💳",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "gem": {
        "keywords": ["blue", "ruby", "diamond", "jewelry"],
        "char": "💎",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "balance_scale": {
        "keywords": ["law", "fairness", "weight"],
        "char": "⚖",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "toolbox": {
        "keywords": ["tools", "diy", "fix", "maintainer", "mechanic"],
        "char": "🧰",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "wrench": {
        "keywords": ["tools", "diy", "ikea", "fix", "maintainer"],
        "char": "🔧",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hammer": {
        "keywords": ["tools", "build", "create"],
        "char": "🔨",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hammer_and_pick": {
        "keywords": ["tools", "build", "create"],
        "char": "⚒",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hammer_and_wrench": {
        "keywords": ["tools", "build", "create"],
        "char": "🛠",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pick": {
        "keywords": ["tools", "dig"],
        "char": "⛏",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "nut_and_bolt": {
        "keywords": ["handy", "tools", "fix"],
        "char": "🔩",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "gear": {
        "keywords": ["cog"],
        "char": "⚙",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "brick": {
        "keywords": ["bricks"],
        "char": "🧱",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "chains": {
        "keywords": ["lock", "arrest"],
        "char": "⛓",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "magnet": {
        "keywords": ["attraction", "magnetic"],
        "char": "🧲",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "gun": {
        "keywords": ["violence", "weapon", "pistol", "revolver"],
        "char": "🔫",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bomb": {
        "keywords": ["boom", "explode", "explosion", "terrorism"],
        "char": "💣",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "firecracker": {
        "keywords": ["dynamite", "boom", "explode", "explosion", "explosive"],
        "char": "🧨",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hocho": {
        "keywords": ["knife", "blade", "cutlery", "kitchen", "weapon"],
        "char": "🔪",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "dagger": {
        "keywords": ["weapon"],
        "char": "🗡",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "crossed_swords": {
        "keywords": ["weapon"],
        "char": "⚔",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "shield": {
        "keywords": ["protection", "security"],
        "char": "🛡",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "smoking": {
        "keywords": ["kills", "tobacco", "cigarette", "joint", "smoke"],
        "char": "🚬",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "skull_and_crossbones": {
        "keywords": ["poison", "danger", "deadly", "scary", "death", "pirate", "evil"],
        "char": "☠",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "coffin": {
        "keywords": ["vampire", "dead", "die", "death", "rip", "graveyard", "cemetery", "casket", "funeral", "box"],
        "char": "⚰",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "funeral_urn": {
        "keywords": ["dead", "die", "death", "rip", "ashes"],
        "char": "⚱",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "amphora": {
        "keywords": ["vase", "jar"],
        "char": "🏺",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "crystal_ball": {
        "keywords": ["disco", "party", "magic", "circus", "fortune_teller"],
        "char": "🔮",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "prayer_beads": {
        "keywords": ["dhikr", "religious"],
        "char": "📿",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "nazar_amulet": {
        "keywords": ["bead", "charm"],
        "char": "🧿",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "barber": {
        "keywords": ["hair", "salon", "style"],
        "char": "💈",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "alembic": {
        "keywords": ["distilling", "science", "experiment", "chemistry"],
        "char": "⚗",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "telescope": {
        "keywords": ["stars", "space", "zoom", "science", "astronomy"],
        "char": "🔭",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "microscope": {
        "keywords": ["laboratory", "experiment", "zoomin", "science", "study"],
        "char": "🔬",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "hole": {
        "keywords": ["embarrassing"],
        "char": "🕳",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pill": {
        "keywords": ["health", "medicine", "doctor", "pharmacy", "drug"],
        "char": "💊",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "syringe": {
        "keywords": ["health", "hospital", "drugs", "blood", "medicine", "needle", "doctor", "nurse"],
        "char": "💉",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "dna": {
        "keywords": ["biologist", "genetics", "life"],
        "char": "🧬",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "microbe": {
        "keywords": ["amoeba", "bacteria", "germs"],
        "char": "🦠",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "petri_dish": {
        "keywords": ["bacteria", "biology", "culture", "lab"],
        "char": "🧫",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "test_tube": {
        "keywords": ["chemistry", "experiment", "lab", "science"],
        "char": "🧪",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "thermometer": {
        "keywords": ["weather", "temperature", "hot", "cold"],
        "char": "🌡",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "broom": {
        "keywords": ["cleaning", "sweeping", "witch"],
        "char": "🧹",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "basket": {
        "keywords": ["laundry"],
        "char": "🧺",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "toilet_paper": {
        "keywords": ["roll"],
        "char": "🧻",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "label": {
        "keywords": ["sale", "tag"],
        "char": "🏷",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bookmark": {
        "keywords": ["favorite", "label", "save"],
        "char": "🔖",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "toilet": {
        "keywords": ["restroom", "wc", "washroom", "bathroom", "potty"],
        "char": "🚽",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "shower": {
        "keywords": ["clean", "water", "bathroom"],
        "char": "🚿",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bathtub": {
        "keywords": ["clean", "shower", "bathroom"],
        "char": "🛁",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "soap": {
        "keywords": ["bar", "bathing", "cleaning", "lather"],
        "char": "🧼",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "sponge": {
        "keywords": ["absorbing", "cleaning", "porous"],
        "char": "🧽",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "lotion_bottle": {
        "keywords": ["moisturizer", "sunscreen"],
        "char": "🧴",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "key": {
        "keywords": ["lock", "door", "password"],
        "char": "🔑",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "old_key": {
        "keywords": ["lock", "door", "password"],
        "char": "🗝",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "couch_and_lamp": {
        "keywords": ["read", "chill"],
        "char": "🛋",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "sleeping_bed": {
        "keywords": ["bed", "rest"],
        "char": "🛌",
        "fitzpatrick_scale": true,
        "category": "objects"
    },
    "bed": {
        "keywords": ["sleep", "rest"],
        "char": "🛏",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "door": {
        "keywords": ["house", "entry", "exit"],
        "char": "🚪",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bellhop_bell": {
        "keywords": ["service"],
        "char": "🛎",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "teddy_bear": {
        "keywords": ["plush", "stuffed"],
        "char": "🧸",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "framed_picture": {
        "keywords": ["photography"],
        "char": "🖼",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "world_map": {
        "keywords": ["location", "direction"],
        "char": "🗺",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "parasol_on_ground": {
        "keywords": ["weather", "summer"],
        "char": "⛱",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "moyai": {
        "keywords": ["rock", "easter island", "moai"],
        "char": "🗿",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "shopping": {
        "keywords": ["mall", "buy", "purchase"],
        "char": "🛍",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "shopping_cart": {
        "keywords": ["trolley"],
        "char": "🛒",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "balloon": {
        "keywords": ["party", "celebration", "birthday", "circus"],
        "char": "🎈",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "flags": {
        "keywords": ["fish", "japanese", "koinobori", "carp", "banner"],
        "char": "🎏",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "ribbon": {
        "keywords": ["decoration", "pink", "girl", "bowtie"],
        "char": "🎀",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "gift": {
        "keywords": ["present", "birthday", "christmas", "xmas"],
        "char": "🎁",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "confetti_ball": {
        "keywords": ["festival", "party", "birthday", "circus"],
        "char": "🎊",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "tada": {
        "keywords": ["party", "congratulations", "birthday", "magic", "circus", "celebration"],
        "char": "🎉",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "dolls": {
        "keywords": ["japanese", "toy", "kimono"],
        "char": "🎎",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "wind_chime": {
        "keywords": ["nature", "ding", "spring", "bell"],
        "char": "🎐",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "crossed_flags": {
        "keywords": ["japanese", "nation", "country", "border"],
        "char": "🎌",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "izakaya_lantern": {
        "keywords": ["light", "paper", "halloween", "spooky"],
        "char": "🏮",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "red_envelope": {
        "keywords": ["gift"],
        "char": "🧧",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "email": {
        "keywords": ["letter", "postal", "inbox", "communication"],
        "char": "✉️",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "envelope_with_arrow": {
        "keywords": ["email", "communication"],
        "char": "📩",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "incoming_envelope": {
        "keywords": ["email", "inbox"],
        "char": "📨",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "e-mail": {
        "keywords": ["communication", "inbox"],
        "char": "📧",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "love_letter": {
        "keywords": ["email", "like", "affection", "envelope", "valentines"],
        "char": "💌",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "postbox": {
        "keywords": ["email", "letter", "envelope"],
        "char": "📮",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mailbox_closed": {
        "keywords": ["email", "communication", "inbox"],
        "char": "📪",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mailbox": {
        "keywords": ["email", "inbox", "communication"],
        "char": "📫",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mailbox_with_mail": {
        "keywords": ["email", "inbox", "communication"],
        "char": "📬",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mailbox_with_no_mail": {
        "keywords": ["email", "inbox"],
        "char": "📭",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "package": {
        "keywords": ["mail", "gift", "cardboard", "box", "moving"],
        "char": "📦",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "postal_horn": {
        "keywords": ["instrument", "music"],
        "char": "📯",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "inbox_tray": {
        "keywords": ["email", "documents"],
        "char": "📥",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "outbox_tray": {
        "keywords": ["inbox", "email"],
        "char": "📤",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "scroll": {
        "keywords": ["documents", "ancient", "history", "paper"],
        "char": "📜",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "page_with_curl": {
        "keywords": ["documents", "office", "paper"],
        "char": "📃",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bookmark_tabs": {
        "keywords": ["favorite", "save", "order", "tidy"],
        "char": "📑",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "receipt": {
        "keywords": ["accounting", "expenses"],
        "char": "🧾",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "bar_chart": {
        "keywords": ["graph", "presentation", "stats"],
        "char": "📊",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "chart_with_upwards_trend": {
        "keywords": ["graph", "presentation", "stats", "recovery", "business", "economics", "money", "sales", "good", "success"],
        "char": "📈",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "chart_with_downwards_trend": {
        "keywords": ["graph", "presentation", "stats", "recession", "business", "economics", "money", "sales", "bad", "failure"],
        "char": "📉",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "page_facing_up": {
        "keywords": ["documents", "office", "paper", "information"],
        "char": "📄",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "date": {
        "keywords": ["calendar", "schedule"],
        "char": "📅",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "calendar": {
        "keywords": ["schedule", "date", "planning"],
        "char": "📆",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "spiral_calendar": {
        "keywords": ["date", "schedule", "planning"],
        "char": "🗓",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "card_index": {
        "keywords": ["business", "stationery"],
        "char": "📇",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "card_file_box": {
        "keywords": ["business", "stationery"],
        "char": "🗃",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "ballot_box": {
        "keywords": ["election", "vote"],
        "char": "🗳",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "file_cabinet": {
        "keywords": ["filing", "organizing"],
        "char": "🗄",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "clipboard": {
        "keywords": ["stationery", "documents"],
        "char": "📋",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "spiral_notepad": {
        "keywords": ["memo", "stationery"],
        "char": "🗒",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "file_folder": {
        "keywords": ["documents", "business", "office"],
        "char": "📁",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "open_file_folder": {
        "keywords": ["documents", "load"],
        "char": "📂",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "card_index_dividers": {
        "keywords": ["organizing", "business", "stationery"],
        "char": "🗂",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "newspaper_roll": {
        "keywords": ["press", "headline"],
        "char": "🗞",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "newspaper": {
        "keywords": ["press", "headline"],
        "char": "📰",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "notebook": {
        "keywords": ["stationery", "record", "notes", "paper", "study"],
        "char": "📓",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "closed_book": {
        "keywords": ["read", "library", "knowledge", "textbook", "learn"],
        "char": "📕",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "green_book": {
        "keywords": ["read", "library", "knowledge", "study"],
        "char": "📗",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "blue_book": {
        "keywords": ["read", "library", "knowledge", "learn", "study"],
        "char": "📘",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "orange_book": {
        "keywords": ["read", "library", "knowledge", "textbook", "study"],
        "char": "📙",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "notebook_with_decorative_cover": {
        "keywords": ["classroom", "notes", "record", "paper", "study"],
        "char": "📔",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "ledger": {
        "keywords": ["notes", "paper"],
        "char": "📒",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "books": {
        "keywords": ["literature", "library", "study"],
        "char": "📚",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "open_book": {
        "keywords": ["book", "read", "library", "knowledge", "literature", "learn", "study"],
        "char": "📖",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "safety_pin": {
        "keywords": ["diaper"],
        "char": "🧷",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "link": {
        "keywords": ["rings", "url"],
        "char": "🔗",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "paperclip": {
        "keywords": ["documents", "stationery"],
        "char": "📎",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "paperclips": {
        "keywords": ["documents", "stationery"],
        "char": "🖇",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "scissors": {
        "keywords": ["stationery", "cut"],
        "char": "✂️",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "triangular_ruler": {
        "keywords": ["stationery", "math", "architect", "sketch"],
        "char": "📐",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "straight_ruler": {
        "keywords": ["stationery", "calculate", "length", "math", "school", "drawing", "architect", "sketch"],
        "char": "📏",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "abacus": {
        "keywords": ["calculation"],
        "char": "🧮",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pushpin": {
        "keywords": ["stationery", "mark", "here"],
        "char": "📌",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "round_pushpin": {
        "keywords": ["stationery", "location", "map", "here"],
        "char": "📍",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "triangular_flag_on_post": {
        "keywords": ["mark", "milestone", "place"],
        "char": "🚩",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "white_flag": {
        "keywords": ["losing", "loser", "lost", "surrender", "give up", "fail"],
        "char": "🏳",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "black_flag": {
        "keywords": ["pirate"],
        "char": "🏴",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "rainbow_flag": {
        "keywords": ["flag", "rainbow", "pride", "gay", "lgbt", "glbt", "queer", "homosexual", "lesbian", "bisexual", "transgender"],
        "char": "🏳️‍🌈",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "closed_lock_with_key": {
        "keywords": ["security", "privacy"],
        "char": "🔐",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "lock": {
        "keywords": ["security", "password", "padlock"],
        "char": "🔒",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "unlock": {
        "keywords": ["privacy", "security"],
        "char": "🔓",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "lock_with_ink_pen": {
        "keywords": ["security", "secret"],
        "char": "🔏",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pen": {
        "keywords": ["stationery", "writing", "write"],
        "char": "🖊",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "fountain_pen": {
        "keywords": ["stationery", "writing", "write"],
        "char": "🖋",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "black_nib": {
        "keywords": ["pen", "stationery", "writing", "write"],
        "char": "✒️",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "memo": {
        "keywords": ["write", "documents", "stationery", "pencil", "paper", "writing", "legal", "exam", "quiz", "test", "study", "compose"],
        "char": "📝",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "pencil2": {
        "keywords": ["stationery", "write", "paper", "writing", "school", "study"],
        "char": "✏️",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "crayon": {
        "keywords": ["drawing", "creativity"],
        "char": "🖍",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "paintbrush": {
        "keywords": ["drawing", "creativity", "art"],
        "char": "🖌",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mag": {
        "keywords": ["search", "zoom", "find", "detective"],
        "char": "🔍",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "mag_right": {
        "keywords": ["search", "zoom", "find", "detective"],
        "char": "🔎",
        "fitzpatrick_scale": false,
        "category": "objects"
    },
    "heart": {
        "keywords": ["love", "like", "valentines"],
        "char": "❤️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "orange_heart": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "🧡",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "yellow_heart": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "💛",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "green_heart": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "💚",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "blue_heart": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "💙",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "purple_heart": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "💜",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_heart": {
        "keywords": ["evil"],
        "char": "🖤",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "broken_heart": {
        "keywords": ["sad", "sorry", "break", "heart", "heartbreak"],
        "char": "💔",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_heart_exclamation": {
        "keywords": ["decoration", "love"],
        "char": "❣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "two_hearts": {
        "keywords": ["love", "like", "affection", "valentines", "heart"],
        "char": "💕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "revolving_hearts": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "💞",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heartbeat": {
        "keywords": ["love", "like", "affection", "valentines", "pink", "heart"],
        "char": "💓",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heartpulse": {
        "keywords": ["like", "love", "affection", "valentines", "pink"],
        "char": "💗",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "sparkling_heart": {
        "keywords": ["love", "like", "affection", "valentines"],
        "char": "💖",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "cupid": {
        "keywords": ["love", "like", "heart", "affection", "valentines"],
        "char": "💘",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "gift_heart": {
        "keywords": ["love", "valentines"],
        "char": "💝",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heart_decoration": {
        "keywords": ["purple-square", "love", "like"],
        "char": "💟",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "peace_symbol": {
        "keywords": ["hippie"],
        "char": "☮",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "latin_cross": {
        "keywords": ["christianity"],
        "char": "✝",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "star_and_crescent": {
        "keywords": ["islam"],
        "char": "☪",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "om": {
        "keywords": ["hinduism", "buddhism", "sikhism", "jainism"],
        "char": "🕉",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "wheel_of_dharma": {
        "keywords": ["hinduism", "buddhism", "sikhism", "jainism"],
        "char": "☸",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "star_of_david": {
        "keywords": ["judaism"],
        "char": "✡",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "six_pointed_star": {
        "keywords": ["purple-square", "religion", "jewish", "hexagram"],
        "char": "🔯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "menorah": {
        "keywords": ["hanukkah", "candles", "jewish"],
        "char": "🕎",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "yin_yang": {
        "keywords": ["balance"],
        "char": "☯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "orthodox_cross": {
        "keywords": ["suppedaneum", "religion"],
        "char": "☦",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "place_of_worship": {
        "keywords": ["religion", "church", "temple", "prayer"],
        "char": "🛐",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "ophiuchus": {
        "keywords": ["sign", "purple-square", "constellation", "astrology"],
        "char": "⛎",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "aries": {
        "keywords": ["sign", "purple-square", "zodiac", "astrology"],
        "char": "♈",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "taurus": {
        "keywords": ["purple-square", "sign", "zodiac", "astrology"],
        "char": "♉",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "gemini": {
        "keywords": ["sign", "zodiac", "purple-square", "astrology"],
        "char": "♊",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "cancer": {
        "keywords": ["sign", "zodiac", "purple-square", "astrology"],
        "char": "♋",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "leo": {
        "keywords": ["sign", "purple-square", "zodiac", "astrology"],
        "char": "♌",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "virgo": {
        "keywords": ["sign", "zodiac", "purple-square", "astrology"],
        "char": "♍",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "libra": {
        "keywords": ["sign", "purple-square", "zodiac", "astrology"],
        "char": "♎",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "scorpius": {
        "keywords": ["sign", "zodiac", "purple-square", "astrology", "scorpio"],
        "char": "♏",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "sagittarius": {
        "keywords": ["sign", "zodiac", "purple-square", "astrology"],
        "char": "♐",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "capricorn": {
        "keywords": ["sign", "zodiac", "purple-square", "astrology"],
        "char": "♑",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "aquarius": {
        "keywords": ["sign", "purple-square", "zodiac", "astrology"],
        "char": "♒",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "pisces": {
        "keywords": ["purple-square", "sign", "zodiac", "astrology"],
        "char": "♓",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "id": {
        "keywords": ["purple-square", "words"],
        "char": "🆔",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "atom_symbol": {
        "keywords": ["science", "physics", "chemistry"],
        "char": "⚛",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u7a7a": {
        "keywords": ["kanji", "japanese", "chinese", "empty", "sky", "blue-square"],
        "char": "🈳",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u5272": {
        "keywords": ["cut", "divide", "chinese", "kanji", "pink-square"],
        "char": "🈹",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "radioactive": {
        "keywords": ["nuclear", "danger"],
        "char": "☢",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "biohazard": {
        "keywords": ["danger"],
        "char": "☣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "mobile_phone_off": {
        "keywords": ["mute", "orange-square", "silence", "quiet"],
        "char": "📴",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "vibration_mode": {
        "keywords": ["orange-square", "phone"],
        "char": "📳",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u6709": {
        "keywords": ["orange-square", "chinese", "have", "kanji"],
        "char": "🈶",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u7121": {
        "keywords": ["nothing", "chinese", "kanji", "japanese", "orange-square"],
        "char": "🈚",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u7533": {
        "keywords": ["chinese", "japanese", "kanji", "orange-square"],
        "char": "🈸",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u55b6": {
        "keywords": ["japanese", "opening hours", "orange-square"],
        "char": "🈺",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u6708": {
        "keywords": ["chinese", "month", "moon", "japanese", "orange-square", "kanji"],
        "char": "🈷️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "eight_pointed_black_star": {
        "keywords": ["orange-square", "shape", "polygon"],
        "char": "✴️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "vs": {
        "keywords": ["words", "orange-square"],
        "char": "🆚",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "accept": {
        "keywords": ["ok", "good", "chinese", "kanji", "agree", "yes", "orange-circle"],
        "char": "🉑",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_flower": {
        "keywords": ["japanese", "spring"],
        "char": "💮",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "ideograph_advantage": {
        "keywords": ["chinese", "kanji", "obtain", "get", "circle"],
        "char": "🉐",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "secret": {
        "keywords": ["privacy", "chinese", "sshh", "kanji", "red-circle"],
        "char": "㊙️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "congratulations": {
        "keywords": ["chinese", "kanji", "japanese", "red-circle"],
        "char": "㊗️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u5408": {
        "keywords": ["japanese", "chinese", "join", "kanji", "red-square"],
        "char": "🈴",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u6e80": {
        "keywords": ["full", "chinese", "japanese", "red-square", "kanji"],
        "char": "🈵",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u7981": {
        "keywords": ["kanji", "japanese", "chinese", "forbidden", "limit", "restricted", "red-square"],
        "char": "🈲",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "a": {
        "keywords": ["red-square", "alphabet", "letter"],
        "char": "🅰️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "b": {
        "keywords": ["red-square", "alphabet", "letter"],
        "char": "🅱️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "ab": {
        "keywords": ["red-square", "alphabet"],
        "char": "🆎",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "cl": {
        "keywords": ["alphabet", "words", "red-square"],
        "char": "🆑",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "o2": {
        "keywords": ["alphabet", "red-square", "letter"],
        "char": "🅾️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "sos": {
        "keywords": ["help", "red-square", "words", "emergency", "911"],
        "char": "🆘",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_entry": {
        "keywords": ["limit", "security", "privacy", "bad", "denied", "stop", "circle"],
        "char": "⛔",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "name_badge": {
        "keywords": ["fire", "forbid"],
        "char": "📛",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_entry_sign": {
        "keywords": ["forbid", "stop", "limit", "denied", "disallow", "circle"],
        "char": "🚫",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "x": {
        "keywords": ["no", "delete", "remove", "cancel", "red"],
        "char": "❌",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "o": {
        "keywords": ["circle", "round"],
        "char": "⭕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "stop_sign": {
        "keywords": ["stop"],
        "char": "🛑",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "anger": {
        "keywords": ["angry", "mad"],
        "char": "💢",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "hotsprings": {
        "keywords": ["bath", "warm", "relax"],
        "char": "♨️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_pedestrians": {
        "keywords": ["rules", "crossing", "walking", "circle"],
        "char": "🚷",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "do_not_litter": {
        "keywords": ["trash", "bin", "garbage", "circle"],
        "char": "🚯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_bicycles": {
        "keywords": ["cyclist", "prohibited", "circle"],
        "char": "🚳",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "non-potable_water": {
        "keywords": ["drink", "faucet", "tap", "circle"],
        "char": "🚱",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "underage": {
        "keywords": ["18", "drink", "pub", "night", "minor", "circle"],
        "char": "🔞",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_mobile_phones": {
        "keywords": ["iphone", "mute", "circle"],
        "char": "📵",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "exclamation": {
        "keywords": ["heavy_exclamation_mark", "danger", "surprise", "punctuation", "wow", "warning"],
        "char": "❗",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "grey_exclamation": {
        "keywords": ["surprise", "punctuation", "gray", "wow", "warning"],
        "char": "❕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "question": {
        "keywords": ["doubt", "confused"],
        "char": "❓",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "grey_question": {
        "keywords": ["doubts", "gray", "huh", "confused"],
        "char": "❔",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "bangbang": {
        "keywords": ["exclamation", "surprise"],
        "char": "‼️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "interrobang": {
        "keywords": ["wat", "punctuation", "surprise"],
        "char": "⁉️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "100": {
        "keywords": ["score", "perfect", "numbers", "century", "exam", "quiz", "pass", "hundred"], // manually removed "test"
        "char": "💯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "low_brightness": {
        "keywords": ["sun", "afternoon", "warm", "summer"],
        "char": "🔅",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "high_brightness": {
        "keywords": ["sun", "light"],
        "char": "🔆",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "trident": {
        "keywords": ["weapon", "spear"],
        "char": "🔱",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "fleur_de_lis": {
        "keywords": ["decorative", "scout"],
        "char": "⚜",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "part_alternation_mark": {
        "keywords": ["graph", "presentation", "stats", "business", "economics", "bad"],
        "char": "〽️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "warning": {
        "keywords": ["exclamation", "wip", "alert", "error", "problem", "issue"],
        "char": "⚠️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "children_crossing": {
        "keywords": ["school", "warning", "danger", "sign", "driving", "yellow-diamond"],
        "char": "🚸",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "beginner": {
        "keywords": ["badge", "shield"],
        "char": "🔰",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "recycle": {
        "keywords": ["arrow", "environment", "garbage", "trash"],
        "char": "♻️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "u6307": {
        "keywords": ["chinese", "point", "green-square", "kanji"],
        "char": "🈯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "chart": {
        "keywords": ["green-square", "graph", "presentation", "stats"],
        "char": "💹",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "sparkle": {
        "keywords": ["stars", "green-square", "awesome", "good", "fireworks"],
        "char": "❇️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "eight_spoked_asterisk": {
        "keywords": ["star", "sparkle", "green-square"],
        "char": "✳️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "negative_squared_cross_mark": {
        "keywords": ["x", "green-square", "no", "deny"],
        "char": "❎",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_check_mark": {
        "keywords": ["green-square", "ok", "agree", "vote", "election", "answer", "tick"],
        "char": "✅",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "diamond_shape_with_a_dot_inside": {
        "keywords": ["jewel", "blue", "gem", "crystal", "fancy"],
        "char": "💠",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "cyclone": {
        "keywords": ["weather", "swirl", "blue", "cloud", "vortex", "spiral", "whirlpool", "spin", "tornado", "hurricane", "typhoon"],
        "char": "🌀",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "loop": {
        "keywords": ["tape", "cassette"],
        "char": "➿",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "globe_with_meridians": {
        "keywords": ["earth", "international", "world", "internet", "interweb", "i18n"],
        "char": "🌐",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "m": {
        "keywords": ["alphabet", "blue-circle", "letter"],
        "char": "Ⓜ️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "atm": {
        "keywords": ["money", "sales", "cash", "blue-square", "payment", "bank"],
        "char": "🏧",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "sa": {
        "keywords": ["japanese", "blue-square", "katakana"],
        "char": "🈂️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "passport_control": {
        "keywords": ["custom", "blue-square"],
        "char": "🛂",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "customs": {
        "keywords": ["passport", "border", "blue-square"],
        "char": "🛃",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "baggage_claim": {
        "keywords": ["blue-square", "airport", "transport"],
        "char": "🛄",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "left_luggage": {
        "keywords": ["blue-square", "travel"],
        "char": "🛅",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "wheelchair": {
        "keywords": ["blue-square", "disabled", "a11y", "accessibility"],
        "char": "♿",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_smoking": {
        "keywords": ["cigarette", "blue-square", "smell", "smoke"],
        "char": "🚭",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "wc": {
        "keywords": ["toilet", "restroom", "blue-square"],
        "char": "🚾",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "parking": {
        "keywords": ["cars", "blue-square", "alphabet", "letter"],
        "char": "🅿️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "potable_water": {
        "keywords": ["blue-square", "liquid", "restroom", "cleaning", "faucet"],
        "char": "🚰",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "mens": {
        "keywords": ["toilet", "restroom", "wc", "blue-square", "gender", "male"],
        "char": "🚹",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "womens": {
        "keywords": ["purple-square", "woman", "female", "toilet", "loo", "restroom", "gender"],
        "char": "🚺",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "baby_symbol": {
        "keywords": ["orange-square", "child"],
        "char": "🚼",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "restroom": {
        "keywords": ["blue-square", "toilet", "refresh", "wc", "gender"],
        "char": "🚻",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "put_litter_in_its_place": {
        "keywords": ["blue-square", "sign", "human", "info"],
        "char": "🚮",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "cinema": {
        "keywords": ["blue-square", "record", "film", "movie", "curtain", "stage", "theater"],
        "char": "🎦",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "signal_strength": {
        "keywords": ["blue-square", "reception", "phone", "internet", "connection", "wifi", "bluetooth", "bars"],
        "char": "📶",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "koko": {
        "keywords": ["blue-square", "here", "katakana", "japanese", "destination"],
        "char": "🈁",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "ng": {
        "keywords": ["blue-square", "words", "shape", "icon"],
        "char": "🆖",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "ok": {
        "keywords": ["good", "agree", "yes", "blue-square"],
        "char": "🆗",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "up": {
        "keywords": ["blue-square", "above", "high"],
        "char": "🆙",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "cool": {
        "keywords": ["words", "blue-square"],
        "char": "🆒",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "new": {
        "keywords": ["blue-square", "words", "start"],
        "char": "🆕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "free": {
        "keywords": ["blue-square", "words"],
        "char": "🆓",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "zero": {
        "keywords": ["0", "numbers", "blue-square", "null"],
        "char": "0️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "one": {
        "keywords": ["blue-square", "numbers", "1"],
        "char": "1️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "two": {
        "keywords": ["numbers", "2", "prime", "blue-square"],
        "char": "2️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "three": {
        "keywords": ["3", "numbers", "prime", "blue-square"],
        "char": "3️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "four": {
        "keywords": ["4", "numbers", "blue-square"],
        "char": "4️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "five": {
        "keywords": ["5", "numbers", "blue-square", "prime"],
        "char": "5️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "six": {
        "keywords": ["6", "numbers", "blue-square"],
        "char": "6️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "seven": {
        "keywords": ["7", "numbers", "blue-square", "prime"],
        "char": "7️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "eight": {
        "keywords": ["8", "blue-square", "numbers"],
        "char": "8️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "nine": {
        "keywords": ["blue-square", "numbers", "9"],
        "char": "9️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "keycap_ten": {
        "keywords": ["numbers", "10", "blue-square"],
        "char": "🔟",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "asterisk": {
        "keywords": ["star", "keycap"],
        "char": "*⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "1234": {
        "keywords": ["numbers", "blue-square"],
        "char": "🔢",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "eject_button": {
        "keywords": ["blue-square"],
        "char": "⏏️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_forward": {
        "keywords": ["blue-square", "right", "direction", "play"],
        "char": "▶️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "pause_button": {
        "keywords": ["pause", "blue-square"],
        "char": "⏸",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "next_track_button": {
        "keywords": ["forward", "next", "blue-square"],
        "char": "⏭",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "stop_button": {
        "keywords": ["blue-square"],
        "char": "⏹",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "record_button": {
        "keywords": ["blue-square"],
        "char": "⏺",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "play_or_pause_button": {
        "keywords": ["blue-square", "play", "pause"],
        "char": "⏯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "previous_track_button": {
        "keywords": ["backward"],
        "char": "⏮",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "fast_forward": {
        "keywords": ["blue-square", "play", "speed", "continue"],
        "char": "⏩",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "rewind": {
        "keywords": ["play", "blue-square"],
        "char": "⏪",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "twisted_rightwards_arrows": {
        "keywords": ["blue-square", "shuffle", "music", "random"],
        "char": "🔀",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "repeat": {
        "keywords": ["loop", "record"],
        "char": "🔁",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "repeat_one": {
        "keywords": ["blue-square", "loop"],
        "char": "🔂",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_backward": {
        "keywords": ["blue-square", "left", "direction"],
        "char": "◀️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_up_small": {
        "keywords": ["blue-square", "triangle", "direction", "point", "forward", "top"],
        "char": "🔼",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_down_small": {
        "keywords": ["blue-square", "direction", "bottom"],
        "char": "🔽",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_double_up": {
        "keywords": ["blue-square", "direction", "top"],
        "char": "⏫",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_double_down": {
        "keywords": ["blue-square", "direction", "bottom"],
        "char": "⏬",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_right": {
        "keywords": ["blue-square", "next"],
        "char": "➡️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_left": {
        "keywords": ["blue-square", "previous", "back"],
        "char": "⬅️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_up": {
        "keywords": ["blue-square", "continue", "top", "direction"],
        "char": "⬆️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_down": {
        "keywords": ["blue-square", "direction", "bottom"],
        "char": "⬇️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_upper_right": {
        "keywords": ["blue-square", "point", "direction", "diagonal", "northeast"],
        "char": "↗️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_lower_right": {
        "keywords": ["blue-square", "direction", "diagonal", "southeast"],
        "char": "↘️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_lower_left": {
        "keywords": ["blue-square", "direction", "diagonal", "southwest"],
        "char": "↙️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_upper_left": {
        "keywords": ["blue-square", "point", "direction", "diagonal", "northwest"],
        "char": "↖️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_up_down": {
        "keywords": ["blue-square", "direction", "way", "vertical"],
        "char": "↕️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "left_right_arrow": {
        "keywords": ["shape", "direction", "horizontal", "sideways"],
        "char": "↔️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrows_counterclockwise": {
        "keywords": ["blue-square", "sync", "cycle"],
        "char": "🔄",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_right_hook": {
        "keywords": ["blue-square", "return", "rotate", "direction"],
        "char": "↪️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "leftwards_arrow_with_hook": {
        "keywords": ["back", "return", "blue-square", "undo", "enter"],
        "char": "↩️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_heading_up": {
        "keywords": ["blue-square", "direction", "top"],
        "char": "⤴️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrow_heading_down": {
        "keywords": ["blue-square", "direction", "bottom"],
        "char": "⤵️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "hash": {
        "keywords": ["symbol", "blue-square", "twitter"],
        "char": "#️⃣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "information_source": {
        "keywords": ["blue-square", "alphabet", "letter"],
        "char": "ℹ️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "abc": {
        "keywords": ["blue-square", "alphabet"],
        "char": "🔤",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "abcd": {
        "keywords": ["blue-square", "alphabet"],
        "char": "🔡",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "capital_abcd": {
        "keywords": ["alphabet", "words", "blue-square"],
        "char": "🔠",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "symbols": {
        "keywords": ["blue-square", "music", "note", "ampersand", "percent", "glyphs", "characters"],
        "char": "🔣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "musical_note": {
        "keywords": ["score", "tone", "sound"],
        "char": "🎵",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "notes": {
        "keywords": ["music", "score"],
        "char": "🎶",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "wavy_dash": {
        "keywords": ["draw", "line", "moustache", "mustache", "squiggle", "scribble"],
        "char": "〰️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "curly_loop": {
        "keywords": ["scribble", "draw", "shape", "squiggle"],
        "char": "➰",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_check_mark": {
        "keywords": ["ok", "nike", "answer", "yes", "tick"],
        "char": "✔️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "arrows_clockwise": {
        "keywords": ["sync", "cycle", "round", "repeat"],
        "char": "🔃",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_plus_sign": {
        "keywords": ["math", "calculation", "addition", "more", "increase"],
        "char": "➕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_minus_sign": {
        "keywords": ["math", "calculation", "subtract", "less"],
        "char": "➖",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_division_sign": {
        "keywords": ["divide", "math", "calculation"],
        "char": "➗",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_multiplication_x": {
        "keywords": ["math", "calculation"],
        "char": "✖️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "infinity": {
        "keywords": ["forever"],
        "char": "♾",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "heavy_dollar_sign": {
        "keywords": ["money", "sales", "payment", "currency", "buck"],
        "char": "💲",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "currency_exchange": {
        "keywords": ["money", "sales", "dollar", "travel"],
        "char": "💱",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "copyright": {
        "keywords": ["ip", "license", "circle", "law", "legal"],
        "char": "©️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "registered": {
        "keywords": ["alphabet", "circle"],
        "char": "®️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "tm": {
        "keywords": ["trademark", "brand", "law", "legal"],
        "char": "™️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "end": {
        "keywords": ["words", "arrow"],
        "char": "🔚",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "back": {
        "keywords": ["arrow", "words", "return"],
        "char": "🔙",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "on": {
        "keywords": ["arrow", "words"],
        "char": "🔛",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "top": {
        "keywords": ["words", "blue-square"],
        "char": "🔝",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "soon": {
        "keywords": ["arrow", "words"],
        "char": "🔜",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "ballot_box_with_check": {
        "keywords": ["ok", "agree", "confirm", "black-square", "vote", "election", "yes", "tick"],
        "char": "☑️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "radio_button": {
        "keywords": ["input", "old", "music", "circle"],
        "char": "🔘",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_circle": {
        "keywords": ["shape", "round"],
        "char": "⚪",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_circle": {
        "keywords": ["shape", "button", "round"],
        "char": "⚫",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "red_circle": {
        "keywords": ["shape", "error", "danger"],
        "char": "🔴",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "large_blue_circle": {
        "keywords": ["shape", "icon", "button"],
        "char": "🔵",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "small_orange_diamond": {
        "keywords": ["shape", "jewel", "gem"],
        "char": "🔸",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "small_blue_diamond": {
        "keywords": ["shape", "jewel", "gem"],
        "char": "🔹",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "large_orange_diamond": {
        "keywords": ["shape", "jewel", "gem"],
        "char": "🔶",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "large_blue_diamond": {
        "keywords": ["shape", "jewel", "gem"],
        "char": "🔷",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "small_red_triangle": {
        "keywords": ["shape", "direction", "up", "top"],
        "char": "🔺",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_small_square": {
        "keywords": ["shape", "icon"],
        "char": "▪️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_small_square": {
        "keywords": ["shape", "icon"],
        "char": "▫️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_large_square": {
        "keywords": ["shape", "icon", "button"],
        "char": "⬛",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_large_square": {
        "keywords": ["shape", "icon", "stone", "button"],
        "char": "⬜",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "small_red_triangle_down": {
        "keywords": ["shape", "direction", "bottom"],
        "char": "🔻",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_medium_square": {
        "keywords": ["shape", "button", "icon"],
        "char": "◼️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_medium_square": {
        "keywords": ["shape", "stone", "icon"],
        "char": "◻️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_medium_small_square": {
        "keywords": ["icon", "shape", "button"],
        "char": "◾",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_medium_small_square": {
        "keywords": ["shape", "stone", "icon", "button"],
        "char": "◽",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_square_button": {
        "keywords": ["shape", "input", "frame"],
        "char": "🔲",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "white_square_button": {
        "keywords": ["shape", "input"],
        "char": "🔳",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "speaker": {
        "keywords": ["sound", "volume", "silence", "broadcast"],
        "char": "🔈",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "sound": {
        "keywords": ["volume", "speaker", "broadcast"],
        "char": "🔉",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "loud_sound": {
        "keywords": ["volume", "noise", "noisy", "speaker", "broadcast"],
        "char": "🔊",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "mute": {
        "keywords": ["sound", "volume", "silence", "quiet"],
        "char": "🔇",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "mega": {
        "keywords": ["sound", "speaker", "volume"],
        "char": "📣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "loudspeaker": {
        "keywords": ["volume", "sound"],
        "char": "📢",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "bell": {
        "keywords": ["sound", "notification", "christmas", "xmas", "chime"],
        "char": "🔔",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "no_bell": {
        "keywords": ["sound", "volume", "mute", "quiet", "silent"],
        "char": "🔕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "black_joker": {
        "keywords": ["poker", "cards", "game", "play", "magic"],
        "char": "🃏",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "mahjong": {
        "keywords": ["game", "play", "chinese", "kanji"],
        "char": "🀄",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "spades": {
        "keywords": ["poker", "cards", "suits", "magic"],
        "char": "♠️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clubs": {
        "keywords": ["poker", "cards", "magic", "suits"],
        "char": "♣️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "hearts": {
        "keywords": ["poker", "cards", "magic", "suits"],
        "char": "♥️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "diamonds": {
        "keywords": ["poker", "cards", "magic", "suits"],
        "char": "♦️",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "flower_playing_cards": {
        "keywords": ["game", "sunset", "red"],
        "char": "🎴",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "thought_balloon": {
        "keywords": ["bubble", "cloud", "speech", "thinking", "dream"],
        "char": "💭",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "right_anger_bubble": {
        "keywords": ["caption", "speech", "thinking", "mad"],
        "char": "🗯",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "speech_balloon": {
        "keywords": ["bubble", "words", "message", "talk", "chatting"],
        "char": "💬",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "left_speech_bubble": {
        "keywords": ["words", "message", "talk", "chatting"],
        "char": "🗨",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock1": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕐",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock2": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕑",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock3": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕒",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock4": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕓",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock5": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕔",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock6": {
        "keywords": ["time", "late", "early", "schedule", "dawn", "dusk"],
        "char": "🕕",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock7": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕖",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock8": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕗",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock9": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕘",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock10": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕙",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock11": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕚",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock12": {
        "keywords": ["time", "noon", "midnight", "midday", "late", "early", "schedule"],
        "char": "🕛",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock130": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕜",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock230": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕝",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock330": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕞",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock430": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕟",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock530": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕠",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock630": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕡",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock730": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕢",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock830": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕣",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock930": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕤",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock1030": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕥",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock1130": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕦",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "clock1230": {
        "keywords": ["time", "late", "early", "schedule"],
        "char": "🕧",
        "fitzpatrick_scale": false,
        "category": "symbols"
    },
    "afghanistan": {
        "keywords": ["af", "flag", "nation", "country", "banner"],
        "char": "🇦🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "aland_islands": {
        "keywords": ["Åland", "islands", "flag", "nation", "country", "banner"],
        "char": "🇦🇽",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "albania": {
        "keywords": ["al", "flag", "nation", "country", "banner"],
        "char": "🇦🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "algeria": {
        "keywords": ["dz", "flag", "nation", "country", "banner"],
        "char": "🇩🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "american_samoa": {
        "keywords": ["american", "ws", "flag", "nation", "country", "banner"],
        "char": "🇦🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "andorra": {
        "keywords": ["ad", "flag", "nation", "country", "banner"],
        "char": "🇦🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "angola": {
        "keywords": ["ao", "flag", "nation", "country", "banner"],
        "char": "🇦🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "anguilla": {
        "keywords": ["ai", "flag", "nation", "country", "banner"],
        "char": "🇦🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "antarctica": {
        "keywords": ["aq", "flag", "nation", "country", "banner"],
        "char": "🇦🇶",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "antigua_barbuda": {
        "keywords": ["antigua", "barbuda", "flag", "nation", "country", "banner"],
        "char": "🇦🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "argentina": {
        "keywords": ["ar", "flag", "nation", "country", "banner"],
        "char": "🇦🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "armenia": {
        "keywords": ["am", "flag", "nation", "country", "banner"],
        "char": "🇦🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "aruba": {
        "keywords": ["aw", "flag", "nation", "country", "banner"],
        "char": "🇦🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "australia": {
        "keywords": ["au", "flag", "nation", "country", "banner"],
        "char": "🇦🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "austria": {
        "keywords": ["at", "flag", "nation", "country", "banner"],
        "char": "🇦🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "azerbaijan": {
        "keywords": ["az", "flag", "nation", "country", "banner"],
        "char": "🇦🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bahamas": {
        "keywords": ["bs", "flag", "nation", "country", "banner"],
        "char": "🇧🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bahrain": {
        "keywords": ["bh", "flag", "nation", "country", "banner"],
        "char": "🇧🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bangladesh": {
        "keywords": ["bd", "flag", "nation", "country", "banner"],
        "char": "🇧🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "barbados": {
        "keywords": ["bb", "flag", "nation", "country", "banner"],
        "char": "🇧🇧",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "belarus": {
        "keywords": ["by", "flag", "nation", "country", "banner"],
        "char": "🇧🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "belgium": {
        "keywords": ["be", "flag", "nation", "country", "banner"],
        "char": "🇧🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "belize": {
        "keywords": ["bz", "flag", "nation", "country", "banner"],
        "char": "🇧🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "benin": {
        "keywords": ["bj", "flag", "nation", "country", "banner"],
        "char": "🇧🇯",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bermuda": {
        "keywords": ["bm", "flag", "nation", "country", "banner"],
        "char": "🇧🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bhutan": {
        "keywords": ["bt", "flag", "nation", "country", "banner"],
        "char": "🇧🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bolivia": {
        "keywords": ["bo", "flag", "nation", "country", "banner"],
        "char": "🇧🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "caribbean_netherlands": {
        "keywords": ["bonaire", "flag", "nation", "country", "banner"],
        "char": "🇧🇶",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bosnia_herzegovina": {
        "keywords": ["bosnia", "herzegovina", "flag", "nation", "country", "banner"],
        "char": "🇧🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "botswana": {
        "keywords": ["bw", "flag", "nation", "country", "banner"],
        "char": "🇧🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "brazil": {
        "keywords": ["br", "flag", "nation", "country", "banner"],
        "char": "🇧🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "british_indian_ocean_territory": {
        "keywords": ["british", "indian", "ocean", "territory", "flag", "nation", "country", "banner"],
        "char": "🇮🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "british_virgin_islands": {
        "keywords": ["british", "virgin", "islands", "bvi", "flag", "nation", "country", "banner"],
        "char": "🇻🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "brunei": {
        "keywords": ["bn", "darussalam", "flag", "nation", "country", "banner"],
        "char": "🇧🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "bulgaria": {
        "keywords": ["bg", "flag", "nation", "country", "banner"],
        "char": "🇧🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "burkina_faso": {
        "keywords": ["burkina", "faso", "flag", "nation", "country", "banner"],
        "char": "🇧🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "burundi": {
        "keywords": ["bi", "flag", "nation", "country", "banner"],
        "char": "🇧🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cape_verde": {
        "keywords": ["cabo", "verde", "flag", "nation", "country", "banner"],
        "char": "🇨🇻",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cambodia": {
        "keywords": ["kh", "flag", "nation", "country", "banner"],
        "char": "🇰🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cameroon": {
        "keywords": ["cm", "flag", "nation", "country", "banner"],
        "char": "🇨🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "canada": {
        "keywords": ["ca", "flag", "nation", "country", "banner"],
        "char": "🇨🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "canary_islands": {
        "keywords": ["canary", "islands", "flag", "nation", "country", "banner"],
        "char": "🇮🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cayman_islands": {
        "keywords": ["cayman", "islands", "flag", "nation", "country", "banner"],
        "char": "🇰🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "central_african_republic": {
        "keywords": ["central", "african", "republic", "flag", "nation", "country", "banner"],
        "char": "🇨🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "chad": {
        "keywords": ["td", "flag", "nation", "country", "banner"],
        "char": "🇹🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "chile": {
        "keywords": ["flag", "nation", "country", "banner"],
        "char": "🇨🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cn": {
        "keywords": ["china", "chinese", "prc", "flag", "country", "nation", "banner"],
        "char": "🇨🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "christmas_island": {
        "keywords": ["christmas", "island", "flag", "nation", "country", "banner"],
        "char": "🇨🇽",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cocos_islands": {
        "keywords": ["cocos", "keeling", "islands", "flag", "nation", "country", "banner"],
        "char": "🇨🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "colombia": {
        "keywords": ["co", "flag", "nation", "country", "banner"],
        "char": "🇨🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "comoros": {
        "keywords": ["km", "flag", "nation", "country", "banner"],
        "char": "🇰🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "congo_brazzaville": {
        "keywords": ["congo", "flag", "nation", "country", "banner"],
        "char": "🇨🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "congo_kinshasa": {
        "keywords": ["congo", "democratic", "republic", "flag", "nation", "country", "banner"],
        "char": "🇨🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cook_islands": {
        "keywords": ["cook", "islands", "flag", "nation", "country", "banner"],
        "char": "🇨🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "costa_rica": {
        "keywords": ["costa", "rica", "flag", "nation", "country", "banner"],
        "char": "🇨🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "croatia": {
        "keywords": ["hr", "flag", "nation", "country", "banner"],
        "char": "🇭🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cuba": {
        "keywords": ["cu", "flag", "nation", "country", "banner"],
        "char": "🇨🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "curacao": {
        "keywords": ["curaçao", "flag", "nation", "country", "banner"],
        "char": "🇨🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cyprus": {
        "keywords": ["cy", "flag", "nation", "country", "banner"],
        "char": "🇨🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "czech_republic": {
        "keywords": ["cz", "flag", "nation", "country", "banner"],
        "char": "🇨🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "denmark": {
        "keywords": ["dk", "flag", "nation", "country", "banner"],
        "char": "🇩🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "djibouti": {
        "keywords": ["dj", "flag", "nation", "country", "banner"],
        "char": "🇩🇯",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "dominica": {
        "keywords": ["dm", "flag", "nation", "country", "banner"],
        "char": "🇩🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "dominican_republic": {
        "keywords": ["dominican", "republic", "flag", "nation", "country", "banner"],
        "char": "🇩🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "ecuador": {
        "keywords": ["ec", "flag", "nation", "country", "banner"],
        "char": "🇪🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "egypt": {
        "keywords": ["eg", "flag", "nation", "country", "banner"],
        "char": "🇪🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "el_salvador": {
        "keywords": ["el", "salvador", "flag", "nation", "country", "banner"],
        "char": "🇸🇻",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "equatorial_guinea": {
        "keywords": ["equatorial", "gn", "flag", "nation", "country", "banner"],
        "char": "🇬🇶",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "eritrea": {
        "keywords": ["er", "flag", "nation", "country", "banner"],
        "char": "🇪🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "estonia": {
        "keywords": ["ee", "flag", "nation", "country", "banner"],
        "char": "🇪🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "ethiopia": {
        "keywords": ["et", "flag", "nation", "country", "banner"],
        "char": "🇪🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "eu": {
        "keywords": ["european", "union", "flag", "banner"],
        "char": "🇪🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "falkland_islands": {
        "keywords": ["falkland", "islands", "malvinas", "flag", "nation", "country", "banner"],
        "char": "🇫🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "faroe_islands": {
        "keywords": ["faroe", "islands", "flag", "nation", "country", "banner"],
        "char": "🇫🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "fiji": {
        "keywords": ["fj", "flag", "nation", "country", "banner"],
        "char": "🇫🇯",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "finland": {
        "keywords": ["fi", "flag", "nation", "country", "banner"],
        "char": "🇫🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "fr": {
        "keywords": ["banner", "flag", "nation", "france", "french", "country"],
        "char": "🇫🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "french_guiana": {
        "keywords": ["french", "guiana", "flag", "nation", "country", "banner"],
        "char": "🇬🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "french_polynesia": {
        "keywords": ["french", "polynesia", "flag", "nation", "country", "banner"],
        "char": "🇵🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "french_southern_territories": {
        "keywords": ["french", "southern", "territories", "flag", "nation", "country", "banner"],
        "char": "🇹🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "gabon": {
        "keywords": ["ga", "flag", "nation", "country", "banner"],
        "char": "🇬🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "gambia": {
        "keywords": ["gm", "flag", "nation", "country", "banner"],
        "char": "🇬🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "georgia": {
        "keywords": ["ge", "flag", "nation", "country", "banner"],
        "char": "🇬🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "de": {
        "keywords": ["german", "nation", "flag", "country", "banner"],
        "char": "🇩🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "ghana": {
        "keywords": ["gh", "flag", "nation", "country", "banner"],
        "char": "🇬🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "gibraltar": {
        "keywords": ["gi", "flag", "nation", "country", "banner"],
        "char": "🇬🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "greece": {
        "keywords": ["gr", "flag", "nation", "country", "banner"],
        "char": "🇬🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "greenland": {
        "keywords": ["gl", "flag", "nation", "country", "banner"],
        "char": "🇬🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "grenada": {
        "keywords": ["gd", "flag", "nation", "country", "banner"],
        "char": "🇬🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guadeloupe": {
        "keywords": ["gp", "flag", "nation", "country", "banner"],
        "char": "🇬🇵",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guam": {
        "keywords": ["gu", "flag", "nation", "country", "banner"],
        "char": "🇬🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guatemala": {
        "keywords": ["gt", "flag", "nation", "country", "banner"],
        "char": "🇬🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guernsey": {
        "keywords": ["gg", "flag", "nation", "country", "banner"],
        "char": "🇬🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guinea": {
        "keywords": ["gn", "flag", "nation", "country", "banner"],
        "char": "🇬🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guinea_bissau": {
        "keywords": ["gw", "bissau", "flag", "nation", "country", "banner"],
        "char": "🇬🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "guyana": {
        "keywords": ["gy", "flag", "nation", "country", "banner"],
        "char": "🇬🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "haiti": {
        "keywords": ["ht", "flag", "nation", "country", "banner"],
        "char": "🇭🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "honduras": {
        "keywords": ["hn", "flag", "nation", "country", "banner"],
        "char": "🇭🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "hong_kong": {
        "keywords": ["hong", "kong", "flag", "nation", "country", "banner"],
        "char": "🇭🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "hungary": {
        "keywords": ["hu", "flag", "nation", "country", "banner"],
        "char": "🇭🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "iceland": {
        "keywords": ["is", "flag", "nation", "country", "banner"],
        "char": "🇮🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "india": {
        "keywords": ["in", "flag", "nation", "country", "banner"],
        "char": "🇮🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "indonesia": {
        "keywords": ["flag", "nation", "country", "banner"],
        "char": "🇮🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "iran": {
        "keywords": ["iran", "islamic", "republic", "flag", "nation", "country", "banner"],
        "char": "🇮🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "iraq": {
        "keywords": ["iq", "flag", "nation", "country", "banner"],
        "char": "🇮🇶",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "ireland": {
        "keywords": ["ie", "flag", "nation", "country", "banner"],
        "char": "🇮🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "isle_of_man": {
        "keywords": ["isle", "man", "flag", "nation", "country", "banner"],
        "char": "🇮🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "israel": {
        "keywords": ["il", "flag", "nation", "country", "banner"],
        "char": "🇮🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "it": {
        "keywords": ["italy", "flag", "nation", "country", "banner"],
        "char": "🇮🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "cote_divoire": {
        "keywords": ["ivory", "coast", "flag", "nation", "country", "banner"],
        "char": "🇨🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "jamaica": {
        "keywords": ["jm", "flag", "nation", "country", "banner"],
        "char": "🇯🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "jp": {
        "keywords": ["japanese", "nation", "flag", "country", "banner"],
        "char": "🇯🇵",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "jersey": {
        "keywords": ["je", "flag", "nation", "country", "banner"],
        "char": "🇯🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "jordan": {
        "keywords": ["jo", "flag", "nation", "country", "banner"],
        "char": "🇯🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kazakhstan": {
        "keywords": ["kz", "flag", "nation", "country", "banner"],
        "char": "🇰🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kenya": {
        "keywords": ["ke", "flag", "nation", "country", "banner"],
        "char": "🇰🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kiribati": {
        "keywords": ["ki", "flag", "nation", "country", "banner"],
        "char": "🇰🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kosovo": {
        "keywords": ["xk", "flag", "nation", "country", "banner"],
        "char": "🇽🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kuwait": {
        "keywords": ["kw", "flag", "nation", "country", "banner"],
        "char": "🇰🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kyrgyzstan": {
        "keywords": ["kg", "flag", "nation", "country", "banner"],
        "char": "🇰🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "laos": {
        "keywords": ["lao", "democratic", "republic", "flag", "nation", "country", "banner"],
        "char": "🇱🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "latvia": {
        "keywords": ["lv", "flag", "nation", "country", "banner"],
        "char": "🇱🇻",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "lebanon": {
        "keywords": ["lb", "flag", "nation", "country", "banner"],
        "char": "🇱🇧",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "lesotho": {
        "keywords": ["ls", "flag", "nation", "country", "banner"],
        "char": "🇱🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "liberia": {
        "keywords": ["lr", "flag", "nation", "country", "banner"],
        "char": "🇱🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "libya": {
        "keywords": ["ly", "flag", "nation", "country", "banner"],
        "char": "🇱🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "liechtenstein": {
        "keywords": ["li", "flag", "nation", "country", "banner"],
        "char": "🇱🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "lithuania": {
        "keywords": ["lt", "flag", "nation", "country", "banner"],
        "char": "🇱🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "luxembourg": {
        "keywords": ["lu", "flag", "nation", "country", "banner"],
        "char": "🇱🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "macau": {
        "keywords": ["macao", "flag", "nation", "country", "banner"],
        "char": "🇲🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "macedonia": {
        "keywords": ["macedonia", "flag", "nation", "country", "banner"],
        "char": "🇲🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "madagascar": {
        "keywords": ["mg", "flag", "nation", "country", "banner"],
        "char": "🇲🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "malawi": {
        "keywords": ["mw", "flag", "nation", "country", "banner"],
        "char": "🇲🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "malaysia": {
        "keywords": ["my", "flag", "nation", "country", "banner"],
        "char": "🇲🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "maldives": {
        "keywords": ["mv", "flag", "nation", "country", "banner"],
        "char": "🇲🇻",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mali": {
        "keywords": ["ml", "flag", "nation", "country", "banner"],
        "char": "🇲🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "malta": {
        "keywords": ["mt", "flag", "nation", "country", "banner"],
        "char": "🇲🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "marshall_islands": {
        "keywords": ["marshall", "islands", "flag", "nation", "country", "banner"],
        "char": "🇲🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "martinique": {
        "keywords": ["mq", "flag", "nation", "country", "banner"],
        "char": "🇲🇶",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mauritania": {
        "keywords": ["mr", "flag", "nation", "country", "banner"],
        "char": "🇲🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mauritius": {
        "keywords": ["mu", "flag", "nation", "country", "banner"],
        "char": "🇲🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mayotte": {
        "keywords": ["yt", "flag", "nation", "country", "banner"],
        "char": "🇾🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mexico": {
        "keywords": ["mx", "flag", "nation", "country", "banner"],
        "char": "🇲🇽",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "micronesia": {
        "keywords": ["micronesia", "federated", "states", "flag", "nation", "country", "banner"],
        "char": "🇫🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "moldova": {
        "keywords": ["moldova", "republic", "flag", "nation", "country", "banner"],
        "char": "🇲🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "monaco": {
        "keywords": ["mc", "flag", "nation", "country", "banner"],
        "char": "🇲🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mongolia": {
        "keywords": ["mn", "flag", "nation", "country", "banner"],
        "char": "🇲🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "montenegro": {
        "keywords": ["me", "flag", "nation", "country", "banner"],
        "char": "🇲🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "montserrat": {
        "keywords": ["ms", "flag", "nation", "country", "banner"],
        "char": "🇲🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "morocco": {
        "keywords": ["ma", "flag", "nation", "country", "banner"],
        "char": "🇲🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "mozambique": {
        "keywords": ["mz", "flag", "nation", "country", "banner"],
        "char": "🇲🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "myanmar": {
        "keywords": ["mm", "flag", "nation", "country", "banner"],
        "char": "🇲🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "namibia": {
        "keywords": ["na", "flag", "nation", "country", "banner"],
        "char": "🇳🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "nauru": {
        "keywords": ["nr", "flag", "nation", "country", "banner"],
        "char": "🇳🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "nepal": {
        "keywords": ["np", "flag", "nation", "country", "banner"],
        "char": "🇳🇵",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "netherlands": {
        "keywords": ["nl", "flag", "nation", "country", "banner"],
        "char": "🇳🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "new_caledonia": {
        "keywords": ["new", "caledonia", "flag", "nation", "country", "banner"],
        "char": "🇳🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "new_zealand": {
        "keywords": ["new", "zealand", "flag", "nation", "country", "banner"],
        "char": "🇳🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "nicaragua": {
        "keywords": ["ni", "flag", "nation", "country", "banner"],
        "char": "🇳🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "niger": {
        "keywords": ["ne", "flag", "nation", "country", "banner"],
        "char": "🇳🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "nigeria": {
        "keywords": ["flag", "nation", "country", "banner"],
        "char": "🇳🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "niue": {
        "keywords": ["nu", "flag", "nation", "country", "banner"],
        "char": "🇳🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "norfolk_island": {
        "keywords": ["norfolk", "island", "flag", "nation", "country", "banner"],
        "char": "🇳🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "northern_mariana_islands": {
        "keywords": ["northern", "mariana", "islands", "flag", "nation", "country", "banner"],
        "char": "🇲🇵",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "north_korea": {
        "keywords": ["north", "korea", "nation", "flag", "country", "banner"],
        "char": "🇰🇵",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "norway": {
        "keywords": ["no", "flag", "nation", "country", "banner"],
        "char": "🇳🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "oman": {
        "keywords": ["om_symbol", "flag", "nation", "country", "banner"],
        "char": "🇴🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "pakistan": {
        "keywords": ["pk", "flag", "nation", "country", "banner"],
        "char": "🇵🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "palau": {
        "keywords": ["pw", "flag", "nation", "country", "banner"],
        "char": "🇵🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "palestinian_territories": {
        "keywords": ["palestine", "palestinian", "territories", "flag", "nation", "country", "banner"],
        "char": "🇵🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "panama": {
        "keywords": ["pa", "flag", "nation", "country", "banner"],
        "char": "🇵🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "papua_new_guinea": {
        "keywords": ["papua", "new", "guinea", "flag", "nation", "country", "banner"],
        "char": "🇵🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "paraguay": {
        "keywords": ["py", "flag", "nation", "country", "banner"],
        "char": "🇵🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "peru": {
        "keywords": ["pe", "flag", "nation", "country", "banner"],
        "char": "🇵🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "philippines": {
        "keywords": ["ph", "flag", "nation", "country", "banner"],
        "char": "🇵🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "pitcairn_islands": {
        "keywords": ["pitcairn", "flag", "nation", "country", "banner"],
        "char": "🇵🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "poland": {
        "keywords": ["pl", "flag", "nation", "country", "banner"],
        "char": "🇵🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "portugal": {
        "keywords": ["pt", "flag", "nation", "country", "banner"],
        "char": "🇵🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "puerto_rico": {
        "keywords": ["puerto", "rico", "flag", "nation", "country", "banner"],
        "char": "🇵🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "qatar": {
        "keywords": ["qa", "flag", "nation", "country", "banner"],
        "char": "🇶🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "reunion": {
        "keywords": ["réunion", "flag", "nation", "country", "banner"],
        "char": "🇷🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "romania": {
        "keywords": ["ro", "flag", "nation", "country", "banner"],
        "char": "🇷🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "ru": {
        "keywords": ["russian", "federation", "flag", "nation", "country", "banner"],
        "char": "🇷🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "rwanda": {
        "keywords": ["rw", "flag", "nation", "country", "banner"],
        "char": "🇷🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "st_barthelemy": {
        "keywords": ["saint", "barthélemy", "flag", "nation", "country", "banner"],
        "char": "🇧🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "st_helena": {
        "keywords": ["saint", "helena", "ascension", "tristan", "cunha", "flag", "nation", "country", "banner"],
        "char": "🇸🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "st_kitts_nevis": {
        "keywords": ["saint", "kitts", "nevis", "flag", "nation", "country", "banner"],
        "char": "🇰🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "st_lucia": {
        "keywords": ["saint", "lucia", "flag", "nation", "country", "banner"],
        "char": "🇱🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "st_pierre_miquelon": {
        "keywords": ["saint", "pierre", "miquelon", "flag", "nation", "country", "banner"],
        "char": "🇵🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "st_vincent_grenadines": {
        "keywords": ["saint", "vincent", "grenadines", "flag", "nation", "country", "banner"],
        "char": "🇻🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "samoa": {
        "keywords": ["ws", "flag", "nation", "country", "banner"],
        "char": "🇼🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "san_marino": {
        "keywords": ["san", "marino", "flag", "nation", "country", "banner"],
        "char": "🇸🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "sao_tome_principe": {
        "keywords": ["sao", "tome", "principe", "flag", "nation", "country", "banner"],
        "char": "🇸🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "saudi_arabia": {
        "keywords": ["flag", "nation", "country", "banner"],
        "char": "🇸🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "senegal": {
        "keywords": ["sn", "flag", "nation", "country", "banner"],
        "char": "🇸🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "serbia": {
        "keywords": ["rs", "flag", "nation", "country", "banner"],
        "char": "🇷🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "seychelles": {
        "keywords": ["sc", "flag", "nation", "country", "banner"],
        "char": "🇸🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "sierra_leone": {
        "keywords": ["sierra", "leone", "flag", "nation", "country", "banner"],
        "char": "🇸🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "singapore": {
        "keywords": ["sg", "flag", "nation", "country", "banner"],
        "char": "🇸🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "sint_maarten": {
        "keywords": ["sint", "maarten", "dutch", "flag", "nation", "country", "banner"],
        "char": "🇸🇽",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "slovakia": {
        "keywords": ["sk", "flag", "nation", "country", "banner"],
        "char": "🇸🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "slovenia": {
        "keywords": ["si", "flag", "nation", "country", "banner"],
        "char": "🇸🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "solomon_islands": {
        "keywords": ["solomon", "islands", "flag", "nation", "country", "banner"],
        "char": "🇸🇧",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "somalia": {
        "keywords": ["so", "flag", "nation", "country", "banner"],
        "char": "🇸🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "south_africa": {
        "keywords": ["south", "africa", "flag", "nation", "country", "banner"],
        "char": "🇿🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "south_georgia_south_sandwich_islands": {
        "keywords": ["south", "georgia", "sandwich", "islands", "flag", "nation", "country", "banner"],
        "char": "🇬🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "kr": {
        "keywords": ["south", "korea", "nation", "flag", "country", "banner"],
        "char": "🇰🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "south_sudan": {
        "keywords": ["south", "sd", "flag", "nation", "country", "banner"],
        "char": "🇸🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "es": {
        "keywords": ["spain", "flag", "nation", "country", "banner"],
        "char": "🇪🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "sri_lanka": {
        "keywords": ["sri", "lanka", "flag", "nation", "country", "banner"],
        "char": "🇱🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "sudan": {
        "keywords": ["sd", "flag", "nation", "country", "banner"],
        "char": "🇸🇩",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "suriname": {
        "keywords": ["sr", "flag", "nation", "country", "banner"],
        "char": "🇸🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "swaziland": {
        "keywords": ["sz", "flag", "nation", "country", "banner"],
        "char": "🇸🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "sweden": {
        "keywords": ["se", "flag", "nation", "country", "banner"],
        "char": "🇸🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "switzerland": {
        "keywords": ["ch", "flag", "nation", "country", "banner"],
        "char": "🇨🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "syria": {
        "keywords": ["syrian", "arab", "republic", "flag", "nation", "country", "banner"],
        "char": "🇸🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "taiwan": {
        "keywords": ["tw", "flag", "nation", "country", "banner"],
        "char": "🇹🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tajikistan": {
        "keywords": ["tj", "flag", "nation", "country", "banner"],
        "char": "🇹🇯",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tanzania": {
        "keywords": ["tanzania", "united", "republic", "flag", "nation", "country", "banner"],
        "char": "🇹🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "thailand": {
        "keywords": ["th", "flag", "nation", "country", "banner"],
        "char": "🇹🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "timor_leste": {
        "keywords": ["timor", "leste", "flag", "nation", "country", "banner"],
        "char": "🇹🇱",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "togo": {
        "keywords": ["tg", "flag", "nation", "country", "banner"],
        "char": "🇹🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tokelau": {
        "keywords": ["tk", "flag", "nation", "country", "banner"],
        "char": "🇹🇰",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tonga": {
        "keywords": ["to", "flag", "nation", "country", "banner"],
        "char": "🇹🇴",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "trinidad_tobago": {
        "keywords": ["trinidad", "tobago", "flag", "nation", "country", "banner"],
        "char": "🇹🇹",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tunisia": {
        "keywords": ["tn", "flag", "nation", "country", "banner"],
        "char": "🇹🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tr": {
        "keywords": ["turkey", "flag", "nation", "country", "banner"],
        "char": "🇹🇷",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "turkmenistan": {
        "keywords": ["flag", "nation", "country", "banner"],
        "char": "🇹🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "turks_caicos_islands": {
        "keywords": ["turks", "caicos", "islands", "flag", "nation", "country", "banner"],
        "char": "🇹🇨",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "tuvalu": {
        "keywords": ["flag", "nation", "country", "banner"],
        "char": "🇹🇻",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "uganda": {
        "keywords": ["ug", "flag", "nation", "country", "banner"],
        "char": "🇺🇬",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "ukraine": {
        "keywords": ["ua", "flag", "nation", "country", "banner"],
        "char": "🇺🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "united_arab_emirates": {
        "keywords": ["united", "arab", "emirates", "flag", "nation", "country", "banner"],
        "char": "🇦🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "uk": {
        "keywords": ["united", "kingdom", "great", "britain", "northern", "ireland", "flag", "nation", "country", "banner", "british", "UK", "english", "england", "union jack"],
        "char": "🇬🇧",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "england": {
        "keywords": ["flag", "english"],
        "char": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "scotland": {
        "keywords": ["flag", "scottish"],
        "char": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "wales": {
        "keywords": ["flag", "welsh"],
        "char": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "us": {
        "keywords": ["united", "states", "america", "flag", "nation", "country", "banner"],
        "char": "🇺🇸",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "us_virgin_islands": {
        "keywords": ["virgin", "islands", "us", "flag", "nation", "country", "banner"],
        "char": "🇻🇮",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "uruguay": {
        "keywords": ["uy", "flag", "nation", "country", "banner"],
        "char": "🇺🇾",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "uzbekistan": {
        "keywords": ["uz", "flag", "nation", "country", "banner"],
        "char": "🇺🇿",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "vanuatu": {
        "keywords": ["vu", "flag", "nation", "country", "banner"],
        "char": "🇻🇺",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "vatican_city": {
        "keywords": ["vatican", "city", "flag", "nation", "country", "banner"],
        "char": "🇻🇦",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "venezuela": {
        "keywords": ["ve", "bolivarian", "republic", "flag", "nation", "country", "banner"],
        "char": "🇻🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "vietnam": {
        "keywords": ["viet", "nam", "flag", "nation", "country", "banner"],
        "char": "🇻🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "wallis_futuna": {
        "keywords": ["wallis", "futuna", "flag", "nation", "country", "banner"],
        "char": "🇼🇫",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "western_sahara": {
        "keywords": ["western", "sahara", "flag", "nation", "country", "banner"],
        "char": "🇪🇭",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "yemen": {
        "keywords": ["ye", "flag", "nation", "country", "banner"],
        "char": "🇾🇪",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "zambia": {
        "keywords": ["zm", "flag", "nation", "country", "banner"],
        "char": "🇿🇲",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "zimbabwe": {
        "keywords": ["zw", "flag", "nation", "country", "banner"],
        "char": "🇿🇼",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "united_nations": {
        "keywords": ["un", "flag", "banner"],
        "char": "🇺🇳",
        "fitzpatrick_scale": false,
        "category": "flags"
    },
    "pirate_flag": {
        "keywords": ["skull", "crossbones", "flag", "banner"],
        "char": "🏴‍☠️",
        "fitzpatrick_scale": false,
        "category": "flags"
    }
};

const keys = Object.keys(data);
const thesaurusDictionary = [];
keys.forEach(key => {
    if (key.length > 3 || data[key].category !== 'flags') {
        thesaurusDictionary.push({ alias: key.split('_').join(' '), emoji: data[key].char });
    }
    data[key].keywords.forEach(keyword => {
        if (keyword.length > 3 || data[key].category !== 'flags') {
            thesaurusDictionary.push({ alias: keyword, emoji: data[key].char });
        }
    })
})

const dictionary = [
    { alias: "smiling face with open mouth & smiling eyes", emoji: "😄" },
    { alias: "smiling face with open mouth & closed eyes", emoji: "😆" },
    { alias: "smiling face with open mouth & cold sweat", emoji: "😅" },
    { alias: "face with stuck-out tongue & winking eye", emoji: "😜" },
    { alias: "face with stuck-out tongue & closed eyes", emoji: "😝" },
    { alias: "face with open mouth & cold sweat", emoji: "😰" },
    { alias: "south georgia & south sandwich islands", emoji: "🇬🇸" },
    { alias: "japanese “not free of charge” button", emoji: "🈶" },
    { alias: "grinning cat face with smiling eyes", emoji: "😸" },
    { alias: "kissing cat face with closed eyes", emoji: "😽" },
    { alias: "smiling cat face with open mouth", emoji: "😺" },
    { alias: "diamond shape with a dot inside", emoji: "💠" },
    { alias: "cat face with tears of joy", emoji: "😹" },
    { alias: "south georgia south sandwich islands", emoji: "🇬🇸" },
    { alias: "japanese “open for business” button", emoji: "🈺" },
    { alias: "high-speed train with bullet nose", emoji: "🚅" },
    { alias: "smiling cat face with heart-eyes", emoji: "😻" },
    { alias: "raised hand with fingers splayed", emoji: "🖐" },
    { alias: "family: woman, woman, girl, girl", emoji: "👩‍👩‍👧‍👧" },
    { alias: "closed mailbox with lowered flag", emoji: "📪" },
    { alias: "japanese “free of charge” button", emoji: "🈚️" },
    { alias: "grinning face with smiling eyes", emoji: "😁" },
    { alias: "man in business suit levitating", emoji: "🕴" },
    { alias: "people with bunny ears partying", emoji: "👯" },
    { alias: "couple with heart: woman, woman", emoji: "👩‍❤️‍👩" },
    { alias: "family: woman, woman, girl, boy", emoji: "👩‍👩‍👧‍👦" },
    { alias: "closed mailbox with raised flag", emoji: "📫" },
    { alias: "smiling face with smiling eyes", emoji: "😊" },
    { alias: "kissing face with smiling eyes", emoji: "😙" },
    { alias: "family: man, woman, girl, girl", emoji: "👨‍👩‍👧‍👧" },
    { alias: "family: woman, woman, boy, boy", emoji: "👩‍👩‍👦‍👦" },
    { alias: "open mailbox with lowered flag", emoji: "📭" },
    { alias: "rolling on the floor laughing", emoji: "🤣" },
    { alias: "kissing face with closed eyes", emoji: "😚" },
    { alias: "frowning face with open mouth", emoji: "😦" },
    { alias: "couple with heart woman woman", emoji: "👩‍❤️‍👩" },
    { alias: "family: man, woman, girl, boy", emoji: "👨‍👩‍👧‍👦" },
    { alias: "cloud with lightning and rain", emoji: "⛈" },
    { alias: "open mailbox with raised flag", emoji: "📬" },
    { alias: "smiling face with open mouth", emoji: "😃" },
    { alias: "stuck out tongue winking eye", emoji: "😜" },
    { alias: "stuck out tongue closed eyes", emoji: "😝" },
    { alias: "men with bunny ears partying", emoji: "👯‍♂" },
    { alias: "family: man, woman, boy, boy", emoji: "👨‍👩‍👦‍👦" },
    { alias: "family woman woman girl girl", emoji: "👩‍👩‍👧‍👧" },
    { alias: "family: man, man, girl, girl", emoji: "👨‍👨‍👧‍👧" },
    { alias: "first quarter moon with face", emoji: "🌛" },
    { alias: "man and woman holding hands", emoji: "👫" },
    { alias: "couple with heart woman man", emoji: "💑" },
    { alias: "couple with heart: man, man", emoji: "👨‍❤️‍👨" },
    { alias: "family woman woman girl boy", emoji: "👩‍👩‍👧‍👦" },
    { alias: "family: man, man, girl, boy", emoji: "👨‍👨‍👧‍👦" },
    { alias: "last quarter moon with face", emoji: "🌜" },
    { alias: "family man woman girl girl", emoji: "👨‍👩‍👧‍👧" },
    { alias: "family woman woman boy boy", emoji: "👩‍👩‍👦‍👦" },
    { alias: "family: man, man, boy, boy", emoji: "👨‍👨‍👦‍👦" },
    { alias: "face with steam from nose", emoji: "😤" },
    { alias: "couple with heart man man", emoji: "👨‍❤️‍👨" },
    { alias: "family man woman girl boy", emoji: "👨‍👩‍👧‍👦" },
    { alias: "fork and knife with plate", emoji: "🍽" },
    { alias: "family man woman boy boy", emoji: "👨‍👩‍👦‍👦" },
    { alias: "family man man girl girl", emoji: "👨‍👨‍👧‍👧" },
    { alias: "cat face with wry smile", emoji: "😼" },
    { alias: "family man man girl boy", emoji: "👨‍👨‍👧‍👦" },
    { alias: "put litter in its place", emoji: "🚮" },
    { alias: "face with tears of joy", emoji: "😂" },
    { alias: "family man man boy boy", emoji: "👨‍👨‍👦‍👦" },
    { alias: "man with gua pi mao", emoji: "👲" },
    { alias: "japanese “monthly amount” button", emoji: "🈷️" },
    { alias: "japanese “service charge” button", emoji: "🈂️" },
    { alias: "japanese “passing grade” button", emoji: "🈴" },
    { alias: "disappointed but relieved face", emoji: "😥" },
    { alias: "notebook with decorative cover", emoji: "📔" },
    { alias: "british indian ocean territory", emoji: "🇮🇴" },
    { alias: "face savouring delicious food", emoji: "😋" },
    { alias: "backhand index pointing right", emoji: "👉" },
    { alias: "smiling face with heart-eyes", emoji: "😍" },
    { alias: "smiling face with sunglasses", emoji: "😎" },
    { alias: "backhand index pointing left", emoji: "👈" },
    { alias: "backhand index pointing down", emoji: "👇" },
    { alias: "japanese “no vacancy” button", emoji: "🈵" },
    { alias: "japanese symbol for beginner", emoji: "🔰" },
    { alias: "hourglass with flowing sand", emoji: "⏳" },
    { alias: "negative squared cross mark", emoji: "❎" },
    { alias: "face with stuck-out tongue", emoji: "😛" },
    { alias: "backhand index pointing up", emoji: "👆" },
    { alias: "family: woman, woman, girl", emoji: "👩‍👩‍👧" },
    { alias: "chart with downwards trend", emoji: "📉" },
    { alias: "family: woman, woman, boy", emoji: "👩‍👩‍👦" },
    { alias: "family: woman, girl, girl", emoji: "👩‍👧‍👧" },
    { alias: "chart increasing with yen", emoji: "💹" },
    { alias: "leftwards arrow with hook", emoji: "↩️" },
    { alias: "red triangle pointed down", emoji: "🔻" },
    { alias: "black medium small square", emoji: "◾️" },
    { alias: "white medium small square", emoji: "◽️" },
    { alias: "person with pouting face", emoji: "🙎" },
    { alias: "family: man, woman, girl", emoji: "👨‍👩‍👧" },
    { alias: "family: woman, girl, boy", emoji: "👩‍👧‍👦" },
    { alias: "umbrella with rain drops", emoji: "☔️" },
    { alias: "bottle with popping cork", emoji: "🍾" },
    { alias: "woman playing water polo", emoji: "🤽‍♀" },
    { alias: "chart with upwards trend", emoji: "📈" },
    { alias: "eight pointed black star", emoji: "✴️" },
    { alias: "left arrow curving right", emoji: "↪️" },
    { alias: "right arrow curving left", emoji: "↩️" },
    { alias: "right arrow curving down", emoji: "⤵️" },
    { alias: "st. vincent & grenadines", emoji: "🇻🇨" },
    { alias: "smiling face with horns", emoji: "😈" },
    { alias: "two women holding hands", emoji: "👭" },
    { alias: "family woman woman girl", emoji: "👩‍👩‍👧" },
    { alias: "family: woman, boy, boy", emoji: "👩‍👦‍👦" },
    { alias: "family: man, girl, girl", emoji: "👨‍👧‍👧" },
    { alias: "leaf fluttering in wind", emoji: "🍃" },
    { alias: "running shirt with sash", emoji: "🎽" },
    { alias: "mobile phone with arrow", emoji: "📲" },
    { alias: "red triangle pointed up", emoji: "🔺" },
    { alias: "small red triangle down", emoji: "🔻" },
    { alias: "triangular flag on post", emoji: "🚩" },
    { alias: "smiling face with halo", emoji: "😇" },
    { alias: "face screaming in fear", emoji: "😱" },
    { alias: "face with rolling eyes", emoji: "🙄" },
    { alias: "face with medical mask", emoji: "😷" },
    { alias: "face with head bandage", emoji: "🤕" },
    { alias: "person with blond hair", emoji: "👱" },
    { alias: "family woman woman boy", emoji: "👩‍👩‍👦" },
    { alias: "family: man, man, girl", emoji: "👨‍👨‍👧" },
    { alias: "family woman girl girl", emoji: "👩‍👧‍👧" },
    { alias: "family: man, girl, boy", emoji: "👨‍👧‍👦" },
    { alias: "sun behind small cloud", emoji: "🌤" },
    { alias: "sun behind large cloud", emoji: "🌥" },
    { alias: "man playing water polo", emoji: "🤽‍♂" },
    { alias: "ballot box with ballot", emoji: "🗳" },
    { alias: "ab button (blood type)", emoji: "🆎" },
    { alias: "white heavy check mark", emoji: "✅" },
    { alias: "right arrow curving up", emoji: "⤴️" },
    { alias: "turks & caicos islands", emoji: "🇹🇨" },
    { alias: "angry face with horns", emoji: "👿" },
    { alias: "two men holding hands", emoji: "👬" },
    { alias: "family man woman girl", emoji: "👨‍👩‍👧" },
    { alias: "family: man, man, boy", emoji: "👨‍👨‍👦" },
    { alias: "family woman girl boy", emoji: "👩‍👧‍👦" },
    { alias: "family: man, boy, boy", emoji: "👨‍👦‍👦" },
    { alias: "sun behind rain cloud", emoji: "🌦" },
    { alias: "fishing pole and fish", emoji: "🎣" },
    { alias: "a button (blood type)", emoji: "🅰️" },
    { alias: "b button (blood type)", emoji: "🅱️" },
    { alias: "o button (blood type)", emoji: "🅾️" },
    { alias: "no one under eighteen", emoji: "🔞" },
    { alias: "ballot box with check", emoji: "☑️" },
    { alias: "st. pierre & miquelon", emoji: "🇵🇲" },
    { alias: "face with open mouth", emoji: "😮" },
    { alias: "face with cold sweat", emoji: "😓" },
    { alias: "man with chinese cap", emoji: "👲" },
    { alias: "family man woman boy", emoji: "👪" },
    { alias: "family woman boy boy", emoji: "👩‍👦‍👦" },
    { alias: "family man girl girl", emoji: "👨‍👧‍👧" },
    { alias: "fish cake with swirl", emoji: "🍥" },
    { alias: "mailbox with no mail", emoji: "📭" },
    { alias: "closed lock with key", emoji: "🔐" },
    { alias: "play or pause button", emoji: "⏯" },
    { alias: "eye in speech bubble", emoji: "👁‍🗨" },
    { alias: "face blowing a kiss", emoji: "😘" },
    { alias: "raised back of hand", emoji: "🤚" },
    { alias: "family man man girl", emoji: "👨‍👨‍👧" },
    { alias: "family man girl boy", emoji: "👨‍👧‍👦" },
    { alias: "full moon with face", emoji: "🌝" },
    { alias: "shallow pan of food", emoji: "🥘" },
    { alias: "hong kong sar china", emoji: "🇭🇰" },
    { alias: "são tomé & príncipe", emoji: "🇸🇹" },
    { alias: "family man man boy", emoji: "👨‍👨‍👦" },
    { alias: "family man boy boy", emoji: "👨‍👦‍👦" },
    { alias: "new moon with face", emoji: "🌚" },
    { alias: "diamond with a dot", emoji: "💠" },
    { alias: "litter in bin sign", emoji: "🚮" },
    { alias: "sign of the horns", emoji: "🤘" },
    { alias: "lock with ink pen", emoji: "🔏" },
    { alias: "st. kitts & nevis", emoji: "🇰🇳" },
    { alias: "japanese “congratulations” button", emoji: "㊗️" },
    { alias: "right-pointing magnifying glass", emoji: "🔎" },
    { alias: "left-pointing magnifying glass", emoji: "🔍" },
    { alias: "japanese “application” button", emoji: "🈸" },
    { alias: "globe showing asia-australia", emoji: "🌏" },
    { alias: "japanese “acceptable” button", emoji: "🉑" },
    { alias: "japanese “prohibited” button", emoji: "🈲" },
    { alias: "globe showing europe-africa", emoji: "🌍" },
    { alias: "anticlockwise arrows button", emoji: "🔄" },
    { alias: "french southern territories", emoji: "🇹🇫" },
    { alias: "japanese “discount” button", emoji: "🈹" },
    { alias: "japanese “reserved” button", emoji: "🈯️" },
    { alias: "woman construction worker", emoji: "👷‍♀" },
    { alias: "construction worker woman", emoji: "👷‍♀" },
    { alias: "japanese “bargain” button", emoji: "🉐" },
    { alias: "exclamation question mark", emoji: "⁉️" },
    { alias: "japanese “vacancy” button", emoji: "🈳" },
    { alias: "twisted rightwards arrows", emoji: "🔀" },
    { alias: "clockwise vertical arrows", emoji: "🔃" },
    { alias: "black medium-small square", emoji: "◾️" },
    { alias: "white medium-small square", emoji: "◽️" },
    { alias: "business suit levitating", emoji: "🕴" },
    { alias: "horizontal traffic light", emoji: "🚥" },
    { alias: "japanese “secret” button", emoji: "㊙️" },
    { alias: "central african republic", emoji: "🇨🇫" },
    { alias: "northern mariana islands", emoji: "🇲🇵" },
    { alias: "construction worker man", emoji: "👷" },
    { alias: "information desk person", emoji: "💁" },
    { alias: "front-facing baby chick", emoji: "🐥" },
    { alias: "heavy heart exclamation", emoji: "❣️" },
    { alias: "dotted six-pointed star", emoji: "🔯" },
    { alias: "double exclamation mark", emoji: "‼️" },
    { alias: "cocos (keeling) islands", emoji: "🇨🇨" },
    { alias: "slightly frowning face", emoji: "🙁" },
    { alias: "face with head-bandage", emoji: "🤕" },
    { alias: "person getting haircut", emoji: "💇" },
    { alias: "person getting massage", emoji: "💆" },
    { alias: "couplekiss woman woman", emoji: "👩‍❤️‍💋‍👩" },
    { alias: "rescue worker’s helmet", emoji: "⛑" },
    { alias: "globe showing americas", emoji: "🌎" },
    { alias: "person lifting weights", emoji: "🏋" },
    { alias: "woman playing handball", emoji: "🤾‍♀" },
    { alias: "person mountain biking", emoji: "🚵" },
    { alias: "vertical traffic light", emoji: "🚦" },
    { alias: "sunrise over mountains", emoji: "🌄" },
    { alias: "hourglass flowing sand", emoji: "⏳" },
    { alias: "heavy exclamation mark", emoji: "❗️" },
    { alias: "white exclamation mark", emoji: "❕" },
    { alias: "japanese “here” button", emoji: "🈁" },
    { alias: "heavy multiplication x", emoji: "✖️" },
    { alias: "british virgin islands", emoji: "🇻🇬" },
    { alias: "slightly smiling face", emoji: "🙂" },
    { alias: "face with thermometer", emoji: "🤒" },
    { alias: "person wearing turban", emoji: "👳" },
    { alias: "teacup without handle", emoji: "🍵" },
    { alias: "woman lifting weights", emoji: "🏋️‍♀️" },
    { alias: "woman mountain biking", emoji: "🚵‍♀" },
    { alias: "mountain biking woman", emoji: "🚵‍♀" },
    { alias: "sport utility vehicle", emoji: "🚙" },
    { alias: "moon viewing ceremony", emoji: "🎑" },
    { alias: "part alternation mark", emoji: "〽️" },
    { alias: "eight spoked asterisk", emoji: "✳️" },
    { alias: "input latin lowercase", emoji: "🔡" },
    { alias: "input latin uppercase", emoji: "🔠" },
    { alias: "previous track button", emoji: "⏮" },
    { alias: "shuffle tracks button", emoji: "🔀" },
    { alias: "speaker medium volume", emoji: "🔉" },
    { alias: "st vincent grenadines", emoji: "🇻🇨" },
    { alias: "kissing smiling eyes", emoji: "😙" },
    { alias: "skull and crossbones", emoji: "☠️" },
    { alias: "woman wearing turban", emoji: "👳‍♀" },
    { alias: "woman police officer", emoji: "👮‍♀" },
    { alias: "woman factory worker", emoji: "👩‍🏭" },
    { alias: "couplekiss man woman", emoji: "💏" },
    { alias: "rescue worker helmet", emoji: "⛑" },
    { alias: "waning crescent moon", emoji: "🌘" },
    { alias: "waxing crescent moon", emoji: "🌒" },
    { alias: "cloud with lightning", emoji: "🌩" },
    { alias: "snowman without snow", emoji: "⛄️" },
    { alias: "roasted sweet potato", emoji: "🍠" },
    { alias: "martial arts uniform", emoji: "🥋" },
    { alias: "weight lifting woman", emoji: "🏋️‍♀️" },
    { alias: "person bouncing ball", emoji: "⛹" },
    { alias: "man playing handball", emoji: "🤾‍♂" },
    { alias: "japanese post office", emoji: "🏣" },
    { alias: "european post office", emoji: "🏤" },
    { alias: "globe with meridians", emoji: "🌐" },
    { alias: "repeat single button", emoji: "🔂" },
    { alias: "small orange diamond", emoji: "🔸" },
    { alias: "large orange diamond", emoji: "🔶" },
    { alias: "flower playing cards", emoji: "🎴" },
    { alias: "bosnia & herzegovina", emoji: "🇧🇦" },
    { alias: "turks caicos islands", emoji: "🇹🇨" },
    { alias: "united arab emirates", emoji: "🇦🇪" },
    { alias: "kissing closed eyes", emoji: "😚" },
    { alias: "busts in silhouette", emoji: "👥" },
    { alias: "woman health worker", emoji: "👩‍⚕" },
    { alias: "woman office worker", emoji: "👩‍💼" },
    { alias: "person tipping hand", emoji: "💁" },
    { alias: "person gesturing no", emoji: "🙅" },
    { alias: "person gesturing ok", emoji: "🙆" },
    { alias: "person raising hand", emoji: "🙋" },
    { alias: "man getting haircut", emoji: "💇‍♂" },
    { alias: "man getting massage", emoji: "💆‍♂" },
    { alias: "family: woman, girl", emoji: "👩‍👧" },
    { alias: "waning gibbous moon", emoji: "🌖" },
    { alias: "waxing gibbous moon", emoji: "🌔" },
    { alias: "woman bouncing ball", emoji: "⛹️‍♀️" },
    { alias: "mountain biking man", emoji: "🚵" },
    { alias: "oncoming police car", emoji: "🚔" },
    { alias: "beach with umbrella", emoji: "🏖" },
    { alias: "envelope with arrow", emoji: "📩" },
    { alias: "card index dividers", emoji: "🗂" },
    { alias: "white question mark", emoji: "❔" },
    { alias: "input latin letters", emoji: "🔤" },
    { alias: "fast reverse button", emoji: "⏪" },
    { alias: "heavy division sign", emoji: "➗" },
    { alias: "white square button", emoji: "🔳" },
    { alias: "black square button", emoji: "🔲" },
    { alias: "black medium square", emoji: "◼️" },
    { alias: "white medium square", emoji: "◻️" },
    { alias: "speaker high volume", emoji: "🔊" },
    { alias: "congo - brazzaville", emoji: "🇨🇬" },
    { alias: "u.s. virgin islands", emoji: "🇻🇮" },
    { alias: "face without mouth", emoji: "😶" },
    { alias: "loudly crying face", emoji: "😭" },
    { alias: "bust in silhouette", emoji: "👤" },
    { alias: "man factory worker", emoji: "👨‍🏭" },
    { alias: "tipping hand woman", emoji: "💁" },
    { alias: "raising hand woman", emoji: "🙋" },
    { alias: "kiss: woman, woman", emoji: "👩‍❤️‍💋‍👩" },
    { alias: "couplekiss man man", emoji: "👨‍❤️‍💋‍👨" },
    { alias: "family: woman, boy", emoji: "👩‍👦" },
    { alias: "first quarter moon", emoji: "🌓" },
    { alias: "clinking beer mugs", emoji: "🍻" },
    { alias: "plate with cutlery", emoji: "🍽" },
    { alias: "weight lifting man", emoji: "🏋" },
    { alias: "person rowing boat", emoji: "🚣" },
    { alias: "umbrella on ground", emoji: "⛱" },
    { alias: "person taking bath", emoji: "🛀" },
    { alias: "heavy large circle", emoji: "⭕️" },
    { alias: "arrow heading down", emoji: "⤵️" },
    { alias: "small red triangle", emoji: "🔺" },
    { alias: "small blue diamond", emoji: "🔹" },
    { alias: "large blue diamond", emoji: "🔷" },
    { alias: "black small square", emoji: "▪️" },
    { alias: "white small square", emoji: "▫️" },
    { alias: "black large square", emoji: "⬛️" },
    { alias: "white large square", emoji: "⬜️" },
    { alias: " low volume", emoji: "🔈" },
    { alias: "right anger bubble", emoji: "🗯" },
    { alias: "mahjong red dragon", emoji: "🀄️" },
    { alias: "st pierre miquelon", emoji: "🇵🇲" },
    { alias: "zipper mouth face", emoji: "🤐" },
    { alias: "index pointing up", emoji: "☝️" },
    { alias: "woman with turban", emoji: "👳‍♀" },
    { alias: "man health worker", emoji: "👨‍⚕" },
    { alias: "man office worker", emoji: "👨‍💼" },
    { alias: "couple with heart", emoji: "💑" },
    { alias: "family woman girl", emoji: "👩‍👧" },
    { alias: "family: man, girl", emoji: "👨‍👧" },
    { alias: "last quarter moon", emoji: "🌗" },
    { alias: "white medium star", emoji: "⭐️" },
    { alias: "snowman with snow", emoji: "☃️" },
    { alias: "woman rowing boat", emoji: "🚣‍♀" },
    { alias: "statue of liberty", emoji: "🗽" },
    { alias: "parasol on ground", emoji: "⛱" },
    { alias: "house with garden", emoji: "🏡" },
    { alias: "cityscape at dusk", emoji: "🌆" },
    { alias: "camera with flash", emoji: "📸" },
    { alias: "hammer and wrench", emoji: "🛠" },
    { alias: "red paper lantern", emoji: "🏮" },
    { alias: "mailbox with mail", emoji: "📬" },
    { alias: "heart with ribbon", emoji: "💝" },
    { alias: "star and crescent", emoji: "☪️" },
    { alias: "cross mark button", emoji: "❎" },
    { alias: "next track button", emoji: "⏭" },
    { alias: "last track button", emoji: "⏮" },
    { alias: "arrow double down", emoji: "⏬" },
    { alias: "arrow upper right", emoji: "↗️" },
    { alias: "arrow lower right", emoji: "↘️" },
    { alias: "heavy dollar sign", emoji: "💲" },
    { alias: "double curly loop", emoji: "➿" },
    { alias: "large blue circle", emoji: "🔵" },
    { alias: "eye speech bubble", emoji: "👁‍🗨" },
    { alias: "antigua & barbuda", emoji: "🇦🇬" },
    { alias: "sao tome principe", emoji: "🇸🇹" },
    { alias: "trinidad & tobago", emoji: "🇹🇹" },
    { alias: "us virgin islands", emoji: "🇻🇮" },
    { alias: "upside down face", emoji: "🙃" },
    { alias: "stuck out tongue", emoji: "😛" },
    { alias: "money mouth face", emoji: "🤑" },
    { alias: "pouting cat face", emoji: "😾" },
    { alias: "man tipping hand", emoji: "💁‍♂" },
    { alias: "tipping hand man", emoji: "💁‍♂" },
    { alias: "man gesturing no", emoji: "🙅‍♂" },
    { alias: "man gesturing ok", emoji: "🙆‍♂" },
    { alias: "man raising hand", emoji: "🙋‍♂" },
    { alias: "raising hand man", emoji: "🙋‍♂" },
    { alias: "family woman boy", emoji: "👩‍👦" },
    { alias: "family: man, boy", emoji: "👨‍👦" },
    { alias: "four leaf clover", emoji: "🍀" },
    { alias: "sun behind cloud", emoji: "⛅️" },
    { alias: "police car light", emoji: "🚨" },
    { alias: "night with stars", emoji: "🌃" },
    { alias: "money with wings", emoji: "💸" },
    { alias: "open file folder", emoji: "📂" },
    { alias: "heart with arrow", emoji: "💘" },
    { alias: "six pointed star", emoji: "🔯" },
    { alias: "place of worship", emoji: "🛐" },
    { alias: "mobile phone off", emoji: "📴" },
    { alias: "no mobile phones", emoji: "📵" },
    { alias: "white check mark", emoji: "✅" },
    { alias: "fast down button", emoji: "⏬" },
    { alias: "arrow down small", emoji: "🔽" },
    { alias: "arrow lower left", emoji: "↙️" },
    { alias: "arrow upper left", emoji: "↖️" },
    { alias: "left right arrow", emoji: "↔️" },
    { alias: "arrow right hook", emoji: "↪️" },
    { alias: "arrow heading up", emoji: "⤴️" },
    { alias: "heavy minus sign", emoji: "➖" },
    { alias: "heavy check mark", emoji: "✔️" },
    { alias: "congo - kinshasa", emoji: "🇨🇩" },
    { alias: "papua new guinea", emoji: "🇵🇬" },
    { alias: "cowboy hat face", emoji: "🤠" },
    { alias: "crying cat face", emoji: "😿" },
    { alias: "man with turban", emoji: "👳" },
    { alias: "bride with veil", emoji: "👰" },
    { alias: "family man girl", emoji: "👨‍👧" },
    { alias: "cloud with rain", emoji: "🌧" },
    { alias: "cloud with snow", emoji: "🌨" },
    { alias: "1st place medal", emoji: "🥇" },
    { alias: "2nd place medal", emoji: "🥈" },
    { alias: "3rd place medal", emoji: "🥉" },
    { alias: "bridge at night", emoji: "🌉" },
    { alias: "hammer and pick", emoji: "⚒" },
    { alias: "locked with pen", emoji: "🔏" },
    { alias: "locked with key", emoji: "🔐" },
    { alias: "wheel of dharma", emoji: "☸️" },
    { alias: "arrow double up", emoji: "⏫" },
    { alias: "heavy plus sign", emoji: "➕" },
    { alias: "bell with slash", emoji: "🔕" },
    { alias: "macau sar china", emoji: "🇲🇴" },
    { alias: "wallis & futuna", emoji: "🇼🇫" },
    { alias: "jack o lantern", emoji: "🎃" },
    { alias: "heart eyes cat", emoji: "😻" },
    { alias: "weary cat face", emoji: "🙀" },
    { alias: "kiss: man, man", emoji: "👨‍❤️‍💋‍👨" },
    { alias: "family man boy", emoji: "👨‍👦" },
    { alias: "soft ice cream", emoji: "🍦" },
    { alias: "fork and knife", emoji: "🍴" },
    { alias: "couch and lamp", emoji: "🛋" },
    { alias: "page with curl", emoji: "📃" },
    { alias: "page facing up", emoji: "📄" },
    { alias: "fast up button", emoji: "⏫" },
    { alias: "arrow up small", emoji: "🔼" },
    { alias: "st kitts nevis", emoji: "🇰🇳" },
    { alias: "man in tuxedo", emoji: "🤵" },
    { alias: "no good woman", emoji: "🙅" },
    { alias: "speak no evil", emoji: "🙊" },
    { alias: "sheaf of rice", emoji: "🌾" },
    { alias: "new moon face", emoji: "🌚" },
    { alias: "sun with face", emoji: "🌞" },
    { alias: "glass of milk", emoji: "🥛" },
    { alias: "bow and arrow", emoji: "🏹" },
    { alias: "person in bed", emoji: "🛌" },
    { alias: "card file box", emoji: "🗃" },
    { alias: "star of david", emoji: "✡️" },
    { alias: "no entry sign", emoji: "🚫" },
    { alias: "do not litter", emoji: "🚯" },
    { alias: "arrow up down", emoji: "↕️" },
    { alias: "call me hand", emoji: "🤙" },
    { alias: "hear no evil", emoji: "🙉" },
    { alias: "meat on bone", emoji: "🍖" },
    { alias: "flag in hole", emoji: "⛳️" },
    { alias: "map of japan", emoji: "🗾" },
    { alias: "nut and bolt", emoji: "🔩" },
    { alias: "fleur de lis", emoji: "⚜️" },
    { alias: "pile of poo", emoji: "💩" },
    { alias: "no good man", emoji: "🙅‍♂" },
    { alias: "see no evil", emoji: "🙈" },
    { alias: "ear of rice", emoji: "🌾" },
    { alias: "ear of corn", emoji: "🌽" },
    { alias: "pot of food", emoji: "🍲" },
    { alias: "pool 8 ball", emoji: "🎱" },
    { alias: "isle of man", emoji: "🇮🇲" },
    { alias: "point up 2", emoji: "👆" },
    { alias: "arrows counterclockwise", emoji: "🔄" },
    { alias: "palestinian territories", emoji: "🇵🇸" },
    { alias: "disappointed relieved", emoji: "😥" },
    { alias: "building construction", emoji: "🏗" },
    { alias: "eight-spoked asterisk", emoji: "✳️" },
    { alias: "caribbean netherlands", emoji: "🇧🇶" },
    { alias: "speak-no-evil monkey", emoji: "🙊" },
    { alias: "artificial satellite", emoji: "🛰" },
    { alias: "snow-capped mountain", emoji: "🏔" },
    { alias: "expressionless face", emoji: "😑" },
    { alias: "blond-haired person", emoji: "👱" },
    { alias: "construction worker", emoji: "👷" },
    { alias: "hear-no-evil monkey", emoji: "🙉" },
    { alias: "oncoming automobile", emoji: "🚘" },
    { alias: "rolled-up newspaper", emoji: "🗞" },
    { alias: "ideograph advantage", emoji: "🉐" },
    { alias: "fast-forward button", emoji: "⏩" },
    { alias: "blond-haired woman", emoji: "👱‍♀" },
    { alias: "woman technologist", emoji: "👩‍💻" },
    { alias: "see-no-evil monkey", emoji: "🙈" },
    { alias: "woman cartwheeling", emoji: "🤸‍♀" },
    { alias: "mountain bicyclist", emoji: "🚵" },
    { alias: "suspension railway", emoji: "🚟" },
    { alias: "airplane departure", emoji: "🛫" },
    { alias: "classical building", emoji: "🏛" },
    { alias: "telephone receiver", emoji: "📞" },
    { alias: "eight-pointed star", emoji: "✴️" },
    { alias: "information source", emoji: "ℹ️" },
    { alias: "bosnia herzegovina", emoji: "🇧🇦" },
    { alias: "dominican republic", emoji: "🇩🇴" },
    { alias: "disappointed face", emoji: "😞" },
    { alias: "zipper-mouth face", emoji: "🤐" },
    { alias: "right-facing fist", emoji: "🤜" },
    { alias: "woman firefighter", emoji: "👩‍🚒" },
    { alias: "woman facepalming", emoji: "🤦‍♀" },
    { alias: "stuffed flatbread", emoji: "🥙" },
    { alias: "american football", emoji: "🏈" },
    { alias: "admission tickets", emoji: "🎟" },
    { alias: "articulated lorry", emoji: "🚛" },
    { alias: "mountain cableway", emoji: "🚠" },
    { alias: "bullettrain front", emoji: "🚅" },
    { alias: "convenience store", emoji: "🏪" },
    { alias: "studio microphone", emoji: "🎙" },
    { alias: "mantelpiece clock", emoji: "🕰" },
    { alias: "satellite antenna", emoji: "📡" },
    { alias: "incoming envelope", emoji: "📨" },
    { alias: "tear-off calendar", emoji: "📆" },
    { alias: "linked paperclips", emoji: "🖇" },
    { alias: "non-potable water", emoji: "🚱" },
    { alias: "children crossing", emoji: "🚸" },
    { alias: "wheelchair symbol", emoji: "♿️" },
    { alias: "currency exchange", emoji: "💱" },
    { alias: "congo brazzaville", emoji: "🇨🇬" },
    { alias: "equatorial guinea", emoji: "🇬🇶" },
    { alias: "upside-down face", emoji: "🙃" },
    { alias: "money-mouth face", emoji: "🤑" },
    { alias: "persevering face", emoji: "😣" },
    { alias: "left-facing fist", emoji: "🤛" },
    { alias: "female detective", emoji: "🕵️‍♀️" },
    { alias: "man technologist", emoji: "👨‍💻" },
    { alias: "high-heeled shoe", emoji: "👠" },
    { alias: "clinking glasses", emoji: "🥂" },
    { alias: "man cartwheeling", emoji: "🤸‍♂" },
    { alias: "basketball woman", emoji: "⛹️‍♀️" },
    { alias: "musical keyboard", emoji: "🎹" },
    { alias: "mountain railway", emoji: "🚞" },
    { alias: "high-speed train", emoji: "🚄" },
    { alias: "bullettrain side", emoji: "🚄" },
    { alias: "steam locomotive", emoji: "🚂" },
    { alias: "flight departure", emoji: "🛫" },
    { alias: "airplane arrival", emoji: "🛬" },
    { alias: "department store", emoji: "🏬" },
    { alias: "desktop computer", emoji: "🖥" },
    { alias: "chart increasing", emoji: "📈" },
    { alias: "chart decreasing", emoji: "📉" },
    { alias: "triangular ruler", emoji: "📐" },
    { alias: "revolving hearts", emoji: "💞" },
    { alias: "heart decoration", emoji: "💟" },
    { alias: "exclamation mark", emoji: "❗️" },
    { alias: "grey exclamation", emoji: "❕" },
    { alias: "recycling symbol", emoji: "♻️" },
    { alias: "passport control", emoji: "🛂" },
    { alias: "down-right arrow", emoji: "↘️" },
    { alias: "left-right arrow", emoji: "↔️" },
    { alias: "arrows clockwise", emoji: "🔃" },
    { alias: "christmas island", emoji: "🇨🇽" },
    { alias: "falkland islands", emoji: "🇫🇰" },
    { alias: "french polynesia", emoji: "🇵🇫" },
    { alias: "marshall islands", emoji: "🇲🇭" },
    { alias: "pitcairn islands", emoji: "🇵🇳" },
    { alias: "confounded face", emoji: "😖" },
    { alias: "astonished face", emoji: "😲" },
    { alias: "japanese goblin", emoji: "👺" },
    { alias: "crossed fingers", emoji: "🤞" },
    { alias: "woman detective", emoji: "🕵️‍♀️" },
    { alias: "woman scientist", emoji: "👩‍🔬" },
    { alias: "man firefighter", emoji: "👨‍🚒" },
    { alias: "woman astronaut", emoji: "👩‍🚀" },
    { alias: "man facepalming", emoji: "🤦‍♂" },
    { alias: "woman shrugging", emoji: "🤷‍♀" },
    { alias: "person frowning", emoji: "🙍" },
    { alias: "woman’s clothes", emoji: "👚" },
    { alias: "school backpack", emoji: "🎒" },
    { alias: "dark sunglasses", emoji: "🕶" },
    { alias: "closed umbrella", emoji: "🌂" },
    { alias: "dromedary camel", emoji: "🐪" },
    { alias: "pine decoration", emoji: "🎍" },
    { alias: "women wrestling", emoji: "🤼‍♀" },
    { alias: "person swimming", emoji: "🏊" },
    { alias: "reminder ribbon", emoji: "🎗" },
    { alias: "performing arts", emoji: "🎭" },
    { alias: "european castle", emoji: "🏰" },
    { alias: "japanese castle", emoji: "🏯" },
    { alias: "office building", emoji: "🏢" },
    { alias: "laptop computer", emoji: "💻" },
    { alias: "dollar banknote", emoji: "💵" },
    { alias: "izakaya lantern", emoji: "🏮" },
    { alias: "spiral calendar", emoji: "🗓" },
    { alias: "sparkling heart", emoji: "💖" },
    { alias: "high brightness", emoji: "🔆" },
    { alias: "signal strength", emoji: "📶" },
    { alias: "down-left arrow", emoji: "↙️" },
    { alias: "thought balloon", emoji: "💭" },
    { alias: "triangular flag", emoji: "🚩" },
    { alias: "antigua barbuda", emoji: "🇦🇬" },
    { alias: "myanmar (burma)", emoji: "🇲🇲" },
    { alias: "solomon islands", emoji: "🇸🇧" },
    { alias: "trinidad tobago", emoji: "🇹🇹" },
    { alias: "anguished face", emoji: "😧" },
    { alias: "grimacing face", emoji: "😬" },
    { alias: "nauseated face", emoji: "🤢" },
    { alias: "clapping hands", emoji: "👏" },
    { alias: "police officer", emoji: "👮" },
    { alias: "male detective", emoji: "🕵" },
    { alias: "woman mechanic", emoji: "👩‍🔧" },
    { alias: "pregnant woman", emoji: "🤰" },
    { alias: "person pouting", emoji: "🙎" },
    { alias: "frowning woman", emoji: "🙍" },
    { alias: "person walking", emoji: "🚶" },
    { alias: "person running", emoji: "🏃" },
    { alias: "womans clothes", emoji: "👚" },
    { alias: "woman’s sandal", emoji: "👡" },
    { alias: "graduation cap", emoji: "🎓" },
    { alias: "school satchel", emoji: "🎒" },
    { alias: "hatching chick", emoji: "🐣" },
    { alias: "spouting whale", emoji: "🐳" },
    { alias: "two-hump camel", emoji: "🐫" },
    { alias: "christmas tree", emoji: "🎄" },
    { alias: "evergreen tree", emoji: "🌲" },
    { alias: "deciduous tree", emoji: "🌳" },
    { alias: "cherry blossom", emoji: "🌸" },
    { alias: "earth americas", emoji: "🌎" },
    { alias: "sweat droplets", emoji: "💦" },
    { alias: "baguette bread", emoji: "🥖" },
    { alias: "cocktail glass", emoji: "🍸" },
    { alias: "tropical drink", emoji: "🍹" },
    { alias: "rugby football", emoji: "🏉" },
    { alias: "person fencing", emoji: "🤺" },
    { alias: "basketball man", emoji: "⛹" },
    { alias: "person golfing", emoji: "🏌" },
    { alias: "person surfing", emoji: "🏄" },
    { alias: "woman swimming", emoji: "🏊‍♀" },
    { alias: "swimming woman", emoji: "🏊‍♀" },
    { alias: "military medal", emoji: "🎖" },
    { alias: "medal military", emoji: "🎖" },
    { alias: "woman juggling", emoji: "🤹‍♀" },
    { alias: "artist palette", emoji: "🎨" },
    { alias: "delivery truck", emoji: "🚚" },
    { alias: "rotating light", emoji: "🚨" },
    { alias: "aerial tramway", emoji: "🚡" },
    { alias: "small airplane", emoji: "🛩" },
    { alias: "flight arrival", emoji: "🛬" },
    { alias: "passenger ship", emoji: "🛳" },
    { alias: "roller coaster", emoji: "🎢" },
    { alias: "carousel horse", emoji: "🎠" },
    { alias: "beach umbrella", emoji: "🏖" },
    { alias: "derelict house", emoji: "🏚" },
    { alias: "computer mouse", emoji: "🖱" },
    { alias: "film projector", emoji: "📽" },
    { alias: "pound banknote", emoji: "💷" },
    { alias: "crossed swords", emoji: "⚔️" },
    { alias: "framed picture", emoji: "🖼" },
    { alias: "japanese dolls", emoji: "🎎" },
    { alias: "mailbox closed", emoji: "📪" },
    { alias: "spiral notepad", emoji: "🗒" },
    { alias: "newspaper roll", emoji: "🗞" },
    { alias: "straight ruler", emoji: "📏" },
    { alias: "orthodox cross", emoji: "☦️" },
    { alias: "vibration mode", emoji: "📳" },
    { alias: "hundred points", emoji: "💯" },
    { alias: "no pedestrians", emoji: "🚷" },
    { alias: "low brightness", emoji: "🔅" },
    { alias: "trident emblem", emoji: "🔱" },
    { alias: "reverse button", emoji: "◀️" },
    { alias: "arrow backward", emoji: "◀️" },
    { alias: "up-right arrow", emoji: "↗️" },
    { alias: "speech balloon", emoji: "💬" },
    { alias: "eleven o’clock", emoji: "🕚" },
    { alias: "twelve o’clock", emoji: "🕛" },
    { alias: "chequered flag", emoji: "🏁" },
    { alias: "checkered flag", emoji: "🏁" },
    { alias: "american samoa", emoji: "🇦🇸" },
    { alias: "canary islands", emoji: "🇮🇨" },
    { alias: "cayman islands", emoji: "🇰🇾" },
    { alias: "congo kinshasa", emoji: "🇨🇩" },
    { alias: "czech republic", emoji: "🇨🇿" },
    { alias: "european union", emoji: "🇪🇺" },
    { alias: "norfolk island", emoji: "🇳🇫" },
    { alias: "st. barthélemy", emoji: "🇧🇱" },
    { alias: "united kingdom", emoji: "🇬🇧" },
    { alias: "western sahara", emoji: "🇪🇭" },
    { alias: "grinning face", emoji: "😀" },
    { alias: "relieved face", emoji: "😌" },
    { alias: "kissing heart", emoji: "😘" },
    { alias: "smirking face", emoji: "😏" },
    { alias: "unamused face", emoji: "😒" },
    { alias: "confused face", emoji: "😕" },
    { alias: "frowning face", emoji: "☹️" },
    { alias: "drooling face", emoji: "🤤" },
    { alias: "sleeping face", emoji: "😴" },
    { alias: "thinking face", emoji: "🤔" },
    { alias: "sneezing face", emoji: "🤧" },
    { alias: "japanese ogre", emoji: "👹" },
    { alias: "alien monster", emoji: "👾" },
    { alias: "space invader", emoji: "👾" },
    { alias: "raising hands", emoji: "🙌" },
    { alias: "oncoming fist", emoji: "👊" },
    { alias: "fist oncoming", emoji: "👊" },
    { alias: "vulcan salute", emoji: "🖖" },
    { alias: "flexed biceps", emoji: "💪" },
    { alias: "middle finger", emoji: "🖕" },
    { alias: "speaking head", emoji: "🗣" },
    { alias: "woman student", emoji: "👩‍🎓" },
    { alias: "woman teacher", emoji: "👩‍🏫" },
    { alias: "man scientist", emoji: "👨‍🔬" },
    { alias: "man astronaut", emoji: "👨‍🚀" },
    { alias: "person bowing", emoji: "🙇" },
    { alias: "man shrugging", emoji: "🤷‍♂" },
    { alias: "pouting woman", emoji: "🙎" },
    { alias: "haircut woman", emoji: "💇" },
    { alias: "massage woman", emoji: "💆" },
    { alias: "woman dancing", emoji: "💃" },
    { alias: "dancing women", emoji: "👯" },
    { alias: "woman walking", emoji: "🚶‍♀" },
    { alias: "walking woman", emoji: "🚶‍♀" },
    { alias: "woman running", emoji: "🏃‍♀" },
    { alias: "running woman", emoji: "🏃‍♀" },
    { alias: "athletic shoe", emoji: "👟" },
    { alias: "open umbrella", emoji: "☂️" },
    { alias: "hatched chick", emoji: "🐥" },
    { alias: "tropical fish", emoji: "🐠" },
    { alias: "water buffalo", emoji: "🐃" },
    { alias: "tanabata tree", emoji: "🎋" },
    { alias: "wilted flower", emoji: "🥀" },
    { alias: "crescent moon", emoji: "🌙" },
    { alias: "steaming bowl", emoji: "🍜" },
    { alias: "birthday cake", emoji: "🎂" },
    { alias: "chocolate bar", emoji: "🍫" },
    { alias: "tumbler glass", emoji: "🥃" },
    { alias: "men wrestling", emoji: "🤼‍♂" },
    { alias: "woman golfing", emoji: "🏌️‍♀️" },
    { alias: "golfing woman", emoji: "🏌️‍♀️" },
    { alias: "woman surfing", emoji: "🏄‍♀" },
    { alias: "surfing woman", emoji: "🏄‍♀" },
    { alias: "person biking", emoji: "🚴" },
    { alias: "running shirt", emoji: "🎽" },
    { alias: "clapper board", emoji: "🎬" },
    { alias: "musical score", emoji: "🎼" },
    { alias: "motor scooter", emoji: "🛵" },
    { alias: "oncoming taxi", emoji: "🚖" },
    { alias: "traffic light", emoji: "🚥" },
    { alias: "desert island", emoji: "🏝" },
    { alias: "mountain snow", emoji: "🏔" },
    { alias: "railway track", emoji: "🛤" },
    { alias: "shinto shrine", emoji: "⛩" },
    { alias: "national park", emoji: "🏞" },
    { alias: "shooting star", emoji: "🌠" },
    { alias: "computer disk", emoji: "💽" },
    { alias: "control knobs", emoji: "🎛" },
    { alias: "electric plug", emoji: "🔌" },
    { alias: "euro banknote", emoji: "💶" },
    { alias: "balance scale", emoji: "⚖️" },
    { alias: "kitchen knife", emoji: "🔪" },
    { alias: "potable water", emoji: "🚰" },
    { alias: "shopping bags", emoji: "🛍" },
    { alias: "shopping cart", emoji: "🛒" },
    { alias: "carp streamer", emoji: "🎏" },
    { alias: "confetti ball", emoji: "🎊" },
    { alias: "bookmark tabs", emoji: "📑" },
    { alias: "round pushpin", emoji: "📍" },
    { alias: "beating heart", emoji: "💓" },
    { alias: "growing heart", emoji: "💗" },
    { alias: "question mark", emoji: "❓" },
    { alias: "grey question", emoji: "❔" },
    { alias: "bright button", emoji: "🔆" },
    { alias: "baggage claim", emoji: "🛄" },
    { alias: "input symbols", emoji: "🔣" },
    { alias: "input numbers", emoji: "🔢" },
    { alias: "arrow forward", emoji: "▶️" },
    { alias: "record button", emoji: "⏺" },
    { alias: "up-left arrow", emoji: "↖️" },
    { alias: "up-down arrow", emoji: "↕️" },
    { alias: "repeat button", emoji: "🔁" },
    { alias: "musical notes", emoji: "🎶" },
    { alias: "muted ", emoji: "🔇" },
    { alias: "three o’clock", emoji: "🕒" },
    { alias: "seven o’clock", emoji: "🕖" },
    { alias: "eight o’clock", emoji: "🕗" },
    { alias: "åland islands", emoji: "🇦🇽" },
    { alias: "aland islands", emoji: "🇦🇽" },
    { alias: "cocos islands", emoji: "🇨🇨" },
    { alias: "côte d’ivoire", emoji: "🇨🇮" },
    { alias: "faroe islands", emoji: "🇫🇴" },
    { alias: "french guiana", emoji: "🇬🇫" },
    { alias: "guinea bissau", emoji: "🇬🇼" },
    { alias: "crossed flags", emoji: "🎌" },
    { alias: "new caledonia", emoji: "🇳🇨" },
    { alias: "st barthelemy", emoji: "🇧🇱" },
    { alias: "united states", emoji: "🇺🇸" },
    { alias: "wallis futuna", emoji: "🇼🇫" },
    { alias: "smiling face", emoji: "☺️" },
    { alias: "winking face", emoji: "😉" },
    { alias: "kissing face", emoji: "😗" },
    { alias: "hugging face", emoji: "🤗" },
    { alias: "pensive face", emoji: "😔" },
    { alias: "worried face", emoji: "😟" },
    { alias: "pouting face", emoji: "😡" },
    { alias: "neutral face", emoji: "😐" },
    { alias: "flushed face", emoji: "😳" },
    { alias: "fearful face", emoji: "😨" },
    { alias: "raised hands", emoji: "🙌" },
    { alias: "folded hands", emoji: "🙏" },
    { alias: "victory hand", emoji: "✌️" },
    { alias: "writing hand", emoji: "✍️" },
    { alias: "blonde woman", emoji: "👱‍♀" },
    { alias: "woman farmer", emoji: "👩‍🌾" },
    { alias: "woman singer", emoji: "👩‍🎤" },
    { alias: "man mechanic", emoji: "👨‍🔧" },
    { alias: "woman artist", emoji: "👩‍🎨" },
    { alias: "woman bowing", emoji: "🙇‍♀" },
    { alias: "bowing woman", emoji: "🙇‍♀" },
    { alias: "raising hand", emoji: "🙋" },
    { alias: "man frowning", emoji: "🙍‍♂" },
    { alias: "frowning man", emoji: "🙍‍♂" },
    { alias: "woman’s boot", emoji: "👢" },
    { alias: "running shoe", emoji: "👟" },
    { alias: "mortar board", emoji: "🎓" },
    { alias: "hamster face", emoji: "🐹" },
    { alias: "unicorn face", emoji: "🦄" },
    { alias: "spiral shell", emoji: "🐚" },
    { alias: "earth africa", emoji: "🌍" },
    { alias: "glowing star", emoji: "🌟" },
    { alias: "high voltage", emoji: "⚡️" },
    { alias: "partly sunny", emoji: "⛅️" },
    { alias: "dashing away", emoji: "💨" },
    { alias: "sweet potato", emoji: "🍠" },
    { alias: "cheese wedge", emoji: "🧀" },
    { alias: "fried shrimp", emoji: "🍤" },
    { alias: "french fries", emoji: "🍟" },
    { alias: "rice cracker", emoji: "🍘" },
    { alias: "hot beverage", emoji: "☕️" },
    { alias: "field hockey", emoji: "🏑" },
    { alias: "fishing pole", emoji: "🎣" },
    { alias: "boxing glove", emoji: "🥊" },
    { alias: "swimming man", emoji: "🏊" },
    { alias: "rowing woman", emoji: "🚣‍♀" },
    { alias: "horse racing", emoji: "🏇" },
    { alias: "woman biking", emoji: "🚴‍♀" },
    { alias: "biking woman", emoji: "🚴‍♀" },
    { alias: "sports medal", emoji: "🏅" },
    { alias: "medal sports", emoji: "🏅" },
    { alias: "man juggling", emoji: "🤹‍♂" },
    { alias: "slot machine", emoji: "🎰" },
    { alias: "kick scooter", emoji: "🛴" },
    { alias: "oncoming bus", emoji: "🚍" },
    { alias: "ferris wheel", emoji: "🎡" },
    { alias: "city sunrise", emoji: "🌇" },
    { alias: "mobile phone", emoji: "📱" },
    { alias: "optical disk", emoji: "💿" },
    { alias: "camera flash", emoji: "📸" },
    { alias: "video camera", emoji: "📹" },
    { alias: "movie camera", emoji: "🎥" },
    { alias: "level slider", emoji: "🎚" },
    { alias: "yen banknote", emoji: "💴" },
    { alias: "crystal ball", emoji: "🔮" },
    { alias: "prayer beads", emoji: "📿" },
    { alias: "bellhop bell", emoji: "🛎" },
    { alias: "sleeping bed", emoji: "🛌" },
    { alias: "wrapped gift", emoji: "🎁" },
    { alias: "party popper", emoji: "🎉" },
    { alias: "file cabinet", emoji: "🗄" },
    { alias: "fountain pen", emoji: "🖋" },
    { alias: "yellow heart", emoji: "💛" },
    { alias: "purple heart", emoji: "💜" },
    { alias: "broken heart", emoji: "💔" },
    { alias: "peace symbol", emoji: "☮️" },
    { alias: "white flower", emoji: "💮" },
    { alias: "anger symbol", emoji: "💢" },
    { alias: "no littering", emoji: "🚯" },
    { alias: "water closet", emoji: "🚾" },
    { alias: "left luggage", emoji: "🛅" },
    { alias: "women’s room", emoji: "🚺" },
    { alias: "antenna bars", emoji: "📶" },
    { alias: "capital abcd", emoji: "🔠" },
    { alias: "pause button", emoji: "⏸" },
    { alias: "fast forward", emoji: "⏩" },
    { alias: "musical note", emoji: "🎵" },
    { alias: "radio button", emoji: "🔘" },
    { alias: "white circle", emoji: "⚪️" },
    { alias: "black circle", emoji: "⚫️" },
    { alias: "diamond suit", emoji: "♦️" },
    { alias: "four o’clock", emoji: "🕓" },
    { alias: "five o’clock", emoji: "🕔" },
    { alias: "nine o’clock", emoji: "🕘" },
    { alias: "rainbow flag", emoji: "🏳️‍🌈" },
    { alias: "burkina faso", emoji: "🇧🇫" },
    { alias: "cook islands", emoji: "🇨🇰" },
    { alias: "cote divoire", emoji: "🇨🇮" },
    { alias: "saudi arabia", emoji: "🇸🇦" },
    { alias: "sierra leone", emoji: "🇸🇱" },
    { alias: "sint maarten", emoji: "🇸🇽" },
    { alias: "south africa", emoji: "🇿🇦" },
    { alias: "vatican city", emoji: "🇻🇦" },
    { alias: "sweat smile", emoji: "😅" },
    { alias: "hushed face", emoji: "😯" },
    { alias: "crying face", emoji: "😢" },
    { alias: "sleepy face", emoji: "😪" },
    { alias: "smiling imp", emoji: "😈" },
    { alias: "kissing cat", emoji: "😽" },
    { alias: "pouting cat", emoji: "😾" },
    { alias: "thumbs down", emoji: "👎" },
    { alias: "raised fist", emoji: "✊" },
    { alias: "fist raised", emoji: "✊" },
    { alias: "point right", emoji: "👉" },
    { alias: "raised hand", emoji: "✋" },
    { alias: "waving hand", emoji: "👋" },
    { alias: "nail polish", emoji: "💅" },
    { alias: "older woman", emoji: "👵" },
    { alias: "woman guard", emoji: "💂‍♀" },
    { alias: "man student", emoji: "👨‍🎓" },
    { alias: "man teacher", emoji: "👨‍🏫" },
    { alias: "woman pilot", emoji: "👩‍✈" },
    { alias: "woman judge", emoji: "👩‍⚖" },
    { alias: "santa claus", emoji: "🎅" },
    { alias: "sassy woman", emoji: "💁" },
    { alias: "man pouting", emoji: "🙎‍♂" },
    { alias: "pouting man", emoji: "🙎‍♂" },
    { alias: "haircut man", emoji: "💇‍♂" },
    { alias: "massage man", emoji: "💆‍♂" },
    { alias: "man dancing", emoji: "🕺" },
    { alias: "dancing men", emoji: "👯‍♂" },
    { alias: "walking man", emoji: "🚶" },
    { alias: "running man", emoji: "🏃" },
    { alias: "woman’s hat", emoji: "👒" },
    { alias: "rabbit face", emoji: "🐰" },
    { alias: "monkey face", emoji: "🐵" },
    { alias: "lady beetle", emoji: "🐞" },
    { alias: "dragon face", emoji: "🐲" },
    { alias: "fallen leaf", emoji: "🍂" },
    { alias: "sweat drops", emoji: "💦" },
    { alias: "green apple", emoji: "🍏" },
    { alias: "poultry leg", emoji: "🍗" },
    { alias: "green salad", emoji: "🥗" },
    { alias: "cooked rice", emoji: "🍚" },
    { alias: "baby bottle", emoji: "🍼" },
    { alias: "soccer ball", emoji: "⚽️" },
    { alias: "golfing man", emoji: "🏌" },
    { alias: "surfing man", emoji: "🏄" },
    { alias: "circus tent", emoji: "🎪" },
    { alias: "fire engine", emoji: "🚒" },
    { alias: "railway car", emoji: "🚃" },
    { alias: "tokyo tower", emoji: "🗼" },
    { alias: "post office", emoji: "🏣" },
    { alias: "post office", emoji: "🏤" },
    { alias: "city sunset", emoji: "🌆" },
    { alias: "floppy disk", emoji: "💾" },
    { alias: "film frames", emoji: "🎞" },
    { alias: "fax machine", emoji: "📠" },
    { alias: "timer clock", emoji: "⏲" },
    { alias: "alarm clock", emoji: "⏰" },
    { alias: "credit card", emoji: "💳" },
    { alias: "funeral urn", emoji: "⚱️" },
    { alias: "barber pole", emoji: "💈" },
    { alias: "love letter", emoji: "💌" },
    { alias: "outbox tray", emoji: "📤" },
    { alias: "postal horn", emoji: "📯" },
    { alias: "file folder", emoji: "📁" },
    { alias: "closed book", emoji: "📕" },
    { alias: "orange book", emoji: "📙" },
    { alias: "green heart", emoji: "💚" },
    { alias: "black heart", emoji: "🖤" },
    { alias: "latin cross", emoji: "✝️" },
    { alias: "atom symbol", emoji: "⚛️" },
    { alias: "hot springs", emoji: "♨️" },
    { alias: "no bicycles", emoji: "🚳" },
    { alias: "baby symbol", emoji: "🚼" },
    { alias: "cool button", emoji: "🆒" },
    { alias: "free button", emoji: "🆓" },
    { alias: "play button", emoji: "▶️" },
    { alias: "stop button", emoji: "⏹" },
    { alias: "down button", emoji: "🔽" },
    { alias: "right arrow", emoji: "➡️" },
    { alias: "arrow right", emoji: "➡️" },
    { alias: "blue circle", emoji: "🔵" },
    { alias: "black joker", emoji: "🃏" },
    { alias: "one o’clock", emoji: "🕐" },
    { alias: "two o’clock", emoji: "🕑" },
    { alias: "six o’clock", emoji: "🕕" },
    { alias: "ten o’clock", emoji: "🕙" },
    { alias: "el salvador", emoji: "🇸🇻" },
    { alias: "new zealand", emoji: "🇳🇿" },
    { alias: "north korea", emoji: "🇰🇵" },
    { alias: "puerto rico", emoji: "🇵🇷" },
    { alias: "south korea", emoji: "🇰🇷" },
    { alias: "south sudan", emoji: "🇸🇸" },
    { alias: "timor leste", emoji: "🇹🇱" },
    { alias: "heart eyes", emoji: "😍" },
    { alias: "clown face", emoji: "🤡" },
    { alias: "tired face", emoji: "😫" },
    { alias: "weary face", emoji: "😩" },
    { alias: "angry face", emoji: "😠" },
    { alias: "open mouth", emoji: "😮" },
    { alias: "dizzy face", emoji: "😵" },
    { alias: "cold sweat", emoji: "😰" },
    { alias: "lying face", emoji: "🤥" },
    { alias: "robot face", emoji: "🤖" },
    { alias: "smiley cat", emoji: "😺" },
    { alias: "scream cat", emoji: "🙀" },
    { alias: "open hands", emoji: "👐" },
    { alias: "fist right", emoji: "🤜" },
    { alias: "point left", emoji: "👈" },
    { alias: "point down", emoji: "👇" },
    { alias: "blonde man", emoji: "👱" },
    { alias: "man farmer", emoji: "👨‍🌾" },
    { alias: "woman cook", emoji: "👩‍🍳" },
    { alias: "man singer", emoji: "👨‍🎤" },
    { alias: "man artist", emoji: "👨‍🎨" },
    { alias: "mrs. claus", emoji: "🤶" },
    { alias: "baby angel", emoji: "👼" },
    { alias: "bowing man", emoji: "🙇" },
    { alias: "man’s shoe", emoji: "👞" },
    { alias: "womans hat", emoji: "👒" },
    { alias: "clutch bag", emoji: "👝" },
    { alias: "mouse face", emoji: "🐭" },
    { alias: "panda face", emoji: "🐼" },
    { alias: "tiger face", emoji: "🐯" },
    { alias: "baby chick", emoji: "🐤" },
    { alias: "horse face", emoji: "🐴" },
    { alias: "spider web", emoji: "🕸" },
    { alias: "paw prints", emoji: "🐾" },
    { alias: "maple leaf", emoji: "🍁" },
    { alias: "earth asia", emoji: "🌏" },
    { alias: "water wave", emoji: "🌊" },
    { alias: "kiwi fruit", emoji: "🥝" },
    { alias: "hot pepper", emoji: "🌶" },
    { alias: "curry rice", emoji: "🍛" },
    { alias: "shaved ice", emoji: "🍧" },
    { alias: "milk glass", emoji: "🥛" },
    { alias: "wine glass", emoji: "🍷" },
    { alias: "ice hockey", emoji: "🏒" },
    { alias: "rowing man", emoji: "🚣" },
    { alias: "biking man", emoji: "🚴" },
    { alias: "direct hit", emoji: "🎯" },
    { alias: "video game", emoji: "🎮" },
    { alias: "racing car", emoji: "🏎" },
    { alias: "police car", emoji: "🚓" },
    { alias: "light rail", emoji: "🚈" },
    { alias: "motor boat", emoji: "🛥" },
    { alias: "mount fuji", emoji: "🗻" },
    { alias: "love hotel", emoji: "🏩" },
    { alias: "rice scene", emoji: "🎑" },
    { alias: "film strip", emoji: "🎞" },
    { alias: "light bulb", emoji: "💡" },
    { alias: "wind chime", emoji: "🎐" },
    { alias: "inbox tray", emoji: "📥" },
    { alias: "card index", emoji: "📇" },
    { alias: "ballot box", emoji: "🗳" },
    { alias: "green book", emoji: "📗" },
    { alias: "blue heart", emoji: "💙" },
    { alias: "two hearts", emoji: "💕" },
    { alias: "gift heart", emoji: "💝" },
    { alias: "sos button", emoji: "🆘" },
    { alias: "cross mark", emoji: "❌" },
    { alias: "name badge", emoji: "📛" },
    { alias: "no smoking", emoji: "🚭" },
    { alias: "dim button", emoji: "🔅" },
    { alias: "men’s room", emoji: "🚹" },
    { alias: "up! button", emoji: "🆙" },
    { alias: "new button", emoji: "🆕" },
    { alias: "keycap ten", emoji: "🔟" },
    { alias: "left arrow", emoji: "⬅️" },
    { alias: "arrow left", emoji: "⬅️" },
    { alias: "down arrow", emoji: "⬇️" },
    { alias: "arrow down", emoji: "⬇️" },
    { alias: "repeat one", emoji: "🔂" },
    { alias: "trade mark", emoji: "™️" },
    { alias: "curly loop", emoji: "➰" },
    { alias: "back arrow", emoji: "🔙" },
    { alias: "soon arrow", emoji: "🔜" },
    { alias: "red circle", emoji: "🔴" },
    { alias: "loud sound", emoji: "🔊" },
    { alias: "spade suit", emoji: "♠️" },
    { alias: "heart suit", emoji: "♥️" },
    { alias: "white flag", emoji: "🏳️" },
    { alias: "black flag", emoji: "🏴" },
    { alias: "cape verde", emoji: "🇨🇻" },
    { alias: "costa rica", emoji: "🇨🇷" },
    { alias: "st. helena", emoji: "🇸🇭" },
    { alias: "san marino", emoji: "🇸🇲" },
    { alias: "nerd face", emoji: "🤓" },
    { alias: "roll eyes", emoji: "🙄" },
    { alias: "smile cat", emoji: "😸" },
    { alias: "smirk cat", emoji: "😼" },
    { alias: "thumbs up", emoji: "👍" },
    { alias: "fist left", emoji: "🤛" },
    { alias: "nail care", emoji: "💅" },
    { alias: "kiss mark", emoji: "💋" },
    { alias: "older man", emoji: "👴" },
    { alias: "old woman", emoji: "👵" },
    { alias: "man pilot", emoji: "👨‍✈" },
    { alias: "man judge", emoji: "👨‍⚖" },
    { alias: "mrs claus", emoji: "🤶" },
    { alias: "sassy man", emoji: "💁‍♂" },
    { alias: "high heel", emoji: "👠" },
    { alias: "mans shoe", emoji: "👞" },
    { alias: "bear face", emoji: "🐻" },
    { alias: "lion face", emoji: "🦁" },
    { alias: "frog face", emoji: "🐸" },
    { alias: "wolf face", emoji: "🐺" },
    { alias: "palm tree", emoji: "🌴" },
    { alias: "full moon", emoji: "🌕" },
    { alias: "wind face", emoji: "🌬" },
    { alias: "red apple", emoji: "🍎" },
    { alias: "honey pot", emoji: "🍯" },
    { alias: "fried egg", emoji: "🍳" },
    { alias: "fish cake", emoji: "🍥" },
    { alias: "bento box", emoji: "🍱" },
    { alias: "rice ball", emoji: "🍙" },
    { alias: "ice cream", emoji: "🍨" },
    { alias: "ping pong", emoji: "🏓" },
    { alias: "ice skate", emoji: "⛸" },
    { alias: "fuel pump", emoji: "⛽️" },
    { alias: "world map", emoji: "🗺" },
    { alias: "milky way", emoji: "🌌" },
    { alias: "money bag", emoji: "💰" },
    { alias: "gem stone", emoji: "💎" },
    { alias: "bar chart", emoji: "📊" },
    { alias: "blue book", emoji: "📘" },
    { alias: "open book", emoji: "📖" },
    { alias: "black nib", emoji: "✒️" },
    { alias: "mag right", emoji: "🔎" },
    { alias: "red heart", emoji: "❤️" },
    { alias: "id button", emoji: "🆔" },
    { alias: "vs button", emoji: "🆚" },
    { alias: "cl button", emoji: "🆑" },
    { alias: "stop sign", emoji: "🛑" },
    { alias: "circled m", emoji: "Ⓜ️" },
    { alias: "ng button", emoji: "🆖" },
    { alias: "ok button", emoji: "🆗" },
    { alias: "keycap: 0", emoji: "0️⃣" },
    { alias: "keycap: 1", emoji: "1️⃣" },
    { alias: "keycap: 2", emoji: "2️⃣" },
    { alias: "keycap: 3", emoji: "3️⃣" },
    { alias: "keycap: 4", emoji: "4️⃣" },
    { alias: "keycap: 5", emoji: "5️⃣" },
    { alias: "keycap: 6", emoji: "6️⃣" },
    { alias: "keycap: 7", emoji: "7️⃣" },
    { alias: "keycap: 8", emoji: "8️⃣" },
    { alias: "keycap: 9", emoji: "9️⃣" },
    { alias: "keycap 10", emoji: "🔟" },
    { alias: "keycap: #", emoji: "#️⃣" },
    { alias: "keycap: *", emoji: "*️⃣" },
    { alias: "up button", emoji: "🔼" },
    { alias: "wavy dash", emoji: "〰️" },
    { alias: "end arrow", emoji: "🔚" },
    { alias: "on! arrow", emoji: "🔛" },
    { alias: "top arrow", emoji: "🔝" },
    { alias: "club suit", emoji: "♣️" },
    { alias: "hong kong", emoji: "🇭🇰" },
    { alias: "st helena", emoji: "🇸🇭" },
    { alias: "st. lucia", emoji: "🇱🇨" },
    { alias: "sri lanka", emoji: "🇱🇰" },
    { alias: "no mouth", emoji: "😶" },
    { alias: "point up", emoji: "☝️" },
    { alias: "man cook", emoji: "👨‍🍳" },
    { alias: "ng woman", emoji: "🙅" },
    { alias: "ok woman", emoji: "🙆" },
    { alias: "dog face", emoji: "🐶" },
    { alias: "cat face", emoji: "🐱" },
    { alias: "fox face", emoji: "🦊" },
    { alias: "cow face", emoji: "🐮" },
    { alias: "pig face", emoji: "🐷" },
    { alias: "pig nose", emoji: "🐽" },
    { alias: "new moon", emoji: "🌑" },
    { alias: "beer mug", emoji: "🍺" },
    { alias: "goal net", emoji: "🥅" },
    { alias: "game die", emoji: "🎲" },
    { alias: "blue car", emoji: "🚙" },
    { alias: "tram car", emoji: "🚋" },
    { alias: "bus stop", emoji: "🚏" },
    { alias: "oil drum", emoji: "🛢" },
    { alias: "yin yang", emoji: "☯️" },
    { alias: "no entry", emoji: "⛔️" },
    { alias: "atm sign", emoji: "🏧" },
    { alias: "p button", emoji: "🅿️" },
    { alias: "up arrow", emoji: "⬆️" },
    { alias: "arrow up", emoji: "⬆️" },
    { alias: "st lucia", emoji: "🇱🇨" },
    { alias: "joy cat", emoji: "😹" },
    { alias: "ok hand", emoji: "👌" },
    { alias: "old man", emoji: "👴" },
    { alias: "no good", emoji: "🙅" },
    { alias: "top hat", emoji: "🎩" },
    { alias: "hot dog", emoji: "🌭" },
    { alias: "red car", emoji: "🚗" },
    { alias: "old key", emoji: "🗝" },
    { alias: "no bell", emoji: "🔕" },
    { alias: "ng man", emoji: "🙅‍♂" },
    { alias: "ok man", emoji: "🙆‍♂" },
    { alias: "congratulations", emoji: "㊗️" },
    { alias: "expressionless", emoji: "😑" },
    { alias: "jack-o-lantern", emoji: "🎃" },
    { alias: "videocassette", emoji: "📼" },
    { alias: "eleven-thirty", emoji: "🕦" },
    { alias: "twelve-thirty", emoji: "🕧" },
    { alias: "guinea-bissau", emoji: "🇬🇼" },
    { alias: "liechtenstein", emoji: "🇱🇮" },
    { alias: "disappointed", emoji: "😞" },
    { alias: "construction", emoji: "🚧" },
    { alias: "fleur-de-lis", emoji: "⚜️" },
    { alias: "three-thirty", emoji: "🕞" },
    { alias: "seven-thirty", emoji: "🕢" },
    { alias: "eight-thirty", emoji: "🕣" },
    { alias: "turkmenistan", emoji: "🇹🇲" },
    { alias: "policewoman", emoji: "👮‍♀" },
    { alias: "guardswoman", emoji: "💂‍♀" },
    { alias: "snowboarder", emoji: "🏂" },
    { alias: "wastebasket", emoji: "🗑" },
    { alias: "thermometer", emoji: "🌡" },
    { alias: "sagittarius", emoji: "♐️" },
    { alias: "radioactive", emoji: "☢️" },
    { alias: "exclamation", emoji: "❗️" },
    { alias: "interrobang", emoji: "⁉️" },
    { alias: "information", emoji: "ℹ️" },
    { alias: "loud", emoji: "📢" },
    { alias: "four-thirty", emoji: "🕟" },
    { alias: "five-thirty", emoji: "🕠" },
    { alias: "nine-thirty", emoji: "🕤" },
    { alias: "afghanistan", emoji: "🇦🇫" },
    { alias: "netherlands", emoji: "🇳🇱" },
    { alias: "philippines", emoji: "🇵🇭" },
    { alias: "switzerland", emoji: "🇨🇭" },
    { alias: "timor-leste", emoji: "🇹🇱" },
    { alias: "sunglasses", emoji: "😎" },
    { alias: "confounded", emoji: "😖" },
    { alias: "astonished", emoji: "😲" },
    { alias: "thumbsdown", emoji: "👎" },
    { alias: "footprints", emoji: "👣" },
    { alias: "eyeglasses", emoji: "👓" },
    { alias: "sunglasses", emoji: "🕶" },
    { alias: "rhinoceros", emoji: "🦏" },
    { alias: "watermelon", emoji: "🍉" },
    { alias: "strawberry", emoji: "🍓" },
    { alias: "basketball", emoji: "🏀" },
    { alias: "volleyball", emoji: "🏐" },
    { alias: "microphone", emoji: "🎤" },
    { alias: "headphones", emoji: "🎧" },
    { alias: "automobile", emoji: "🚗" },
    { alias: "trolleybus", emoji: "🚎" },
    { alias: "motorcycle", emoji: "🏍" },
    { alias: "locomotive", emoji: "🚂" },
    { alias: "helicopter", emoji: "🚁" },
    { alias: "television", emoji: "📺" },
    { alias: "flashlight", emoji: "🔦" },
    { alias: "microscope", emoji: "🔬" },
    { alias: "paperclips", emoji: "🖇" },
    { alias: "paintbrush", emoji: "🖌" },
    { alias: "heartpulse", emoji: "💗" },
    { alias: "prohibited", emoji: "🚫" },
    { alias: "hotsprings", emoji: "♨️" },
    { alias: "wheelchair", emoji: "♿️" },
    { alias: "registered", emoji: "®️" },
    { alias: "one-thirty", emoji: "🕜" },
    { alias: "two-thirty", emoji: "🕝" },
    { alias: "six-thirty", emoji: "🕡" },
    { alias: "ten-thirty", emoji: "🕥" },
    { alias: "antarctica", emoji: "🇦🇶" },
    { alias: "azerbaijan", emoji: "🇦🇿" },
    { alias: "bangladesh", emoji: "🇧🇩" },
    { alias: "guadeloupe", emoji: "🇬🇵" },
    { alias: "kazakhstan", emoji: "🇰🇿" },
    { alias: "kyrgyzstan", emoji: "🇰🇬" },
    { alias: "luxembourg", emoji: "🇱🇺" },
    { alias: "madagascar", emoji: "🇲🇬" },
    { alias: "martinique", emoji: "🇲🇶" },
    { alias: "mauritania", emoji: "🇲🇷" },
    { alias: "micronesia", emoji: "🇫🇲" },
    { alias: "montenegro", emoji: "🇲🇪" },
    { alias: "montserrat", emoji: "🇲🇸" },
    { alias: "mozambique", emoji: "🇲🇿" },
    { alias: "seychelles", emoji: "🇸🇨" },
    { alias: "tajikistan", emoji: "🇹🇯" },
    { alias: "uzbekistan", emoji: "🇺🇿" },
    { alias: "satisfied", emoji: "😆" },
    { alias: "persevere", emoji: "😣" },
    { alias: "anguished", emoji: "😧" },
    { alias: "grimacing", emoji: "😬" },
    { alias: "handshake", emoji: "🤝" },
    { alias: "facepunch", emoji: "👊" },
    { alias: "policeman", emoji: "👮" },
    { alias: "guardsman", emoji: "💂" },
    { alias: "detective", emoji: "🕵" },
    { alias: "briefcase", emoji: "💼" },
    { alias: "butterfly", emoji: "🦋" },
    { alias: "crocodile", emoji: "🐊" },
    { alias: "racehorse", emoji: "🐎" },
    { alias: "sunflower", emoji: "🌻" },
    { alias: "collision", emoji: "💥" },
    { alias: "snowflake", emoji: "❄️" },
    { alias: "tangerine", emoji: "🍊" },
    { alias: "pineapple", emoji: "🍍" },
    { alias: "croissant", emoji: "🥐" },
    { alias: "hamburger", emoji: "🍔" },
    { alias: "spaghetti", emoji: "🍝" },
    { alias: "shortcake", emoji: "🍰" },
    { alias: "champagne", emoji: "🍾" },
    { alias: "badminton", emoji: "🏸" },
    { alias: "bicyclist", emoji: "🚴" },
    { alias: "headphone", emoji: "🎧" },
    { alias: "saxophone", emoji: "🎷" },
    { alias: "ambulance", emoji: "🚑" },
    { alias: "satellite", emoji: "🛰" },
    { alias: "speedboat", emoji: "🚤" },
    { alias: "synagogue", emoji: "🕍" },
    { alias: "fireworks", emoji: "🎆" },
    { alias: "cityscape", emoji: "🏙" },
    { alias: "trackball", emoji: "🖲" },
    { alias: "telephone", emoji: "☎️" },
    { alias: "stopwatch", emoji: "⏱" },
    { alias: "hourglass", emoji: "⌛️" },
    { alias: "satellite", emoji: "📡" },
    { alias: "cigarette", emoji: "🚬" },
    { alias: "telescope", emoji: "🔭" },
    { alias: "clipboard", emoji: "📋" },
    { alias: "newspaper", emoji: "📰" },
    { alias: "paperclip", emoji: "📎" },
    { alias: "heartbeat", emoji: "💓" },
    { alias: "ophiuchus", emoji: "⛎" },
    { alias: "capricorn", emoji: "♑️" },
    { alias: "biohazard", emoji: "☣️" },
    { alias: "copyright", emoji: "©️" },
    { alias: "megaphone", emoji: "📣" },
    { alias: "clock1030", emoji: "🕥" },
    { alias: "clock1130", emoji: "🕦" },
    { alias: "clock1230", emoji: "🕧" },
    { alias: "argentina", emoji: "🇦🇷" },
    { alias: "australia", emoji: "🇦🇺" },
    { alias: "gibraltar", emoji: "🇬🇮" },
    { alias: "greenland", emoji: "🇬🇱" },
    { alias: "guatemala", emoji: "🇬🇹" },
    { alias: "indonesia", emoji: "🇮🇩" },
    { alias: "lithuania", emoji: "🇱🇹" },
    { alias: "macedonia", emoji: "🇲🇰" },
    { alias: "mauritius", emoji: "🇲🇺" },
    { alias: "nicaragua", emoji: "🇳🇮" },
    { alias: "singapore", emoji: "🇸🇬" },
    { alias: "swaziland", emoji: "🇸🇿" },
    { alias: "venezuela", emoji: "🇻🇪" },
    { alias: "grinning", emoji: "😀" },
    { alias: "laughing", emoji: "😆" },
    { alias: "innocent", emoji: "😇" },
    { alias: "relieved", emoji: "😌" },
    { alias: "unamused", emoji: "😒" },
    { alias: "confused", emoji: "😕" },
    { alias: "frowning", emoji: "😦" },
    { alias: "sleeping", emoji: "😴" },
    { alias: "thinking", emoji: "🤔" },
    { alias: "thumbsup", emoji: "👍" },
    { alias: "lipstick", emoji: "💄" },
    { alias: "princess", emoji: "👸" },
    { alias: "umbrella", emoji: "☂️" },
    { alias: "honeybee", emoji: "🐝" },
    { alias: "scorpion", emoji: "🦂" },
    { alias: "blowfish", emoji: "🐡" },
    { alias: "elephant", emoji: "🐘" },
    { alias: "chipmunk", emoji: "🐿" },
    { alias: "seedling", emoji: "🌱" },
    { alias: "shamrock", emoji: "☘️" },
    { alias: "mushroom", emoji: "🍄" },
    { alias: "hibiscus", emoji: "🌺" },
    { alias: "sparkles", emoji: "✨" },
    { alias: "umbrella", emoji: "☔️" },
    { alias: "mandarin", emoji: "🍊" },
    { alias: "cherries", emoji: "🍒" },
    { alias: "eggplant", emoji: "🍆" },
    { alias: "cucumber", emoji: "🥒" },
    { alias: "chestnut", emoji: "🌰" },
    { alias: "pancakes", emoji: "🥞" },
    { alias: "icecream", emoji: "🍦" },
    { alias: "birthday", emoji: "🎂" },
    { alias: "lollipop", emoji: "🍭" },
    { alias: "doughnut", emoji: "🍩" },
    { alias: "cocktail", emoji: "🍸" },
    { alias: "football", emoji: "🏈" },
    { alias: "baseball", emoji: "⚾️" },
    { alias: "monorail", emoji: "🚝" },
    { alias: "airplane", emoji: "✈️" },
    { alias: "sailboat", emoji: "⛵️" },
    { alias: "fuelpump", emoji: "⛽️" },
    { alias: "fountain", emoji: "⛲️" },
    { alias: "mountain", emoji: "⛰" },
    { alias: "motorway", emoji: "🛣" },
    { alias: "hospital", emoji: "🏥" },
    { alias: "sparkler", emoji: "🎇" },
    { alias: "computer", emoji: "💻" },
    { alias: "keyboard", emoji: "⌨️" },
    { alias: "joystick", emoji: "🕹" },
    { alias: "minidisc", emoji: "💽" },
    { alias: "moneybag", emoji: "💰" },
    { alias: "shopping", emoji: "🛍" },
    { alias: "envelope", emoji: "✉️" },
    { alias: "calendar", emoji: "📆" },
    { alias: "calendar", emoji: "📅" },
    { alias: "notebook", emoji: "📓" },
    { alias: "bookmark", emoji: "🔖" },
    { alias: "scissors", emoji: "✂️" },
    { alias: "unlocked", emoji: "🔓" },
    { alias: "scorpius", emoji: "♏️" },
    { alias: "aquarius", emoji: "♒️" },
    { alias: "underage", emoji: "🔞" },
    { alias: "question", emoji: "❓" },
    { alias: "bangbang", emoji: "‼️" },
    { alias: "beginner", emoji: "🔰" },
    { alias: "restroom", emoji: "🚻" },
    { alias: "asterisk", emoji: "*️⃣" },
    { alias: "diamonds", emoji: "♦️" },
    { alias: "clock130", emoji: "🕜" },
    { alias: "clock230", emoji: "🕝" },
    { alias: "clock330", emoji: "🕞" },
    { alias: "clock430", emoji: "🕟" },
    { alias: "clock530", emoji: "🕠" },
    { alias: "clock630", emoji: "🕡" },
    { alias: "clock730", emoji: "🕢" },
    { alias: "clock830", emoji: "🕣" },
    { alias: "clock930", emoji: "🕤" },
    { alias: "anguilla", emoji: "🇦🇮" },
    { alias: "barbados", emoji: "🇧🇧" },
    { alias: "botswana", emoji: "🇧🇼" },
    { alias: "bulgaria", emoji: "🇧🇬" },
    { alias: "cambodia", emoji: "🇰🇭" },
    { alias: "cameroon", emoji: "🇨🇲" },
    { alias: "colombia", emoji: "🇨🇴" },
    { alias: "djibouti", emoji: "🇩🇯" },
    { alias: "dominica", emoji: "🇩🇲" },
    { alias: "ethiopia", emoji: "🇪🇹" },
    { alias: "guernsey", emoji: "🇬🇬" },
    { alias: "honduras", emoji: "🇭🇳" },
    { alias: "kiribati", emoji: "🇰🇮" },
    { alias: "malaysia", emoji: "🇲🇾" },
    { alias: "maldives", emoji: "🇲🇻" },
    { alias: "mongolia", emoji: "🇲🇳" },
    { alias: "pakistan", emoji: "🇵🇰" },
    { alias: "paraguay", emoji: "🇵🇾" },
    { alias: "portugal", emoji: "🇵🇹" },
    { alias: "slovakia", emoji: "🇸🇰" },
    { alias: "slovenia", emoji: "🇸🇮" },
    { alias: "suriname", emoji: "🇸🇷" },
    { alias: "tanzania", emoji: "🇹🇿" },
    { alias: "thailand", emoji: "🇹🇭" },
    { alias: "zimbabwe", emoji: "🇿🇼" },
    { alias: "relaxed", emoji: "☺️" },
    { alias: "kissing", emoji: "😗" },
    { alias: "pensive", emoji: "😔" },
    { alias: "worried", emoji: "😟" },
    { alias: "triumph", emoji: "😤" },
    { alias: "flushed", emoji: "😳" },
    { alias: "fearful", emoji: "😨" },
    { alias: "haircut", emoji: "💇" },
    { alias: "massage", emoji: "💆" },
    { alias: "dancers", emoji: "👯" },
    { alias: "walking", emoji: "🚶" },
    { alias: "running", emoji: "🏃" },
    { alias: "t-shirt", emoji: "👕" },
    { alias: "necktie", emoji: "👔" },
    { alias: "handbag", emoji: "👜" },
    { alias: "glasses", emoji: "👓" },
    { alias: "hamster", emoji: "🐹" },
    { alias: "chicken", emoji: "🐔" },
    { alias: "penguin", emoji: "🐧" },
    { alias: "unicorn", emoji: "🦄" },
    { alias: "octopus", emoji: "🐙" },
    { alias: "dolphin", emoji: "🐬" },
    { alias: "flipper", emoji: "🐬" },
    { alias: "leopard", emoji: "🐆" },
    { alias: "gorilla", emoji: "🦍" },
    { alias: "rooster", emoji: "🐓" },
    { alias: "rabbit2", emoji: "🐇" },
    { alias: "bouquet", emoji: "💐" },
    { alias: "blossom", emoji: "🌼" },
    { alias: "rainbow", emoji: "🌈" },
    { alias: "snowman", emoji: "☃️" },
    { alias: "snowman", emoji: "⛄️" },
    { alias: "tornado", emoji: "🌪" },
    { alias: "droplet", emoji: "💧" },
    { alias: "avocado", emoji: "🥑" },
    { alias: "peanuts", emoji: "🥜" },
    { alias: "cooking", emoji: "🍳" },
    { alias: "burrito", emoji: "🌯" },
    { alias: "custard", emoji: "🍮" },
    { alias: "popcorn", emoji: "🍿" },
    { alias: "cricket", emoji: "🏏" },
    { alias: "swimmer", emoji: "🏊" },
    { alias: "rowboat", emoji: "🚣" },
    { alias: "rosette", emoji: "🏵" },
    { alias: "tickets", emoji: "🎟" },
    { alias: "clapper", emoji: "🎬" },
    { alias: "trumpet", emoji: "🎺" },
    { alias: "bowling", emoji: "🎳" },
    { alias: "minibus", emoji: "🚐" },
    { alias: "tractor", emoji: "🚜" },
    { alias: "bicycle", emoji: "🚲" },
    { alias: "station", emoji: "🚉" },
    { alias: "busstop", emoji: "🚏" },
    { alias: "stadium", emoji: "🏟" },
    { alias: "volcano", emoji: "🌋" },
    { alias: "camping", emoji: "🏕" },
    { alias: "factory", emoji: "🏭" },
    { alias: "wedding", emoji: "💒" },
    { alias: "sunrise", emoji: "🌅" },
    { alias: "calling", emoji: "📲" },
    { alias: "printer", emoji: "🖨" },
    { alias: "battery", emoji: "🔋" },
    { alias: "smoking", emoji: "🚬" },
    { alias: "amphora", emoji: "🏺" },
    { alias: "alembic", emoji: "⚗️" },
    { alias: "syringe", emoji: "💉" },
    { alias: "bathtub", emoji: "🛁" },
    { alias: "balloon", emoji: "🎈" },
    { alias: "lantern", emoji: "🏮" },
    { alias: "package", emoji: "📦" },
    { alias: "mailbox", emoji: "📫" },
    { alias: "postbox", emoji: "📮" },
    { alias: "pushpin", emoji: "📌" },
    { alias: "pencil2", emoji: "✏️" },
    { alias: "menorah", emoji: "🕎" },
    { alias: "warning", emoji: "⚠️" },
    { alias: "trident", emoji: "🔱" },
    { alias: "recycle", emoji: "♻️" },
    { alias: "sparkle", emoji: "❇️" },
    { alias: "cyclone", emoji: "🌀" },
    { alias: "parking", emoji: "🅿️" },
    { alias: "customs", emoji: "🛃" },
    { alias: "symbols", emoji: "🔣" },
    { alias: "speaker", emoji: "🔈" },
    { alias: "mahjong", emoji: "🀄️" },
    { alias: "clock10", emoji: "🕙" },
    { alias: "clock11", emoji: "🕚" },
    { alias: "clock12", emoji: "🕛" },
    { alias: "albania", emoji: "🇦🇱" },
    { alias: "algeria", emoji: "🇩🇿" },
    { alias: "andorra", emoji: "🇦🇩" },
    { alias: "armenia", emoji: "🇦🇲" },
    { alias: "austria", emoji: "🇦🇹" },
    { alias: "bahamas", emoji: "🇧🇸" },
    { alias: "bahrain", emoji: "🇧🇭" },
    { alias: "belarus", emoji: "🇧🇾" },
    { alias: "belgium", emoji: "🇧🇪" },
    { alias: "bermuda", emoji: "🇧🇲" },
    { alias: "bolivia", emoji: "🇧🇴" },
    { alias: "burundi", emoji: "🇧🇮" },
    { alias: "comoros", emoji: "🇰🇲" },
    { alias: "croatia", emoji: "🇭🇷" },
    { alias: "curaçao", emoji: "🇨🇼" },
    { alias: "curacao", emoji: "🇨🇼" },
    { alias: "denmark", emoji: "🇩🇰" },
    { alias: "ecuador", emoji: "🇪🇨" },
    { alias: "eritrea", emoji: "🇪🇷" },
    { alias: "estonia", emoji: "🇪🇪" },
    { alias: "finland", emoji: "🇫🇮" },
    { alias: "georgia", emoji: "🇬🇪" },
    { alias: "germany", emoji: "🇩🇪" },
    { alias: "grenada", emoji: "🇬🇩" },
    { alias: "hungary", emoji: "🇭🇺" },
    { alias: "iceland", emoji: "🇮🇸" },
    { alias: "ireland", emoji: "🇮🇪" },
    { alias: "jamaica", emoji: "🇯🇲" },
    { alias: "lebanon", emoji: "🇱🇧" },
    { alias: "lesotho", emoji: "🇱🇸" },
    { alias: "liberia", emoji: "🇱🇷" },
    { alias: "mayotte", emoji: "🇾🇹" },
    { alias: "moldova", emoji: "🇲🇩" },
    { alias: "morocco", emoji: "🇲🇦" },
    { alias: "myanmar", emoji: "🇲🇲" },
    { alias: "namibia", emoji: "🇳🇦" },
    { alias: "nigeria", emoji: "🇳🇬" },
    { alias: "réunion", emoji: "🇷🇪" },
    { alias: "reunion", emoji: "🇷🇪" },
    { alias: "romania", emoji: "🇷🇴" },
    { alias: "senegal", emoji: "🇸🇳" },
    { alias: "somalia", emoji: "🇸🇴" },
    { alias: "tokelau", emoji: "🇹🇰" },
    { alias: "tunisia", emoji: "🇹🇳" },
    { alias: "ukraine", emoji: "🇺🇦" },
    { alias: "uruguay", emoji: "🇺🇾" },
    { alias: "vanuatu", emoji: "🇻🇺" },
    { alias: "vietnam", emoji: "🇻🇳" },
    { alias: "smiley", emoji: "😃" },
    { alias: "hushed", emoji: "😯" },
    { alias: "scream", emoji: "😱" },
    { alias: "sleepy", emoji: "😪" },
    { alias: "goblin", emoji: "👺" },
    { alias: "hankey", emoji: "💩" },
    { alias: "muscle", emoji: "💪" },
    { alias: "selfie", emoji: "🤳" },
    { alias: "tongue", emoji: "👅" },
    { alias: "prince", emoji: "🤴" },
    { alias: "dancer", emoji: "💃" },
    { alias: "runner", emoji: "🏃" },
    { alias: "couple", emoji: "👫" },
    { alias: "family", emoji: "👪" },
    { alias: "tshirt", emoji: "👕" },
    { alias: "bikini", emoji: "👙" },
    { alias: "kimono", emoji: "👘" },
    { alias: "sandal", emoji: "👡" },
    { alias: "tophat", emoji: "🎩" },
    { alias: "rabbit", emoji: "🐰" },
    { alias: "monkey", emoji: "🐒" },
    { alias: "beetle", emoji: "🐞" },
    { alias: "spider", emoji: "🕷" },
    { alias: "turtle", emoji: "🐢" },
    { alias: "lizard", emoji: "🦎" },
    { alias: "shrimp", emoji: "🦐" },
    { alias: "whale2", emoji: "🐋" },
    { alias: "tiger2", emoji: "🐅" },
    { alias: "poodle", emoji: "🐩" },
    { alias: "turkey", emoji: "🦃" },
    { alias: "rabbit", emoji: "🐇" },
    { alias: "mouse2", emoji: "🐁" },
    { alias: "dragon", emoji: "🐉" },
    { alias: "cactus", emoji: "🌵" },
    { alias: "bamboo", emoji: "🎍" },
    { alias: "leaves", emoji: "🍃" },
    { alias: "orange", emoji: "🍊" },
    { alias: "banana", emoji: "🍌" },
    { alias: "grapes", emoji: "🍇" },
    { alias: "tomato", emoji: "🍅" },
    { alias: "carrot", emoji: "🥕" },
    { alias: "potato", emoji: "🥔" },
    { alias: "cheese", emoji: "🧀" },
    { alias: "hotdog", emoji: "🌭" },
    { alias: "cookie", emoji: "🍪" },
    { alias: "coffee", emoji: "☕️" },
    { alias: "soccer", emoji: "⚽️" },
    { alias: "tennis", emoji: "🎾" },
    { alias: "surfer", emoji: "🏄" },
    { alias: "trophy", emoji: "🏆" },
    { alias: "ticket", emoji: "🎫" },
    { alias: "guitar", emoji: "🎸" },
    { alias: "violin", emoji: "🎻" },
    { alias: "train2", emoji: "🚆" },
    { alias: "rocket", emoji: "🚀" },
    { alias: "anchor", emoji: "⚓️" },
    { alias: "castle", emoji: "🏰" },
    { alias: "desert", emoji: "🏜" },
    { alias: "houses", emoji: "🏘" },
    { alias: "office", emoji: "🏢" },
    { alias: "school", emoji: "🏫" },
    { alias: "church", emoji: "⛪️" },
    { alias: "mosque", emoji: "🕌" },
    { alias: "sunset", emoji: "🌇" },
    { alias: "iphone", emoji: "📱" },
    { alias: "camera", emoji: "📷" },
    { alias: "candle", emoji: "🕯" },
    { alias: "dollar", emoji: "💵" },
    { alias: "wrench", emoji: "🔧" },
    { alias: "hammer", emoji: "🔨" },
    { alias: "chains", emoji: "⛓" },
    { alias: "pistol", emoji: "🔫" },
    { alias: "dagger", emoji: "🗡" },
    { alias: "shield", emoji: "🛡" },
    { alias: "coffin", emoji: "⚰️" },
    { alias: "barber", emoji: "💈" },
    { alias: "toilet", emoji: "🚽" },
    { alias: "shower", emoji: "🚿" },
    { alias: "ribbon", emoji: "🎀" },
    { alias: "e-mail", emoji: "📧" },
    { alias: "scroll", emoji: "📜" },
    { alias: "ledger", emoji: "📒" },
    { alias: "crayon", emoji: "🖍" },
    { alias: "pencil", emoji: "📝" },
    { alias: "pencil", emoji: "✏️" },
    { alias: "locked", emoji: "🔒" },
    { alias: "unlock", emoji: "🔓" },
    { alias: "taurus", emoji: "♉️" },
    { alias: "gemini", emoji: "♊️" },
    { alias: "cancer", emoji: "♋️" },
    { alias: "pisces", emoji: "♓️" },
    { alias: "accept", emoji: "🉑" },
    { alias: "secret", emoji: "㊙️" },
    { alias: "womens", emoji: "🚺" },
    { alias: "cinema", emoji: "🎦" },
    { alias: "rewind", emoji: "⏪" },
    { alias: "repeat", emoji: "🔁" },
    { alias: "spades", emoji: "♠️" },
    { alias: "hearts", emoji: "♥️" },
    { alias: "clock1", emoji: "🕐" },
    { alias: "clock2", emoji: "🕑" },
    { alias: "clock3", emoji: "🕒" },
    { alias: "clock4", emoji: "🕓" },
    { alias: "clock5", emoji: "🕔" },
    { alias: "clock6", emoji: "🕕" },
    { alias: "clock7", emoji: "🕖" },
    { alias: "clock8", emoji: "🕗" },
    { alias: "clock9", emoji: "🕘" },
    { alias: "angola", emoji: "🇦🇴" },
    { alias: "belize", emoji: "🇧🇿" },
    { alias: "bhutan", emoji: "🇧🇹" },
    { alias: "brazil", emoji: "🇧🇷" },
    { alias: "brunei", emoji: "🇧🇳" },
    { alias: "canada", emoji: "🇨🇦" },
    { alias: "cyprus", emoji: "🇨🇾" },
    { alias: "france", emoji: "🇫🇷" },
    { alias: "gambia", emoji: "🇬🇲" },
    { alias: "greece", emoji: "🇬🇷" },
    { alias: "guinea", emoji: "🇬🇳" },
    { alias: "guyana", emoji: "🇬🇾" },
    { alias: "israel", emoji: "🇮🇱" },
    { alias: "jersey", emoji: "🇯🇪" },
    { alias: "jordan", emoji: "🇯🇴" },
    { alias: "kosovo", emoji: "🇽🇰" },
    { alias: "kuwait", emoji: "🇰🇼" },
    { alias: "latvia", emoji: "🇱🇻" },
    { alias: "malawi", emoji: "🇲🇼" },
    { alias: "mexico", emoji: "🇲🇽" },
    { alias: "monaco", emoji: "🇲🇨" },
    { alias: "norway", emoji: "🇳🇴" },
    { alias: "panama", emoji: "🇵🇦" },
    { alias: "poland", emoji: "🇵🇱" },
    { alias: "russia", emoji: "🇷🇺" },
    { alias: "rwanda", emoji: "🇷🇼" },
    { alias: "serbia", emoji: "🇷🇸" },
    { alias: "sweden", emoji: "🇸🇪" },
    { alias: "taiwan", emoji: "🇹🇼" },
    { alias: "turkey", emoji: "🇹🇷" },
    { alias: "tuvalu", emoji: "🇹🇻" },
    { alias: "uganda", emoji: "🇺🇬" },
    { alias: "zambia", emoji: "🇿🇲" },
    { alias: "smile", emoji: "😄" },
    { alias: "blush", emoji: "😊" },
    { alias: "smirk", emoji: "😏" },
    { alias: "weary", emoji: "😩" },
    { alias: "angry", emoji: "😠" },
    { alias: "sweat", emoji: "😓" },
    { alias: "ghost", emoji: "👻" },
    { alias: "skull", emoji: "💀" },
    { alias: "alien", emoji: "👽" },
    { alias: "robot", emoji: "🤖" },
    { alias: "punch", emoji: "👊" },
    { alias: "metal", emoji: "🤘" },
    { alias: "mouth", emoji: "👄" },
    { alias: "woman", emoji: "👩" },
    { alias: "guard", emoji: "💂" },
    { alias: "santa", emoji: "🎅" },
    { alias: "angel", emoji: "👼" },
    { alias: "shirt", emoji: "👕" },
    { alias: "jeans", emoji: "👖" },
    { alias: "dress", emoji: "👗" },
    { alias: "crown", emoji: "👑" },
    { alias: "pouch", emoji: "👝" },
    { alias: "purse", emoji: "👛" },
    { alias: "mouse", emoji: "🐭" },
    { alias: "koala", emoji: "🐨" },
    { alias: "tiger", emoji: "🐯" },
    { alias: "eagle", emoji: "🦅" },
    { alias: "horse", emoji: "🐴" },
    { alias: "snail", emoji: "🐌" },
    { alias: "shell", emoji: "🐚" },
    { alias: "snake", emoji: "🐍" },
    { alias: "squid", emoji: "🦑" },
    { alias: "shark", emoji: "🦈" },
    { alias: "whale", emoji: "🐳" },
    { alias: "whale", emoji: "🐋" },
    { alias: "tiger", emoji: "🐅" },
    { alias: "camel", emoji: "🐪" },
    { alias: "camel", emoji: "🐫" },
    { alias: "horse", emoji: "🐎" },
    { alias: "sheep", emoji: "🐑" },
    { alias: "mouse", emoji: "🐁" },
    { alias: "tulip", emoji: "🌷" },
    { alias: "dizzy", emoji: "💫" },
    { alias: "star2", emoji: "🌟" },
    { alias: "comet", emoji: "☄" },
    { alias: "sunny", emoji: "☀️" },
    { alias: "cloud", emoji: "☁️" },
    { alias: "ocean", emoji: "🌊" },
    { alias: "apple", emoji: "🍎" },
    { alias: "lemon", emoji: "🍋" },
    { alias: "melon", emoji: "🍈" },
    { alias: "peach", emoji: "🍑" },
    { alias: "bread", emoji: "🍞" },
    { alias: "bacon", emoji: "🥓" },
    { alias: "pizza", emoji: "🍕" },
    { alias: "fries", emoji: "🍟" },
    { alias: "ramen", emoji: "🍜" },
    { alias: "sushi", emoji: "🍣" },
    { alias: "bento", emoji: "🍱" },
    { alias: "curry", emoji: "🍛" },
    { alias: "dango", emoji: "🍡" },
    { alias: "candy", emoji: "🍬" },
    { alias: "beers", emoji: "🍻" },
    { alias: "spoon", emoji: "🥄" },
    { alias: "8ball", emoji: "🎱" },
    { alias: "skier", emoji: "⛷" },
    { alias: "truck", emoji: "🚚" },
    { alias: "train", emoji: "🚋" },
    { alias: "train", emoji: "🚆" },
    { alias: "metro", emoji: "🚇" },
    { alias: "canoe", emoji: "🛶" },
    { alias: "ferry", emoji: "⛴" },
    { alias: "moyai", emoji: "🗿" },
    { alias: "house", emoji: "🏠" },
    { alias: "house", emoji: "🏘" },
    { alias: "hotel", emoji: "🏨" },
    { alias: "kaaba", emoji: "🕋" },
    { alias: "japan", emoji: "🗾" },
    { alias: "stars", emoji: "🌠" },
    { alias: "foggy", emoji: "🌁" },
    { alias: "watch", emoji: "⌚️" },
    { alias: "clamp", emoji: "🗜" },
    { alias: "phone", emoji: "☎️" },
    { alias: "pager", emoji: "📟" },
    { alias: "radio", emoji: "📻" },
    { alias: "pound", emoji: "💷" },
    { alias: "hocho", emoji: "🔪" },
    { alias: "knife", emoji: "🔪" },
    { alias: "flags", emoji: "🎏" },
    { alias: "dolls", emoji: "🎎" },
    { alias: "email", emoji: "✉️" },
    { alias: "label", emoji: "🏷" },
    { alias: "books", emoji: "📚" },
    { alias: "heart", emoji: "❤️" },
    { alias: "cupid", emoji: "💘" },
    { alias: "aries", emoji: "♈️" },
    { alias: "virgo", emoji: "♍️" },
    { alias: "libra", emoji: "♎️" },
    { alias: "u6709", emoji: "🈶" },
    { alias: "u7121", emoji: "🈚️" },
    { alias: "u7533", emoji: "🈸" },
    { alias: "u55b6", emoji: "🈺" },
    { alias: "u6708", emoji: "🈷️" },
    { alias: "u5408", emoji: "🈴" },
    { alias: "u6e80", emoji: "🈵" },
    { alias: "u5272", emoji: "🈹" },
    { alias: "u7981", emoji: "🈲" },
    { alias: "anger", emoji: "💢" },
    { alias: "u6307", emoji: "🈯️" },
    { alias: "chart", emoji: "💹" },
    { alias: "u7a7a", emoji: "🈳" },
    { alias: "three", emoji: "3️⃣" },
    { alias: "seven", emoji: "7️⃣" },
    { alias: "eight", emoji: "8️⃣" },
    { alias: "notes", emoji: "🎶" },
    { alias: "sound", emoji: "🔉" },
    { alias: "clubs", emoji: "♣️" },
    { alias: "joker", emoji: "🃏" },
    { alias: "aruba", emoji: "🇦🇼" },
    { alias: "benin", emoji: "🇧🇯" },
    { alias: "chile", emoji: "🇨🇱" },
    { alias: "china", emoji: "🇨🇳" },
    { alias: "egypt", emoji: "🇪🇬" },
    { alias: "gabon", emoji: "🇬🇦" },
    { alias: "ghana", emoji: "🇬🇭" },
    { alias: "haiti", emoji: "🇭🇹" },
    { alias: "india", emoji: "🇮🇳" },
    { alias: "italy", emoji: "🇮🇹" },
    { alias: "japan", emoji: "🇯🇵" },
    { alias: "kenya", emoji: "🇰🇪" },
    { alias: "libya", emoji: "🇱🇾" },
    { alias: "macau", emoji: "🇲🇴" },
    { alias: "malta", emoji: "🇲🇹" },
    { alias: "nauru", emoji: "🇳🇷" },
    { alias: "nepal", emoji: "🇳🇵" },
    { alias: "niger", emoji: "🇳🇪" },
    { alias: "palau", emoji: "🇵🇼" },
    { alias: "qatar", emoji: "🇶🇦" },
    { alias: "samoa", emoji: "🇼🇸" },
    { alias: "spain", emoji: "🇪🇸" },
    { alias: "sudan", emoji: "🇸🇩" },
    { alias: "syria", emoji: "🇸🇾" },
    { alias: "tonga", emoji: "🇹🇴" },
    { alias: "yemen", emoji: "🇾🇪" },
    { alias: "grin", emoji: "😁" },
    { alias: "rofl", emoji: "🤣" },
    { alias: "wink", emoji: "😉" },
    { alias: "hugs", emoji: "🤗" },
    { alias: "rage", emoji: "😡" },
    { alias: "pout", emoji: "😡" },
    { alias: "mask", emoji: "😷" },
    { alias: "ogre", emoji: "👹" },
    { alias: "poop", emoji: "💩" },
    { alias: "shit", emoji: "💩" },
    { alias: "clap", emoji: "👏" },
    { alias: "pray", emoji: "🙏" },
    { alias: "fist", emoji: "✊" },
    { alias: "hand", emoji: "✋" },
    { alias: "wave", emoji: "👋" },
    { alias: "ring", emoji: "💍" },
    { alias: "kiss", emoji: "💋" },
    { alias: "lips", emoji: "👄" },
    { alias: "nose", emoji: "👃" },
    { alias: "eyes", emoji: "👀" },
    { alias: "baby", emoji: "👶" },
    { alias: "girl", emoji: "👧" },
    { alias: "kiss", emoji: "💏" },
    { alias: "boot", emoji: "👢" },
    { alias: "shoe", emoji: "👞" },
    { alias: "bear", emoji: "🐻" },
    { alias: "lion", emoji: "🦁" },
    { alias: "frog", emoji: "🐸" },
    { alias: "bird", emoji: "🐦" },
    { alias: "duck", emoji: "🦆" },
    { alias: "wolf", emoji: "🐺" },
    { alias: "boar", emoji: "🐗" },
    { alias: "crab", emoji: "🦀" },
    { alias: "fish", emoji: "🐟" },
    { alias: "cow2", emoji: "🐄" },
    { alias: "deer", emoji: "🦌" },
    { alias: "pig2", emoji: "🐖" },
    { alias: "goat", emoji: "🐐" },
    { alias: "dog2", emoji: "🐕" },
    { alias: "cat2", emoji: "🐈" },
    { alias: "dove", emoji: "🕊" },
    { alias: "feet", emoji: "🐾" },
    { alias: "herb", emoji: "🌿" },
    { alias: "rose", emoji: "🌹" },
    { alias: "moon", emoji: "🌔" },
    { alias: "star", emoji: "⭐️" },
    { alias: "fire", emoji: "🔥" },
    { alias: "boom", emoji: "💥" },
    { alias: "dash", emoji: "💨" },
    { alias: "pear", emoji: "🍐" },
    { alias: "corn", emoji: "🌽" },
    { alias: "taco", emoji: "🌮" },
    { alias: "stew", emoji: "🍲" },
    { alias: "rice", emoji: "🍚" },
    { alias: "oden", emoji: "🍢" },
    { alias: "cake", emoji: "🍰" },
    { alias: "sake", emoji: "🍶" },
    { alias: "beer", emoji: "🍺" },
    { alias: "golf", emoji: "⛳️" },
    { alias: "skis", emoji: "🎿" },
    { alias: "drum", emoji: "🥁" },
    { alias: "dart", emoji: "🎯" },
    { alias: "taxi", emoji: "🚕" },
    { alias: "bike", emoji: "🚲" },
    { alias: "tram", emoji: "🚊" },
    { alias: "seat", emoji: "💺" },
    { alias: "boat", emoji: "⛵️" },
    { alias: "ship", emoji: "🚢" },
    { alias: "moai", emoji: "🗿" },
    { alias: "tent", emoji: "⛺️" },
    { alias: "bank", emoji: "🏦" },
    { alias: "bulb", emoji: "💡" },
    { alias: "euro", emoji: "💶" },
    { alias: "pick", emoji: "⛏" },
    { alias: "gear", emoji: "⚙️" },
    { alias: "bomb", emoji: "💣" },
    { alias: "hole", emoji: "🕳" },
    { alias: "pill", emoji: "💊" },
    { alias: "bath", emoji: "🛀" },
    { alias: "door", emoji: "🚪" },
    { alias: "gift", emoji: "🎁" },
    { alias: "tada", emoji: "🎉" },
    { alias: "date", emoji: "📅" },
    { alias: "book", emoji: "📖" },
    { alias: "link", emoji: "🔗" },
    { alias: "memo", emoji: "📝" },
    { alias: "lock", emoji: "🔒" },
    { alias: "mens", emoji: "🚹" },
    { alias: "koko", emoji: "🈁" },
    { alias: "abcd", emoji: "🔡" },
    { alias: "cool", emoji: "🆒" },
    { alias: "free", emoji: "🆓" },
    { alias: "zero", emoji: "0️⃣" },
    { alias: "four", emoji: "4️⃣" },
    { alias: "five", emoji: "5️⃣" },
    { alias: "nine", emoji: "9️⃣" },
    { alias: "1234", emoji: "🔢" },
    { alias: "hash", emoji: "#️⃣" },
    { alias: "loop", emoji: "➿" },
    { alias: "back", emoji: "🔙" },
    { alias: "soon", emoji: "🔜" },
    { alias: "mute", emoji: "🔇" },
    { alias: "bell", emoji: "🔔" },
    { alias: "mega", emoji: "📣" },
    { alias: "chad", emoji: "🇹🇩" },
    { alias: "cuba", emoji: "🇨🇺" },
    { alias: "fiji", emoji: "🇫🇯" },
    { alias: "guam", emoji: "🇬🇺" },
    { alias: "iran", emoji: "🇮🇷" },
    { alias: "iraq", emoji: "🇮🇶" },
    { alias: "laos", emoji: "🇱🇦" },
    { alias: "mali", emoji: "🇲🇱" },
    { alias: "niue", emoji: "🇳🇺" },
    { alias: "oman", emoji: "🇴🇲" },
    { alias: "peru", emoji: "🇵🇪" },
    { alias: "togo", emoji: "🇹🇬" },
    { alias: "joy", emoji: "😂" },
    { alias: "yum", emoji: "😋" },
    { alias: "cry", emoji: "😢" },
    { alias: "sob", emoji: "😭" },
    { alias: "imp", emoji: "👿" },
    { alias: "ear", emoji: "👂" },
    { alias: "eye", emoji: "👁" },
    { alias: "boy", emoji: "👦" },
    { alias: "man", emoji: "👨" },
    { alias: "cop", emoji: "👮" },
    { alias: "bow", emoji: "🙇" },
    { alias: "dog", emoji: "🐶" },
    { alias: "cat", emoji: "🐱" },
    { alias: "cow", emoji: "🐮" },
    { alias: "pig", emoji: "🐷" },
    { alias: "owl", emoji: "🦉" },
    { alias: "bat", emoji: "🦇" },
    { alias: "bee", emoji: "🐝" },
    { alias: "bug", emoji: "🐛" },
    { alias: "ant", emoji: "🐜" },
    { alias: "cow", emoji: "🐄" },
    { alias: "pig", emoji: "🐖" },
    { alias: "ram", emoji: "🐏" },
    { alias: "dog", emoji: "🐕" },
    { alias: "cat", emoji: "🐈" },
    { alias: "rat", emoji: "🐀" },
    { alias: "zap", emoji: "⚡️" },
    { alias: "sun", emoji: "☀️" },
    { alias: "fog", emoji: "🌫" },
    { alias: "egg", emoji: "🥚" },
    { alias: "tea", emoji: "🍵" },
    { alias: "ski", emoji: "🎿" },
    { alias: "art", emoji: "🎨" },
    { alias: "car", emoji: "🚗" },
    { alias: "bus", emoji: "🚌" },
    { alias: "dvd", emoji: "📀" },
    { alias: "vhs", emoji: "📼" },
    { alias: "fax", emoji: "📠" },
    { alias: "yen", emoji: "💴" },
    { alias: "gem", emoji: "💎" },
    { alias: "gun", emoji: "🔫" },
    { alias: "key", emoji: "🔑" },
    { alias: "bed", emoji: "🛏" },
    { alias: "pen", emoji: "🖊" },
    { alias: "mag", emoji: "🔍" },
    { alias: "leo", emoji: "♌️" },
    { alias: "sos", emoji: "🆘" },
    { alias: "100", emoji: "💯" },
    { alias: "zzz", emoji: "💤" },
    { alias: "atm", emoji: "🏧" },
    { alias: "abc", emoji: "🔤" },
    { alias: "new", emoji: "🆕" },
    { alias: "one", emoji: "1️⃣" },
    { alias: "two", emoji: "2️⃣" },
    { alias: "six", emoji: "6️⃣" },
    { alias: "end", emoji: "🔚" },
    { alias: "top", emoji: "🔝" },
    { alias: "\\\\+1", emoji: "👍" },
    { alias: "-1", emoji: "👎" },
    { alias: "fu", emoji: "🖕" },
    { alias: "ox", emoji: "🐂" },
    { alias: "cd", emoji: "💿" },
    { alias: "tv", emoji: "📺" },
    { alias: "om", emoji: "🕉" },
    { alias: "id", emoji: "🆔" },
    { alias: "vs", emoji: "🆚" },
    { alias: "ab", emoji: "🆎" },
    { alias: "cl", emoji: "🆑" },
    { alias: "o2", emoji: "🅾️" },
    { alias: "wc", emoji: "🚾" },
    { alias: "sa", emoji: "🈂️" },
    { alias: "ng", emoji: "🆖" },
    { alias: "ok", emoji: "🆗" },
    { alias: "up", emoji: "🆙" },
    { alias: "tm", emoji: "™️" },
    // { alias: "on", emoji: "🔛" },
    // { alias: "cn", emoji: "🇨🇳" },
    // { alias: "eu", emoji: "🇪🇺" },
    // { alias: "fr", emoji: "🇫🇷" },
    // { alias: "de", emoji: "🇩🇪" },
    // { alias: "it", emoji: "🇮🇹" },
    // { alias: "jp", emoji: "🇯🇵" },
    // { alias: "ru", emoji: "🇷🇺" },
    // { alias: "kr", emoji: "🇰🇷" },
    // { alias: "es", emoji: "🇪🇸" },
    // { alias: "tr", emoji: "🇹🇷" },
    // { alias: "gb", emoji: "🇬🇧" },
    // { alias: "uk", emoji: "🇬🇧" },
    // { alias: "us", emoji: "🇺🇸" },
    // { alias: "v", emoji: "✌️" },
    // { alias: "a", emoji: "🅰️" },
    // { alias: "b", emoji: "🅱️" },
    // { alias: "x", emoji: "❌" },
    // { alias: "o", emoji: "⭕️" },
    // { alias: "m", emoji: "Ⓜ️" }
];

const XFDictionary = [
    { alias: "home", emoji: "🏠" },
    { alias: "media", emoji: "📷" },
    { alias: "resource", emoji: "💼" },
    { alias: "resources", emoji: "💼" },
    { alias: "member", emoji: "👪" },
    { alias: "members", emoji: "👪" },
    { alias: "post", emoji: "📮" },
    { alias: "posts", emoji: "📮" },
    { alias: "register", emoji: "®️" },
    { alias: "forum", emoji: "🏛️" },
    { alias: "forums", emoji: "🏛️" },
    { alias: "reply", emoji: "↩️" },
    { alias: "replies", emoji: "↩️" },
    { alias: "#", emoji: "#️⃣" },
    { alias: "user", emoji: "👤" },
    { alias: "users", emoji: "👤" },
    { alias: "username", emoji: "🆔" },
    { alias: "staff", emoji: "⚚" },
    { alias: "here", emoji: "📍" },
    { alias: "navigation", emoji: "🗺️" },
    { alias: "log in", emoji: "🔥➡️" },
    { alias: "login", emoji: "🔥➡️" },
    { alias: "announcement", emoji: "🎟" },
    { alias: "quick", emoji: "🏃🏻" },
    { alias: "test", emoji: "📝" },
    { alias: "thread", emoji: "✨" },
    { alias: "threads", emoji: "✨" },
    { alias: "and", emoji: "➕" },
    { alias: "&", emoji: "➕" },
    { alias: "\\\\+", emoji: "➕" },
    { alias: "help", emoji: "🆘" },
    { alias: "what", emoji: "❓" },
    { alias: "xenforo", emoji: "🦄" },
    { alias: "you", emoji: "😎" },
    { alias: "sticky", emoji: "🛎️" },
    { alias: "about", emoji: "🤷" },
    { alias: "privacy", emoji: "🔏" },
    { alias: "policy", emoji: "📜" },
    { alias: "day", emoji: "📅" },
    { alias: "today", emoji: "📅" },
    { alias: "comment", emoji: "💬" },
    { alias: "comments", emoji: "💬" },
    { alias: "search", emoji: "🔍" },
    { alias: "share", emoji: "❤️" },
    { alias: "happy", emoji: "🤗" },
    { alias: "quote", emoji: "📖" },
    { alias: "see", emoji: "👀" },
    { alias: "admin", emoji: "🛡️" },
    { alias: "administrator", emoji: "🛡️" },
    { alias: "general", emoji: "⭐" },
    { alias: "contact", emoji: "✉️" },
    { alias: "facebook", emoji: "🙂📖" },
    { alias: "twitter", emoji: "🐦" },
    { alias: "edit", emoji: "✏️" },
    { alias: "themehouse", emoji: "Theme🏠" }
];

const customDictionary = [
    { alias: "1", emoji: "1️⃣" },
    { alias: "2", emoji: "2️⃣" },
    { alias: "3", emoji: "3️⃣" },
    { alias: "4", emoji: "4️⃣" },
    { alias: "5", emoji: "5️⃣" },
    { alias: "6", emoji: "6️⃣" },
    { alias: "7", emoji: "7️⃣" },
    { alias: "8", emoji: "8️⃣" },
    { alias: "9", emoji: "9️⃣" },
    { alias: "0", emoji: "0️⃣" },
    { alias: "#", emoji: "️#️⃣" }
    // { alias: "a", emoji: "Ⓐ" },
    // { alias: "b", emoji: "Ⓑ" },
    // { alias: "c", emoji: "Ⓒ" },
    // { alias: "d", emoji: "Ⓓ" },
    // { alias: "e", emoji: "Ⓔ" },
    // { alias: "f", emoji: "Ⓕ" },
    // { alias: "g", emoji: "Ⓖ" },
    // { alias: "h", emoji: "Ⓗ" },
    // { alias: "i", emoji: "Ⓘ" },
    // { alias: "j", emoji: "Ⓙ" },
    // { alias: "k", emoji: "Ⓚ" },
    // { alias: "l", emoji: "Ⓛ" },
    // { alias: "m", emoji: "Ⓜ" },
    // { alias: "n", emoji: "Ⓝ" },
    // { alias: "o", emoji: "Ⓞ" },
    // { alias: "p", emoji: "ⓟ" },
    // { alias: "q", emoji: "Ⓠ" },
    // { alias: "r", emoji: "Ⓡ" },
    // { alias: "s", emoji: "Ⓢ" },
    // { alias: "t", emoji: "Ⓣ" },
    // { alias: "u", emoji: "Ⓤ" },
    // { alias: "v", emoji: "Ⓥ" },
    // { alias: "w", emoji: "Ⓦ" },
    // { alias: "x", emoji: "Ⓧ" },
    // { alias: "y", emoji: "Ⓨ" },
    // { alias: "z", emoji: "Ⓩ" }
];

const generatedDictionary = [...dictionary, ...thesaurusDictionary].filter(item => item.alias.length > 1 && item.alias.length < 20 && item.alias.split(' ').length < 3);

const fullDictionary = [...generatedDictionary, ...XFDictionary].sort((a, b) => {
    if (a.alias.length < b.alias.length) {
        return 1;
    } else if (b.alias.length < a.alias.length) {
        return -1;
    }
    return 0;
});

const addedAliases = [];

[fullDictionary, customDictionary].forEach(items => {
    let ret = '';
    items.forEach(item => {
        if (addedAliases.indexOf(item.alias) === -1) { // only add once
            if (ret.length) {
                ret += ',';
            }
            ret += `${item.alias},${item.emoji}`;
            addedAliases.push(item.alias)
        }
    });

    console.log(ret); // used in translate.js
})