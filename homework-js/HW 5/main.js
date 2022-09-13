function createNewUser() {
    let userFirstName;
    let userLastName;

    do {
        userFirstName = prompt('input your first name');
    } while (userFirstName.length === 0);

    do {
        userLastName = prompt('input your last name');
    } while (userLastName.length === 0);

    do {
        userBirthday = prompt('input tour birthday date in format dd.mm.yyyy');
        userBirthday = userBirthday.trim();
    } while (userBirthday.length !== 10);

    //Создаю массив и использую реверс для нужной последовательности данных для преобразования к дате.
    //Массив превращаем в строку с разделителем "-", чтобы формат был готов к подстановке в new Date()
    let userBirthdayArray = userBirthday.split('.');
    let userBirthdayCorrectFormat = userBirthdayArray.reverse().join('-');

    //Обявляем переменные, в которых будем хранить значения, заданные через функции-сеттеры установеи имени и фамилии
    let firstNameValue;
    let lastNameValue;
    const newUser = {
        birthday: userBirthdayCorrectFormat,
        setFirstName: function (value) {
            firstNameValue = value;
        },
        setLastName: function (value) {
            lastNameValue = value;
        },
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        },
        getAge: () => {
            let nowDate = new Date();
            let birthdayDate = new Date(newUser.birthday);
            let defDate = nowDate.getTime() - birthdayDate.getTime();
            birthdayDate.setTime(defDate);

            return birthdayDate.getFullYear() - 1970;
        },
        getPassword: () => {
            let birthdayDate = new Date(newUser.birthday);
            return newUser.firstName[0].toUpperCase() + newUser.lastName.toLowerCase() + birthdayDate.getFullYear();
        },
    };

    //свойства firstName и lastName создадим с помощью метода Object.defineProperty(), 
    //чтобы значения нельзя было записать напрямую. При обращении к данным свойствам, оно будет возвращить знаения переменной,
    //которые задаются с помощью функций-сеттеров.
    Object.defineProperty(newUser, 'firstName', {
        get() {
            return firstNameValue;
        },
    });

    Object.defineProperty(newUser, 'lastName', {
        get() {
            return lastNameValue;
        },
    });

    newUser.setFirstName(userFirstName);
    newUser.setLastName(userLastName);

    return newUser;
}

let user = createNewUser();

console.log(user);

console.log(user.getAge());

console.log(user.getPassword());