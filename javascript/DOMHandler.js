// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};

var toMain = {

	textOutput:" ",
	langOutput:" "
};


// Function to determine the language 

translatorObjects.languagekey.addEventListener("change", function(event){

	var lang = event.target.value;

	toMain.langOutput = lang;
	console.log("testing",toMain.langOutput);


});

translatorObjects.textkey.addEventListener("change", function(event){

	var text = event.target.value;

	toMain.textOutput = text;
	console.log("testing",toMain.textOutput);

});
