const steps = ["step1", "step2", "step3", "step4"];

function showStep(stepNumber) {
    steps.forEach((stepId, index) => {
        document.getElementById(stepId).style.display = (index === stepNumber - 1) ? "block" : "none";
        document.getElementById(stepId).classList.toggle("active", index === stepNumber - 1);
    });

    const stepperItems = document.querySelectorAll(".stepper .step");
    stepperItems.forEach((stepElem, index) => {
        stepElem.classList.toggle("active", index === stepNumber - 1);
    });
}

function validatePersonal() {
    let valid = true;
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");
    const presentAddress = document.getElementById("presentAddress");
    const permanentAddress = document.getElementById("permanentAddress");
    const sameAddress = document.getElementById("sameAddress");

    if (firstName.value.trim() === "") {
        firstName.nextElementSibling.innerText = "First name is required";
        valid = false;
    } else firstName.nextElementSibling.innerText = "";
    if (lastName.value.trim() === "") {
        lastName.nextElementSibling.innerText = "Last name is required";
        valid = false;
    } else lastName.nextElementSibling.innerText = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        email.nextElementSibling.innerText = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        email.nextElementSibling.innerText = "Enter valid email";
        valid = false;
    } else email.nextElementSibling.innerText = "";

    const mobilePattern = /^[6-9]\d{9}$/;
    if (mobile.value.trim() === "") {
        mobile.nextElementSibling.innerText = "Mobile number is required";
        valid = false;
    } else if (!mobilePattern.test(mobile.value)) {
        mobile.nextElementSibling.innerText = "Enter valid 10-digit number";
        valid = false;
    } else mobile.nextElementSibling.innerText = "";

    if (gender.value === "") {
        gender.nextElementSibling.innerText = "Please select gender";
        valid = false;
    } else gender.nextElementSibling.innerText = "";

    if (dob.value === "") {
        dob.nextElementSibling.innerText = "Date of birth is required";
        valid = false;
    } else dob.nextElementSibling.innerText = "";
    if (presentAddress.value.trim().length < 10) {
        presentAddress.nextElementSibling.innerText = "Minimum 10 characters required";
        valid = false;
    } else presentAddress.nextElementSibling.innerText = "";

    if (!sameAddress.checked) {
        if (permanentAddress.value.trim().length < 10) { permanentAddress.nextElementSibling.innerText = "Permanent address is required"; valid = false; }
        else permanentAddress.nextElementSibling.innerText = "";
    } else permanentAddress.nextElementSibling.innerText = "";

    if (valid)
        showStep(2);
}

function validateExperience() {
    let valid = true;

    const totalExperience = document.getElementById("totalExperience1");
    const companyName = document.getElementById("companyName1");
    const designation = document.getElementById("designation1");
    const employmentType = document.getElementById("employmentType1");
    const joiningDate = document.getElementById("joiningDate1");
    const lastWorkingDate = document.getElementById("lastWorkingDate1");
    const skills = document.getElementById("skills1");

    if (totalExperience.value === "") {
        totalExperience.nextElementSibling.innerText = "Experience is required";
        valid = false;
    } else if (totalExperience.value < 0 || totalExperience.value > 50) {
        totalExperience.nextElementSibling.innerText = "Enter valid experience (0–50)";
        valid = false;
    } else totalExperience.nextElementSibling.innerText = "";

    if (companyName.value.trim() === "") {
        companyName.nextElementSibling.innerText = "Company name is required"; valid = false;
    }
    else companyName.nextElementSibling.innerText = "";

    if (designation.value.trim() === "") {
        designation.nextElementSibling.innerText = "Designation is required"; valid = false;
    } else designation.nextElementSibling.innerText = "";

    if (employmentType.value === "") {
        employmentType.nextElementSibling.innerText = "Select employment type";
        valid = false;
    } else employmentType.nextElementSibling.innerText = "";

    if (joiningDate.value === "") {
        joiningDate.nextElementSibling.innerText = "Joining date is required"; valid = false;
    } else joiningDate.nextElementSibling.innerText = "";

    if (lastWorkingDate.value === "") {
        lastWorkingDate.nextElementSibling.innerText = "Last working date is required";
        valid = false;
    } else if (lastWorkingDate.value < joiningDate.value) {
        lastWorkingDate.nextElementSibling.innerText = "Last working date cannot be before joining date";
        valid = false;
    } else lastWorkingDate.nextElementSibling.innerText = "";

    if (skills.value.trim() === "") {
        skills.nextElementSibling.innerText = "Skills are required"; valid = false;
    } else skills.nextElementSibling.innerText = "";

    if (valid) showStep(3);
}

