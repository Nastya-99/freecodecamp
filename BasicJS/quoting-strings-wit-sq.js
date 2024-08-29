// ❓ DESCRIPTION:

//Измените предоставленную строку на строку с одинарными кавычками в начале и конце и без экранирующих символов.

// Прямо сейчас <a>тег в строке использует двойные кавычки везде. Вам нужно будет изменить внешние кавычки на одинарные, чтобы вы могли удалить экранирующие символы.

//const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

// ✅ SOLUTION:

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);