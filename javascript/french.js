var Translate = (function(oldTranslator) {
 
var frenchTr = {
	"happy": "content",
 	"spring": "printemps",
 	"day": "journée" 
};
 
oldTranslator.toFrench = function(inputObject){
	
  var string = inputObject.textToTranslate;
	var frenchArray =[];
	var englishString = string.split(' ');
	console.log(englishString);

	for(i=0; i<englishString.length; i++){

		var spanWord=frenchLang[englishString[i]];
		console.log(spanWord);

		// if statement //	


		frenchArray.push(spanWord);

	return frenchTr[inputObject];
};
 
 return oldTranslator;
} 
})(Translate || {});




// happy = content 
// spring = printemps
// day = journée










