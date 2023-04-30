function convert() {
	let inputValue = document.getElementById("inputValue").value;
	let fromUnit = document.getElementById("fromUnit").value;
	let toUnit = document.getElementById("toUnit").value;

	if (fromUnit === toUnit) {
		document.getElementById("result").value = inputValue;
	} else if (fromUnit === "m" && toUnit === "km") {
		document.getElementById("result").value = inputValue / 1000;
	} else if (fromUnit === "km" && toUnit === "m") {
		document.getElementById("result").value = inputValue * 1000;
	} else if (fromUnit === "m" && toUnit === "ft") {
		document.getElementById("result").value = inputValue * 3.281;
	} else if (fromUnit === "ft" && toUnit === "m") {
		document.getElementById("result").value = inputValue / 3.281;
	} else if (fromUnit === "km" && toUnit === "mi") {
		document.getElementById("result").value = inputValue / 1.609;
	} else if (fromUnit === "mi" && toUnit === "km") {
		document.getElementById("result").value = inputValue * 1.609;
	} else {
		alert("Invalid input");
	}
}
