import { splitString } from "./utils.mjs";
import unique from "./utils.mjs";

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
