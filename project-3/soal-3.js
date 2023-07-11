function cekPalindrome(value) {
    const len = value.length;
    for (let i = 0; i < len / 2; i++) {
        if (value[i] !== value[len - 1 - i]) {
            return 'ini bukan termasuk reverse palindrome';
        }
    }
    return 'ini termasuk reverse palindrome';
}
const hasil = cekPalindrome("kasur rusak");
console.log(hasil);