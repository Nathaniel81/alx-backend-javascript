export default function guardrail(mathFunction) {
  const myQueue = [];
  try {
    myQueue.push(mathFunction());
  } catch (err) {
    myQueue.push(String(err));
  } finally {
    myQueue.push('Guardrail was processed');
  }
  return myQueue;
}
