// Key value pairs when we call the setter

var translatorObjects = {
	
	textkey: document.getElementById('input'),
    languagekey: document.getElementById('language')
};


// Function to determine the language 

languagekey.addEventListener("change", function(event){

	console.log(event.target.value);


});