var enabled_dates = [];
async function checkenabled() {
    const response = await fetch("http://68.183.89.222:3120/slots/enabled_dates",{
        method: "GET",
        mode: "*cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
    console.log(response.json())
    return response.json(); // parses JSON response into native JavaScript objects
}
enabled_dates = checkenabled()
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

