const consola = require("consola");
import * as _ from "lodash";
import * as path from "path";

import { readFile, writeFile } from "../utils/file";
import { buildComponentMetaDatum, ComponentMetaDatum } from "../utils/srcReader";

const ROOT = path.resolve(__dirname, "..", "..");
const SRC_ROOT = path.join(ROOT, "src");
const COMPONENTS_ROOT = path.join(SRC_ROOT, "components");
const TEMPLATE_PATH = path.resolve(__dirname, "entry.template.js");

const INDEX_JS_TEMPLATE = readFile(TEMPLATE_PATH);

const createIndex = (components: ComponentMetaDatum) => {
  const compiled = _.template(INDEX_JS_TEMPLATE);
  const indexJsData = compiled({
    components,
  });
  const wrapperPathname = path.join(SRC_ROOT, "entry.ts");
  writeFile(wrapperPathname, indexJsData);
  consola.success("Created:", wrapperPathname.replace(ROOT, ""));
};

consola.info("Start creating the entry.ts");
const datum = buildComponentMetaDatum(COMPONENTS_ROOT);
createIndex(datum);
