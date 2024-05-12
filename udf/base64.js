import { default as Buffer } from "node:buffer";

const base64 = {
  fromString: (s) => {
    const buf = Buffer.from(s, "utf8");
    return buf.toString("base64");
  },
};

console.log(base64);
