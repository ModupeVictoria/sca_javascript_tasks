let txtval = document.getElementById("txtval");
let addbtn = document.getElementById("addbtn");
let divdisplay = document.getElementById("divdisplay");

let lists = [];
let indexval = 0;


function checkBtn(){
    if(addbtn.innerHTML=="Update"){
       Updateval();
    }else
    if(addbtn.innerHTML=="Add"){
        addval();
    }
}

function addval(){
    if (txtval.value==""){        
        txtval.placeholder = `Add an item to the list`;       
    }else{
        var inputval= txtval.value;    
        lists.push(inputval);
        txtval.value="";       
        render();
    }
    
   
}

function render(){
    var txt= "<ul>";
    lists.forEach(function(value,index){
       
     txt += "<li>"+ value +"<button class= 'btnDis' onclick=editBtn("+index+")>  Edit</button> <button class= 'btnDis' onclick='deleteBtn("+index+")'>  Delete</button> </li>";
    });
   txt+= "</ul>";
    divdisplay.innerHTML=txt;
}

function deleteBtn(index){
    delete lists[index];
   render();
    
}

function editBtn(index){
    txtval.value=lists[index];
    addbtn.innerHTML='Update';
    indexval=index;   
}

function Updateval(){
    lists[indexval]=txtval.value;
    addbtn.innerHTML='Add';
    txtval.value="";
    render();   
}

