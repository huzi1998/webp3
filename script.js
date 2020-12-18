const indicator = document.querySelector(".indicator");
const input = document.querySelector(".in");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");


const pswrd_2 = document.querySelector("#pswrd_2");
const errorText = document.querySelector(".error-text");
const btn = document.querySelector(".btn");


//random password
btn1 = document.querySelector(".btn1");

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
btn1.onclick = () => {
    let i,
        randomPassword = "";

    for (i = 0; i < 16; i++) {
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    input.value = randomPassword;
    //console.log(input);
    active();
    trigger();
}

function active() {
    if (input.value.length >= 6) {
        btn.removeAttribute("disabled", "");
        btn.classList.add("active");
        pswrd_2.removeAttribute("disabled", "");
    } else {
        btn.setAttribute("disabled", "");
        btn.classList.remove("active");
        pswrd_2.setAttribute("disabled", "");
    }
}

btn.onclick = function() {


    var title = document.getElementById('title');
    var username = document.getElementById('username');
    var Url = document.getElementById('Url');

    if (title == "") {
        errorText.style.display = "block";
        errorText.classList.remove("matched");
        errorText.textContent = "Error! enter tirle";
        return false;
    } else if (username == "") {
        errorText.style.display = "block";
        errorText.classList.remove("matched");
        errorText.textContent = "Error! enetr username";
        return false;
    } else if (Url == "") {
        errorText.style.display = "block";
        errorText.classList.remove("matched");
        errorText.textContent = "Error! enetr url or enetr valid url";
        return false;
    } else if (input.value != pswrd_2.value) {
        errorText.style.display = "block";
        errorText.classList.remove("matched");
        errorText.textContent = "Error! Confirm Password Not Match";
        return false;
    }
}


let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function trigger() {
    if (input.value != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        active();
        if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
        if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
        if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;
        if (no == 1) {
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Your password is too week";
            text.classList.add("weak");
        }
        if (no == 2) {
            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if (no == 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        showBtn.style.display = "block";
        showBtn.onclick = function() {
            if (input.type == "password") {
                input.type = "text";
                showBtn.textContent = "HIDE";
                showBtn.style.color = "#23ad5c";
            } else {
                input.type = "password";
                showBtn.textContent = "SHOW";
                showBtn.style.color = "#000";
            }
        }
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
        showBtn.style.display = "none";
    }

    if (input.value.length >= 6) {
        btn.removeAttribute("disabled", "");
        btn.classList.add("active");
        pswrd_2.removeAttribute("disabled", "");
    } else {
        btn.setAttribute("disabled", "");
        btn.classList.remove("active");
        pswrd_2.setAttribute("disabled", "");
    }

}

function active_2() {
    if (pswrd_2.value != "") {
        showBtn.style.display = "block";
        showBtn.onclick = function() {
            if ((input.type == "password") && (pswrd_2.type == "password")) {
                input.type = "text";
                pswrd_2.type = "text";
                this.textContent = "Hide";
                this.classList.add("active");
            } else {
                input.type = "password";
                pswrd_2.type = "password";
                this.textContent = "Show";
                this.classList.remove("active");
            }
        }
    } else {
        showBtn.style.display = "none";
    }
}


function myFun() {
    var input, filter, table, tr, td, i, txtValue;
    console.log("asa")
    input = document.getElementById("sear");
    console.log(input.value);
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    console.log(table.value);

    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        console.log(tr[i]);
        console.log(tr.length);
        console.log(td);

        if (td) {
            console.log(td);

            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}