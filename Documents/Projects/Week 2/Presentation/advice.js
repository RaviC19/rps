const div = document.createElement("div");
document.body.appendChild(div);
document.body.insertBefore(div, document.body.firstChild);
div.classList.add("quotes");

fetch("https://api.adviceslip.com/advice", {
  headers: {
    Accept: "application/json"
  }
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    addData(data);
  });

function addData(data) {
  let random = document.getElementsByClassName("quotes");
  div.innerText = data.slip.advice;
}

function addMoreData() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      addData(data);
    });
}

let btn = document.getElementById("button");
btn.addEventListener("click", addMoreData);
