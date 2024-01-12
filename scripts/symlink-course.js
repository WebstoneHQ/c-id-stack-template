#!/usr/bin/env node
import fs from "fs";
import path from "path";

/**
 * Creates a symbolic link from the specified target to the specified path within the given directory.
 *
 * @param {string} dir - The directory in which the symbolic link will be created.
 * @param {string} target - The target of the symbolic link.
 * @param {string} path - The path at which the symbolic link will be created within the directory.
 */
const symlink = (dir, target, path) => {
  const currentDir = process.cwd()
  process.chdir(dir)
  fs.symlinkSync(target, path)
  process.chdir(currentDir)
};

const currentDirName = path.basename(process.cwd());
let COURSE_TYPE; // fs: full-stack, fe: front-end, be: back-end
if (
  !currentDirName.startsWith('rest') && !currentDirName.endsWith('rest') &&
  !currentDirName.startsWith('graphql') && !currentDirName.endsWith('graphql')) {
  COURSE_TYPE = "fs";
} else if (currentDirName.endsWith('rest') || currentDirName.endsWith('graphql')) {
  COURSE_TYPE = "fe";
} else if (currentDirName.startsWith('rest') || currentDirName.startsWith('graphql')) {
  COURSE_TYPE = "be";
} else {
  throw new Error("Could not determine the COURSE_TYPE for the current directory.")
}

fs.mkdirSync(`../webstone-education/course/${COURSE_TYPE}`, { recursive: true, force: true })
fs.rmSync(`../webstone-education/course/${COURSE_TYPE}/lessons`, { recursive: true, force: true })
symlink(`../webstone-education/course/${COURSE_TYPE}`, path.relative(`../webstone-education/course/${COURSE_TYPE}`, "./lessons"), "lessons")
