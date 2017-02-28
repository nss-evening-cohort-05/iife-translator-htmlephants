var translate = (function(oldTranslator) {
 
var frenchTr = {
	"happy": "content",
 	"spring": "printemps",
 	"day": "journée" 
};
 
oldTranslator.toFrench = function(inputObject){
	
// var string = inputObject.textToTranslate;
// var frenchArray =[];
// var englishString = string.split(' ',3);
// console.log(englishString);

	return frenchTr[inputObject];
};
 
 return oldTranslator;
 
})(Translate || {});




// happy = content 
// spring = printemps
// day = journée










