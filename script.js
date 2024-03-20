let table=document.getElementById("sampleTable")
let i=1;
let j=2;
function insert_Row() {
    //Write your code herev
	var newrow=table.insertRow(0);
	var cell1=newrow.insertCell(0);
	var cell2=newrow.insertCell(1);
	
  cell1.innerHTML=`New Cell${i}`
  cell2.innerHTML=`New Cell${j}`
	i++;
	j++;
  
}
