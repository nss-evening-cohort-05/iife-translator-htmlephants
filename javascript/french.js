var translate = (function(oldTranslator) {
 
var frenchTr = {
	"happy": "content",
 	"spring": "printemps",
 	"day": "journée" 
};
 
oldTranslator.toFrench = function(inputObject){
	return frenchTr[inputObject];
};
 
 return frenchTr;
 
})(Translate || {});




// happy = content 
// spring = printemps
// day = journée
