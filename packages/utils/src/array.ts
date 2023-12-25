export const getFirstStringsLessThanNChars = (arr: string[], n: number) => {
  let result: string[] = [];
  let totalChars: number = 0;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const strLength = str.length;

    if (totalChars + strLength <= n) {
      result.push(str);
      totalChars += strLength;
    } else {
      break; // Stop iterating once the limit is reached
    }

    if (result.length === n) {
      break; // Stop when you have n strings
    }
  }

  return result;
};
