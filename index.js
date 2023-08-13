
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getDatabase , ref , push } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCJ__OP455GvZAUpy3-DlTpHvJh35mHcN8",
    databaseURL:"https://tasks-a6ae6-default-rtdb.asia-southeast1.firebasedatabase.app",
    authDomain: "tasks-a6ae6.firebaseapp.com",
    projectId: "tasks-a6ae6",
    storageBucket: "tasks-a6ae6.appspot.com",
    messagingSenderId: "136670461349",
    appId: "1:136670461349:web:7b0684cafeb0c50de4fc4c",
    measurementId: "G-679QRT35J8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)
const taskinDb = ref(database , "Added")
const CompTaskinDb = ref(database , "Completed")

        
        
        
        
        const input = document.querySelector('input');
        const btn = document.querySelector('.para4 > button');
        

         btn.addEventListener('click' , addList);
        input.addEventListener('keyup' ,(e)=>{(
            e.keyCode==13? addList(e):null)
        })

        function addList(e){
            let inputValue = input.value
            push(taskinDb,inputValue)
            console.log(input.value + " added to database");
           
            const notcomp = document.querySelector('.notcomp');
            const comp = document.querySelector('.comp');

            const newLi= document.createElement('li');
            const checkbtn= document.createElement('button');
            const delbtn= document.createElement('button');
            const editbtn = document.createElement('button');

            checkbtn.innerHTML='<i class="fa fa-check"></i>';
            delbtn.innerHTML='<i class="fa fa-trash"></i>';
            editbtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'

            let a=input.value;
            

            if(input.value != ''){
                newLi.textContent=input.value;
                input.value='';
                notcomp.appendChild(newLi);
                newLi.appendChild(checkbtn);
                newLi.appendChild(delbtn);
                newLi.appendChild(editbtn);
            }
            checkbtn.addEventListener('click',function(){
                const parent= this.parentNode;
                parent.remove();
                comp.appendChild(parent);
                checkbtn.style.display='none';
                
                push(CompTaskinDb,a)

            console.log( newLi.textContent+ " added to database");
            
               
            }
                );

                delbtn.addEventListener('click',function(){
                const parent=this.parentNode;
                parent.remove();
                
               
            }
                );
               editbtn.addEventListener('click',function(){
                const parent=this.parentNode;
                const taskText=parent.firstChild.textContent;
                const editText=prompt("edit task:",taskText);
                if(editText!==null)
                {
                    parent.firstChild.textContent=editText;
                }

               });

              
        }