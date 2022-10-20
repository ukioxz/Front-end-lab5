let confirmBtn = document.querySelector('.button-confirm');
let info = document.querySelector('.inputInfo');
let myCell = document.getElementById('myVariant');
let fullNameInput = document.getElementById('full_name');

const allChar ="0123456789ABCDEF";
let changeColorCell = document.querySelector('.color-cell');
let dblclickCell1 = document.getElementById('dblCell1');
let dblclickCell2 = document.getElementById('dblCell2');

const confirmedInfo = () => {
  fullNameInput.style.border = "2px solid black";
}

confirmBtn.addEventListener('click', (event) => {
  let fullName = document.getElementById('full_name').value;
  let nameGroup = document.getElementById('group').value;
  let nameFaculty = document.getElementById('faculty').value;
  let nameAddress = document.getElementById('address').value;
  let nameTelegram = document.getElementById('telegram').value;

  let testAddress = /^(?!(м\.))*[а-яґєіїА-ЯҐЄІЇ]+$/;
  let testTelegram = /^(?!(@))*[а-яґєіїА-ЯҐЄІЇ]+$/;

  if (fullName != null && fullName.length < 3 ){
    alert('Заповніть поле "ПІБ"');
    fullNameInput.style.border = "2px solid red";
    return false;

  }else if (nameGroup != null && nameGroup.length < 4  || nameGroup.length > 4 ){
    alert('Заповніть назву групи');
    return false;

  } else if (testAddress.test(nameAddress)){
    alert('Неправильна адреса');
    return false;

  }else if (nameAddress != null && nameAddress.length < 3){
    alert('Заповніть адресу');
    return false;

  }else if (nameFaculty != null && nameFaculty.length < 2){
    alert('Заповніть назву факультету');
    return false;

  }else if (testTelegram.test(nameTelegram)){
    alert('Неправильний нікнейм');
    return false;

  }else if (nameTelegram != null && nameTelegram.length < 2){
    alert('Заповніть нікнейм');
    return false;

  }else{
    document.getElementById("show-name").innerHTML = fullName;
    document.getElementById("show-group").innerHTML = nameGroup;
    document.getElementById("show-faculty").innerHTML = nameFaculty;
    document.getElementById("show-address").innerHTML = nameAddress;
    document.getElementById("show-telegram").innerHTML = nameTelegram;
    confirmedInfo();
}
  info.style.display = "block";
});

const randomSetColorBack = () => {
  let randomColor = '';
  for(let i = 0; i < 6; i++){
    randomColor += allChar[Math.floor(Math.random()*16)];
  }
  myCell.style.background = "#"+randomColor;
};

const randomSetColorFont = () => {
  let randomColor = '';
  for(let i = 0; i < 6; i++){
    randomColor += allChar[Math.floor(Math.random()*16)];
  }
  myCell.style.color = "#"+randomColor;
};

myCell.addEventListener('click', (event) => {
  let colorInput = document.querySelector('.color-cell').value;
  myCell.style.background = colorInput;
});

myCell.addEventListener('dblclick', (event) => {
  let colorInput = document.querySelector('.color-cell').value;
  myCell.style.background = colorInput;
  dblclickCell1.style.background = colorInput;
  dblclickCell2.style.background = colorInput;
});

myCell.addEventListener('mouseover', randomSetColorBack);
myCell.addEventListener('mouseover', randomSetColorFont);
