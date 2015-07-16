(function () {
    
    //Change this to your GitHub username so you don't have to modify so many things.
    var fork = "mmmeh";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };
        
        bot.commands.adblockCommand = {
            command: 'adblock',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Get AdBlock here for Chrome » http://tinyurl.com/TrilonAdBlock");
                }
            }
        };
       
        bot.commands.testCommand = {
            command: 'test',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                //var sampleText = "edidable text";
                    API.sendChat("Hi" +" @"+ chat.un +"!");
                }
            }
        };
      
      bot.commands.woofCommand = {
            command: 'woof',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                var gifArray =
                [
                'https://33.media.tumblr.com/aae5c170d93ef6adccf6960d631b0a16/tumblr_nab666GzPs1qb6v6ro1_400.gif',
		'http://i.imgur.com/79qweql.gif',
		'http://38.media.tumblr.com/6a0df1ea072a0838cfd4f09afaa159de/tumblr_nc2ingjJbp1svecmko1_1280.gif',
		'https://www.lovethisgif.com/uploaded_images/4869-French-Bulldog-Swinging.gif?1',
		'https://33.media.tumblr.com/29789495353ace1527290526df2682e5/tumblr_n6z1ft1br81st18yzo1_500.gif',
		'http://i.imgur.com/XdcUi.gif',
		'http://thehumorous.com/wp-content/uploads/2014/06/French-Bulldog-Dance-Party-3.gif',
		'http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/05/home6.gif',
		'http://www.allstarfrenchbulldogs.com/LilDebConeGif.gif',
		'http://cdn.themetapicture.com/media/funny-gif-dog-French-bulldog-travel.gif',
		'https://31.media.tumblr.com/a92530f30bee0e761cb89384b9565d05/tumblr_ni51591V8W1qbxi45o1_500.gif',
		'http://ak-hdl.buzzfed.com/static/enhanced/webdr01/2012/12/17/11/anigif_enhanced-buzz-13752-1355762809-25.gif',
		'http://i.imgur.com/CLIhN.gif',
		'http://i.imgur.com/tlPihgs.gif',
		'https://33.media.tumblr.com/6314b7ee7757e011bb8714cee5e4d016/tumblr_nqicm5NarP1qen4gzo1_400.gif',
		'http://i.imgur.com/ZwLtozI.gif',
		'http://i.imgur.com/mMt43.gif',
		'http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr07/13/15/anigif_enhanced-buzz-14055-1384375098-4.gif',
		'https://31.media.tumblr.com/aec9cbbdf826f98307e6d5f3d544a4c2/tumblr_ms1klefkuF1soipawo1_500.gif',
		'https://33.media.tumblr.com/b8800b015b3a677e4cdaf35f66441d92/tumblr_inline_nqoab0qcrh1t0xf8n_500.gif',
		'http://rs272.pbsrc.com/albums/jj186/cddforum/Dancing/thDancingDogs.gif~c200',
		'http://barkpost.com/wp-content/uploads/2014/11/Dancing-dog-GIF.gif',
		'http://i.imgur.com/NqyBZSp.gif',
		'http://media.tab.co.uk/blogs.dir/19/files/2013/12/dancing.gif',
		'http://now-here-this.timeout.com/wp-content/uploads/2013/01/0b07e92ef97eb10ec8e5b2637069321e.gif',
		'http://growld.com/wp-content/uploads/2014/02/fractal-doge.gif',
		'http://img.4plebs.org/boards/s4s/image/1384/92/1384920863548.gif',
		'http://media.giphy.com/media/g85bOX8TwaSMU/giphy.gif',
		'http://barkpost.com/wp-content/uploads/2013/02/oie_14175751vZSQRLEn.gif',
		'http://www.doggifpage.com/gifs/114.gif',
		'http://post.barkbox.com/wp-content/uploads/2013/02/tumblr_mevhkec7OG1qfvx4yo1_500.gif',
		'http://www.doggifpage.com/gifs/107.gif',
		'https://upload.wikimedia.org/wikipedia/en/4/45/DJ_Dog.gif'
                ];
                var randy = Math.floor(Math.random()*gifArray.length);
                    API.sendChat("/me Random puppy gif »  " + gifArray[randy].toString());
                }
            }
        };
        
        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "TrilonBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        startupCap: 100, // 1-200
        startupVolume: 46, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 220,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: false,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "You're in Trilon's Plug-DJ Room, have a blast!",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "http://trilon.org",
        rulesLink: "http://trilon.org",
        themeLink: "http://trilon.org",
        fbLink: "http://trilon.org",
        youtubeLink: "http://trilon.org",
        website: "http://trilon.org",
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/mmmeh/basicBot/master/basicBot.js", extend);

}).call(this);
