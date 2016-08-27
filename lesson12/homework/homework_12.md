#Homework 

###Задача 1
Создайте приложение-калькулятор. В приложении должно быть два поля ввода и кнопки «+», «-», «*», «/». Реализуйте двунаправленную привязку таким образом, чтобы при нажатии на кнопки результат арифметических операций выводился на странице. 

###Задача 2 
Дано массив items: 
```
     $scope.items = [
             { name: "B Item", price: 10.9, category: "Category 1", count: 10, tax: 1.12, expiration: 10 },
             { name: "A Item", price: 1.1, category: "Category 1", count: 8, tax: 0.55, expiration: 12 },
             { name: "D Item", price: 2.6, category: "Category 2", count: 7, tax: 0.22, expiration: 5 },
             { name: "C Item", price: 17.5, category: "Category 2", count: 33, tax: 2.77, expiration: 10 }];
``` 
Создайте страницу с элементом select. Реализуйте следующее: 
В зависимости от выбранного варианта в списке select, на экране отображаются данные массива или в виде таблицы, или в виде списка 

###Задача 3
Реализуйте SPA приложение, в котором пользователю представляется пройти тест из 5 вопросов, в каждом вопросе по 4 варианта ответа. Вопросы должны выбираться с помощью radio-button и когда выбран, например, вопрос №1, то на странице должны появится варианты ответа только для этого вопроса. В конце тестирования отобразите результат теста. При решении данной задачи используйте директиву ng-switch.