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

const experience = () => `%
    \\datedexperience{BairesDev}{March 2022 - February 2024}
    \\explanation{Technical Lead}{Remote, USA}
    \\explanationdetail{
    \\smallskip
     \\coloredbullet\\ %
     As a Technical Lead, I provided leadership and mentorship to a team of engineers in the refinement and optimization of a package logistics platform.

     \\smallskip 
    \\coloredbullet\\ %
     Consolidated multiple data sources to the Google Big Query Platform, allowing efficient analytical and operational reporting, leading to a 60\\% reduction in query times.

    \\smallskip 
    \\coloredbullet\\ %
    Collaborated with cross-functional teams in multiple business verticals, ranging from billing, to inbound and outbound logistics.

    \\smallskip 
    \\coloredbullet\\ %
    Spearheaded technical planning to reduce tech debt and adopt a culture of continuous improvement.

    
     \\smallskip
     }`;

const education = () => `
%
\\datedexperience{Bachelor of Engineering - Software Engineering}{Feb 2012 - Dec 2016}
\\explanation{Universidad Nacional de Asunción}{Asunción, Paraguay} 
\\explanation{GPA 3.68. Received a Full Tuition Scholarship for Academic Performance.}{}
\\explanation{Thesis on intelligent stock market trading systems was published on a major scientific journal.}{}
%
`;

const publication = () => `
%
\\explanationdetail{
\\smallskip 
\\textbf{Jordan Ayala} and \\textbf{Miguel García}, "Technical analysis strategy optimization using a machine learning approach in stock market indices," \\emph{2021 Elsevier}, Knowledge Based Systems.
}
%
`;

const skills = () => `
\\explanationdetail{
\\smallskip 
Strategic planning; warehouse logistics; package logistics; stakeholder communication; technical leadership; scrum; e-commerce; Python; Kotlin; Java; JavaScript; TypeScript; GoLang; Rust; SQL; Shopify; Kafka; AWS; GCP; Tensorflow; Machine Learning; React Native; React; Next.js; Spring; MySql; Redis; Mongo
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
