const fs = require("fs");
const file_name = ".env";
const _ = require("lodash");
const args = require("yargs").argv;
const envfile = require("envfile");
const sourcePath = ".env";

if (!fs.existsSync(file_name)) {
  fs.writeFile(file_name, "", function (err, result) {
    if (err) {
      console.log(err);
    }
    let parsedFile = envfile.parseFileSync(sourcePath);
    for (let item in args) {
      if (item !== "_" && item !== "$0") {
        parsedFile[item] = args[item];
      }
    }

    fs.writeFileSync("./.env", envfile.stringifySync(parsedFile));
    console.log("Successfully created .env file");
  });
} else {
  console.log(`.env file already exists, skipping creating a new one.`);
}
