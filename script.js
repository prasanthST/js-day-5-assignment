  const resumeData = {
    "name": "prasanth S",
    "title": "Full Stack Developer",
    "email": "casinoprasanth@gmail.com",
    "phone": "6382389703",
    "experience": [
      {
        "position": "Back End Developer",
        "company": "Webnexs",
        "duration": "Internship",
        "responsibilities": [
          "Analyzed large datasets to identify trends and patterns",
          "Created visualizations using tools like Tableau",
          "Collaborated with cross-functional teams to drive data-driven decisions"
        ]
      },
      {
        "position": "Junior java developer",
        "company": "Webnexs",
        "duration": "2023 - 2024",
        "responsibilities": [
          "Cleaned and transformed raw data for analysis",
          "Assisted in building predictive models",
          "Generated reports for stakeholders"
        ]
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Technology",
        "university": "Dr MGR Education and Research Instuite ",
        "graduationYear": 2023
      }
    ],
    "skills": [
      "HTML 5",
      "Css",
      "JavaScript",
      
    ]
  }
 //for in  
 for (const key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(`${key}: ${resumeData[key]}`);
  }
} 

// for loop
  for (let i = 0; i < resumeData.education.length; i++) {
    const educationlevel = resumeData.education[i];
    console.log(`Degree: ${educationlevel.degree}, University: ${educationlevel.university}`);
  }

  
  // for of 
  for (const skill of resumeData.skills) {
    console.log(`Skill: ${skill}`);
  }
  
  
resumeData.experience.forEach(experiencelevel => {
  console.log(` Company:${experiencelevel.company}  Position: ${experiencelevel.position} Duration: ${experiencelevel.duration}`);
  
});


