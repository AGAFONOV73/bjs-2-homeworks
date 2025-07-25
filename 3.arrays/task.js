function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
   return arr1.every((value, index) => value === arr2[index]);
 }
 

 console.log(compareArrays([4, 2, 3], [4, 2, 3]));
 console.log(compareArrays([1, 2], [1, 2, 3]));
 console.log(compareArrays([1, 2, 3], [3, 2, 1]));
 console.log(compareArrays([0, 1, 2], [0, 1]));
 console.log(compareArrays([0, 1], [0, 1, 2]));
 console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));




 function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);
     if (filteredUsers.length === 0) {
     return 0;
   }
    const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    const averageAge = totalAge / filteredUsers.length;
    return Math.round(averageAge * 10) / 10;
 }
 

 
 const people = [
   {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
   {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
   {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
   {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
   {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
   {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
   {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
   {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
   {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
   {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
   {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
   {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
   {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
   {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
 ]
 console.log(getUsersNamesInAgeRange(people, "мужской")); 
 console.log(getUsersNamesInAgeRange(people, "женский"));
 console.log(getUsersNamesInAgeRange([], "женский"));
 console.log(getUsersNamesInAgeRange(people, "инопланетянин"));