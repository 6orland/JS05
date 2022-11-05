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