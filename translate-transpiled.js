"use strict";

(function () {
    var alphaNumeric = RegExp("[A-Za-z0-9]", "gm");
    var regexDictionary = [];
    var customDictionaryInput =
        "100,💯,1,1️⃣,2,2️⃣,3,3️⃣,4,4️⃣,5,5️⃣,6,6️⃣,7,7️⃣,8,8️⃣,9,9️⃣,0,0️⃣,#,️#️⃣";
    var customDictionary = customDictionaryInput.split(",");

    for (var i = 0, len = customDictionary.length; i < len; i += 2) {
        regexDictionary.push([
            RegExp(customDictionary[i], "igm"),
            customDictionary[i + 1]
        ]);
    }

    var fullDictionaryInput =
        "expressionless face,😑,blond-haired person,👱,construction worker,👷,hear-no-evil monkey,🙉,oncoming automobile,🚘,rolled-up newspaper,🗞,ideograph advantage,🉐,fast-forward button,⏩,waxing_gibbous_moon,🌖,blond-haired woman,👱‍♀,woman technologist,👩‍💻,see-no-evil monkey,🙈,woman cartwheeling,🤸‍♀,mountain bicyclist,🚵,suspension railway,🚟,airplane departure,🛫,classical building,🏛,telephone receiver,📞,eight-pointed star,✴️,information source,ℹ️,bosnia herzegovina,🇧🇦,dominican republic,🇩🇴,woman supervillain,🦹‍♀️,disappointed face,😞,zipper-mouth face,🤐,right-facing fist,🤜,woman firefighter,👩‍🚒,woman facepalming,🤦‍♀,stuffed flatbread,🥙,american football,🏈,admission tickets,🎟,articulated lorry,🚛,mountain cableway,🚠,bullettrain front,🚅,convenience store,🏪,studio microphone,🎙,mantelpiece clock,🕰,satellite antenna,📡,incoming envelope,📨,tear-off calendar,📆,linked paperclips,🖇,non-potable water,🚱,children crossing,🚸,wheelchair symbol,♿️,currency exchange,💱,congo brazzaville,🇨🇬,equatorial guinea,🇬🇶,fire extinguisher,🧯,upside-down face,🙃,money-mouth face,🤑,persevering face,😣,left-facing fist,🤛,female detective,🕵️‍♀️,man technologist,👨‍💻,high-heeled shoe,👠,clinking glasses,🥂,man cartwheeling,🤸‍♂,basketball woman,⛹️‍♀️,musical keyboard,🎹,mountain railway,🚞,high-speed train,🚄,bullettrain side,🚄,steam locomotive,🚂,flight departure,🛫,airplane arrival,🛬,department store,🏬,desktop computer,🖥,chart increasing,📈,chart decreasing,📉,triangular ruler,📐,revolving hearts,💞,heart decoration,💟,exclamation mark,❗️,grey exclamation,❕,recycling symbol,♻️,passport control,🛂,down-right arrow,↘️,left-right arrow,↔️,arrows clockwise,🔃,christmas island,🇨🇽,falkland islands,🇫🇰,french polynesia,🇵🇫,marshall islands,🇲🇭,pitcairn islands,🇵🇳,man supervillain,🦹‍♂️,mother christmas,🤶,father christmas,🎅,confounded face,😖,astonished face,😲,japanese goblin,👺,crossed fingers,🤞,woman detective,🕵️‍♀️,woman scientist,👩‍🔬,man firefighter,👨‍🚒,woman astronaut,👩‍🚀,man facepalming,🤦‍♂,woman shrugging,🤷‍♀,person frowning,🙍,woman’s clothes,👚,school backpack,🎒,dark sunglasses,🕶,closed umbrella,🌂,dromedary camel,🐪,pine decoration,🎍,women wrestling,🤼‍♀,person swimming,🏊,reminder ribbon,🎗,performing arts,🎭,european castle,🏰,japanese castle,🏯,office building,🏢,laptop computer,💻,dollar banknote,💵,izakaya lantern,🏮,spiral calendar,🗓,sparkling heart,💖,high brightness,🔆,signal strength,📶,down-left arrow,↙️,thought balloon,💭,triangular flag,🚩,antigua barbuda,🇦🇬,myanmar (burma),🇲🇲,solomon islands,🇸🇧,trinidad tobago,🇹🇹,congratulations,㊗️,woman superhero,🦸‍♀️,pine_decoration,🎍,anguished face,😧,grimacing face,😬,nauseated face,🤢,clapping hands,👏,police officer,👮,male detective,🕵,woman mechanic,👩‍🔧,pregnant woman,🤰,person pouting,🙎,frowning woman,🙍,person walking,🚶,person running,🏃,womans clothes,👚,woman’s sandal,👡,graduation cap,🎓,school satchel,🎒,hatching chick,🐣,spouting whale,🐳,two-hump camel,🐫,christmas tree,🎄,evergreen tree,🌲,deciduous tree,🌳,cherry blossom,🌸,earth americas,🌎,sweat droplets,💦,baguette bread,🥖,cocktail glass,🍸,tropical drink,🍹,rugby football,🏉,person fencing,🤺,basketball man,⛹,person golfing,🏌,person surfing,🏄,woman swimming,🏊‍♀,swimming woman,🏊‍♀,military medal,🎖,medal military,🎖,woman juggling,🤹‍♀,artist palette,🎨,delivery truck,🚚,rotating light,🚨,aerial tramway,🚡,small airplane,🛩,flight arrival,🛬,passenger ship,🛳,roller coaster,🎢,carousel horse,🎠,beach umbrella,🏖,derelict house,🏚,computer mouse,🖱,film projector,📽,pound banknote,💷,crossed swords,⚔️,framed picture,🖼,japanese dolls,🎎,mailbox closed,📪,spiral notepad,🗒,newspaper roll,🗞,straight ruler,📏,orthodox cross,☦️,vibration mode,📳,hundred points,💯,no pedestrians,🚷,low brightness,🔅,trident emblem,🔱,reverse button,◀️,arrow backward,◀️,up-right arrow,↗️,speech balloon,💬,eleven o’clock,🕚,twelve o’clock,🕛,chequered flag,🏁,checkered flag,🏁,american samoa,🇦🇸,canary islands,🇮🇨,cayman islands,🇰🇾,congo kinshasa,🇨🇩,czech republic,🇨🇿,european union,🇪🇺,norfolk island,🇳🇫,st. barthélemy,🇧🇱,united kingdom,🇬🇧,western sahara,🇪🇭,expressionless,😑,jack-o-lantern,🎃,raised eyebrow,🤨,exploding head,🤯,gender-neutral,🧒,bearded person,🧔,lightning bolt,⚡,fortune cookie,🥠,climbing woman,🧗‍♀️,transportation,🚵‍♀️,fortune_teller,🔮,yellow-diamond,🚸,united nations,🇺🇳,grinning face,😀,relieved face,😌,kissing heart,😘,smirking face,😏,unamused face,😒,confused face,😕,frowning face,☹️,drooling face,🤤,sleeping face,😴,thinking face,🤔,sneezing face,🤧,japanese ogre,👹,alien monster,👾,space invader,👾,raising hands,🙌,oncoming fist,👊,fist oncoming,👊,vulcan salute,🖖,flexed biceps,💪,middle finger,🖕,speaking head,🗣,woman student,👩‍🎓,woman teacher,👩‍🏫,man scientist,👨‍🔬,man astronaut,👨‍🚀,person bowing,🙇,man shrugging,🤷‍♂,pouting woman,🙎,haircut woman,💇,massage woman,💆,woman dancing,💃,dancing women,👯,woman walking,🚶‍♀,walking woman,🚶‍♀,woman running,🏃‍♀,running woman,🏃‍♀,athletic shoe,👟,open umbrella,☂️,hatched chick,🐥,tropical fish,🐠,water buffalo,🐃,tanabata tree,🎋,wilted flower,🥀,crescent moon,🌙,steaming bowl,🍜,birthday cake,🎂,chocolate bar,🍫,tumbler glass,🥃,men wrestling,🤼‍♂,woman golfing,🏌️‍♀️,golfing woman,🏌️‍♀️,woman surfing,🏄‍♀,surfing woman,🏄‍♀,person biking,🚴,running shirt,🎽,clapper board,🎬,musical score,🎼,motor scooter,🛵,oncoming taxi,🚖,traffic light,🚥,desert island,🏝,mountain snow,🏔,railway track,🛤,shinto shrine,⛩,national park,🏞,shooting star,🌠,computer disk,💽,control knobs,🎛,electric plug,🔌,euro banknote,💶,balance scale,⚖️,kitchen knife,🔪,potable water,🚰,shopping bags,🛍,shopping cart,🛒,carp streamer,🎏,confetti ball,🎊,bookmark tabs,📑,round pushpin,📍,beating heart,💓,growing heart,💗,question mark,❓,grey question,❔,bright button,🔆,baggage claim,🛄,input symbols,🔣,input numbers,🔢,arrow forward,▶️,record button,⏺,up-left arrow,↖️,up-down arrow,↕️,repeat button,🔁,musical notes,🎶,three o’clock,🕒,seven o’clock,🕖,eight o’clock,🕗,åland islands,🇦🇽,aland islands,🇦🇽,cocos islands,🇨🇨,côte d’ivoire,🇨🇮,faroe islands,🇫🇴,french guiana,🇬🇫,guinea bissau,🇬🇼,crossed flags,🎌,new caledonia,🇳🇨,st barthelemy,🇧🇱,united states,🇺🇸,wallis futuna,🇼🇫,videocassette,📼,eleven-thirty,🕦,twelve-thirty,🕧,guinea-bissau,🇬🇼,liechtenstein,🇱🇮,straight face,😒,sign_of_horns,🤘,man superhero,🦸‍♂️,woman vampire,🧛‍♀️,breastfeeding,🤱,shopping_bags,👚,tyrannosaurus,🦖,brachiosaurus,🦕,international,🌎,movie theater,🍿,curling stone,🥌,fruit machine,🎰,flying saucer,🛸,communication,🛰,lotion bottle,🧴,easter island,🗿,purple-square,💟,constellation,⛎,orange-square,📴,opening hours,🈺,orange-circle,🉑,accessibility,♿,administrator,🛡️,smiling face,☺️,winking face,😉,kissing face,😗,hugging face,🤗,pensive face,😔,worried face,😟,pouting face,😡,neutral face,😐,flushed face,😳,fearful face,😨,raised hands,🙌,folded hands,🙏,victory hand,✌️,writing hand,✍️,blonde woman,👱‍♀,woman farmer,👩‍🌾,woman singer,👩‍🎤,man mechanic,👨‍🔧,woman artist,👩‍🎨,woman bowing,🙇‍♀,bowing woman,🙇‍♀,raising hand,🙋,man frowning,🙍‍♂,frowning man,🙍‍♂,woman’s boot,👢,running shoe,👟,mortar board,🎓,hamster face,🐹,unicorn face,🦄,spiral shell,🐚,earth africa,🌍,glowing star,🌟,high voltage,⚡️,partly sunny,⛅️,dashing away,💨,sweet potato,🍠,cheese wedge,🧀,fried shrimp,🍤,french fries,🍟,rice cracker,🍘,hot beverage,☕️,field hockey,🏑,fishing pole,🎣,boxing glove,🥊,swimming man,🏊,rowing woman,🚣‍♀,horse racing,🏇,woman biking,🚴‍♀,biking woman,🚴‍♀,sports medal,🏅,medal sports,🏅,man juggling,🤹‍♂,slot machine,🎰,kick scooter,🛴,oncoming bus,🚍,ferris wheel,🎡,city sunrise,🌇,mobile phone,📱,optical disk,💿,camera flash,📸,video camera,📹,movie camera,🎥,level slider,🎚,yen banknote,💴,crystal ball,🔮,prayer beads,📿,bellhop bell,🛎,sleeping bed,🛌,wrapped gift,🎁,party popper,🎉,file cabinet,🗄,fountain pen,🖋,yellow heart,💛,purple heart,💜,broken heart,💔,peace symbol,☮️,white flower,💮,anger symbol,💢,no littering,🚯,water closet,🚾,left luggage,🛅,women’s room,🚺,antenna bars,📶,capital abcd,🔠,pause button,⏸,fast forward,⏩,musical note,🎵,radio button,🔘,white circle,⚪️,black circle,⚫️,diamond suit,♦️,four o’clock,🕓,five o’clock,🕔,nine o’clock,🕘,rainbow flag,🏳️‍🌈,burkina faso,🇧🇫,cook islands,🇨🇰,cote divoire,🇨🇮,saudi arabia,🇸🇦,sierra leone,🇸🇱,sint maarten,🇸🇽,south africa,🇿🇦,vatican city,🇻🇦,disappointed,😞,construction,🚧,fleur-de-lis,⚜️,three-thirty,🕞,seven-thirty,🕢,eight-thirty,🕣,turkmenistan,🇹🇲,indifference,😐,woman zombie,🧟‍♀️,walking dead,🧟‍♀️,cheese_wedge,🐭,brontosaurus,🦕,hippopotamus,🦛,without_snow,⛄,leafy greens,🥬,cheeseburger,🍔,climbing man,🧗‍♂️,interlocking,🧩,good morning,🌇,sanfrancisco,🌉,unicorn_face,🌈,accomodation,🏨,orienteering,🧭,nazar amulet,🧿,embarrassing,🕳,toilet paper,🧻,red envelope,🧧,presentation,📊,orange heart,🧡,christianity,✝,green-square,🈯,eject button,⏏️,black-square,☑️,notification,🔔,announcement,🎟,sweat smile,😅,hushed face,😯,crying face,😢,sleepy face,😪,smiling imp,😈,kissing cat,😽,pouting cat,😾,thumbs down,👎,raised fist,✊,fist raised,✊,point right,👉,raised hand,✋,waving hand,👋,nail polish,💅,older woman,👵,woman guard,💂‍♀,man student,👨‍🎓,man teacher,👨‍🏫,woman pilot,👩‍✈,woman judge,👩‍⚖,santa claus,🎅,sassy woman,💁,man pouting,🙎‍♂,pouting man,🙎‍♂,haircut man,💇‍♂,massage man,💆‍♂,man dancing,🕺,dancing men,👯‍♂,walking man,🚶,running man,🏃,woman’s hat,👒,rabbit face,🐰,monkey face,🐵,lady beetle,🐞,dragon face,🐲,fallen leaf,🍂,sweat drops,💦,green apple,🍏,poultry leg,🍗,green salad,🥗,cooked rice,🍚,baby bottle,🍼,soccer ball,⚽️,golfing man,🏌,surfing man,🏄,circus tent,🎪,fire engine,🚒,railway car,🚃,tokyo tower,🗼,post office,🏣,city sunset,🌆,floppy disk,💾,film frames,🎞,fax machine,📠,timer clock,⏲,alarm clock,⏰,credit card,💳,funeral urn,⚱️,barber pole,💈,love letter,💌,outbox tray,📤,postal horn,📯,file folder,📁,closed book,📕,orange book,📙,green heart,💚,black heart,🖤,latin cross,✝️,atom symbol,⚛️,hot springs,♨️,no bicycles,🚳,baby symbol,🚼,cool button,🆒,free button,🆓,play button,▶️,stop button,⏹,down button,🔽,right arrow,➡️,arrow right,➡️,blue circle,🔵,black joker,🃏,one o’clock,🕐,two o’clock,🕑,six o’clock,🕕,ten o’clock,🕙,el salvador,🇸🇻,new zealand,🇳🇿,north korea,🇰🇵,puerto rico,🇵🇷,south korea,🇰🇷,south sudan,🇸🇸,timor leste,🇹🇱,policewoman,👮‍♀,guardswoman,💂‍♀,snowboarder,🏂,wastebasket,🗑,thermometer,🌡,sagittarius,♐️,radioactive,☢️,exclamation,❗️,interrobang,⁉️,information,ℹ️,four-thirty,🕟,five-thirty,🕠,nine-thirty,🕤,afghanistan,🇦🇫,netherlands,🇳🇱,philippines,🇵🇭,switzerland,🇨🇭,timor-leste,🇹🇱,blue-square,🔢,celebration,🥳,mischievous,😉,embarrassed,😊,infatuation,😍,disapproval,🤨,star struck,🤩,indifferent,😑,unimpressed,😒,unconscious,😵,temperature,🤒,intoxicated,🥴,outer_space,👽,intelligent,🧠,bewhiskered,🧔,older adult,🧓,enforcement,👮‍♀️,entertainer,👩‍🎤,superpowers,🦸‍♀️,man vampire,🧛‍♂️,woman genie,🧞‍♀️,woman fairy,🧚‍♀️,discouraged,🙍,hiking boot,🥾,backpacking,🥾,accessories,👒,caterpillar,🦋,grasshopper,🦗,burger king,🍔,frankfurter,🌭,canned food,🥫,takeout box,🥡,flying disc,🥏,mindfulness,🧘‍♀️,competition,🏇,agriculture,🚜,underground,🚇,outer space,🚀,spaceflight,🛰,gas station,⛽,environment,⛰,photography,📷,electricity,💡,firecracker,🧨,moisturizer,🧴,calculation,🧮,transgender,🏳️‍🌈,suppedaneum,☦,pink-square,🈹,punctuation,❗,blue-circle,Ⓜ️,destination,🈁,loudspeaker,📢,herzegovina,🇧🇦,territories,🇹🇫,palestinian,🇵🇸,pirate flag,🏴‍☠️,heart eyes,😍,clown face,🤡,tired face,😫,weary face,😩,angry face,😠,open mouth,😮,dizzy face,😵,cold sweat,😰,lying face,🤥,robot face,🤖,smiley cat,😺,scream cat,🙀,open hands,👐,fist right,🤜,point left,👈,point down,👇,blonde man,👱,man farmer,👨‍🌾,woman cook,👩‍🍳,man singer,👨‍🎤,man artist,👨‍🎨,mrs. claus,🤶,baby angel,👼,bowing man,🙇,man’s shoe,👞,womans hat,👒,clutch bag,👝,mouse face,🐭,panda face,🐼,tiger face,🐯,baby chick,🐤,horse face,🐴,spider web,🕸,paw prints,🐾,maple leaf,🍁,earth asia,🌏,water wave,🌊,kiwi fruit,🥝,hot pepper,🌶,curry rice,🍛,shaved ice,🍧,milk glass,🥛,wine glass,🍷,ice hockey,🏒,rowing man,🚣,biking man,🚴,direct hit,🎯,video game,🎮,racing car,🏎,police car,🚓,light rail,🚈,motor boat,🛥,mount fuji,🗻,love hotel,🏩,rice scene,🎑,film strip,🎞,light bulb,💡,wind chime,🎐,inbox tray,📥,card index,📇,ballot box,🗳,green book,📗,blue heart,💙,two hearts,💕,gift heart,💝,sos button,🆘,cross mark,❌,name badge,📛,no smoking,🚭,dim button,🔅,men’s room,🚹,up! button,🆙,new button,🆕,keycap ten,🔟,left arrow,⬅️,arrow left,⬅️,down arrow,⬇️,arrow down,⬇️,repeat one,🔂,trade mark,™️,curly loop,➰,back arrow,🔙,soon arrow,🔜,red circle,🔴,loud sound,🔊,spade suit,♠️,heart suit,♥️,white flag,🏳️,black flag,🏴,cape verde,🇨🇻,costa rica,🇨🇷,st. helena,🇸🇭,san marino,🇸🇲,sunglasses,😎,confounded,😖,astonished,😲,thumbsdown,👎,footprints,👣,eyeglasses,👓,rhinoceros,🦏,watermelon,🍉,strawberry,🍓,basketball,🏀,volleyball,🏐,microphone,🎤,headphones,🎧,automobile,🚗,trolleybus,🚎,motorcycle,🏍,locomotive,🚂,helicopter,🚁,television,📺,flashlight,🔦,microscope,🔬,paperclips,🖇,paintbrush,🖌,heartpulse,💗,prohibited,🚫,hotsprings,♨️,wheelchair,♿️,registered,®️,one-thirty,🕜,two-thirty,🕝,six-thirty,🕡,ten-thirty,🕥,antarctica,🇦🇶,azerbaijan,🇦🇿,bangladesh,🇧🇩,guadeloupe,🇬🇵,kazakhstan,🇰🇿,kyrgyzstan,🇰🇬,luxembourg,🇱🇺,madagascar,🇲🇬,martinique,🇲🇶,mauritania,🇲🇷,micronesia,🇫🇲,montenegro,🇲🇪,montserrat,🇲🇸,mozambique,🇲🇿,seychelles,🇸🇨,tajikistan,🇹🇯,uzbekistan,🇺🇿,happytears,😂,valentines,😍,scepticism,🤨,hellokitty,😶,frustrated,🙄,gesundheit,🤧,stationery,✍,healthcare,👩‍⚕️,instructor,👩‍🏫,industrial,👩‍🏭,programmer,👩‍💻,man zombie,🧟‍♂️,friendship,👬,experiment,🥼,flip flops,👡,billed hat,🧢,university,🎓,graduation,🎓,protection,🥽,engagement,💍,crustacean,🦀,diplodocus,🦕,brightness,☀️,chopsticks,🍜,narutomaki,🍥,potsticker,🥟,restaurant,🍽,gymnastics,🤸‍♀️,skateboard,🛹,meditation,🧘‍♀️,decoration,🏵,instrument,🎹,drumsticks,🥁,controller,🎮,chess pawn,♟,expendable,♟,finishline,🏁,playground,🎢,interstate,🛣,night life,🏙,enterprise,🏦,technology,📱,navigation,🧭,maintainer,🧰,attraction,🧲,distilling,⚗,laboratory,🔬,petri dish,🧫,teddy bear,🧸,accounting,🧾,organizing,🗄,literature,📚,safety pin,🧷,homosexual,🏳️‍🌈,creativity,🖍,heartbreak,💔,red-circle,㊙️,red-square,🈴,restricted,🈲,decorative,⚜,connection,📶,horizontal,↔️,characters,🔣,darussalam,🇧🇳,democratic,🇨🇩,equatorial,🇬🇶,federation,🇷🇺,barthélemy,🇧🇱,grenadines,🇻🇨,union jack,🇬🇧,bolivarian,🇻🇪,crossbones,🏴‍☠️,themehouse,Theme🏠,nerd face,🤓,roll eyes,🙄,smile cat,😸,smirk cat,😼,thumbs up,👍,fist left,🤛,nail care,💅,kiss mark,💋,older man,👴,old woman,👵,man pilot,👨‍✈,man judge,👨‍⚖,mrs claus,🤶,sassy man,💁‍♂,high heel,👠,mans shoe,👞,bear face,🐻,lion face,🦁,frog face,🐸,wolf face,🐺,palm tree,🌴,full moon,🌕,wind face,🌬,red apple,🍎,honey pot,🍯,fried egg,🍳,fish cake,🍥,bento box,🍱,rice ball,🍙,ice cream,🍨,ping pong,🏓,ice skate,⛸,fuel pump,⛽️,world map,🗺,milky way,🌌,money bag,💰,gem stone,💎,bar chart,📊,blue book,📘,open book,📖,black nib,✒️,mag right,🔎,red heart,❤️,id button,🆔,vs button,🆚,cl button,🆑,stop sign,🛑,circled m,Ⓜ️,ng button,🆖,ok button,🆗,keycap: 0,0️⃣,keycap: 1,1️⃣,keycap: 2,2️⃣,keycap: 3,3️⃣,keycap: 4,4️⃣,keycap: 5,5️⃣,keycap: 6,6️⃣,keycap: 7,7️⃣,keycap: 8,8️⃣,keycap: 9,9️⃣,keycap 10,🔟,keycap: #,#️⃣,keycap: *,*️⃣,up button,🔼,wavy dash,〰️,end arrow,🔚,on! arrow,🔛,top arrow,🔝,club suit,♣️,hong kong,🇭🇰,st helena,🇸🇭,st. lucia,🇱🇨,sri lanka,🇱🇰,satisfied,😆,persevere,😣,anguished,😧,grimacing,😬,handshake,🤝,facepunch,👊,policeman,👮,guardsman,💂,detective,🕵,briefcase,💼,butterfly,🦋,crocodile,🐊,racehorse,🐎,sunflower,🌻,collision,💥,snowflake,❄️,tangerine,🍊,pineapple,🍍,croissant,🥐,hamburger,🍔,spaghetti,🍝,shortcake,🍰,champagne,🍾,badminton,🏸,bicyclist,🚴,headphone,🎧,saxophone,🎷,ambulance,🚑,satellite,🛰,speedboat,🚤,synagogue,🕍,fireworks,🎆,cityscape,🏙,trackball,🖲,telephone,☎️,stopwatch,⏱,hourglass,⌛️,cigarette,🚬,telescope,🔭,clipboard,📋,newspaper,📰,paperclip,📎,heartbeat,💓,ophiuchus,⛎,capricorn,♑️,biohazard,☣️,copyright,©️,megaphone,📣,clock1030,🕥,clock1130,🕦,clock1230,🕧,argentina,🇦🇷,australia,🇦🇺,gibraltar,🇬🇮,greenland,🇬🇱,guatemala,🇬🇹,indonesia,🇮🇩,lithuania,🇱🇹,macedonia,🇲🇰,mauritius,🇲🇺,nicaragua,🇳🇮,singapore,🇸🇬,swaziland,🇸🇿,venezuela,🇻🇪,happiness,☺️,delicious,😋,savouring,😋,affection,😍,disbelief,🤨,skeptical,😒,pinocchio,🤥,profanity,🤬,expletive,🤬,flattered,😳,depressed,😞,impressed,😮,terrified,😨,frostbite,🥶,surprised,😲,halloween,👹,agreement,🤝,direction,☝,star trek,🖖,moustache,👨,therapist,👩‍⚕️,professor,👩‍🏫,developer,👩‍💻,biologist,👩‍🔬,physicist,👩‍🔬,sorceress,🧙‍♀️,woman elf,🧝‍♀️,man genie,🧞‍♂️,man fairy,🧚‍♂️,steamroom,🧖‍♀️,scientist,🥼,flat shoe,🥿,stockings,🧦,gentleman,🎩,education,🎓,accessory,👜,documents,💼,alligator,🐊,marsupial,🦘,vegetable,🌵,lightning,⛈,explosion,💥,christmas,❄️,aubergine,🍆,vegatable,🥔,breakfast,🍞,flapjacks,🥞,drumstick,🍗,appetizer,🍤,fast food,🍔,mcdonalds,🍔,flatbread,🥙,casserole,🥘,moon cake,🥮,chocolate,🍪,celebrate,🥂,container,🍼,condiment,🧂,tableware,🥄,leftovers,🥡,wrestlers,🤼‍♀️,taekwondo,🥋,awareness,🎗,multitask,🤹‍♀️,orchestra,🎻,emergency,🚨,staffmode,🚀,transport,💺,petroleum,⛽,londoneye,🎡,pollution,🏭,cupertino,🛣,buildings,🌆,groceries,🏪,computing,🖥,oldschool,💾,recording,🎙,countdown,⏳,terrorism,💣,explosive,🧨,graveyard,⚰,religious,📿,chemistry,⚗,astronomy,🔭,test tube,🧪,absorbing,🧽,sunscreen,🧴,koinobori,🎏,cardboard,📦,economics,📈,recession,📉,knowledge,📕,classroom,📔,architect,📐,calculate,📏,milestone,🚩,surrender,🏳,astrology,⛎,forbidden,🈲,afternoon,🔅,whirlpool,🌀,hurricane,🌀,reception,📶,bluetooth,📶,northeast,↗️,southeast,↘️,southwest,↙️,northwest,↖️,ampersand,🔣,trademark,™️,broadcast,🔈,territory,🇮🇴,dominican,🇩🇴,polynesia,🇵🇫,federated,🇫🇲,caledonia,🇳🇨,om_symbol,🇴🇲,palestine,🇵🇸,ascension,🇸🇭,resources,💼,no mouth,😶,point up,☝️,man cook,👨‍🍳,ng woman,🙅,ok woman,🙆,dog face,🐶,cat face,🐱,fox face,🦊,cow face,🐮,pig face,🐷,pig nose,🐽,new moon,🌑,beer mug,🍺,goal net,🥅,game die,🎲,blue car,🚙,tram car,🚋,bus stop,🚏,oil drum,🛢,yin yang,☯️,no entry,⛔️,atm sign,🏧,p button,🅿️,up arrow,⬆️,arrow up,⬆️,st lucia,🇱🇨,grinning,😀,laughing,😆,innocent,😇,relieved,😌,unamused,😒,confused,😕,frowning,😦,sleeping,😴,thinking,🤔,thumbsup,👍,lipstick,💄,princess,👸,umbrella,☂️,honeybee,🐝,scorpion,🦂,blowfish,🐡,elephant,🐘,chipmunk,🐿,seedling,🌱,shamrock,☘️,mushroom,🍄,hibiscus,🌺,sparkles,✨,mandarin,🍊,cherries,🍒,eggplant,🍆,cucumber,🥒,chestnut,🌰,pancakes,🥞,icecream,🍦,birthday,🎂,lollipop,🍭,doughnut,🍩,cocktail,🍸,football,🏈,baseball,⚾️,monorail,🚝,airplane,✈️,sailboat,⛵️,fuelpump,⛽️,fountain,⛲️,mountain,⛰,motorway,🛣,hospital,🏥,sparkler,🎇,computer,💻,keyboard,⌨️,joystick,🕹,minidisc,💽,moneybag,💰,shopping,🛍,envelope,✉️,calendar,📆,notebook,📓,bookmark,🔖,scissors,✂️,unlocked,🔓,scorpius,♏️,aquarius,♒️,underage,🔞,question,❓,bangbang,‼️,beginner,🔰,restroom,🚻,asterisk,*️⃣,diamonds,♦️,clock130,🕜,clock230,🕝,clock330,🕞,clock430,🕟,clock530,🕠,clock630,🕡,clock730,🕢,clock830,🕣,clock930,🕤,anguilla,🇦🇮,barbados,🇧🇧,botswana,🇧🇼,bulgaria,🇧🇬,cambodia,🇰🇭,cameroon,🇨🇲,colombia,🇨🇴,djibouti,🇩🇯,dominica,🇩🇲,ethiopia,🇪🇹,guernsey,🇬🇬,honduras,🇭🇳,kiribati,🇰🇮,malaysia,🇲🇾,maldives,🇲🇻,mongolia,🇲🇳,pakistan,🇵🇰,paraguay,🇵🇾,portugal,🇵🇹,slovakia,🇸🇰,slovenia,🇸🇮,suriname,🇸🇷,tanzania,🇹🇿,thailand,🇹🇭,zimbabwe,🇿🇼,partying,🥳,childish,😜,distrust,🤨,surprise,🤨,sunglass,😎,side_eye,😒,consider,🤔,shushing,🤫,swearing,🤬,pleading,🥺,exercise,😓,feverish,🥵,sweating,🥵,freezing,🥶,poisoned,😲,throw up,🤢,vomiting,🤮,shitface,💩,japanese,👹,skeleton,💀,palms up,🤲,applause,👏,congrats,👏,farewell,👋,violence,👊,fistbump,🤛,highfive,✋,backhand,🤚,flipping,🖕,love you,🤟,evil_eye,🤘,manicure,💅,teenager,👦,mustache,👨,mantilla,🧕,hinduism,👳‍♀️,gardener,👩‍🌾,graduate,👩‍🎓,rockstar,👩‍🎤,assembly,👩‍🏭,engineer,👩‍💻,software,👩‍💻,business,👩‍💼,criminal,🦹‍♀️,festival,🎅,sorcerer,🧙‍♂️,merwoman,🧜‍♀️,marriage,👰,bromance,👬,children,👨‍👩‍👧‍👦,swimming,👙,tracking,👣,stiletto,👠,sneakers,👟,backpack,🎒,eyesight,👓,faithful,🐶,creature,🐙,mystical,🦄,arachnid,🕷,dinosaur,🦖,sauropod,🦕,tortoise,🐢,squirrel,🐿,hedgehog,🦔,kangaroo,🦘,mosquito,🦟,vacation,🎄,december,🎄,tropical,🌴,medicine,🌿,twilight,🌕,disaster,🌊,broccoli,🥦,bok choy,🥬,lambchop,🥩,porkchop,🥩,hotcakes,🥞,sandwich,🥪,kamaboko,🍥,prophecy,🥠,barbecue,🍡,dumpling,🥟,empanada,🥟,beverage,🥛,caffeine,☕,espresso,☕,porridge,🥣,softball,🥎,ultimate,🥏,pingpong,🏓,lacrosse,🥍,toboggan,🛷,fighting,🥊,serenity,🧘‍♀️,bathroom,🛀,training,🏋️‍♀️,gambling,🏇,levitate,🕴,ceremony,🏆,military,🏵,entrance,🎟,carnival,🎪,talkshow,🎤,symphony,🎻,bullseye,🎯,tabletop,🎲,carriage,🚋,boarding,🛬,progress,🚧,building,🏭,industry,🏭,outdoors,🏕,downtown,🌃,american,🗽,religion,⛪,incoming,📲,trackpad,🖲,magnetic,🧭,deadline,⏱,currency,💵,sterling,💷,fairness,⚖,mechanic,🧰,revolver,🔫,dynamite,🧨,security,🛡,cemetery,⚰,pharmacy,💊,genetics,🧬,bacteria,🦠,cleaning,🧹,sweeping,🧹,favorite,🔖,washroom,🚽,password,🔑,location,🗺,purchase,🛍,expenses,🧾,recovery,📈,schedule,📅,planning,📆,election,🗳,headline,🗞,textbook,📕,bisexual,🏳️‍🌈,buddhism,🕉,hexagram,🔯,hanukkah,🕎,alphabet,🅰️,disallow,🚫,crossing,🚷,cassette,➿,internet,🌐,interweb,🌐,katakana,🈂️,passport,🛃,disabled,♿,backward,⏮,continue,⏩,triangle,🔼,previous,⬅️,diagonal,↗️,vertical,↕️,sideways,↔️,squiggle,〰️,scribble,〰️,addition,➕,increase,➕,subtract,➖,infinity,♾,chatting,💬,midnight,🕛,republic,🇨🇫,salvador,🇸🇻,european,🇪🇺,falkland,🇫🇰,malvinas,🇫🇰,southern,🇹🇫,marshall,🇲🇭,northern,🇲🇵,pitcairn,🇵🇳,miquelon,🇵🇲,principe,🇸🇹,trinidad,🇹🇹,emirates,🇦🇪,scotland,🏴󠁧󠁢󠁳󠁣󠁴󠁿,scottish,🏴󠁧󠁢󠁳󠁣󠁴󠁿,resource,💼,register,®️,username,🆔,comments,💬,facebook,🙂📖,joy cat,😹,ok hand,👌,old man,👴,no good,🙅,top hat,🎩,hot dog,🌭,red car,🚗,old key,🗝,no bell,🔕,relaxed,☺️,kissing,😗,pensive,😔,worried,😟,triumph,😤,flushed,😳,fearful,😨,haircut,💇,massage,💆,dancers,👯,walking,🚶,running,🏃,t-shirt,👕,necktie,👔,handbag,👜,glasses,👓,hamster,🐹,chicken,🐔,penguin,🐧,unicorn,🦄,octopus,🐙,dolphin,🐬,flipper,🐬,leopard,🐆,gorilla,🦍,rooster,🐓,rabbit2,🐇,bouquet,💐,blossom,🌼,rainbow,🌈,snowman,☃️,tornado,🌪,droplet,💧,avocado,🥑,peanuts,🥜,cooking,🍳,burrito,🌯,custard,🍮,popcorn,🍿,cricket,🏏,swimmer,🏊,rowboat,🚣,rosette,🏵,tickets,🎟,clapper,🎬,trumpet,🎺,bowling,🎳,minibus,🚐,tractor,🚜,bicycle,🚲,station,🚉,busstop,🚏,stadium,🏟,volcano,🌋,camping,🏕,factory,🏭,wedding,💒,sunrise,🌅,calling,📲,printer,🖨,battery,🔋,smoking,🚬,amphora,🏺,alembic,⚗️,syringe,💉,bathtub,🛁,balloon,🎈,lantern,🏮,package,📦,mailbox,📫,postbox,📮,pushpin,📌,pencil2,✏️,menorah,🕎,warning,⚠️,trident,🔱,recycle,♻️,sparkle,❇️,cyclone,🌀,parking,🅿️,customs,🛃,symbols,🔣,speaker,🔈,mahjong,🀄️,clock10,🕙,clock11,🕚,clock12,🕛,albania,🇦🇱,algeria,🇩🇿,andorra,🇦🇩,armenia,🇦🇲,austria,🇦🇹,bahamas,🇧🇸,bahrain,🇧🇭,belarus,🇧🇾,belgium,🇧🇪,bermuda,🇧🇲,bolivia,🇧🇴,burundi,🇧🇮,comoros,🇰🇲,croatia,🇭🇷,curaçao,🇨🇼,curacao,🇨🇼,denmark,🇩🇰,ecuador,🇪🇨,eritrea,🇪🇷,estonia,🇪🇪,finland,🇫🇮,georgia,🇬🇪,germany,🇩🇪,grenada,🇬🇩,hungary,🇭🇺,iceland,🇮🇸,ireland,🇮🇪,jamaica,🇯🇲,lebanon,🇱🇧,lesotho,🇱🇸,liberia,🇱🇷,mayotte,🇾🇹,moldova,🇲🇩,morocco,🇲🇦,myanmar,🇲🇲,namibia,🇳🇦,nigeria,🇳🇬,réunion,🇷🇪,reunion,🇷🇪,romania,🇷🇴,senegal,🇸🇳,somalia,🇸🇴,tokelau,🇹🇰,tunisia,🇹🇳,ukraine,🇺🇦,uruguay,🇺🇾,vanuatu,🇻🇺,vietnam,🇻🇳,perfect,💯,numbers,💯,century,💯,hundred,💯,grimace,😬,rolling,🤣,flipped,🙃,playful,😜,monocle,🧐,wealthy,🧐,cowgirl,🤠,sarcasm,😏,neutral,😐,deadpan,😑,serious,😒,dubious,😒,eyeroll,🙄,cursing,🤬,cussing,🤬,shocked,🤯,concern,😟,nervous,😟,annoyed,😠,despise,😡,begging,🥺,stunned,😧,icicles,🥶,allergy,🤧,disease,😷,injured,🤕,bandage,🤕,monster,👹,machine,🤖,gesture,🤲,goodbye,👋,awesome,👍,dislike,👎,fingers,✊,victory,✌,namaste,🙏,rock_on,🤘,compose,✍,fashion,💅,dentist,🦷,toddler,👶,chinese,👲,british,💂‍♀️,rancher,👩‍🌾,manager,👩‍💼,plumber,👩‍🔧,chemist,👩‍🔬,painter,👩‍🎨,fireman,👩‍🚒,aviator,👩‍✈️,justice,👩‍⚖️,heroine,🦸‍♀️,man elf,🧝‍♂️,dracula,🧛‍♂️,mermaid,🧜‍♀️,nursing,🤱,unhappy,🙍,parents,👪,crochet,🧶,labcoat,🥼,clothes,👗,slip-on,🥿,slipper,🥿,college,🎓,royalty,👑,student,🎒,luggage,🧳,packing,🧳,goggles,🥽,propose,💍,diamond,💍,jewelry,💍,weather,🌂,drizzle,🌂,seafood,🦐,mallard,🦆,vampire,🦇,ladybug,🐞,reptile,🦎,extinct,🦖,stripes,🦓,venison,🦌,giraffe,🦒,raccoon,🦝,peacock,🦚,lobster,🦞,malaria,🦟,flowers,🌺,pumpkin,🎃,evening,🌕,morning,🌞,thunder,🌩,explode,💥,twister,🌪,tsunami,🌊,coconut,🥥,cabbage,🥬,lettuce,🥬,kitchen,🍯,schmear,🥯,pretzel,🥨,twisted,🥨,chadder,🧀,stuffed,🥙,italian,🍝,mexican,🌮,healthy,🥗,dessert,🍡,cupcake,🧁,pierogi,🥟,alcohol,🍺,bourbon,🥃,cutlery,🥄,oatmeal,🥣,frisbee,🥏,fencing,🤺,athlete,🏊‍♀️,hipster,🚴‍♀️,betting,🏇,contest,🏆,pageant,🎽,winning,🏅,support,🎗,concert,🎫,theater,🎭,balance,🤹‍♀️,gadgets,🎧,console,🎮,vehicle,🚗,formula,🏎,express,🚛,farming,🚜,airport,🛫,landing,🛫,sailing,⛵,caution,🚧,driving,🚦,titanic,🚢,working,🏗,tsukimi,🎑,country,🗾,highway,🛣,saharah,🏜,history,🏰,newyork,🗽,abandon,🏚,surgery,🏥,checkin,🏨,culture,🏛,worship,🕌,minaret,🕌,judaism,🕍,display,💻,monitor,💻,program,📺,podcast,📻,compass,🧭,sustain,🔋,charger,🔌,rubbish,🗑,garbage,🗑,barrell,🛢,payment,💸,england,💷,toolbox,🧰,tobacco,🚬,funeral,⚰,science,⚗,microbe,🦠,biology,🧫,laundry,🧺,bathing,🧼,service,🛎,trolley,🛒,present,🎁,ancient,📜,receipt,🧾,success,📈,failure,📉,library,📕,drawing,📏,give up,🏳,lesbian,🏳️‍🌈,privacy,🔐,padlock,🔒,writing,🖊,sikhism,🕉,jainism,🕉,candles,🕎,scorpio,♏,physics,⚛,nuclear,☢,silence,📴,nothing,🈚,polygon,✴️,cyclist,🚳,problem,⚠️,crystal,💠,typhoon,🌀,refresh,🚻,curtain,🎦,forward,⏭,shuffle,🔀,twitter,#️⃣,percent,🔣,forever,♾,license,©️,confirm,☑️,caption,🗯,message,💬,islands,🇦🇽,antigua,🇦🇬,barbuda,🇦🇬,bonaire,🇧🇶,burkina,🇧🇫,central,🇨🇫,african,🇨🇫,keeling,🇨🇨,islamic,🇮🇷,zealand,🇳🇿,norfolk,🇳🇫,mariana,🇲🇵,russian,🇷🇺,tristan,🇸🇭,vincent,🇻🇨,maarten,🇸🇽,solomon,🇸🇧,kingdom,🇬🇧,britain,🇬🇧,english,🇬🇧,america,🇺🇸,vatican,🇻🇦,western,🇪🇭,members,👪,replies,↩️,threads,✨,xenforo,🦄,comment,💬,general,⭐,contact,✉️,muted ,🔇,ng man,🙅‍♂,ok man,🙆‍♂,smiley,😃,hushed,😯,scream,😱,sleepy,😪,goblin,👺,hankey,💩,muscle,💪,selfie,🤳,tongue,👅,prince,🤴,dancer,💃,runner,🏃,couple,👫,family,👪,tshirt,👕,bikini,👙,kimono,👘,sandal,👡,tophat,🎩,rabbit,🐰,monkey,🐒,beetle,🐞,spider,🕷,turtle,🐢,lizard,🦎,shrimp,🦐,whale2,🐋,tiger2,🐅,poodle,🐩,turkey,🦃,mouse2,🐁,dragon,🐉,cactus,🌵,bamboo,🎍,leaves,🍃,orange,🍊,banana,🍌,grapes,🍇,tomato,🍅,carrot,🥕,potato,🥔,cheese,🧀,hotdog,🌭,cookie,🍪,coffee,☕️,soccer,⚽️,tennis,🎾,surfer,🏄,trophy,🏆,ticket,🎫,guitar,🎸,violin,🎻,train2,🚆,rocket,🚀,anchor,⚓️,castle,🏰,desert,🏜,houses,🏘,office,🏢,school,🏫,church,⛪️,mosque,🕌,sunset,🌇,iphone,📱,camera,📷,candle,🕯,dollar,💵,wrench,🔧,hammer,🔨,chains,⛓,pistol,🔫,dagger,🗡,shield,🛡,coffin,⚰️,barber,💈,toilet,🚽,shower,🚿,ribbon,🎀,e-mail,📧,scroll,📜,ledger,📒,crayon,🖍,pencil,📝,locked,🔒,unlock,🔓,taurus,♉️,gemini,♊️,cancer,♋️,pisces,♓️,accept,🉑,secret,㊙️,womens,🚺,cinema,🎦,rewind,⏪,repeat,🔁,spades,♠️,hearts,♥️,clock1,🕐,clock2,🕑,clock3,🕒,clock4,🕓,clock5,🕔,clock6,🕕,clock7,🕖,clock8,🕗,clock9,🕘,angola,🇦🇴,belize,🇧🇿,bhutan,🇧🇹,brazil,🇧🇷,brunei,🇧🇳,canada,🇨🇦,cyprus,🇨🇾,france,🇫🇷,gambia,🇬🇲,greece,🇬🇷,guinea,🇬🇳,guyana,🇬🇾,israel,🇮🇱,jersey,🇯🇪,jordan,🇯🇴,kosovo,🇽🇰,kuwait,🇰🇼,latvia,🇱🇻,malawi,🇲🇼,mexico,🇲🇽,monaco,🇲🇨,norway,🇳🇴,panama,🇵🇦,poland,🇵🇱,russia,🇷🇺,rwanda,🇷🇼,serbia,🇷🇸,sweden,🇸🇪,taiwan,🇹🇼,tuvalu,🇹🇻,uganda,🇺🇬,zambia,🇿🇲,kawaii,😁,woohoo,🥳,relief,😅,heaven,😇,stuffy,🧐,summer,😎,starry,🤩,whoops,🤭,unwell,😖,scared,😱,frozen,🥶,sealed,🤐,zipper,🤐,sneeze,🤧,clumsy,🤕,creepy,👹,spooky,👻,animal,😺,cupped,🤲,prayer,🤲,hooray,🙌,praise,👏,solong,👋,attack,👊,ohyeah,✌,raised,🤚,strong,💪,biceps,💪,please,🙏,middle,🖕,beauty,💅,finger,💅,listen,👂,person,👤,female,👧,father,👨,classy,👨,blonde,👱‍♀️,senior,🧓,tichel,🧕,indian,👳‍♀️,police,👮‍♀️,arrest,👮‍♀️,worker,👷‍♀️,doctor,👩‍⚕️,laptop,👩‍💻,wizard,🧙‍♂️,undead,🧟‍♀️,merman,🧜‍♂️,triton,🧜‍♂️,people,👫,dating,👫,mother,👪,parent,👩‍👦,thread,🧵,needle,🧵,sewing,🧵,string,🧵,jacket,🧥,casual,👕,suitup,👔,formal,👔,ballet,🥿,sports,👟,hiking,🥾,gloves,🧤,winter,🧤,spring,👒,circus,🎩,degree,🎓,leader,👑,travel,🧳,career,💼,safety,🥽,friend,🐶,nature,🐶,kitten,🐱,rodent,🐭,danger,🐯,insect,🐝,python,🐍,safari,🦓,shipit,🐑,gamble,🐎,alpaca,🦙,badger,🦡,peahen,🦚,parrot,🦜,pirate,🦜,bisque,🦞,mojito,🌴,clover,☘,branch,🎋,flower,🥀,yellow,🌼,planet,🌕,cloudy,⛅,season,❄️,faucet,💧,picnic,🍉,pickle,🥒,chilli,🌶,starch,🥔,french,🥐,bakery,🥯,noodle,🍝,paella,🥘,surimi,🍥,pastry,🥧,autumn,🥮,cheers,🥂,liquor,🥃,scotch,🥃,whisky,🥃,bottle,🍾,shaker,🧂,dinner,🍽,cereal,🥣,sleigh,🛷,karate,🥋,second,🥈,acting,🎭,design,🎨,colors,🎨,juggle,🤹‍♀️,treble,🎼,record,🎬,arcade,👾,target,🎯,random,🎲,casino,🎰,jigsaw,🧩,puzzle,🧩,health,🚑,pinged,🚨,public,🚋,flight,🛩,cruise,🛳,launch,🚀,paddle,🛶,signal,🚥,gokart,🏁,deploy,🚢,nation,🗾,broken,🏚,bureau,🏢,christ,⛪,temple,🕍,jewish,🕍,screen,💻,bbcall,📟,artist,🎙,future,📡,energy,🔋,quench,🧯,weight,⚖,create,🔨,bricks,🧱,magnet,🧲,weapon,🔫,poison,☠,deadly,☠,casket,⚰,zoomin,🔬,amoeba,🦠,basket,🧺,lather,🧼,sponge,🧽,porous,🧽,banner,🎏,bowtie,🎀,border,🎌,letter,✉️,postal,✉️,moving,📦,filing,🗄,diaper,🧷,sketch,📐,length,📏,abacus,🧮,losing,🏳,search,🔍,hippie,☮,zodiac,♈,divide,🈹,obtain,🉐,circle,🉐,denied,⛔,forbid,📛,delete,❌,remove,❌,cancel,❌,doubts,❔,answer,✅,vortex,🌀,spiral,🌀,custom,🛂,liquid,🚰,gender,🚹,keycap,*⃣,bottom,🔽,return,↪️,rotate,↪️,symbol,#️⃣,glyphs,🔣,button,⚫,volume,🔈,silent,🔕,bubble,💭,speech,💭,midday,🕛,bosnia,🇧🇦,virgin,🇻🇬,canary,🇮🇨,cayman,🇰🇾,island,🇨🇽,guiana,🇬🇫,german,🇩🇪,bissau,🇬🇼,states,🇫🇲,puerto,🇵🇷,helena,🇸🇭,pierre,🇵🇲,marino,🇸🇲,sierra,🇸🇱,africa,🇿🇦,syrian,🇸🇾,united,🇹🇿,tobago,🇹🇹,caicos,🇹🇨,wallis,🇼🇫,futuna,🇼🇫,sahara,🇪🇭,member,👪,forums,🏛️,log in,🔥➡️,sticky,🛎️,policy,📜,smile,😄,blush,😊,smirk,😏,weary,😩,angry,😠,sweat,😓,ghost,👻,skull,💀,alien,👽,robot,🤖,punch,👊,metal,🤘,mouth,👄,woman,👩,guard,💂,santa,🎅,angel,👼,shirt,👕,jeans,👖,dress,👗,crown,👑,pouch,👝,purse,👛,mouse,🐭,koala,🐨,tiger,🐯,eagle,🦅,horse,🐴,snail,🐌,shell,🐚,snake,🐍,squid,🦑,shark,🦈,whale,🐳,camel,🐪,sheep,🐑,tulip,🌷,dizzy,💫,star2,🌟,comet,☄,sunny,☀️,cloud,☁️,ocean,🌊,apple,🍎,lemon,🍋,melon,🍈,peach,🍑,bread,🍞,bacon,🥓,pizza,🍕,fries,🍟,ramen,🍜,sushi,🍣,bento,🍱,curry,🍛,dango,🍡,candy,🍬,beers,🍻,spoon,🥄,8ball,🎱,skier,⛷,truck,🚚,train,🚋,metro,🚇,canoe,🛶,ferry,⛴,moyai,🗿,house,🏠,hotel,🏨,kaaba,🕋,japan,🗾,stars,🌠,foggy,🌁,watch,⌚️,clamp,🗜,phone,☎️,pager,📟,radio,📻,pound,💷,hocho,🔪,knife,🔪,flags,🎏,dolls,🎎,email,✉️,label,🏷,books,📚,heart,❤️,cupid,💘,aries,♈️,virgo,♍️,libra,♎️,u6709,🈶,u7121,🈚️,u7533,🈸,u55b6,🈺,u6708,🈷️,u5408,🈴,u6e80,🈵,u5272,🈹,u7981,🈲,anger,💢,u6307,🈯️,chart,💹,u7a7a,🈳,three,3️⃣,seven,7️⃣,eight,8️⃣,notes,🎶,sound,🔉,clubs,♣️,joker,🃏,aruba,🇦🇼,benin,🇧🇯,chile,🇨🇱,china,🇨🇳,egypt,🇪🇬,gabon,🇬🇦,ghana,🇬🇭,haiti,🇭🇹,india,🇮🇳,italy,🇮🇹,kenya,🇰🇪,libya,🇱🇾,macau,🇲🇴,malta,🇲🇹,nauru,🇳🇷,nepal,🇳🇵,niger,🇳🇪,palau,🇵🇼,qatar,🇶🇦,samoa,🇼🇸,spain,🇪🇸,sudan,🇸🇩,syria,🇸🇾,tonga,🇹🇴,yemen,🇾🇪,score,💯,happy,😀,teeth,😬,tears,😂,floor,🤣,funny,😃,laugh,😄,crush,😊,silly,🙃,yummy,😋,adore,🥰,prank,😜,goofy,🤪,crazy,🤪,money,🤑,nerdy,🤓,beach,😎,bored,😒,think,🤔,shock,🤭,quiet,🤫,blown,🤯,upset,😞,weird,😕,frown,☹,whine,😫,tired,😩,mercy,🥺,proud,😤,pride,😤,munch,😱,:'\\(,😢,spent,😵,vomit,🤢,gross,🤢,green,🤢,fever,🤒,woozy,🥴,tipsy,🥴,night,😴,dream,💤,devil,😈,horns,😈,scary,👹,demon,👹,death,💀,hands,🤲,hello,👋,agree,👍,grasp,✊,peace,✌,limbs,👌,stomp,🦶,shake,🤝,right,👉,lucky,🤞,spock,🖖,write,✍,tooth,🦷,smell,👃,sniff,👃,stare,👁,stalk,👀,brain,🧠,smart,🧠,human,👤,group,👥,child,👶,young,🧒,adult,🧑,girls,👩,elder,🧓,women,👵,hijab,🧕,arabs,👳‍♀️,legal,👮‍♀️,build,👷‍♀️,labor,👷‍♀️,royal,💂‍♀️,nurse,👩‍⚕️,coder,👩‍💻,plane,👩‍✈️,space,👩‍🚀,court,👩‍⚖️,witch,🧙‍♀️,ariel,🧜‍♀️,wings,👼,blond,👸,queen,👸,bride,👰,groom,🤵,steps,🚶‍♀️,bunny,👯,doubt,🤷,sauna,🧖‍♀️,spool,🧵,cloth,👕,shoes,👠,pumps,👠,socks,🧦,scarf,🧣,magic,🎩,learn,🎓,sales,👛,puppy,🐶,panda,🐼,croak,🐸,cluck,🐔,tweet,🐦,blind,🦇,brown,🐴,honey,🐝,chirp,🦗,t-rex,🦖,zebra,🦓,spots,🦒,spiny,🦔,llama,🦙,claws,🦞,plant,🌵,grass,🌱,irish,☘,light,🎃,globe,🌎,world,🌎,sleep,🌕,shoot,💫,shine,✨,shiny,✨,flame,🔥,smoke,💨,rainy,☔,water,💧,fruit,🍏,mango,🥭,spicy,🌶,chili,🌶,tuber,🥔,sweet,🍯,wheat,🍞,toast,🍞,bagel,🥯,steak,🥩,chips,🍟,snack,🍟,party,🍕,lunch,🥪,swirl,🍥,asian,🍚,lolly,🍬,films,🍿,donut,🍩,drink,🥛,relax,🍺,drunk,🍺,booze,🍺,glass,🥃,latte,☕,balls,🏀,hobby,🎱,stick,🥍,sword,🤺,board,🛹,clean,🛀,hover,🕴,award,🏆,place,🏆,first,🥇,third,🥉,cause,🎗,event,🎫,drama,🎭,paint,🎨,skill,🤹‍♀️,music,🎤,piano,🎹,snare,🥁,blues,🎷,brass,🎺,movie,🎬,vegas,🎰,piece,🧩,razor,🛴,vespa,🛵,sasha,🛵,alert,🚨,error,🚨,speed,🚅,yacht,⛴,orbit,🛰,photo,🎡,fresh,⛲,urban,🏙,venue,🏟,evict,🏚,teach,🏫,islam,🕌,mecca,🕋,kyoto,⛩,input,⌨,paper,🖨,click,🖱,video,📼,scale,🎚,alarm,⏲,clock,⌛,limit,⌛,power,🔋,sight,🔦,trash,🗑,bills,💸,coins,💰,tools,🧰,handy,🔩,brick,🧱,blade,🔪,kills,🚬,joint,🚬,ashes,⚱,disco,🔮,dhikr,📿,charm,🧿,salon,💈,style,💈,study,🔬,drugs,💉,blood,💉,germs,🦠,broom,🧹,potty,🚽,chill,🛋,entry,🚪,plush,🧸,inbox,✉️,order,📑,graph,📊,stats,📊,press,🗞,rings,🔗,loser,🏳,queer,🏳️‍🌈,sorry,💔,break,💔,words,🆔,kanji,🈳,empty,🈳,month,🈷️,shape,✴️,round,⭕,rules,🚷,minor,🔞,spear,🔱,scout,⚜,issue,⚠️,badge,🔰,arrow,♻️,point,🈯,jewel,💠,fancy,💠,earth,🌐,stage,🎦,above,🆙,start,🆕,prime,2️⃣,pause,⏸,cycle,🔄,enter,↩️,brand,™️,stone,⬜,frame,🔲,noise,🔊,noisy,🔊,chime,🔔,poker,🃏,cards,🃏,suits,♠️,early,🕐,Åland,🇦🇽,verde,🇨🇻,cocos,🇨🇨,congo,🇨🇬,costa,🇨🇷,union,🇪🇺,faroe,🇫🇴,ivory,🇨🇮,coast,🇨🇮,macao,🇲🇴,north,🇰🇵,korea,🇰🇵,papua,🇵🇬,saint,🇧🇱,cunha,🇸🇭,kitts,🇰🇳,nevis,🇰🇳,lucia,🇱🇨,leone,🇸🇱,dutch,🇸🇽,south,🇿🇦,lanka,🇱🇰,timor,🇹🇱,leste,🇹🇱,turks,🇹🇨,great,🇬🇧,wales,🏴󠁧󠁢󠁷󠁬󠁳󠁿,welsh,🏴󠁧󠁢󠁷󠁬󠁳󠁿,media,📷,posts,📮,forum,🏛️,reply,↩️,users,👤,staff,⚚,login,🔥➡️,quick,🏃🏻,about,🤷,today,📅,share,❤️,quote,📖,admin,🛡️,loud,📢,grin,😁,rofl,🤣,wink,😉,hugs,🤗,rage,😡,pout,😡,mask,😷,ogre,👹,poop,💩,shit,💩,clap,👏,pray,🙏,fist,✊,hand,✋,wave,👋,ring,💍,kiss,💋,lips,👄,nose,👃,eyes,👀,baby,👶,girl,👧,boot,👢,shoe,👞,bear,🐻,lion,🦁,frog,🐸,bird,🐦,duck,🦆,wolf,🐺,boar,🐗,crab,🦀,fish,🐟,cow2,🐄,deer,🦌,pig2,🐖,goat,🐐,dog2,🐕,cat2,🐈,dove,🕊,feet,🐾,herb,🌿,rose,🌹,moon,🌔,star,⭐️,fire,🔥,boom,💥,dash,💨,pear,🍐,corn,🌽,taco,🌮,stew,🍲,rice,🍚,oden,🍢,cake,🍰,sake,🍶,beer,🍺,golf,⛳️,skis,🎿,drum,🥁,dart,🎯,taxi,🚕,bike,🚲,tram,🚊,seat,💺,boat,⛵️,ship,🚢,moai,🗿,tent,⛺️,bank,🏦,bulb,💡,euro,💶,pick,⛏,gear,⚙️,bomb,💣,hole,🕳,pill,💊,bath,🛀,door,🚪,gift,🎁,tada,🎉,date,📅,book,📖,link,🔗,memo,📝,lock,🔒,mens,🚹,koko,🈁,abcd,🔡,cool,🆒,free,🆓,zero,0️⃣,four,4️⃣,five,5️⃣,nine,9️⃣,1234,🔢,hash,#️⃣,loop,➿,back,🔙,soon,🔜,mute,🔇,bell,🔔,mega,📣,chad,🇹🇩,cuba,🇨🇺,fiji,🇫🇯,guam,🇬🇺,iran,🇮🇷,iraq,🇮🇶,laos,🇱🇦,mali,🇲🇱,niue,🇳🇺,oman,🇴🇲,peru,🇵🇪,togo,🇹🇬,\\+1,👍,exam,💯,quiz,💯,pass,💯,face,😀,weep,😂,haha,😂,:\\),😃,like,😄,glad,😆,halo,😇,;\\),😉,phew,😌,love,😍,zany,🤪,rich,🤑,geek,🤓,dork,🤓,mean,😏,smug,😏,:\\|,😐,hmmm,🤔,shhh,🤫,mind,🤯,:\\(,😞,hate,😡,sick,😣,oops,😣,whoa,😮,what,😦,rest,😪,heat,🥵,cold,🥶,blue,🥶,hurt,🤕,wavy,🥴,fail,💩,turd,💩,evil,👺,dead,💀,paul,👽,cats,😺,palm,👋,good,👍,okay,👌,stop,✋,open,👐,flex,💪,hope,🙏,wish,🙏,foot,🦶,kick,🦶,limb,🦵,down,👇,left,👈,rude,🖕,nail,💅,hear,👂,look,👁,peek,👀,user,👤,team,👥,sing,🗣,talk,🗣,male,👦,lady,👩,chef,👩‍🍳,hero,🦸‍♂️,xmas,🤶,mage,🧙‍♀️,king,🤴,race,🏃‍♀️,boys,👯‍♂️,pair,👫,nope,🙅,pink,🙆,head,💆,home,👪,yarn,🧶,ball,🧶,knit,🧶,coat,🧥,neck,🧣,lord,👑,work,💼,rain,🌂,woof,🐶,meow,🐱,wild,🐻,roar,🐯,beef,🐮,milk,🐮,oink,🐷,toad,🐸,born,🐣,hoot,🦉,worm,🐛,slow,🐌,hiss,🐍,swim,🐠,nemo,🐠,food,🐟,fins,🐬,jaws,🦈,hump,🐪,horn,🦏,wool,🐑,luck,🐎,doge,🐕,joey,🦘,swan,🦢,myth,🐉,lawn,🌱,weed,🌿,tree,🍃,fall,🍁,silk,🕸,east,🌏,gray,🌔,fast,⚡,cook,🔥,gust,🌬,wind,💨,shoo,💨,fart,💨,puff,💨,drip,💧,wine,🍇,kale,🥬,bees,🍯,pork,🥓,meat,🥓,chop,🥩,bone,🦴,gyro,🥙,soup,🥫,oreo,🍪,shot,🥃,bowl,🍵,soda,🥤,salt,🧂,meal,🍽,pool,🎱,game,🎱,flag,⛳,snow,🎿,sled,🛷,luge,🛷,judo,🥋,rock,🧗‍♀️,yoga,🧘‍♀️,suit,🕴,jump,🕴,play,🎽,army,🎖,draw,🎨,clef,🎼,jazz,🎷,film,🎬,dice,🎲,uber,🚕,cars,🚕,bart,🚎,tube,🚇,NASA,🚀,wait,🚏,asia,🎑,road,🛣,view,🌅,warm,🏜,sand,🏖,dawn,🌇,city,🌃,mall,🏬,cash,🏦,time,⌚,dial,📱,type,⌨,text,⌨,tool,🗜,data,💽,disk,💽,save,💾,disc,💿,tape,📽,show,📺,wake,⏰,test,⌛,idea,💡,dark,🔦,toss,🗑,sale,💸,bill,💵,ruby,💎,ikea,🔧,vase,🏺,bead,🧿,hair,💈,zoom,🔭,drug,💊,life,🧬,roll,🧻,soap,🧼,read,🛋,exit,🚪,carp,🎏,ding,🎐,mail,📦,tidy,📑,vote,🗳,load,📂,math,📐,mark,📌,here,📌,lost,🏳,lgbt,🏳️‍🌈,glbt,🏳️‍🌈,find,🔍,sign,⛎,have,🈶,sshh,㊙️,join,🈴,full,🈵,help,🆘,deny,❎,tick,✅,spin,🌀,i18n,🌐,a11y,♿,info,🚮,wifi,📶,bars,📶,icon,🆖,high,🆙,null,0️⃣,next,⏭,sync,🔄,undo,↩️,note,🔣,tone,🎵,line,〰️,nike,✔️,more,➕,less,➖,buck,💲,late,🕐,dusk,🕕,noon,🕛,faso,🇧🇫,cabo,🇨🇻,rica,🇨🇷,hong,🇭🇰,kong,🇭🇰,isle,🇮🇲,rico,🇵🇷,tome,🇸🇹,sint,🇸🇽,arab,🇸🇾,viet,🇻🇳,post,📮,edit,✏️,joy,😂,yum,😋,cry,😢,sob,😭,imp,👿,ear,👂,eye,👁,boy,👦,man,👨,cop,👮,bow,🙇,dog,🐶,cat,🐱,cow,🐮,pig,🐷,owl,🦉,bat,🦇,bee,🐝,bug,🐛,ant,🐜,ram,🐏,rat,🐀,zap,⚡️,sun,☀️,fog,🌫,egg,🥚,tea,🍵,ski,🎿,art,🎨,car,🚗,bus,🚌,dvd,📀,vhs,📼,fax,📠,yen,💴,gem,💎,gun,🔫,key,🔑,bed,🛏,pen,🖊,mag,🔍,leo,♌️,sos,🆘,100,💯,zzz,💤,atm,🏧,abc,🔤,new,🆕,one,1️⃣,two,2️⃣,six,6️⃣,end,🔚,top,🔝,lol,🤣,hot,😅,shy,😊,nom,😋,hat,🤠,hug,🤗,meh,😐,-_-,😑,lie,🤥,sad,😞,mad,😠,huh,😕,gas,😤,wow,😮,omg,😱,woo,😯,shh,😯,nap,😪,red,🥵,xox,😵,ill,🤢,UFO,👽,bot,🤖,yea,🙌,yay,👏,yes,👍,hit,👊,ban,✋,arm,💪,leg,🦵,see,👁,say,🗣,guy,👦,dad,👨,sir,👨,men,👴,old,👴,law,👮‍♀️,911,👮‍♀️,wip,👷‍♀️,spy,🕵️‍♀️,bad,🦹‍♀️,fun,💃,spa,🧖‍♀️,mom,👪,tee,👕,cap,🧢,kod,👑,bag,🎒,job,💼,pet,🐶,moo,🐮,sea,🦑,fly,🐦,101,🐩,hop,🦘,USA,🌎,sky,🌔,air,🌬,mac,🍎,nut,🥜,cut,🥩,box,🍱,pie,🥧,pub,🍺,eat,🍽,NBA,🏀,NFL,🏈,zen,🧘‍♀️,win,🏆,ftw,🏆,PS4,🎮,bar,🎯,bet,🎰,mrt,🚇,ufo,🛸,gps,🛰,ISS,🛰,sit,💺,ink,🖨,90s,💽,80s,💾,wax,🕯,bin,🗑,diy,🧰,fix,🧰,dig,⛏,cog,⚙,die,⚰,rip,⚰,jar,🏺,dna,🧬,lab,🧫,tag,🏷,buy,🛍,toy,🎎,url,🔗,map,📍,gay,🏳️‍🌈,get,🉐,tap,🚱,wat,⁉️,loo,🚺,way,↕️,and,➕,\\+,➕,you,😎,day,📅,-1,👎,fu,🖕,ox,🐂,cd,💿,tv,📺,om,🕉,id,🆔,vs,🆚,ab,🆎,cl,🆑,o2,🅾️,wc,🚾,sa,🈂️,ng,🆖,ok,🆗,up,🆙,tm,™️,:D,😀,XD,😆,:/,😕,no,😣,:S,😖,:O,😮,aw,😦,hi,👋,uk,💂‍♀️,gb,💂‍♀️,th,🐘,ca,🍁,PA,🎤,f1,🏎,18,🔞,10,🔟,ip,©️,on,🔛,#,#️⃣,&,➕";
    var fullDictionary = fullDictionaryInput.split(",");

    for (var _i = 0, _len = fullDictionary.length; _i < _len; _i += 2) {
        regexDictionary.push([
            RegExp("\\b" + fullDictionary[_i] + "(s|ed|d|ing|'s)?\\b", "igm"),
            fullDictionary[_i + 1]
        ]);
    }

    var handleNode = function handleNode(node, nodeKey) {
        if (node[nodeKey]) {
            var content = node[nodeKey];

            if (alphaNumeric.test(content)) {
                return content;
            }
        }

        return null;
    };

    var walkTree = function walkTree(node) {
        var depth =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var changes =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var classAllowed = true;

        if (
            window.th_emojifyProSkip &&
            window.th_emojifyProSkip.length &&
            node.className
        ) {
            var splitClasses = node.className.split(" ");
            window.th_emojifyProSkip.forEach(function (skipClass) {
                if (skipClass.length && splitClasses.indexOf(skipClass) !== -1) {
                    classAllowed = false;
                }
            });
        }

        if (
            node &&
            ["STYLE", "SCRIPT"].indexOf(node.tagName) === -1 &&
            classAllowed
        ) {
            var nodeKeys = ["nodeValue", "placeholder"];
            nodeKeys.forEach(function (nodeKey) {
                var change = handleNode(node, nodeKey);

                if (change !== null) {
                    changes.push([node, nodeKey, change]);
                }
            });

            if (node.childNodes && node.childNodes.length) {
                node.childNodes.forEach(function (childNode) {
                    walkTree(childNode, depth + 1, changes);
                });
            }
        }

        return changes;
    };

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];

            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }

        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    var eleOpacity = 1;

    var makeTimeout = function makeTimeout() {
        return window.setTimeout(function () {
            var ele = document.getElementById("th_emojifyProWrapper");

            if (ele && eleOpacity !== 0) {
                ele.style.opacity = 0;
                ele.style.pointerEvents = "none";
                eleOpacity = 0;
            }
        }, 4000);
    };

    var scrollTimeout = makeTimeout();

    var renderButton = function renderButton() {
        var disabled = getCookie("th_emojifyProDisabled") === "1";
        var ele = document.getElementById("th_emojifyProTrigger");

        if (!ele) {
            var _ele = document.createElement("BUTTON");

            _ele.id = "th_emojifyProTrigger";
            _ele.style =
                "font-size: 3rem; background-color: transparent; border: none; padding: 0; margin-top: 4px;";
            var wrapper = document.createElement("DIV");
            wrapper.id = "th_emojifyProWrapper";
            wrapper.style =
                "position: fixed; bottom: 24px; left: 24px; z-index: 100000; border-radius: 100px; padding: 1rem; background-color: #FFF; box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); transition: opacity 0.2s; opacity: 1; display: flex; align-items: center; justify-content: center; padding: 1rem; width: 7rem; height: 7rem; cursor: pointer;";
            wrapper.appendChild(_ele);
            document.body.appendChild(wrapper);

            var _toggle = function _toggle(e) {
                e.preventDefault();
                setCookie("th_emojifyProDisabled", disabled ? "0" : "1");
                window.location.reload();
            };

            wrapper.onclick = _toggle;
            window.addEventListener("scroll", function () {
                if (eleOpacity !== 1) {
                    wrapper.style.opacity = 1;
                    eleOpacity = 1;
                    _ele.style.pointerEvents = "all";
                }

                if (scrollTimeout !== null) {
                    clearTimeout(scrollTimeout);
                }

                scrollTimeout = makeTimeout();
            });
            _ele.title = disabled ? "Enable Emojify Pro" : "Disable Emojify Pro";
            _ele.innerHTML = disabled ? "✅" : "❌";
        }

        ele.onclick = toggle;

        if (disabled) {
            ele.className += " disabled";
        } else {
            ele.className += "enabled";
        }
    };

    var run = function run() {
        var selector =
            arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : "body";
        var disabled = getCookie("th_emojifyProDisabled");
        renderButton();

        if (disabled !== "1") {
            var style = document.createElement("STYLE");
            style.innerText =
                ".emojify_emoji { height: 1em; width: 1em; margin: 0 .05em 0 .1em; vertical-align: -0.1em; }";
            document.body.appendChild(style);
            var items = document.querySelectorAll(selector);
            items.forEach(function (item) {
                var changes = walkTree(item);
                changes.forEach(function (change) {
                    var newContent = change[2];
                    regexDictionary.forEach(function (regex) {
                        newContent = newContent.replace(regex[0], regex[1]);
                    });

                    if (change[2] !== newContent) {
                        change[0][change[1]] = newContent;
                    }
                });
            });

            if (typeof window.twemoji === "undefined") {
                document.write(
                    "<scr" +
                    "ipt src='//twemoji.maxcdn.com/2/twemoji.min.js?11.3'></scr" +
                    "ipt><scr" +
                    "ipt>twemoji.parse(document.body, { folder: 'svg', ext: '.svg', className: 'emojify_emoji' })</scr" +
                    "ipt>"
                );
            }
        }
    };

    run();
})();
