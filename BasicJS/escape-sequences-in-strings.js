// ❓ DESCRIPTION:

// Присвойте следующие три строки текста одной переменной, myStrиспользуя escape-последовательности.
//
// Первая линия
//     \Вторая строка
// Третья линия

//myStr не должно содержать пробелов
// Ожидающий :myStr должны содержать строки FirstLine, SecondLine и ThirdLine(помните о чувствительности к регистру)
// Ожидающий :FirstLine должен сопровождаться символом новой строки\n
// Ожидающий :myStr должен содержать символ табуляции \t, следующий за символом новой строки
// Ожидающий :SecondLine должен предшествовать символ обратной косой черты\
// Ожидающий :SecondLineМежду и должен быть символ новой строки.ThirdLine
// Ожидающий :myStr должен содержать только символы, указанные в инструкции

// ✅ SOLUTION:

const myStr = "\FirstLine\n\t\\SecondLine\nThirdLine" ; // Change this line
console.log(myStr);
