function createNewUser() {
    let userFirstName;
    let userLastName;
    let userBirthday;

    do {
        userFirstName = prompt('input your first name');
    } while (userFirstName.length === 0);

    do {
        userLastName = prompt('input your last name');
    } while (userLastName.length === 0);
    
    const newUser = {
        firstName: userFirstName,
        lastName: userLastName,
        getLogin: function () {
            return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
        },
    }

    return newUser;
}

let user = createNewUser();

console.log(user.getLogin());