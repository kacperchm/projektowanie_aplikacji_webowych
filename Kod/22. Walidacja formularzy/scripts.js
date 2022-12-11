window.onload = function () {
  let existUserName = ['admin', 'user'];
  let userNameInput = document.getElementById('username');
  let usernameError = document.getElementById('username-error')

  document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();
      if(validUser()) {
          window.alert('Poprawnie wysłany formularz');
      }
  });


    function validUser() {
      let userValid = true;
      if(!checkRequiredInput(userNameInput)) {
          userValid = false;
          setErrorText('Podaj nazwę użytkownika!')
      } else if (!checkMinMaxLenght(userNameInput, 3, 12)) {
          userValid = false;
          setErrorText('Nazwa użytkownika powinna zawierać od 3 do 12 znaków!')
      } else if (checkExistUsername(userNameInput)) {
          userValid = false;
          setErrorText('Nazwa użytkownika już istnieje!')
      } else {
          usernameError.setAttribute('hidden','')
      }
      return userValid;
  }

    function checkRequiredInput(input) {
       return  input.value.length > 0;
    }

    function checkMinMaxLenght(input, min, max) {
        return input.value.length >= min && input.value.length <= max;
    }

    function checkExistUsername(input) {
        return existUserName.includes(input.value);
    }

    function setErrorText(msg) {
        usernameError.textContent = msg;
        usernameError.removeAttribute('hidden')
    }
};