let lastName = ""
let textField = document.getElementById("last-name")
let proof = document.getElementById("proof")
let listItems = document.getElementsByClassName("list-item")

textField.addEventListener("keyup", instantUpdate);

function instantUpdate() {
    lastName = textField.value;
    proof.innerText = lastName;
    Array.from(listItems).forEach(element => {
        console.log(element.dataset.start)
        element.style.display = "none"
        if (lastName.match(new RegExp(element.dataset.start-element.dataset.end))) {
            element.style.display = "inline"
        }
    });
}