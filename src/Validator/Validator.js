const Validator = (hex) => {
	const hexReg = /^#[0-9A-Fa-f]{6}$/;
	
	if (!hexReg.test(hex)) {
		return "Ошибка!"; 
	}
	hex = hex.slice(1);

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgb(${r}, ${g}, ${b})`;
}

export default Validator;