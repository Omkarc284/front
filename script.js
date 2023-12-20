var enabled_dates = [];
var data = []
async function checkenabled() {
    const url =`http://68.183.89.222:3120/slots/enabled_data`
    await fetch(url,{
        method: "GET",
        headers: {
            "Content-Type": "text/plain"
        }
    }).then((response) => {
        response.json().then(result => {
            //console.log("obj:",result.enabled)
            enabled_dates = result.enabled
            data = result.data
            console.log(result)
            document.getElementById('date').flatpickr({
                enable: enabled_dates
            })
            document.getElementById('time')
        })
        
    })
 // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    
    // parses JSON response into native JavaScript objects
}
checkenabled()

document.getElementById('date').addEventListener('input', async function(event){
    event.preventDefault();
    var clinic = document.getElementById("clinic").value;
    var date = document.getElementById("date").value;
    var dte = new Date(date).toISOString()
    
    console.log(dte)
    const slot  = data.filter(s => (s.branch == clinic && s.date == dte))
    console.log('Slot: ',slot)
    if(slot.length ==0){
        alert("This clinic has no slots for the day. Change either the clinic or the date")
        document.getElementById('date').value = ''
    }
    document.getElementById("time").removeAttribute('disabled')
    var dynamicSelect = document.getElementById("time");
    var length = dynamicSelect.options.length;
    for (i = length-1; i >= 0; i--) {
        dynamicSelect.options[i] = null;
    }
    if(slot[0].slots.length == 0){
        alert("This clinic has no slots for the day. Change either the clinic or the date")
        document.getElementById('date').value = ''
    }
    slot[0].slots.forEach(t => {
        var newOption = document.createElement("option");
        newOption.text = t;
        newOption.value = t;
        dynamicSelect.add(newOption)
    })

})
document.getElementById('clinic').addEventListener('change', async function(event){
    event.preventDefault();
    var clinic = document.getElementById("clinic").value;
    if(document.getElementById("date").value != '' || undefined || null) {
        var date = document.getElementById("date").value;
        var dte = new Date(date).toISOString()
        
        console.log(dte)
        const slot  = data.filter(s => (s.branch == clinic && s.date == dte))
        console.log('Slot: ',slot)
        if(slot.length ==0){
            alert("This clinic has no slots for the day. Change either the clinic or the date")
            document.getElementById('date').value = ''
        }
        var dynamicSelect = document.getElementById("time");
        var length = dynamicSelect.options.length;
        for (i = length-1; i >= 0; i--) {
            dynamicSelect.options[i] = null;
        }
        if(slot[0].slots.length == 0){
            alert("This clinic has no slots for the day. Change either the clinic or the date")
            document.getElementById('date').value = ''
        }
        slot[0].slots.forEach(t => {
            var newOption = document.createElement("option");
            newOption.text = t;
            newOption.value = t;
            dynamicSelect.add(newOption)
        })

    }
    
})

document.getElementById("appointment-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    var patientname = document.getElementById("patientname").value;
    var email = document.getElementById("email").value;
    var clinic = document.getElementById("clinic").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var obj = {
        'name':patientname,
        'email':email,
        'branch':clinic,
        'phoneNumber':phone,
        'date':date,
        'timeSlot':time
    }
    const url =`http://68.183.89.222:3120/appointments/new`
    await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then((response) => {
        response.json().then(result => {
            console.log("obj:",result)
            alert("Appointment booked successfully!\nCheck your email inbox for confirmation at ",email);
            window.location.reload()
        })
        
    }).catch(err =>{
        alert("Something went wrong! \n Error: \n ", err);
        window.location.reload();
    })
    console.log(obj)
    
});
function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}

