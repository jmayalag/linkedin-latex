const fs = require("fs");
const info = require("./info.json");
const {
  header,
  section,
  experience,
  education,
  publication,
  skills,
  end,
} = require("./template");

/**
 * Replace bullet or space at start
 * @param {string} string
 */
function replaceBullet(string) {
  return string.replace(/^[^\w\s]+/, "");
}

function getSkills() {
  const allSkills = info.experience.flatMap((it) => it.skills);
  const skills = new Set([...info.topSkills, ...allSkills]);
  return Array.from(skills).map((it) => it.replace(/\s*\(.*\)/, ""));
}

function buildTex(path) {
  console.log("Saving to " + path);
  if (fs.existsSync("main.tex")) {
    console.log("Override with main.tex");
    fs.copyFileSync("main.tex", path);
    return;
  }
  fs.writeFileSync(path, "", "utf8");
  const append = (string) => fs.appendFileSync(path, string, "utf8");

  append(header());
  append(section("Experience"));

  info.experience
    .filter((it) => !it.company.includes("CONACYT"))
    .slice(0, 5)
    .forEach((it) => {
      const description = it.description.slice(0, 4).map(replaceBullet);
      const locationType = it.locationType === "Hybrid" ? "" : it.locationType;
      append(experience({ ...it, description, locationType }));
    });

  append(section("Education"));

  info.education.forEach((it) => {
    const description = it.description.map(replaceBullet);
    append(education({ ...it, description }));
  });

  append(section("Publications"));
  append(publication());

  append(section("Skills"));
  append(skills({ skills: getSkills() }));

  append(end());
}

console.log(process.argv);
const path = process.argv[2];
if (!path) {
  throw new Error("Path is required");
}

buildTex(path);
