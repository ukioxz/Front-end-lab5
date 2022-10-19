
let confirmBtn = document.querySelector('.button-confirm');
let info = document.querySelector('.inputInfo');

confirmBtn.addEventListener('click', (event) => {
  let fullName = document.getElementById('full_name').value;
  document.getElementById("name").innerHTML = fullName;
  info.style.display = "block";
  console.log(fullName)
})
