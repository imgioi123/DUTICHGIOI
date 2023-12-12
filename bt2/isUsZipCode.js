function is_usZipCode(str) {
    var regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regexp.test(str);
}

// Bộ kiểm thử
var zipcode1 = "03201-2150";
console.log(is_usZipCode(zipcode1)); // Kết quả mong đợi: true

var zipcode2 = "7892";
console.log(is_usZipCode(zipcode2)); // Kết quả mong đợi: false