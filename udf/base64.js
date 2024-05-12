import { default as buffer } from "node:buffer";

const base64 = {
  fromString: (s) => {
    const buf = buffer.from(s, "utf8");
    return buf.toString("base64");
  },
};

console.log(base64);
