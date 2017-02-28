var translate = (function(oldTranslator) {

var swahiliTr = {
	"happy" : "furaha",
	"spring" : "majira",
	"day" : "siku"
};

oldTranslator.toSwahili = function(inputObject){


	return swahiliTr[inputObject];

};
 	return oldTranslator;

})(translate || {});