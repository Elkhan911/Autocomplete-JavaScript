const input = document.querySelector("#_input");
const list = document.querySelector("#_list");

let arr = [
  "Афганистан",
  "Албания",
  "Антарктика",
  "Алжир",
  "Андора",
  "Ангола",
  "Азербайджан",
  "Аргентина",
  "Австралия",
  "Австрия",
  "Бахрейн",
  "Бангладеш",
  "Армения",
  "Барбадос",
  "Бельгия",
  "Бутан",
  "Боливия",
  "Ботсвана",
  "Остров Буве",
  "Бразилия",
  "Белиз",
  "Мьянма",
  "Бурунди",
  "Белоруссия",
  "Камбоджа",
  "Камерун",
  "Канада",
  "Кабо-Верде",
  "Чад",
  "Чили",
  "Колумбия",
  "Коморы",
  "Коста-Рика",
  "Хорватия",
  "Куба",
  "Кипр",
  "Чехия",
  "Бенин",
  "Дания",
  "Доминика",
  "Эквадор",
  "Сальвадор",
  "Эфиопия",
  "Эритрея",
  "Эстония",
  "Франция",
  "Габон",
  "Грузия",
  "Гамбия",
  "Палестина",
  "Германия",
  "Гана",
  "Гибралтар",
  "Кирибати",
  "Греция",
  "Гренландия",
  "Гренада",
  "Гваделупа",
  "Гуам",
  "Гватемала",
  "Гвинея",
  "Гайана",
  "Венгрия",
  "Исландия",
  "Индия",
  "Индонезия",
  "Иран",
  "Ирак",
  "Ирландия",
  "Израиль",
  "Италия",
  "Ямайка",
  "Япония",
  "Казахстан",
  "Иордания",
  "Кения",
  "КНДР",
  "Либерия",
  "Ливия",
  "Лихтенштейн",
  "Литва",
  "Люксембург",
  "Макао",
  "Мадагаскар",
  "Малави",
  "Малайзия",
  "Мальдивы",
  "Мали",
  "Мальта",
  "Мартиника",
  "Мавритания",
  "Маврикий",
  "Мексика",
  "Монако",
  "Монголия",
  "Молдавия",
  "Черногория",
  "Монтсеррат",
  "Марокко",
  "Мозамбик",
  "Оман",
  "Намибия",
  "Науру",
  "Непал",
  "Нидерланды",
  "Кюрасао",
  "Аруба",
  "Никарагуа",
  "Нигер",
  "Нигерия",
  "Ниуэ",
  "Норфолк",
  "Норвегия",
  "Палау",
  "Пакистан",
  "Панама",
  "Португалия",
  "Реюньон",
  "Румыния",
  "Россия",
  "Руанда",
  "Сенегал",
  "Сербия",
  "Сингапур",
  "Словакия",
  "Словения",
  "Сомали",
  "Зимбабве",
  "Испания",
  "Южный Судан",
  "Судан",
  "Суринам",
  "Швеция",
  "Швейцария",
  "Сирия",
  "Таджикистан",
  "Таиланд",
  "Того",
  "Туркмения",
  "Уганда",
  "Украина",
  "Йемен",
  "Замбия",
];

input.addEventListener("input", function () {
  arr.filter(function (elem) {
    if (elem.startsWith(input.value) && input.value !== "") {
      let li = document.createElement("li");
      li.textContent = elem;
      li.classList.add("autocomplete__item");
      list.append(li);
    }
  });
});
