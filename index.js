import { franc } from "franc";
import langs from "langs";
import colors from "colors";
const langCode = franc(process.argv[2]);
if (langCode == "und") {
  console.log("Please be more specific".red);
} else {
  console.log(langs.where("3", `${langCode}`).name.green);
}
