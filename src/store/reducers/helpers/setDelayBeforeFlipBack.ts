export async function setDelayBeforeFlipBack(delaySeconds: number) {
  return new Promise<void>((resolve) =>
    setTimeout(() => resolve(), delaySeconds * 1000)
  );
}
