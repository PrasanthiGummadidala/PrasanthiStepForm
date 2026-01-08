const steps = ["step1", "step2", "step3", "step4"];

function showStep(stepNumber) {
    steps.forEach((stepId, index) => {
        document.getElementById(stepId).style.display = (index === stepNumber - 1) ? "block" : "none";
    });

    const stepperItems = document.querySelectorAll(".stepper .step");
    stepperItems.forEach((stepElem, index) => {
        stepElem.classList.toggle("active", index === stepNumber - 1);
    });
}

showStep(1);

/* PERSONAL VALIDATION */
function validatePersonal() {
    let valid = true;
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const dob = document.getElementById("dob");
    const presentAddress = document.getElementById("presentAddress");
    const permanentAddress = document.getElementById("permanentAddress");
    const sameAddress = document.getElementById("sameAddress");

    if (firstName.value.trim() === "") { firstName.nextElementSibling.innerText = "First name is required"; valid = false; } else firstName.nextElementSibling.innerText = "";
    if (lastName.value.trim() === "") { lastName.nextElementSibling.innerText = "Last name is required"; valid = false; } else lastName.nextElementSibling.innerText = "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") { email.nextElementSibling.innerText = "Email is required"; valid = false; } 
    else if (!emailPattern.test(email.value)) { email.nextElementSibling.innerText = "Enter valid email"; valid = false; } 
    else email.nextElementSibling.innerText = "";
    const mobilePattern = /^[6-9]\d{9}$/;
    if (mobile.value.trim() === "") { mobile.nextElementSibling.innerText = "Mobile number is required"; valid = false; } 
    else if (!mobilePattern.test(mobile.value)) { mobile.nextElementSibling.innerText = "Enter valid 10-digit number"; valid = false; } 
    else mobile.nextElementSibling.innerText = "";
    if (dob.value === "") { dob.nextElementSibling.innerText = "Date of birth is required"; valid = false; } else dob.nextElementSibling.innerText = "";
    if (presentAddress.value.trim().length < 10) { presentAddress.nextElementSibling.innerText = "Minimum 10 characters required"; valid = false; } else presentAddress.nextElementSibling.innerText = "";
    if (!sameAddress.checked) {
        if (permanentAddress.value.trim().length < 10) { permanentAddress.nextElementSibling.innerText = "Permanent address is required"; valid = false; } 
        else permanentAddress.nextElementSibling.innerText = "";
    } else permanentAddress.nextElementSibling.innerText = "";

    if (valid) showStep(2);
}

/* EXPERIENCE VALIDATION */
function validateExperience() {
    let valid = true;
    const totalExperience = document.getElementById("totalExperience");
    const companyName = document.getElementById("companyName");
    const designation = document.getElementById("designation");
    const employmentType = document.getElementById("employmentType");
    const joiningDate = document.getElementById("joiningDate");
    const lastWorkingDate = document.getElementById("lastWorkingDate");
    const skills = document.getElementById("skills");

    if (totalExperience.value === "") { totalExperience.nextElementSibling.innerText = "Experience is required"; valid = false; }
    else if (totalExperience.value < 0 || totalExperience.value > 50) { totalExperience.nextElementSibling.innerText = "Enter valid experience (0–50)"; valid = false; }
    else totalExperience.nextElementSibling.innerText = "";
    if (companyName.value.trim() === "") { companyName.nextElementSibling.innerText = "Company name is required"; valid = false; } else companyName.nextElementSibling.innerText = "";
    if (designation.value.trim() === "") { designation.nextElementSibling.innerText = "Designation is required"; valid = false; } else designation.nextElementSibling.innerText = "";
    if (employmentType.value === "") { employmentType.nextElementSibling.innerText = "Select employment type"; valid = false; } else employmentType.nextElementSibling.innerText = "";
    if (joiningDate.value === "") { joiningDate.nextElementSibling.innerText = "Joining date is required"; valid = false; } else joiningDate.nextElementSibling.innerText = "";
    if (lastWorkingDate.value === "") { lastWorkingDate.nextElementSibling.innerText = "Last working date is required"; valid = false; }
    else if (lastWorkingDate.value < joiningDate.value) { lastWorkingDate.nextElementSibling.innerText = "Last working date cannot be before joining date"; valid = false; } 
    else lastWorkingDate.nextElementSibling.innerText = "";
    if (skills.value.trim() === "") { skills.nextElementSibling.innerText = "Skills are required"; valid = false; } else skills.nextElementSibling.innerText = "";

    if (valid) showStep(3);
}

