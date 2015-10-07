/* Brute-force the following hash and echo out the password.
- The password hash is md5
- The maximum password length is 4 because it's a pin number
- The password can only have the following characters [a, b, c, 0, 1, 2, 3] (it's a weird pin pad)
*/
 
function bruteForce(hash) {
  
  // config
  var maxLength = 4;
  var chars = ["a", "b", "c", "0", "1", "2", "3"];
  
  // not config
  var attempts = [];
  var triesCount = 0;
  var password;
  
  function brute(attempt) {
    chars.some(function(char) {
      triesCount++;
      
      var newAttempt = attempt + char;

      var tryHash = CryptoJS.MD5(newAttempt).toString();
    
      if (tryHash === hash) {
        password = newAttempt;
        return true;
      }
      
      if (newAttempt.length < maxLength) {
        brute(newAttempt);
      }
    });
  }
  
  // try every possible password
  brute("");
  
  console.log("Number of tries: ", triesCount);
  return password;
  
}
 
var res = bruteForce("4cdc9a5e214dab9212777f893233209f");

console.log("Password: ", res);