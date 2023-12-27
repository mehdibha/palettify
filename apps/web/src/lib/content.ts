import fs from "fs";
import path from "path";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

function parseMDXFile(fileContent: string) {
  const vfile = new VFile(fileContent);
  matter(vfile, { strip: true });
  return { metadata: vfile.data.matter ?? {}, content: vfile.toString() };
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseMDXFile(rawContent);
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export const getMDXData = (dir: string, { content = false }: { content: boolean }) => {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content: MDXContent } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return { metadata, slug, timeToRead: 3, content: content ? MDXContent : undefined };
  });
};