function addExperience() {
    const container = document.getElementById("experienceContainer");
    const blocks = container.getElementsByClassName("experience-block");
    const blockNum = blocks.length + 2;

    const clone = document.querySelector("#exp-block-1").cloneNode(true);
    clone.id = `exp-block-${blockNum}`;
    clone.classList.add("optional-block");
    clone.querySelector('h4').innerHTML = `Experience ${blockNum - 1}`;

    clone.querySelectorAll('.req').forEach(req => req.remove());

    clone.querySelectorAll("input, select").forEach(elem => {
        const oldId = elem.id;
        elem.id = oldId.replace('1', blockNum);
        elem.value = "";
        elem.required = false;
        const error = elem.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.innerText = "";
        }
    });

    container.appendChild(clone);
}

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

    if (qualification.value === "") {
        qualification.nextElementSibling.innerText = "Select qualification";
        valid = false;
    } else qualification.nextElementSibling.innerText = "";
    if (degree.value.trim() === "") {
        degree.nextElementSibling.innerText = "Degree is required"; 
        valid = false;
    } else degree.nextElementSibling.innerText = "";
    if (specialization.value.trim() === "") {
        specialization.nextElementSibling.innerText = "Specialization is required";
        valid = false;
    } else specialization.nextElementSibling.innerText = "";
    if (institution.value.trim() === "") {
        institution.nextElementSibling.innerText = "Institution name is required";
        valid = false;
    } else institution.nextElementSibling.innerText = "";
    if (university.value.trim() === "") {
        university.nextElementSibling.innerText = "University Name is required";
        valid = false;
    } else university.nextElementSibling.innerText = "";
    if (yearOfPassing.value === "") {
        yearOfPassing.nextElementSibling.innerText = "Year of passing is required";
        valid = false;
    } else if (yearOfPassing.value < 1950 || yearOfPassing.value > new Date().getFullYear()) {
        yearOfPassing.nextElementSibling.innerText = "Enter valid year";
        valid = false;
    } else yearOfPassing.nextElementSibling.innerText = "";
    if (percentage.value.trim() === "") {
        percentage.nextElementSibling.innerText = "Percentage / CGPA is required";
        valid = false;
    } else percentage.nextElementSibling.innerText = "";
    if (mode.value === "") {
        mode.nextElementSibling.innerText = "Select mode of study";
        valid = false;
    } else mode.nextElementSibling.innerText = "";

    if (valid)
        showPreview();
}

function addEducation() {
    const container = document.getElementById("educationContainer");
    const blocks = document.querySelectorAll(".education-block");
    const blockNum = blocks.length + 1;

    const clone = document.querySelector("#edu-block-1").cloneNode(true);
    clone.id = `edu-block-${blockNum}`;
    clone.classList.add("optional-block");

    // REMOVE PRIMARY QUALIFICATION HEADING
    const oldHeading = clone.querySelector("h4");
    if (oldHeading) oldHeading.remove();

    //  ADD NEW OPTIONAL HEADING
    const newHeading = document.createElement("h4");
    newHeading.innerHTML = `Qualification ${blockNum - 1}`;
    clone.insertBefore(newHeading, clone.firstChild);

    
    clone.querySelectorAll("input, select").forEach(elem => {
        elem.value = "";
        elem.required = false;
        elem.id = elem.id + blockNum;

        const error = elem.nextElementSibling;
        if (error && error.classList.contains("error")) {
            error.innerText = "";
        }
    });

    clone.querySelectorAll(".req").forEach(r => r.remove());
    container.appendChild(clone);
}


