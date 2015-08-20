//Write 2 functions
//One converts from decimal to binary
//One converts from binary to decimal

//decimal to binary
function decimalToBinary(num){
	if(!num) return "";
	return decimalToBinary(Math.floor(num/2) + num%2);
}


//binary to decimal
function binaryToDecimal(numStr){
	if(!numStr.length) return 0;
	return binaryToDecimal(numStr.slice(0, -1))*2 + Number(numStr[numStr.length - 1]);
}

//another possible solution
function binaryToDecimal2(numStr){
	var decimal = 0;
	for(var i = 0; i < numStr.length; i++){
		decimal *= 2;
		decimal += Number(numStr[i]);
	}

	return decimal;
}