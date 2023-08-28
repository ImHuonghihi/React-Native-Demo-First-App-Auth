export const isValidEmail = (stringEmail) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringEmail);
}
export const isValidPassword = (stringPassword) => {
	return stringPassword.length >= 6;
}



