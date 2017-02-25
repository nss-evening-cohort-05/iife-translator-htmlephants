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
			laguageToUse = lang[i].value;
			console.log("language is " + lang[i].value);
		} 
	}

};

//gets text
function setText(){
	var text = translatorObjects.textkey.value;


	// textToTranslate = text;
	toMain.textOutput = text;
	console.log("text is ",text);
};

button.addEventListener("click", function(){

	translate.stringToTranslatesetLanguage();

	setText();

});


// var resultSpanish = translate.spanishTranslate(translatorObjects.textkey);
// console.log(resultSpanish);
