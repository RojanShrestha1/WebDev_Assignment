function createCard() {
    let username = document.getElementById("username").value;
    let fullname = document.getElementById("fullname").value;
    let initials = document.getElementById("initials").value;
    let subjects = document.getElementById("subjects").value;
    let projects = document.getElementById("projects").value;
    let grade = document.getElementById("grade").value;
    let studentClass = document.getElementById("class").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;
    let address = document.getElementById("address").value;


    document.getElementById("card-username").innerText = username;
    document.getElementById("card-fullname").innerText = fullname;
    document.getElementById("card-initials").innerText = initials;
    document.getElementById("card-subjects").innerText = subjects;
    document.getElementById("card-projects").innerText = projects;
    document.getElementById("card-grade").innerText = grade;
    document.getElementById("card-class").innerText = studentClass;
    document.getElementById("card-roll").innerText = roll;
    document.getElementById("card-section").innerText = section;
    document.getElementById("card-address").innerText = address;

   
    document.getElementById("form-box").style.display = "none";
    document.getElementById("id-card").style.display = "block";
}
