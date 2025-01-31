import { Path } from "rcompat/fs";
import driver from "./driver.js";
import base from "../base.test.js";

const filename = new Path(import.meta.url).up(1).join("db.json");

export default async test => {
  base(test, () => driver({ filename: `${filename}` })(), {
    after: async () => {
      await filename.remove();
    },
  });
};
