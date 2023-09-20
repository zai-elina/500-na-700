export const validateForm = () => {
  const email = document.forms["subscribe"]["email"].value;
  const date = document.forms["subscribe"]["date"].value;
  const time = document.forms["subscribe"]["time"].value;
  const phone = document.forms["subscribe"]["telephone"].value;

  if (email == "") {
    alert("Пожалуйста, введите вашу электронную почту.");
    return false;
  }
  if (date == "") {
    alert("Пожалуйста, введите дату.");
    return false;
  }
  if (time == "") {
    alert("Пожалуйста, введите время.");
    return false;
  }
  if (phone == "") {
    alert("Пожалуйста, введите ваш номер телефона.");
    return false;
  }
  return true;
};
