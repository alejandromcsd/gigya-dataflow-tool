export default function reArrange(steps, step, desiredPosition) {
  const result = [...steps];
  if (desiredPosition >= 0 && desiredPosition < result.length) {
    const tempStep = result[desiredPosition];
    result[desiredPosition] = result[step];
    result[step] = tempStep;
  }
  return result;
}
