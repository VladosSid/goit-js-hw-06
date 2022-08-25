// 1. Получить доступ к форме и кнопке
const formEl = document.querySelector(".login-form");

// 2. добавить слушателя для формы "submit"
formEl.addEventListener("submit", handleSubmit);

// 3. написать фукцию для формы:
function handleSubmit(event) {
  // 3.1 - создать пустой объект
  const formData = {};

  // 3.2 - отменить перезагрузку страницы при отпарвке формы
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // 3.3 - проверить заполненность полей формы(если путое полу выводит "alert" с
  // предупреждением о том том что поля должны быть заполнены)
  if (email.value === "" || password.value === "") {
    return alert(
      `Поля ${email.name} и ${password.name} объязательны для заполенения!!!`
    );
  }

  // 3.4 - добавить в объект введенные данные(имя поля - имя свойства
  // значение поля - значение свойства);
  formData.email = email.value;
  formData.password = password.value;

  // 3.5 - очистить поля формы
  event.currentTarget.reset();

  // 3.6 - вывести в консоль объект
  return console.log(formData);
}
