function isFirstLetterUpperCase(str) {
    var regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("Chữ cái đầu tiên là chữ hoa");
    } else {
        console.log("Chữ cái đầu tiên không phải là chữ hoa");
    }
}

// Bộ kiểm thử
isFirstLetterUpperCase('Nguyen van Nam');
isFirstLetterUpperCase('NGUYEN VAN NAM');
isFirstLetterUpperCase('nguyen van Nam');