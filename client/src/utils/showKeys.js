export function showWrongKey(type, key, wrongKey) {
  console.log(key);
  const query = `[data-skbtn='${key}']`;
  wrongKey = document.querySelector(query);
  document
    .querySelectorAll('.hg-standardBtn')
    .forEach((element) => element.classList.remove(type));
  document.querySelector(query).classList.add(type);
}

export function showPressedKey(type, key, wrongKey) {
  if (wrongKey) wrongKey.classList.remove('wrong');
  const query = `[data-skbtn='${key}']`;
  document
    .querySelectorAll('.hg-standardBtn')
    .forEach((element) => element.classList.remove(type));
  document.querySelector(query).classList.add(type);
}
