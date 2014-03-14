
/*#############################################################
Funkcja działa w pzybliżeniu tak jak phpowa str_replace
#############################################################

RÓŻNICE MIEDZY strReplace a rodzimą metodą .replace dla klasy string w js:
________________________________________________________________________

	1. Przy szukaniu stringa i zamienianiu na string
	funkcja zamienia WSZYSTKIE WYSTĄPIENIA szukanego stringa w tekscie
	
	2. Fukcja przyjmuje również array jako szukane
	w tym wypadku wszystkie wystąpienia wszystkich stringuw w tablicy szukane
	zostają zasąpione stringiem do zamiany
	
	3. Funkcja może również przyjąć array jako zamieniane
	w tym wypadku tablice szukane i zamieniane muszą mieć tyle samo
	elementów
	dla wszystkich wystąpien szukanego pierszegomstringa zostanie zamieniy
	na pierszy strng w zamienianych i tak dalej
	w przypadku gdy tablice mają różne ilość elementów
	bląd komunikowany jest alertem
	
_____________________________________________________________________________

stringReplace(stringWejsciowy:String, szukane:String/Array, zamieniane:String/Array):String

Funkcja przyjmuje 3 parametry

stringWejsciowy: string w którym chcemy coś zamienić
szukane: String lub Array indexowany ze Stringami których szukamy
zamieniane: String lub Array ze stringami na które szukane mają być zamienione

! funkcja nie działa w wywołaniu (String, String, Array);
błąd komunikowany jest alertem.





	
##############################################################*/




function strReplace(stringWejsciowy, szukane, zamieniane){
	var doZwrotu = stringWejsciowy;
	if (typeof(szukane)=="object" && typeof(zamieniane)=="object"){
		if (szukane.length!=zamieniane.length){alert("tablice maja rozne liczby elementow!")}
			else{
			for (var i=0;i<szukane.length;i++){
				var regExp = new RegExp(szukane[i],'g');
				doZwrotu = doZwrotu.replace(regExp,zamieniane[i]);
			}	
		}
	}
	if (typeof(szukane)=="object" && typeof(zamieniane)=="string"){
		alert("tak to string");
		for (var i=0;i<szukane.length;i++){
			var regExp = new RegExp(szukane[i],'g');
			doZwrotu = doZwrotu.replace(regExp,zamieniane);
			//alert(doZwrotu);
		}	
	}
	if (typeof(szukane)=="string" && typeof(zamieniane)=="string"){
		var regExp = new RegExp(szukane,'g');
		doZwrotu = doZwrotu.replace(regExp,zamieniane);
	}
	if (typeof(szukane)=="string" && typeof(zamieniane)=="object"){
	 alert('Jesli zamieniane jest tablicą szukane też musi być tablicą! (z tą samą ilośćią elementów)');	
	}
	return doZwrotu;
}