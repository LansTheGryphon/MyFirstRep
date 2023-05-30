let sname = prompt("Введи свою фамилию")
document.getElementById("target").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("target").innerHTML = "Хахахахаха, теперь мы семья, "+sname;
}
	    	    function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            function daFunction() {
		    while (true){
                (async () => {
                    let response = await fetch('https://kav-api.kovalev.team/servodrive/lastActualData?servoDriveId=1');
                    let el = document.getElementById('demo')
                    el.innerHTML = ""
                    let text = await response.text(); // прочитать тело ответа как текст
                    for (const [key, value] of Object.entries(JSON.parse(text)[0])) {
                        const newEl = document.createElement("li")
                        newEl.appendChild(document.createTextNode(`${key}: ${value}`))
                        el.appendChild(newEl)
                    }}
                })()
            }
