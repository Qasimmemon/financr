// var result = document.getElementById('result')
// var btn = document.getElementById('btn')
// var todo = document.getElementById('todo')
var btn = document.getElementById('btn')
var exence = document.getElementById('exence')
var income = document.getElementById('income')
var Date_1 = document.getElementById('Date')
var descriptiom = document.getElementById('descriptiom')
var table = document.getElementById('table')    
btn.addEventListener('click',function () {
    console.log(table);
    var data= ` 
    <tr>
    <td style="color: white;">${income.value}</td>
<td style="color: white;">${exence.value}</td>
<td style="color: white;">${Date_1.value}</td>
<td  style="color: white;">${income.value - exence.value}</td>
    </tr> `   
    table.innerHTML+=data  
})
// var ale = 'please fiil data'
// if (income = '' ){
//     alert(ale)
// }
// if (exence = '' ){
//     alert(ale)
// }
// if (Date_1 = '' ){
//     alert(ale)
// }
// if (descriptiom = '' ){
//     alert(ale)
// }
