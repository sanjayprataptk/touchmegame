var rat = document.getElementById('rat');
let w=1400
let h=600

let  win_x=Math.floor((Math.random() *w) + 10);
let win_y=Math.floor((Math.random() *h) + 10);




rat.addEventListener('mouseover', run);

rat.addEventListener('click',()=>{
    alert("YOU GOT ME :-D")
})

function startgame() {
    document.getElementById('catchtherat').style.display = "none";
    
}

function run(e) {
    
    let pos = rat.getBoundingClientRect();
    var x = Math.floor((Math.random() *w) + 10);
    var y = Math.floor((Math.random() *h) + 10);



    if (pos.x!=win_x && pos.y!=win_y){
        rat.style.position = "absolute";
        rat.style.left = x + 'px';
        rat.style.top = y + 'px';
    }
    else{
        rat.addEventListener('click',()=>{
            alert("YOU GOT ME :-D")
        })
        
    }
    
    
}

