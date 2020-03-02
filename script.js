const [...binaryNumbers] = document.getElementsByTagName('input');
const decimalDisplay = document.getElementById('decimal');

function getSelectedNumbers() {
	return binaryNumbers.filter((item) => {
		console.log(item.binaryNumbers);
		return item.binaryNumbers;
	});
}

function calculateTotal() {
	return binaryNumbers.filter(item => item.checked)
		.map(checkedItem => parseInt(checkedItem.dataset.multiplier))
		.reduce((acc, val) => acc + val, 0);
}

binaryNumbers.forEach(function () {
	this.addEventListener('click', () => updateDecimal());
});

function updateDecimal() {
	decimalDisplay.innerText = calculateTotal();
}