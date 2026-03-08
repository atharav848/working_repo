let Add_Student = document.querySelector(".Add_Student");
var index = 1;
var present_index = 0;
var absent_index = 0;

Add_Student.addEventListener("click", function () {
  let Student_name = document.querySelector("#Student_name").value;
  if (Student_name === "") return;

  let tr = document.createElement("tr");

  let Roll_no = document.createElement("td");
  let Name = document.createElement("td");
  let Status = document.createElement("td");

  Roll_no.innerHTML = index;
  Name.innerHTML = Student_name;

  // default present
  Status.innerHTML = "Present";
  Status.classList.add("Present");

  Roll_no.style.textAlign = "center";
  Name.style.textAlign = "center";

  // add student = present
  present_index++;

  let check_present = true;

  Status.addEventListener("click", function () {
    if (check_present) {
      // Present → Absent
      Status.innerHTML = "Absent";
      Status.classList.remove("Present");
      Status.classList.add("Absent");

      present_index--;
      absent_index++;

      check_present = false;
    } else {
      // Absent → Present
      Status.innerHTML = "Present";
      Status.classList.remove("Absent");
      Status.classList.add("Present");

      absent_index--;
      present_index++;

      check_present = true;
    }

    // update summary on click
    document.querySelector("#present").innerHTML = present_index;
    document.querySelector("#absent").innerHTML = absent_index;
  });

  tr.appendChild(Roll_no);
  tr.appendChild(Name);
  tr.appendChild(Status);

  document.querySelector("#Table_Body").appendChild(tr);

  document.querySelector("#Student_name").value = "";

  // summary
  document.querySelector("#total").innerHTML = index;
  document.querySelector("#present").innerHTML = present_index;
  document.querySelector("#absent").innerHTML = absent_index;

  //   Refresh ALL Code

  let Refresh = document.querySelector(".Refresh_Student");
  Refresh.onclick = function () {
    result = confirm("Are you Shower to Delete All Presenti..!");
    if (result == true) {
      document.querySelector("#Table_Body").innerHTML = "";
      index = 1;
      present_index = 0;
      absent_index = 0;

      document.querySelector("#total").innerHTML = "";
      document.querySelector("#present").innerHTML = "";
      document.querySelector("#absent").innerHTML = "";
    } else {
      alert("Deletion Cancelled!");
    }
  };

  index++;
});
//   save Attendence
let Save_Attendence = document.querySelector("#Save_Attendence");
Save_Attendence.addEventListener("click", function () {
  alert("❌ Server error! Check your PHP connection or config.php.");
});
