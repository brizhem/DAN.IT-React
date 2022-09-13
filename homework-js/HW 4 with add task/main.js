function createNewUser() {
    let userFirstName;
    let userLastName;

    do {
        userFirstName = prompt('input your first name');
    } while (userFirstName.length === 0);

    do {
        userLastName = prompt('input your last name');
    } while (userLastName.length === 0);

    //Обявляем переменные, в которых будем хранить значения, заданные через функции-сеттеры установеи имени и фамилии
    let firstNameValue;
    let lastNameValue;
    const newUser = {
        setFirstName: function (value) {
            firstNameValue = value;
        },
        setLastName: function (value) {
            lastNameValue = value;
        },
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
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

console.log(user.getLogin());

user.setFirstName('Test');
console.log(user.getLogin());

user.firstName = 'first';
console.log(user.getLogin());