// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};

var button = document.getElementById('translate');
var lang = document.getElementsByName("lang");

//gets language
function setLanguage(){	
	
	// var lang = document.getElementsByName("lang");
	
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
			console.log('Spanish chosen'); //run inputs.spanishTranslate;
			break;
		case "arabic":
			//run inputs.arabicTranslate;
			break;
		case "french":
			//run inputs.frenchTranslate;
			break;
		case "swahili":
			//run inputs.swahiliTranslate;
			break;	
		default:
			alert("Choose one of the 4 languages");
	}


});


// var resultSpanish = translate.spanishTranslate(translatorObjects.textkey);
// console.log(resultSpanish);
