import * as fs from "fs";
import * as path from "path";

const getDirPathNames = (dirPathname: string): Array<string> => {
  const pathNames = fs.readdirSync(dirPathname);
  return pathNames.reduce((newPathNames: Array<string>, pathname) => {
    const absoluteFilePath = path.join(dirPathname, pathname);
    if (fs.statSync(absoluteFilePath).isDirectory()) {
      newPathNames.push(absoluteFilePath);
      return newPathNames.concat(getDirPathNames(absoluteFilePath));
    } else {
      return newPathNames;
    }
  }, []);
};

const getFilePathNames = (dirPathname: string): Array<string> => {
  const pathNames = fs.readdirSync(dirPathname);
  return pathNames.reduce((newPathNames: Array<string>, pathname) => {
    const absoluteFilePath = path.join(dirPathname, pathname);
    if (fs.statSync(absoluteFilePath).isDirectory()) {
      return newPathNames.concat(getFilePathNames(absoluteFilePath));
    } else {
      return newPathNames.concat(absoluteFilePath);
    }
  }, []);
};

const extractFileName = (pathname: string) => {
  return pathname.split("/").pop();
};

const readFile = (path: string) => {
  return fs.readFileSync(path, { encoding: "utf8" });
};

const writeFile = (pathname: string, data: string) => {
  return fs.writeFileSync(pathname, data, { encoding: "utf8" });
};

export { extractFileName, getDirPathNames, getFilePathNames, readFile, writeFile };
