export function getRandomImageIds(maxNumber: number, numberOfImgs: number) {
  const totalIdObjects = new Array(maxNumber)
    .fill({ value: null, isChosen: false })
    .map((el, idx) => ({ value: idx + 1, isChosen: false }));
  const imgIds: number[] = new Array(numberOfImgs).fill(0);
  return imgIds.map(() => {
    const newId = getNewId(totalIdObjects.filter(({ isChosen }) => !isChosen));
    totalIdObjects.find(({ value }) => value === newId)!.isChosen = true;
    return newId;
  });
}

function getNewId(
  possibleIds: Array<{
    value: number;
    isChosen: boolean;
  }>
) {
  const newIndex = Math.floor(Math.random() * possibleIds.length);
  return possibleIds[newIndex].value;
}
