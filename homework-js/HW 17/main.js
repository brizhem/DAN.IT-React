const student = {
    name: '',
    lastName: '',
    tabel: {},
    setTabelValue: (subject, grade) => {
        student.tabel[subject] = grade;
    },
    getCountBadGrade: () => {
        for (let key in student.tabel) {
            if (student.tabel[key] < 4) {
                alert(`Студент ${student.name} ${student.lastName} НЕ переведен на следующий курс!`);
                return;
            };
        };

        alert(`Студент ${student.name} ${student.lastName} переведен на следующий курс!`);
    },
    getScholarship: () => {
        let sumGrades = 0;
        let countItem = 0;
        
        for (let key in student.tabel) {
            sumGrades = sumGrades + student.tabel[key];
            countItem++;
        };

        let averageScore = sumGrades / countItem;
        
        alert(averageScore > 7 ? `Студенту ${student.name} ${student.lastName} назначена стипендия!` : `Студенту ${student.name} ${student.lastName} нужно лучше учиться!`);
    },
};

let userName;
let userLastName;

do {
    userName = prompt('insert your name');
} while (userName.length === 0);

do {
    userLastName = prompt('insert your last name');
} while (userLastName.length === 0);

student.name = userName;
student.lastName = userLastName;

let tabel = {};

while (true) {
    let subjectAndGrade = prompt('insert subject name, and grade');
    
    if (subjectAndGrade === null) {
        break;
    };

    //Считаю, что пользователь ввел валидное значение и в результате получим массив из 2-х элементов
    let arrSubjectAndGrade = subjectAndGrade.split(',');
    student.setTabelValue(arrSubjectAndGrade[0].trim(), Number(arrSubjectAndGrade[1].trim()));
};

student.getCountBadGrade();
student.getScholarship();
