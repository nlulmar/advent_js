function listGifts(letter) {
  // ¡Tú puedes!
  let giftsArray = letter
    .trim()
    .split(/\s+/)
    // .map(gift => gift.trim())
    .filter((gift) => !gift.startsWith("_"));

  console.log(giftsArray);

  return giftsArray.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

const carta = "bici coche balón _playstation bici coche peluche";

const regalos = listGifts(carta);

console.log(regalos);