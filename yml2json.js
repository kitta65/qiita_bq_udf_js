import * as yaml from "js-yaml";

const yml2json = {
  convert: (y) => {
    return JSON.stringify(yaml.load(y));
  },
};

console.log(yml2json);
