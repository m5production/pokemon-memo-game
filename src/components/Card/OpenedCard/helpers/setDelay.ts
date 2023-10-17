export async function setDelay(delayTimeInMillis = 0) {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, delayTimeInMillis)
  );
}
