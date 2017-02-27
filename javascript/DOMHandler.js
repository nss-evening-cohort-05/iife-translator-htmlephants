var button = document.getElementById('translate');

// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};

//gets language
function setLanguage(){	
	
	var lang = document.getElementsByName("lang");
	
	for (var i = 0; i < lang.length; i++) {
		
		if (lang[i].checked){
			lang[i].value;
			return lang[i].value;
		} 
	}
};

gets text
function setText(){
	var text = translatorObjects.textkey.value;
	return text
};

translate.addEventListener("click", function(){

	// translate.stringToTranslate(setLanguage());

	switch(setLanguage()){

		case "spanish":
			console.log('Spanish chosen');
			Translate.toSpanish(Translate.getTranslation()); 
			break;
		case "arabic":
			console.log('Arabic chosen');//run .arabicTranslate;
			Translate.toArabic(Translate.getTranslation());
			break;
		case "french":
			console.log('French chosen');//run .frenchTranslate;
			Translate.toFrench(Translate.getTranslation());
			break;
		case "swahili":
			console.log('Swahili chosen');//run .swahiliTranslate;
			Translate.toSwahili(Translate.getTranslation());
			break;	
		default:
			alert("Choose one of the 4 languages");
	}
});


// var resultSpanish = translate.spanishTranslate(translatorObjects.textkey);
// console.log(resultSpanish);
