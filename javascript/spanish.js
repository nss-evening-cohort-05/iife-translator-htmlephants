 var translate = (function(inputs) {
 
 var spanishTr ={"happy": "contento" , "spring": "Primavera", "day": "dia", };
 
 inputs.spanishTranslate = function(x){
   return spanishTr[x];
 }
 
 return ;
 
})(Translate || {});