export function BeautifyJson(json) {
  return JSON.stringify(json, null, 4);
}

export function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
