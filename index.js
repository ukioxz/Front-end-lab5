
let confirmBtn = document.querySelector('.button-confirm');
let info = document.querySelector('.inputInfo');

confirmBtn.addEventListener('click', (event) => {
  let fullName = document.getElementById('full_name').value;
  let nameGroup = document.getElementById('group').value;
  let nameFaculty = document.getElementById('faculty').value;
  let nameAddress = document.getElementById('address').value;
  let nameTelegram = document.getElementById('telegram').value;

  document.getElementById("show-name").innerHTML = fullName;
  document.getElementById("show-group").innerHTML = nameGroup;
  document.getElementById("show-faculty").innerHTML = nameFaculty;
  document.getElementById("show-address").innerHTML = nameAddress;
  document.getElementById("show-telegram").innerHTML = nameTelegram;

  info.style.display = "block";
})
