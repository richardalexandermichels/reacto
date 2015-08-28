//http://slides.com/sarahmuenzinger/reacto-1#/

//Write a program that uses the Sieve of Eratosthenes to find the sum of all the primes from 2 up to a given number

//Solution
function Erat(max){
	var primes = []
	for (i=0; i< max; i++){
		primes.push(true)
	}
	for(var x=2; x<primes.length; x++){

		var multiple = x
		while(multiple < max){
			multiple += x
			if(primes[multiple-1]){
				primes[multiple-1] = false
			}
		}	
	}
	var sum = 0
	primes.forEach(function(prime, idx, array){
		if(idx==1){
			sum -= 1
		}
		if (prime){
			sum += idx+1
		}
	})
	return sum
}
console.log(Erat(2000000))