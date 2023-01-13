let button = document.getElementById('btn');

button.addEventListener('click', function(){
	const gram = parseInt(document.getElementById('grams').value);
	const type = document.getElementById('type').value;

	if(gram === '' || isNaN(gram)){
		document.getElementById('grams').focus();
		document.getElementById('error').innerHTML = 'Please provide a valid input!';
		document.getElementById('results').innerHTML = '';
	}else{
		document.getElementById('error').innerHTML = '';
		switch(type){
			case 'Pounds':
				convert_pounds(gram);
				break;
			case 'Kilograms':
				convert_kilogram(gram);
				break;
			case 'Ounces':
				convert_ounces(gram);
				break;
			case 'Stones':
				convert_stones(gram);
				break;
			default:
				alert('Error');
		}

		function convert_pounds(gram){
			let rate = 0.0022, pounds;
			pounds = gram * rate;
			document.getElementById('results').innerHTML = gram + " grams = " + pounds.toFixed(5) + ' pounds';
		}
		function convert_kilogram(gram){
			let rate = 0.001, kilogram;
			kilogram = gram * rate;
			document.getElementById('results').innerHTML = gram + " grams = " + kilogram.toFixed(5) + ' kilograms';
		}
		function convert_ounces(gram){
			let rate = 0.035274, ounces;
			ounces = gram * rate;
			document.getElementById('results').innerHTML = gram + " grams = " + ounces.toFixed(5) + ' ounces';
		}
		function convert_stones(gram){
			let rate = 0.00015747, stones;
			stones = gram * rate;
			document.getElementById('results').innerHTML = gram + " grams = " + stones.toFixed(5) + ' stones';
		}
	}
});