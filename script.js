let table=document.getElementById("sampleTable")
function insert_Row() {
    //Write your code herev
	var newrow=table.insertRow(1);
	var cell1=newrow.insertCell(0);
	var cell2=newrow.insertCell(1);
	
  cell1.innerHtml='New Cell1'
  cell2.innerHtml='New Cell2'
	
  
}
