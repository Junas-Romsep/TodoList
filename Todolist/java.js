

const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');


btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList(e) :null )
})


function addList(e){
    const notCompleted = document.querySelector('.notCompleted ');
    const Completed = document.querySelector('.Completed ');
    const TextHolder = document.querySelector('.TextHolder ');

    const newList = document.createElement('li');
    const newBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const EditBtn =document.createElement('button');
    const FailText = document.createElement('text');
    const WordHolder = document.createElement("INPUT");  

    
    newBtn.innerHTML = '<i class="Klar">Klar</i>';
    delBtn.innerHTML = '<i class="Ta_bort">Ta bort</i>';
    EditBtn.innerHTML = '<i class="Redigera"  Id="Redigera" >Redigera</i>';
    FailText.innerHTML = '<i>Du har Ingen text!!</i>';
    WordHolder.innerHTML = '<input type="text" id="myText" disabled>';

    // const EditBtn = document.getElementById('Redigera');
    // const test = document.getElementById('myText');
    // const test1 = document.getElementById('Redigera');


        

    if(input.value ===''){
        newList.appendChild(FailText);
        TextHolder.appendChild(newList);
   
    }  
  

    if(input.value !==''){


        
        WordHolder.value = input.value;
        // WordHolder.setAttribute("type", "text");
        // FailText.remove();
        input.value = '';
        notCompleted.appendChild(newList);
        newList.appendChild(WordHolder);
        newList.appendChild(newBtn);
        newList.appendChild(delBtn);
        newList.appendChild(EditBtn);
        
        WordHolder.disabled = true;

    }
    newBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        newBtn.style.display = 'none';
    } )
    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    } )
    EditBtn.addEventListener('click', function(){   
        // newList.contentEditable = true; 

            //  if ( document.getElementById("myText").disabled === false){
            //     document.getElementById("myText").disabled = true;
            // }
            // else{
            //     document.getElementById("myText").disabled = false;
            // }



            if(WordHolder.disabled == true){
                WordHolder.disabled = false;
            }
            else{
                WordHolder.disabled = true;       
            }
            if(WordHolder.value ===''){
                WordHolder.disabled = false;
                
                newList.appendChild(FailText);
            }
            else {
                FailText.remove();                  
            }
            
    } )
   
    
}