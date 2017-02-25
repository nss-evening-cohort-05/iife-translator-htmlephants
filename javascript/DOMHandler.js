// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};


// Function to determine the language 

translatorObjects.languagekey.addEventListener("change", function(event){

	var lang = event.target.value;

	console.log(lang);

	// stringToTranslate(lang);


});

translatorObjects.textkey.addEventListener("change", function(event){

	var text = event.target.value;

	console.log(text);

});
