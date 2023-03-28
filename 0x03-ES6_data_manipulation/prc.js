const buf = new ArrayBuffer(4);
const intbuf = new Int8Array(buf);

intbuf[6] = 3;

console.log(new DataView(buf))