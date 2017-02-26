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

	translate.stringToTranslate(setLanguage(),setText());


});


// var resultSpanish = translate.spanishTranslate(translatorObjects.textkey);
// console.log(resultSpanish);
