function add(a,b){
	a = parseFloat(a);
	b = parseFloat(b);

	return a + b;
}

function subtract(a,b){
	a = parseFloat(a);
	b = parseFloat(b);

	return a - b;
}

function tax(a,b){
	a = a.replace("$", "");
	b = b.replace("%", "");
	a = parseFloat(a)
	b = parseFloat(b);
	var tax = a/100 * b;
	var add = a + tax;
	var result = add.toFixed(2)
	var total = "$" + result.toString()
	return total;
}

function stringLength(string){
	if(string.length === 0){
		return "Please try again."
	}
	if(string.length <= 4){
		return "short string";
	}
	else if (string.length <= 10){
		return "medium string";
	}
	else {
		return "long string";
	}

}

function startsWith(string){
	if(string[0].toLowerCase() === "a"){
		return "starts with A";
	}
	if(string[0].toLowerCase() === "b"){
		return "starts with B";
	}
	if(string[0].toLowerCase() === "c"){
		return "starts with C";
	}
	if(string[0].toLowerCase() === "d"){
		return "starts with D";
	}
	if(string[0].toLowerCase() === "e"){
		return "starts with E";
	}
	else {
		return "starts with something else."
	}
}

function stringRepeat(s,n){
	var r=""; 
	var result;
	var repeat;
	for (var i=0;i<n;i++) 
	repeat = r+=s; 
	return repeat

}

function nSum(n){
	n = parseFloat(n);
	var first = n*(n+1)
	var answer = first / 2;
	return answer;

}

function join(box,spacer){
	var answer = box.join(spacer + " ");
	return answer;

}

function countLetters(string) {
    var freq = {};
    var letter;
    for (var i=0; i<string.length;i++) {
        letter = string.charAt(i);
	        if (freq[letter]) {
	           freq[letter]++;
	        } else {
	           freq[letter] = 1;
	        }
    }
   	var answer = ""
   	for(var propertyName in freq){
   		answer += propertyName + ": "  +freq[propertyName] +  ", ";
   	}
	return answer;
}

function maze(){
	maze = [[true,true,true,true],
			["start",false,true,true],
			[true,false,false,false],
			[true,true,true,false],
			["end",false,false,false],
			[true,true,true,true]]

	return maze;
}

function table(housingArray, year, make, model, color){
	
	var parameters = [];
	var answer = [];
	
	if(year !== ""){
		parameters.push(year);	
	}
	else if(make !== ""){
		parameters.push(make);	
	}
	else if(model !== ""){
		parameters.push(model);	
	}
	else if(color !== ""){
		parameters.push(color);	
	}

	for(var i = 0; i < housingArray.length; i++){
		var count = 0;
		for(var propertyName in housingArray[i]){
			for(var x = 0; x < parameters.length; x++){
				if(housingArray[i][propertyName].toString().toLowerCase() == parameters[x].toLowerCase()){
					count++;
				}
			}
		}
		if(count === parameters.length){
			answer.push(housingArray[i]);
		}
	}
	
	return answer;

}