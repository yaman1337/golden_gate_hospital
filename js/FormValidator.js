const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const problem = document.querySelector('#problem');
const description = document.querySelector('#description');
const sendBtn = document.querySelector('#sendBtn');

// validate form on click
sendBtn.addEventListener('click', () => {
    // checking if the fields are empty
    if (!fullname.value || !email.value || !phone.value || !problem.value || !description.value) {
        return alert("Please fill all the fields");
    } else {
        // doing a regex validation check for email
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
            return true
        } else {
            alert("Please enter a valid email.")
            email.value = ""
            return false
        }
    }
})