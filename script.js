function MineSweeper(NumBomb, NumRow, NumCol){
    let game = document.querySelector(".game"),
        resetButton = document.querySelector("#reset"),
        timer = document.querySelector("#timer"),
        mine = document.querySelector("#mine"),
        bombLeft = NumBomb,
        time = 0,
        setTime,
        bomb = [],
        gameOver = false
        

    function genBomb(bombs){
        while(bomb.length < bombs){
            let baris = Math.floor(Math.random()*22) + 1;
            let kolom = Math.floor(Math.random()*45) + 1;
            let no_bomb = `box_${baris}_${kolom}`;
            if(!(bomb.includes(no_bomb))){
                bomb.push(no_bomb)
            }
        }

    }
    

    function genBox(j_baris, j_kolom){
        for (let baris = 1; baris <= j_baris; baris++) {
            for (let kolom = 1; kolom <= j_kolom; kolom++) {
                let box = document.createElement("DIV");
                box.setAttribute("class","box")
                box.setAttribute("id", `box_${baris}_${kolom}`)
                game.appendChild(box)
            }
        }
    }


    function parseRowCol(boxNum){
        let split = boxNum.split("_");
        let baris = parseInt(split[1]);
        let kolom = parseInt(split[2]);
        return [baris, kolom]
    }

    function checkBombNumb(baris, kolom){

        let countBomb = 0
        
        for (let a = baris-1; a <= baris+1; a++){
            for (let b = kolom-1; b <= kolom+1; b++) {
                if((bomb.includes(`box_${a}_${b}`))){
                    countBomb++;
                }
                
            }
        }
        return countBomb;
    }
   
    function checkSurroundBombNum(baris, kolom){
        for (let a = baris-1; a <= baris+1; a++){
            for (let b = kolom-1; b <= kolom+1; b++) {
                if((a === baris) && (b === kolom)) continue;
                let box = document.querySelector(`#box_${a}_${b}`) 
                try {
                    let isPressed = box.classList.contains("box-pressed")
                    if(!isPressed){
                        let bomb_count = checkBombNumb(a, b)
                        if(bomb_count !== 0){
                            box.innerHTML = bomb_count
                            box.classList.add(`bomb_${bomb_count}`)
                        }
                        box.classList.add('box-pressed')

                        if(bomb_count === 0){
                            checkSurroundBombNum(a,b)
                        }
                        
                    }
                } catch(error) {}
                
                
            }
        }
    }
    
    function revealAllBomb(clicked){
        bomb.map(x => {
            if(x === clicked){
                document.querySelector(`#${x}`).classList.add("bombEndClicked");
            }else{
                document.querySelector(`#${x}`).classList.add("bombEnd");
            }
        })
    }

    function mousePressed(){
        if(!gameOver){
            resetButton.classList.remove('smiley')
            resetButton.classList.add('hushed')
        }
       
    }
    function startTime(){
       setTime =  setInterval(function(){
            time++
            timer.innerHTML= time;
        },1000)
    }

    function mouseReleased(e){
        let clickedBox = document.querySelector(`#${e.target.id}`);
        let isFlag = clickedBox.classList.contains("flag");
        if(!gameOver){
            if(e.button === 2){
                clickedBox.classList.toggle("flag")
                if((clickedBox.classList.contains("flag"))){
                    bombLeft--;
                }else{
                    bombLeft++;
                }
                console.log(bombLeft);
                mine.innerHTML = bombLeft;
                resetButton.classList.remove('hushed')
                resetButton.classList.add('smiley')
            }else if(isFlag){
                return false;
            }
            else if(bomb.includes(e.target.id)){
                gameOver = true
                clearInterval(setTime)
                revealAllBomb(e.target.id);
                resetButton.classList.remove('hushed')
                resetButton.classList.add('sad')   
            }else{
                let [baris, kolom] = parseRowCol(e.target.id)
                let bomb_count = checkBombNumb(baris, kolom)
                let box_pressed = document.querySelectorAll(".box-pressed").length
                startTime()
                //cetak jumlah bomb ke box

                if(bomb_count !== 0){
                    clickedBox.innerHTML = bomb_count
                    clickedBox.classList.add(`bomb_${bomb_count}`)
                    if((box_pressed + NumBomb) === (NumRow*NumCol)){
                        alert("menang")
                    }
                }else{
                    console.time("js biasa")
                    checkSurroundBombNum(baris, kolom)
                    console.timeEnd("js biasa")
                }
                
                //ubah expresi emoji ke senyum kalo berhasil
                resetButton.classList.remove('hushed')
                resetButton.classList.add('smiley')
                //ubah kotak jadi bentuk sudah ditekan
                e.target.classList.add('box-pressed')
            }
            
        }
    }

    function reset(){
        bomb = [];
        time = 0;
        mine.innerHTML = NumBomb;
        timer.innerHTML = 0
        gameOver = false
        let boxPressed = document.querySelectorAll(".box-pressed");
        let flagMark = document.querySelectorAll(".flag");
        let bombMark = document.querySelectorAll(".bombEnd")
        let bombClicked = document.querySelector(".bombEndClicked")
        boxPressed.forEach(x => {
            x.classList.remove("box-pressed");
            x.innerHTML = ""
        })
        bombMark.forEach(y => {
            y.classList.remove("bombEnd")
        })
        flagMark.forEach(z =>{
            z.classList.remove("flag")
        })
        try{
            bombClicked.classList.remove("bombEndClicked")
        }catch(e){}
        clearInterval(setTime)
        resetButton.classList.remove('sad')
        resetButton.classList.add('smiley')
        genBomb(NumBomb)
        
    }


    genBox(NumRow,NumCol)
    genBomb(NumBomb)
    mine.innerHTML = bombLeft
    timer.innerHTML = 0
    game.addEventListener("mousedown", () => mousePressed())
    game.addEventListener("mouseup", (e) => mouseReleased(e))
    game.addEventListener("contextmenu", (e)=>{e.preventDefault()})
    resetButton.addEventListener("click", ()=> reset())
}
// MineSweeper(Jumlah Bomb, Jumlah Baris, Jumlah Kolom)
MineSweeper(10, 22, 45)