/* EDUCATION VALIDATION */
function validateEducation() {
    let valid = true;
    const qualification = document.getElementById("qualification");
    const degree = document.getElementById("degree");
    const specialization = document.getElementById("specialization");
    const institution = document.getElementById("institution");
    const university = document.getElementById("university");
    const yearOfPassing = document.getElementById("yearOfPassing");
    const percentage = document.getElementById("percentage");
    const mode = document.getElementById("mode");

    if (qualification.value === "Select") { qualification.nextElementSibling.innerText = "Select qualification"; valid = false; } else qualification.nextElementSibling.innerText = "";
    if (degree.value.trim() === "") { degree.nextElementSibling.innerText = "Degree is required"; valid = false; } else degree.nextElementSibling.innerText = "";
    if (specialization.value.trim() === "") { specialization.nextElementSibling.innerText = "Specialization is required"; valid = false; } else specialization.nextElementSibling.innerText = "";
    if (institution.value.trim() === "") { institution.nextElementSibling.innerText = "Institution name is required"; valid = false; } else institution.nextElementSibling.innerText = "";
    if (university.value.trim() === "") { university.nextElementSibling.innerText = "University Name is required"; valid = false; } else university.nextElementSibling.innerText = "";
    if (yearOfPassing.value === "") { yearOfPassing.nextElementSibling.innerText = "Year of passing is required"; valid = false; } 
    else if (yearOfPassing.value < 1950 || yearOfPassing.value > new Date().getFullYear()) { yearOfPassing.nextElementSibling.innerText = "Enter valid year"; valid = false; } 
    else yearOfPassing.nextElementSibling.innerText = "";
    if (percentage.value.trim() === "") { percentage.nextElementSibling.innerText = "Percentage / CGPA is required"; valid = false; } else percentage.nextElementSibling.innerText = "";

    if (valid) showPreview();
}

/* ADD EDUCATION */
function addEducation() {
    const container = document.getElementById("educationContainer");
    const blocks = container.getElementsByClassName("education-block");

    if (blocks.length >= 3) {
        Swal.fire({
            icon: "info",
            title: "Limit Reached",
            text: "You can add maximum 3 educational qualifications only."
        });
        return;
    }

    const clone = document.querySelector(".education-block").cloneNode(true);
    clone.querySelectorAll("input, select").forEach(elem => elem.value = "");
    container.appendChild(clone);
}

/* PREVIEW */
function showPreview() {
    document.getElementById("p_firstName").innerText = document.getElementById("firstName").value;
    document.getElementById("p_lastName").innerText = document.getElementById("lastName").value;
    document.getElementById("p_email").innerText = document.getElementById("email").value;
    document.getElementById("p_mobile").innerText = document.getElementById("mobile").value;
    document.getElementById("p_dob").innerText = document.getElementById("dob").value;
    document.getElementById("p_presentAddress").innerText = document.getElementById("presentAddress").value;
    document.getElementById("p_permanentAddress").innerText = document.getElementById("permanentAddress").value;
    document.getElementById("p_totalExperience").innerText = document.getElementById("totalExperience").value;
    document.getElementById("p_companyName").innerText = document.getElementById("companyName").value;
    document.getElementById("p_designation").innerText = document.getElementById("designation").value;
    document.getElementById("p_employmentType").innerText = document.getElementById("employmentType").value;
    document.getElementById("p_joiningDate").innerText = document.getElementById("joiningDate").value;
    document.getElementById("p_lastWorkingDate").innerText = document.getElementById("lastWorkingDate").value;
    document.getElementById("p_skills").innerText = document.getElementById("skills").value;
    document.getElementById("p_qualification").innerText = document.getElementById("qualification").value;
    document.getElementById("p_degree").innerText = document.getElementById("degree").value;
    document.getElementById("p_specialization").innerText = document.getElementById("specialization").value;
    document.getElementById("p_institution").innerText = document.getElementById("institution").value;
    document.getElementById("p_university").innerText = document.getElementById("university").value;
    document.getElementById("p_yearOfPassing").innerText = document.getElementById("yearOfPassing").value;
    document.getElementById("p_percentage").innerText = document.getElementById("percentage").value;
    document.getElementById("p_mode").innerText = document.getElementById("mode").value;

    showStep(4);
}

/* FINAL SUBMIT */
function submitOnboarding() {
    Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Employee Onboarding Completed Successfully 🎉",
        confirmButtonText: "OK"
    }).then(() => location.reload());
}

/* COPY ADDRESS */
document.getElementById("sameAddress").addEventListener("change", function() {
    if(this.checked) {
        document.getElementById("permanentAddress").value = document.getElementById("presentAddress").value;
    } else {
        document.getElementById("permanentAddress").value = "";
    }
});
