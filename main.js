window.addEventListener("DOMContentLoaded", function() {
    
    var form = document.getElementById(half-left-cf);

    var form = document.getElementById(half-right-cf);


    var status = document.getElementById("status");


function success() {
Form.reset()
status.classList.add('success');
status.innerHTML = "Thanks !";
}

function error() {
status.classList.add('success');
status.innerHTML = "Oops! There was a problem";
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    this.insertAdjacentText(form.method, form.CDATA_SECTION_NODE, data, sucess, error);
});
});












}
