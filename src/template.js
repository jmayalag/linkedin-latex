const header = () => `
\\documentclass{muratcan_cv}

\\setname{Jordan Ayala}{}
\\setaddress{Asunción, Paraguay}
\\setmobile{+595 991-171-554}
\\setmail{jor.ayalag@gmail.com}
% \\setmail{jordan@jordanbuilds.io}
% \\setcitizenship{Eldian Citizen}
\\setlinkedinaccount{https://www.linkedin.com/in/jordan-ayala/} 
\\setgithubaccount{https://github.com/jmayalag} 
\\setthemecolor{RoyalBlue}

    
\\begin{document}
\\headerview
\\vspace{1ex} % white space
`;

const section = (section) => `\\section{${section}}`;

const experience = ({
  title,
  company,
  date,
  location,
  locationType,
  description,
}) => {
  return `
%
\\datedexperience{${title}}{${date}}
\\explanation{${company}}{${[location, locationType || ""].join(", ")}}
\\explanationdetail{
\\smallskip
\\coloredbullet\\ %
${description.join(`\n\n\\smallskip\n\\coloredbullet\\ %\n`)}

\\smallskip
}`;
};

const education = ({ title, degree, field, date, description }) => `
%
\\datedexperience{${[degree, field].join(" - ")}}{${date}}
\\explanation{${title}}{} 
\\explanationdetail{
\\smallskip
\\coloredbullet\\ %
${description.join(`\n\n\\smallskip\n\\coloredbullet\\ %\n`)}

\\smallskip
}`;

const publication = () => `
%
\\explanationdetail{
\\smallskip 
\\textbf{Jordan Ayala} and \\textbf{Miguel García}, \`\`Technical analysis strategy optimization using a machine learning approach in stock market indices,'' \\emph{2021 Elsevier}, Knowledge Based Systems.
}
%
`;

const skills = ({skills}) => `
\\explanationdetail{
\\smallskip 
${skills.join('; ')}
}`;

const end = () => `
\\end{document}
`;

module.exports = {
  header,
  section,
  experience,
  education,
  publication,
  skills,
  end,
};
