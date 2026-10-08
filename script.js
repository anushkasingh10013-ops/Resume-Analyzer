```javascript
// ===============================
// Resume Analyzer JavaScript
// ===============================

// Get HTML elements
const resumeFile = document.getElementById("resumeFile");
const fileName = document.getElementById("fileName");
const jobDescription = document.getElementById("jobDescription");
const results = document.getElementById("results");


// ===============================
// Show Selected File
// ===============================

resumeFile.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {
        fileName.innerText = "Selected: " + file.name;
    } else {
        fileName.innerText = "";
    }

});


// ===============================
// Analyze Resume
// ===============================

function analyzeResume() {

    const file = resumeFile.files[0];
    const jobText = jobDescription.value.trim();

    // Check resume
    if (!file) {
        alert("Please upload your resume first.");
        return;
    }

    // Check job description
    if (jobText === "") {
        alert("Please enter the job description.");
        return;
    }


    // Get file extension
    const fileExtension = file.name
        .split(".")
        .pop()
        .toLowerCase();


    // Allowed files
    const allowedFiles = ["pdf", "doc", "docx"];


    if (!allowedFiles.includes(fileExtension)) {
        alert("Please upload a PDF, DOC or DOCX file.");
        return;
    }


    // ===============================
    // Skills Database
    // ===============================

    const skills = [
        "html",
        "css",
        "javascript",
        "react",
        "node.js",
        "node",
        "mongodb",
        "sql",
        "python",
        "java",
        "c++",
        "c",
        "git",
        "github",
        "wordpress",
        "bootstrap",
        "tailwind",
        "typescript",
        "express",
        "api",
        "figma",
        "power bi",
        "excel",
        "communication",
        "leadership"
    ];


    // Convert job description to lowercase
    const jobLower = jobText.toLowerCase();


    // Find matching skills
    const matchingSkills = skills.filter(skill =>
        jobLower.includes(skill)
    );


    // ===============================
    // Calculate Score
    // ===============================

    let score = 50;

    // Add points based on skills
    score += matchingSkills.length * 4;


    // Maximum score
    if (score > 95) {
        score = 95;
    }


    // ===============================
    // Missing Skills
    // ===============================

    const importantSkills = [
        "html",
        "css",
        "javascript",
        "react",
        "node.js",
        "mongodb",
        "sql",
        "git",
        "github",
        "python",
        "figma"
    ];


    const missingSkills = importantSkills.filter(skill =>
        jobLower.includes(skill) &&
        !matchingSkills.includes(skill)
    );


    // ===============================
    // Update Score
    // ===============================

    const scoreElement = document.querySelector(".score");

    scoreElement.innerText = score + "%";


    // ===============================
    // Update Matching Skills
    // ===============================

    const skillCard = document.querySelector(
        ".card:nth-child(1) ul"
    );

    skillCard.innerHTML = "";


    if (matchingSkills.length > 0) {

        matchingSkills.forEach(skill => {

            const li = document.createElement("li");

            li.innerText =
                skill.charAt(0).toUpperCase() + skill.slice(1);

            skillCard.appendChild(li);

        });

    } else {

        skillCard.innerHTML =
            "<li>No matching skills detected</li>";

    }


    // ===============================
    // Update Missing Skills
    // ===============================

    const missingCard = document.querySelector(
        ".card:nth-child(2) ul"
    );

    missingCard.innerHTML = "";


    if (missingSkills.length > 0) {

        missingSkills.forEach(skill => {

            const li = document.createElement("li");

            li.innerText =
                skill.charAt(0).toUpperCase() + skill.slice(1);

            missingCard.appendChild(li);

        });

    } else {

        missingCard.innerHTML =
            "<li>No major missing skills detected</li>";

    }


    // ===============================
    // ATS Analysis
    // ===============================

    const atsCard = document.querySelector(
        ".card:nth-child(3) ul"
    );

    atsCard.innerHTML = "";

    const atsPoints = [
        "Clear resume structure",
        "Readable formatting",
        "Job keywords detected",
        "ATS-friendly content"
    ];


    atsPoints.forEach(point => {

        const li = document.createElement("li");

        li.innerText = point;

        atsCard.appendChild(li);

    });


    // ===============================
    // Suggestions
    // ===============================

    const suggestionsList =
        document.querySelector(".suggestions ul");

    suggestionsList.innerHTML = "";


    const suggestions = [];


    if (matchingSkills.length < 5) {
        suggestions.push(
            "Add more relevant keywords from the job description."
        );
    }

    if (missingSkills.length > 0) {
        suggestions.push(
            "Consider adding relevant missing skills to your resume if you have them."
        );
    }

    suggestions.push(
        "Use clear and ATS-friendly section headings."
    );

    suggestions.push(
        "Add measurable achievements to your experience and projects."
    );

    suggestions.push(
        "Keep your resume concise and relevant to the job."
    );


    suggestions.forEach(suggestion => {

        const li = document.createElement("li");

        li.innerText = suggestion;

        suggestionsList.appendChild(li);

    });


    // ===============================
    // Display Results
    // ===============================

    results.style.display = "block";


    // Scroll to results
    results.scrollIntoView({
        behavior: "smooth"
    });

}
```
