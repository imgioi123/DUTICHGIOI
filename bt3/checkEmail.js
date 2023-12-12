function isValidEmail(email) {
    // Email Regular Expression Pattern
    var emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;

    // Kiểm tra tính hợp lệ của email
    if (emailPattern.test(email)) {
        console.log(email + " là địa chỉ email hợp lệ.");
    } else {
        console.log(email + " không phải là địa chỉ email hợp lệ.");
    }
}

// Bộ kiểm thử
var validEmails = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
var invalidEmails = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

// Kiểm tra địa chỉ email hợp lệ
console.log("Kiểm tra địa chỉ email hợp lệ:");
for (var i = 0; i < validEmails.length; i++) {
    isValidEmail(validEmails[i]);
}

// Kiểm tra địa chỉ email không hợp lệ
console.log("\nKiểm tra địa chỉ email không hợp lệ:");
for (var j = 0; j < invalidEmails.length; j++) {
    isValidEmail(invalidEmails[j]);
}