function showPreview() {
    // Personal
    document.getElementById("p_firstName").innerText = document.getElementById("firstName").value || "-";
    document.getElementById("p_lastName").innerText = document.getElementById("lastName").value || "-";
    document.getElementById("p_email").innerText = document.getElementById("email").value || "-";
    document.getElementById("p_mobile").innerText = document.getElementById("mobile").value || "-";
    document.getElementById("p_gender").innerText = document.getElementById("gender").value || "-";
    document.getElementById("p_dob").innerText = document.getElementById("dob").value || "-";
    document.getElementById("p_presentAddress").innerText = document.getElementById("presentAddress").value || "-";
    document.getElementById("p_permanentAddress").innerText = document.getElementById("permanentAddress").value || "-";

    // Experiences
    const expBlocks = document.querySelectorAll('.experience-block');
    let expPreview = "";
    expBlocks.forEach((block, index) => {
        const company = block.querySelector('[id*="companyName"]')?.value;
        if (company && company.trim() !== "") {
            const totalExp = block.querySelector('[id*="totalExperience"]')?.value || "N/A";
            const designation = block.querySelector('[id*="designation"]')?.value || "N/A";
            const empType = block.querySelector('[id*="employmentType"]')?.value || "N/A";
            const skills = block.querySelector('[id*="skills"]')?.value || "N/A";

            expPreview += `
                <div class="preview-exp-block">
                    <h5>Experience ${index + 1}</h5>
                    <p><strong>Company:</strong> ${company}</p>
                    <p><strong>Designation:</strong> ${designation}</p>
                    <p><strong>Total Experience:</strong> ${totalExp} years</p>
                    <p><strong>Type:</strong> ${empType}</p>
                    <p><strong>Skills:</strong> ${skills}</p>
                </div>
            `;
        }
    });
    document.getElementById("p_experiences").innerHTML = expPreview || "<p>No experience added</p>";

    // Educations
    const eduBlocks = document.querySelectorAll('.education-block');
    let eduPreview = "";
    eduBlocks.forEach((block, index) => {
        const degree = block.querySelector('[id*="degree"]')?.value;
        if (degree && degree.trim() !== "") {
            const qual = block.querySelector('[id*="qualification"]')?.value || "N/A";
            const spec = block.querySelector('[id*="specialization"]')?.value || "N/A";
            const inst = block.querySelector('[id*="institution"]')?.value || "N/A";
            const uni = block.querySelector('[id*="university"]')?.value || "N/A";
            const year = block.querySelector('[id*="yearOfPassing"]')?.value || "N/A";
            const perc = block.querySelector('[id*="percentage"]')?.value || "N/A";

            eduPreview += `
                <div class="preview-edu-block">
                    <h5>Qualification ${index + 1}</h5>
                    <p><strong>Degree:</strong> ${degree}</p>
                    <p><strong>Qualification:</strong> ${qual}</p>
                    <p><strong>Specialization:</strong> ${spec}</p>
                    <p><strong>Institution:</strong> ${inst}</p>
                    <p><strong>University:</strong> ${uni}</p>
                    <p><strong>Year:</strong> ${year}</p>
                    <p><strong>Percentage:</strong> ${perc}</p>
                </div>
            `;
        }
    });
    document.getElementById("p_educations").innerHTML = eduPreview || "<p>No education added</p>";

    showStep(4);
}

function submitOnboarding() {
    Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Employee Onboarding Completed Successfully 🎉",
        confirmButtonText: "OK"
    }).then(() => location.reload());
}

document.getElementById("sameAddress").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("permanentAddress").value = document.getElementById("presentAddress").value;
    } else {
        document.getElementById("permanentAddress").value = "";
    }
});

// Initialize
showStep(1);
