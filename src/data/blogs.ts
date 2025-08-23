export interface Blog {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with React + TypeScript",
    content: `
# React + TypeScript Guide
React with TypeScript improves **developer experience** and reduces bugs.
- Strong typing
- Better autocompletion
- Easier refactoring
    `,
    tags: ["react", "typescript"],
  },
  {
    id: 2,
    title: "Mastering TailwindCSS",
    content: `
# TailwindCSS for Fast UI
TailwindCSS is a utility-first CSS framework that makes styling much faster.
\`\`\`tsx
<div className="bg-blue-500 text-white p-4">Hello Tailwind!</div>
\`\`\`
    `,
    tags: ["css", "tailwind"],
  },
  {
    id: 3,
    title: "Understanding useEffect in React",
    content: `
# useEffect Hook
The **useEffect** hook lets you synchronize components with external systems like APIs.
    `,
    tags: ["react", "hooks"],
  },
];