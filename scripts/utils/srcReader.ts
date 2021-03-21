import { getDirPathNames, getFilePathNames } from "./file";

export type ComponentMetaData = {
  dirName: string;
  fileName?: string;
  importName: string;
  indexPathname: string;
  srcPathname: string;
  typeName?: string;
};

export type ComponentMetaDatum = Array<ComponentMetaData>;

const isComponentsDir = (pathname: string) => {
  const tailDir = pathname.split("/").pop();
  if (!tailDir) {
    return true;
  }
  if (tailDir === "src") {
    // src dir
    return false;
  }
  if (["atoms", "molecules", "organisms"].includes(tailDir)) {
    // Atomic Design types dir
    return false;
  }
  return true;
};

const isExportComponentsDir = (pathname: string) => {
  const extensionRegExp = /\.tsx?$/g;
  if (!extensionRegExp.test(pathname)) {
    return false;
  }

  const ignoreFileNameRegExp = /.stories.tsx/g;
  if (ignoreFileNameRegExp.test(pathname)) {
    return false;
  }

  return true;
};

const buildComponentMetaDatum = (componentDir: string): ComponentMetaDatum => {
  const componentsDir = getDirPathNames(componentDir).filter(isComponentsDir);

  const datum: ComponentMetaDatum = [];

  componentsDir.forEach((componentDir) => {
    const componentsPath = getFilePathNames(componentDir);
    componentsPath.filter(isExportComponentsDir).forEach((componentPath) => {
      const names = componentPath.split("/");
      const fileName = names[names.length - 1].replace(/\.[^/.]+$/, "");
      const dirName = names[names.length - 2];
      const typeName = names[names.length - 3];
      const importName = fileName === "Presenter" ? `{ Props as ${dirName}Props }` : "*";
      datum.push({
        dirName,
        fileName,
        importName,
        indexPathname: componentPath,
        srcPathname: componentPath,
        typeName,
      });
    });
  });

  return datum;
};

export { buildComponentMetaDatum };
