var Translate = (function(oldTranslator) {

var swahiliTranslate = {
	"happy" : "furaha",
	"spring" : "majira",
	"day" : "siku"
};

oldTranslator.toSwahili = function(inputObject){

	var string = inputObject.textToTranslate;
	var swahiliArray = [];
	var englishString = string.split(' ',3);
	console.log(englishString);

	for(var i = 0; i < englishString.length; i++){

		var spanWord = swahiliTranslate[englishString[i]];


		console.log(spanWord);


		swahiliArray.push(spanWord);
	}


	return swahiliArray.join(' ');

};
 	return oldTranslator;

})(Translate || {});