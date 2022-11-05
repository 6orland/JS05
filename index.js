let age;
// const gender ="муж" // жен
age = +age;
if (!isNaN(+age)) {

if (age > 18) {
    console.log("Вам больше 18 лет");
} else if (age < 18) {
    console.log("Вам меньше 18 лет"); 
} else if(age == 18) {
    console.log("Вам 18 лет")
} else {
    console.log("Error 404")
}
} else { 
    console.log("Введите корректные данные");
}
// if (gender === "муж"); {
//     console.log('Вам на лево')
// }
// if (gender === "жен"); {
//     console.log('Вам направо')
// }

const isAdmin = true;
console.log(`Добро пожаловать : ${ isAdmin ? 'Администратор' : 'Пользователь' }`);

const typeUser = 'admin'; // user, quest, bot

switch (typeUser) {
    case 'admin':
        console.log('Вы администратор');
        break;
    case 'user':
        console.log('Вы пользователь');
        break;
    case 'quest':
        console.log('Вы гость');
        break;
    case 'bot':
        console.log('Вы бот');
        break;
    default: 
        console.log('Неизвестный тип пользователя');
        break;          
}

// Выести на экран числа от 1 до 10 через запятую.
let i = 0;
const lastNumber = 10;
let message = " ";

while (++i <= lastNumber) {
    
    message += `${i}${i !== lastNumber ? ", " : ""}`;
}  
    console.log(message);
