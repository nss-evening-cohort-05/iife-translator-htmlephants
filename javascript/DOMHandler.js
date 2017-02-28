// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};

var button = document.getElementById('translate');
var output = document.getElementById('output');
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
			output.innerHTML += Translate.toSpanish(Translate.getTranslation()); 
			break;
		case "arabic":
			console.log('Arabic chosen');//run .arabicTranslate;
			output.innerHTML += Translate.toArabic(Translate.getTranslation());
			break;
		case "french":
			console.log('French chosen');//run .frenchTranslate;
			output.innerHTML += Translate.toFrench(Translate.getTranslation());
			break;
		case "swahili":
			console.log('Swahili chosen');//run .swahiliTranslate;
			output.innerHTML += Translate.toSwahili(Translate.getTranslation());
			break;	
		default:
			alert("Choose one of the 4 languages");
	}


});


// var resultSpanish = translate.spanishTranslate(translatorObjects.textkey);
// console.log(resultSpanish);
