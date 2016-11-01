#Homework

###Задача 1 
* Создайте Express сервер и подключите к нему модуль socket.io.  
* На стороне сервера создайте пространство имен с произвольным именем, которое генерирует событие 'message' и передает через событие объект {text: 'Hello from namespace'}.  
* На стороне клиента создайте обработчик события 'message', который выводит данные, переданные через событие, на экран и генерирует событие 'receive_message'. .
* На стороне сервера установите обработчик события 'receive_message', который выведет в консоль текст 'message received'. 

###Задача 2  
Создание простого чата. 

* Создайте Express сервер и подключите к нему модуль socket.io.   
* На стороне клиента создайте html страницу с полем ввода и кнопкой. 
* Если поле ввода не пустое, при нажатии на кнопку генерируется событие 'send_message', через событие передаются данные поля ввода. 
* На стороне сервера создайте обработчик события 'send_message'. Обработчик генерирует событие 'chat_message' и отсылает его всем подключенным клиентам. Через событие 'chat_message' передаются данные, полученные в событии 'send_message'. 
* На стороне клиента создайте обработчик события 'chat_message', который выводит на экран данные, переданные через событие. 

###Задача 3(Дополнительное задание) 
Добавьте в чат, созданный в предыдущей задаче, возможность авторизации пользователей. 