exports.validateEmail = function(val) {
    if (!/^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/.test(val)) {
        return ['Email is incorrect'];
    }
    return [];
}