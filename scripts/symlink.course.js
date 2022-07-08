#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const symlink = (dir, target, path) => {
  const currentDir = process.cwd()
  process.chdir(dir)
  fs.symlinkSync(target, path)
  process.chdir(currentDir)
};

const courseGuid = Buffer.from(execSync("basename -s .git `git config --get remote.origin.url`")).toString().replace("\n", "").replace(/^c-/, "");
const courseGuidMatches = courseGuid.match(/^(?<courseId>.*?)-(?<stackgroup>.*?)-(?<stack>.*)$/);
const {
  courseId,
  stackgroup,
  stack
} = courseGuidMatches.groups;

fs.rmSync(`../webstone-education/courses/${courseId}/${stackgroup}/${stack}`, { force: true})
fs.mkdirSync(`../webstone-education/courses/${courseId}/${stackgroup}`, { recursive: true})
symlink(`../webstone-education/courses/${courseId}/${stackgroup}`, path.relative(`../webstone-education/courses/${courseId}/${stackgroup}`, "."), stack)
