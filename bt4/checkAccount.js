function isValidAccount(account) {
    // Pattern cho tên tài khoản
    var accountPattern = /^[_a-z0-9]{6,}$/;

    // Kiểm tra tính hợp lệ của tài khoản
    if (accountPattern.test(account)) {
        console.log(account + " là một tài khoản hợp lệ.");
    } else {
        console.log(account + " không phải là một tài khoản hợp lệ.");
    }
}

// Bộ kiểm thử
var validAccounts = ["123abc_", "_abc123", "______", "123456", "abcdefg"];
var invalidAccounts = [".@", "12345", "1234_", "abcde"];

// Kiểm tra tài khoản hợp lệ
console.log("Kiểm tra tài khoản hợp lệ:");
for (var i = 0; i < validAccounts.length; i++) {
    isValidAccount(validAccounts[i]);
}

// Kiểm tra tài khoản không hợp lệ
console.log("\nKiểm tra tài khoản không hợp lệ:");
for (var j = 0; j < invalidAccounts.length; j++) {
    isValidAccount(invalidAccounts[j]);
}