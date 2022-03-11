const container = document.getElementById("container");

function makeRows(sqaures) {
  
  container.style.gridTemplateColumns=`repeat(${sqaures},1fr)`;
  container.style.gridTemplateRows=`repeat(${sqaures},1fr)`;
  for (c = 0; c < (sqaures * sqaures); c++) {
    let cell = document.createElement("div");
    cell.style.width='10px';
    cell.style.height='10px';
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(64);

gridItem = document.querySelectorAll('.grid-item');
for (let i=0;i<gridItem.length;i++){
  gridItem[i].addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor='red';
    
  })
}

document.querySelector('#clear').addEventListener('click',()=>{

for (let i=0;i<gridItem.length;i++){
  gridItem[i].style.backgroundColor='white';
    
}
})
