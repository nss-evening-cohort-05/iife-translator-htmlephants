// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};

var button = document.getElementById('translate');

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

//gets text
function setText(){
	var text = translatorObjects.textkey.value;
	return text
};

button.addEventListener("click", function(){

	Translate.stringToTranslate(setLanguage(),setText());

	switch(setLanguage()){

		case "spanish":
			console.log('Spanish chosen');
			Translate.toSpanish(); 
			break;
		case "arabic":
			console.log('Arabic chosen');//run .arabicTranslate;
			Translate.toArabic();
			break;
		case "french":
			console.log('French chosen');//run .frenchTranslate;
			Translate.toFrench();
			break;
		case "swahili":
			console.log('Swahili chosen');//run .swahiliTranslate;
			Translate.toSwahili();
			break;	
		default:
			alert("Choose one of the 4 languages");
	}


});


// var resultArabic = Translate.spanishTranslate(translatorObjects.textkey);
// console.log(resultSpanish);