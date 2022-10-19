let confirmBtn = document.querySelector('.button-confirm');
let info = document.querySelector('.inputInfo');

confirmBtn.addEventListener('click', (event) => {
  let fullName = document.getElementById('full_name').value;
  let nameGroup = document.getElementById('group').value;
  let nameFaculty = document.getElementById('faculty').value;
  let nameAddress = document.getElementById('address').value;
  let nameTelegram = document.getElementById('telegram').value;
  let testAddress = /^(?!(м\.))*[а-яґєіїА-ЯҐЄІЇ]+$/;

  if (fullName != null && fullName.length < 3 ){
    alert('Заповніть поле "ПІБ"');
    return false;
  } else if (nameGroup != null && nameGroup.length < 4  || nameGroup.length > 4 ){
  alert('Заповніть назву групи');
  return false;
} else if (testAddress.test(nameAddress)){
alert('Заповніть адресу');
return false;
}else {
  document.getElementById("show-name").innerHTML = fullName;
  document.getElementById("show-group").innerHTML = nameGroup;
  document.getElementById("show-faculty").innerHTML = nameFaculty;
  document.getElementById("show-address").innerHTML = nameAddress;
  document.getElementById("show-telegram").innerHTML = nameTelegram;
}


//  document.getElementById("show-name").innerHTML = fullName;
//  document.getElementById("show-group").innerHTML = nameGroup;
//  document.getElementById("show-faculty").innerHTML = nameFaculty;
//  document.getElementById("show-address").innerHTML = nameAddress;
//  document.getElementById("show-telegram").innerHTML = nameTelegram;

  info.style.display = "block";
})
