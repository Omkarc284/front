document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var patientname = document.getElementById("patientname").value;
    var email = document.getElementById("email").value;
    var clinic = document.getElementById("clinic").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var obj = {
        patientname:patientname,
        email:email,
        clinic:clinic,
        phone:phone,
        date:date,
        time:time
    }
    console.log(
        "DATA: ",obj
    )
    alert("Appointment booked successfully!");
});
function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}