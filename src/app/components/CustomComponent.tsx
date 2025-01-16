import { PortableTextComponents } from '@portabletext/react';
export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-5xl font-extrabold text-gray-600">{children}</h1>, // Large and bold h1
    h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-400">{children}</h2>, // Smaller h2 compared to h1
    h3: ({ children }) => <h3 className="text-2xl font-semibold text-gray-400">{children}</h3>, // Smaller than h2
    h4: ({ children }) => <h4 className="text-xl font-medium text-yellow-400">{children}</h4>, // Yellow h4
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc marker:text-yellow-400 list-inside ml-4">{children}</li>, // Bullet point styling
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-dark dark:text-white">{children}</strong>, // Strong text styling
  },
};
