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

function buildTex(path) {
  fs.writeFileSync(path, "", "utf8");
  const append = (string) => fs.appendFileSync(path, string, "utf8");

  append(header());
  append(section("Experience"));

  info.experience
    .filter((it) => !it.company.includes("CONACYT"))
    .slice(0, 5)
    .forEach((it) => {
      const description = it.description.slice(0, 4).map(replaceBullet);
      append(experience({ ...it, description }));
    });

  append(section("Education"));

  info.education.forEach((it) => {
    const description = it.description.map(replaceBullet);
    append(education({ ...it, description }));
  });

  append(section("Publications"));
  append(publication());

  append(section("Skills"));
  append(skills());

  append(end());
}

buildTex("cv2.tex");
