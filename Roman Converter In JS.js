function convertToRoman(num) {
     let str = ''
     let obj = {
          M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
     }
     conv(num);
     function conv(num) {
          for (let i in obj) {
               if (num == obj[i]) { str += i; num -= obj[i]; return str } else

                    if (num > obj[i]) { str += i; num -= obj[i]; return conv(num) }
          }
     }
     return str;
}
convertToRoman(26);