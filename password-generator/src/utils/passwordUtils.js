function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePassword(length, options) {
    const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool.length === 0) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandomElement(characterPool);
    }

    return password;
}

export { generatePassword };