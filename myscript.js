/* CREATE TABLE */
const wrapper = document.querySelector(".wrapper");
let table = document.createElement("table");
wrapper.appendChild(table);
table.classList.add("table", "table-striped");
let th = `
<thead>
<tr>
	<th>Jméno</th>
	<th>Příjmení</th>
	<th>Rok narození</th>
	<th>Oblíbené ovoce</th>
</tr>
</thead>
<tbody class="content">
</tbody>
`

table.innerHTML = th;

/* SHOW ROWS */

let currentPage = 1;
const rows = 7;


function showRows(pole, currentPage, rows){
	let first = (currentPage - 1) * rows;
	

	let last = first + rows;        //if undefined, enter emptyone

	for (let i = first; i < last; i++){
	let content = 
	`
	<tr>
	<td>${pole[i][0]}</td>
	<td>${pole[i][1]}</td>
	<td>${pole[i][2]}</td>
	<td>${pole[i][3].join(", ")}</td>
	</tr>

	`
	document.querySelector("tbody").innerHTML += content;

	}
}

showRows(pole, currentPage, rows)

/* CREATE PAGES */



let createPageWrapper = `
<div class="page-wrapper">
	<div class="pages">
	</div>
</div>

`
wrapper.innerHTML += createPageWrapper;

let tbody = document.querySelector("tbody");
let pageWrapper = document.querySelector(".page-wrapper");
let pages = document.querySelector(".pages");

/* CREATE BUTTONS */
let maxPages = Math.ceil(pole.length / rows);
let firstPage = 	`
<button type="button" value="1" class="firstPage btn btn-info" style="display:none;">&#171;</button>
`
pages.innerHTML += firstPage;

for( i = 0; i < maxPages; i++ ){
	let button = `
		<button type="button" value="${i+1}" class="page btn btn-info"> ${i+1} </button>
	`
	pages.innerHTML += button;
}
let lastPage = 	`
<button type="button" value="${maxPages}" class="lastPage btn btn-info" style="display:none;">&#187;</button>
`
pages.innerHTML += lastPage;


/* CONNECT BUTTONS WITH PAGES */

let button = document.querySelectorAll(".btn");
button.forEach(button => {
	button.addEventListener("click", function() {
		currentPage = button.value;
		document.querySelector("tbody").innerHTML = "";

		showRows(pole, currentPage, rows)
	})
})

/* TOO MANY BUTTONS */
firstPage = document.querySelector(".firstPage");		
lastPage = document.querySelector(".lastPage");		
	
if(maxPages > 5){

	button.forEach(b => {
		showButtons(0, 5);
		arrows("none", "inline-block")
		fiveButtons(b)
	})
}
	function fiveButtons(b){

		b.addEventListener("click",() => {
			let bv = parseInt(b.value);
	
			if(bv < 3){
				arrows("none", "inline-block")
				showButtons(0, 5)

			}
			else if(bv > (maxPages - 3)){
				showButtons((maxPages - 5), (maxPages))
				arrows("inline-block", "none")

			}
			else {
				arrows("inline-block", "inline-block")
				showButtons((bv - 2), (bv + 2));

			}
		} )}

	function showButtons(min, max){
		let butt = document.querySelectorAll(".page");
		butt.forEach(b => {
			b.style.display = "none";
		})
		for(i = min; i < max; i++){
			butt[i].style.display = "inline-block";
		}
	}

	function arrows(fp, lp){
		firstPage.style.display = fp;
		lastPage.style.display = lp;
	}
	

	/* PATIČKA - MANDARINKA ZA POMERANČ - DOM patičková verze*/
OrangeToMandarine()
button.forEach(button => {
	button.addEventListener("click", ()=>{
		OrangeToMandarine()
	})
})


function OrangeToMandarine(){
	let fourthColumn = document.querySelectorAll(".content > tr > td:nth-child(4)")
	fourthColumn.forEach(fc => {
		let array = fc.textContent.split(", ");
		for (let i = 0; i < array.length; i++){
			if (array[i] == "pomeranc")
				{array[i] = "mandarinka";
			}
		}
		array = array.join(", ");
		fc.innerHTML = array;})
}
