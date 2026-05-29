import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ContentItem {
  id: string;
  content: string;
  [key: string]: any;
}

export function getContentData(subfolder: string): ContentItem[] {
  const fullPath = path.join(contentDirectory, subfolder);
  
  if (!fs.existsSync(fullPath)) return [];

  const files = fs.readdirSync(fullPath, { withFileTypes: true });
  
  const allData: ContentItem[] = files.flatMap((file) => {
    if (file.isDirectory()) {
      return getContentData(path.join(subfolder, file.name));
    }
    
    if (!file.name.endsWith(".md")) return [];

    const fileContent = fs.readFileSync(path.join(fullPath, file.name), "utf-8");
    const { data, content } = matter(fileContent);

    // Use the immediate parent folder name as the category
    const category = path.basename(subfolder);

    return [
      {
        id: file.name.replace(/\.md$/, ""),
        category,
        ...data,
        content,
      },
    ];
  });

  return allData;
}
