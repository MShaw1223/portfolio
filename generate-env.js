const fs = require("fs");

const envContent = `
export const environment = {
  production: true,
  githubToken: '${process.env.GH_TOKEN}'
};
`;

fs.writeFileSync("./src/environment/environment.ts", envContent, {
  encoding: "utf8",
});
console.log("Environment file created.");
