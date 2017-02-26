 var translate = (function(trans) {
 
 var spanishTr ={"happy": "saeed" , "spring": "Rabia", "day": "yoom", };
 
 trans.spanishTranslate = function(x){
   return spanishTr[x];
 }
 
 return trans;
 
})(Translate || {});