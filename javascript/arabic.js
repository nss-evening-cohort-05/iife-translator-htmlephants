var translate = (function(oldTranslator) {
 
 var arabicLang ={"happy": "saeed" , 
 				"spring": "rabeea", 
 				"day": "yoom" 
 				};
 
 oldTranslator.toArabic= function(inputObject){
   	var string = inputObject.textToTranslate;
	var arabicArray =[];
	var englishString = string.split(' ');
	console.log(englishString);

	for(i=0; i<englishString.length; i++){

		var arabicWord = arabicLang[englishString[i]];
			// var arabicWord = toLowerCase(arabicLang[englishString[i]]);
		console.log(arabicWord);

		arabicArray.push(arabicWord);
	}
	return arabicArray.join(' ');
 }
 return oldTranslator;
 
})(Translate || {});




		


 