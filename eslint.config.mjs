import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "convex/_generated/**", "node_modules/**"],
  },
];

export default eslintConfig;
