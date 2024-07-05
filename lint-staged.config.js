module.exports = {
  "**/*.(ts|tsx)": () => ["yarn tsc -p tsconfig.json"],
  "**/*.(ts|tsx|js|jsx)": (filenames) => [
    `eslint ${filenames.map((file) => file).join(" ")}`,
    `prettier ${filenames.map((file) => file).join(" ")} --write`,
  ],
};
