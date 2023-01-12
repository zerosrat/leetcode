// input: 1~3999
const intToRoman = function (num: number): string {
  // 0 M-1000 MM-2000 MMM-3000
  const M = ["", "M", "MM", "MMM"];
  // 0 C-100 CC-200 CCC-300 CD-450 D-500 DC-600 DCC-700 DCCC-800 CM-900
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  // 0 10-X 20-XX 30-XXX 40-XL 50-L 60-LX 70-LXX 80-LXXX 90-XC
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  // 0 1-I 2-II 3-III 4-IV 5-V 6-VI 7-VII 8-VIII 9-IX
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return (
    M[~~(num / 1000)] +
    C[~~((num % 1000) / 100)] +
    X[~~((num % 100) / 10)] +
    I[~~(num % 10)]
  );
};
