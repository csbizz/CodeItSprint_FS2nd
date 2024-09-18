function priceFunc(p) {
  if (typeof p !== 'number') return 'NaN';
  return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function isEmpty(input) {
  if (
    typeof input === 'undefined' ||
    input === null ||
    input === '' ||
    // input === "null" || // null 문자열. 필요에 따라 주석 해제
    input.length === 0 ||
    (typeof input === 'object' && !Object.keys(input).length)
  )
    return true;
  else return false;
}

function getRandomNumber(min, max) {
  const diff = max - min;
  const rand = Math.random(); // 0 ~ 1 사이의 랜덤 float

  return rand * diff + min;
}

function getRandomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const diff = maxFloored - minCeiled;
  const rand = Math.random();

  return Math.floor(rand * (diff + 1) + minCeiled);
}

export { priceFunc, isEmpty, getRandomNumber, getRandomInteger };
