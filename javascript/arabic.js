var translate = (function(oldTranslator) {
 
 var arabicTr ={"happy": "saeed" , 
 				"spring": "rabeea", 
 				"day": "yoom" 
 				};
 
 oldTranslator.toArabic= function(inputString){
   
   return arabicTr[inputString];
   console.log("the arabic translation in prossess");
 	}
 
 return;
 
})(Translate || {});


 

