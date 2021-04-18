// https://bigfrontend.dev/problem/interpolation




function t(translation: string, data = {}): string {
  // your code here

  return translation.replaceAll(/{{(.*?)}}/gi, (_, k) => data[k] || '');
}

// function t(translation, data = {}) {
//   return translation.replaceAll(/{{(.*?)}}/g, (_, key) => data[key] || '');
// }