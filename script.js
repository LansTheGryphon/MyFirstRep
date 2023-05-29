let sname = prompt("Введи свою фамилию")
document.getElementById("target").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("target").innerHTML = "Хахахахаха, теперь мы семья,"+sname;
}