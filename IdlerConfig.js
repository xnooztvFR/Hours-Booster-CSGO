    var steamClientFactory = require('./steamClient.js');
    var configsArray = [];
    var config;
    var botArray = [];
    
    config = {};
    config.username = 'MONCOMPTESTEAM'; // Nom du compte Steam
    config.password = 'MONMDP'; // Mot de passe du compte Steam
    config.sharedSecret = ''; //Shared Secret(Pour 2FA seulment) https://github.com/Jessecar96/SteamDesktopAuthenticator/releases
    config.games = [730] // 730 = CSGO // Possibilité de boost les heures d'autres jeux avec l'APPID. Exemple [730,107410] // 107410 correspond a Arma 3.
    configsArray.push(config);
	
	
	
    console.log('Nombre de configurations: ' + configsArray.length);
     
    for	(index = 0; index < configsArray.length; index++) {
    	var config = configsArray[index];
		
		var bot = steamClientFactory.buildBot(config);
		bot.doLogin();
		botArray.push(bot);
    }
     
    console.log('Il y à ' + botArray.length + ' bots en fonctionnement.');