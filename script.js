function run() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value

    //    ===========
    document.getElementById("username").style.border = ""
    document.getElementById("userValid").innerHTML = ""

    document.getElementById("email").style.border = ""
    document.getElementById("emailValid").innerHTML = ""

    document.getElementById("msg").style.border = ""
    document.getElementById("msgValid").innerHTML = ""
    //    ===========

    let isValid = true

    if (username === "") {
        document.getElementById("username").style.border = "1px solid red"
        document.getElementById("userValid").innerHTML = "This filed Requied"
        isValid = false
    }


    if (email === "") {
        document.getElementById("email").style.border = "1px solid red"
        document.getElementById("emailValid").innerHTML = "This filed Requied"
        isValid = false
    }


    if (msg === "") {
        document.getElementById("msg").style.border = "1px solid red"
        document.getElementById("msgValid").innerHTML = "This filed Requied"
        isValid = false
    }

    if (isValid) {

        let feedbackData = {
            username: username,
            email: email,
            msg: msg
        }
        console.log(feedbackData)

        alert("Form has been submited Thankyou 😀")

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("msg").value = ""
    }
};