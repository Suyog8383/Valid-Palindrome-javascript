let s = "A man, a plan, a canal: Panama";
function isPalindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(re, ""); //"a man, a plan, a canal. panama"  //"amanaplanacanalpanama"
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log("@SN ", isPalindrome(s));
