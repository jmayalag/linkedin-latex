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

function buildTex(path) {
  fs.writeFileSync(path, "", "utf8");
  const append = (string) => fs.appendFileSync(path, string, "utf8");

  append(header());
  append(section("Experience"));

  info.experience.slice(0,6).forEach((it) => {
    append(experience());
  });

  append(section("Education"));

  info.education.forEach((it) => {
    append(education());
  });

  append(section("Publications"));
  append(publication());

  append(section("Skills"));
  append(skills());

  append(end());
}

buildTex("cv2.tex");
