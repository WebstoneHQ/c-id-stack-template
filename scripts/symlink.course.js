#!/usr/bin/env node
import fs from "fs";
import path from "path";

const symlink = (dir, target, path) => {
  const currentDir = process.cwd()
  process.chdir(dir)
  fs.symlinkSync(target, path)
  process.chdir(currentDir)
};

fs.rmSync(`../webstone-education/course`, { recursive: true, force: true })
symlink(`../webstone-education`, path.relative(`../webstone-education`, "."), "course")
