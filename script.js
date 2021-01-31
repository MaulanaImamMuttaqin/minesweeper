function MineSweeper(){
    let game = document.querySelector(".game"),
        resetButton = document.querySelector("#reset"),
        bomb = []
        

    function genBomb(bombs){
        while(bomb.length < bombs){
            let baris = Math.floor(Math.random()*22) + 1;
            let kolom = Math.floor(Math.random()*45) + 1;
            let no_bomb = `box_${baris}_${kolom}`;
            if(!(bomb.includes(no_bomb))){
                bomb.push(no_bomb)
            }
        }
        bomb.forEach(bom => {
            document.querySelector(`#${bom}`).classList.add("isBomb")
        })
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
   
    function checkSurroundBombNum(bombNum){

    }
    function mousePressed(){
        resetButton.childNodes[0].classList.remove('fa-smile')
        resetButton.childNodes[0].classList.add('fa-surprise')
    }


    function mouseReleased(e){
        if(bomb.includes(e.target.id)){
            console.log("kaboom");
            resetButton.childNodes[0].classList.remove('fa-surprise')
            resetButton.childNodes[0].classList.add('fa-dizzy')
            
        }else{
            let [baris, kolom] = parseRowCol(e.target.id)
            let bomb_count = checkBombNumb(baris, kolom)
            //cetak jumlah bomb ke box
            if(bomb_count !== 0){
                document.querySelector(`#${e.target.id}`).innerHTML = bomb_count
                document.querySelector(`#${e.target.id}`).classList.add(`bomb_${bomb_count}`)
            }
            //ubah expresi emoji ke senyum kalo berhasil
            resetButton.childNodes[0].classList.remove('fa-surprise')
            resetButton.childNodes[0].classList.add('fa-smile')
            //ubah kotak jadi bentuk sudah ditekan
            e.target.classList.add('box-pressed')
        }
    }



    genBox(22,45)
    genBomb(100)
    game.addEventListener("mousedown", () => mousePressed())
    game.addEventListener("mouseup", (e) => mouseReleased(e))

}

MineSweeper()

// myArray = new Array("box000", "box001", "box002", "box003", "box004", "box005", "box006", "box007", "box008", "box009", "box010", "box011", "box012", "box013", "box014", "box015", "box016", "box017", "box018", "box019", "box020", "box021", "box022", "box023", "box024", "box025", "box026", "box027", "box028", "box029", "box030", "box031", "box032", "box033", "box034", "box035", "box036", "box037", "box038", "box039", "box040", "box041", "box042", "box043", "box044", "box045", "box046", "box047", "box048", "box049", "box050", "box051", "box052", "box053", "box054", "box055", "box056", "box057", "box058", "box059", "box060", "box061", "box062", "box063", "box064", "box065", "box066", "box067", "box068", "box069", "box070", "box071", "box072", "box073", "box074", "box075", "box076", "box077", "box078", "box079", "box080", "box081", "box082", "box083", "box084", "box085", "box086", "box087", "box088", "box089", "box090", "box091", "box092", "box093", "box094", "box095", "box096", "box097", "box098", "box099", "box100", "box101", "box102", "box103", "box104", "box105", "box106", "box107", "box108", "box109", "box110", "box111", "box112", "box113", "box114", "box115", "box116", "box117", "box118", "box119", "box120", "box121", "box122", "box123", "box124", "box125", "box126", "box127", "box128", "box129", "box130", "box131", "box132", "box133", "box134", "box135", "box136", "box137", "box138", "box139", "box140", "box141", "box142", "box143", "box144", "box145", "box146", "box147", "box148", "box149", "box150", "box151", "box152", "box153", "box154", "box155", "box156", "box157", "box158", "box159", "box160", "box161", "box162", "box163", "box164", "box165", "box166", "box167", "box168", "box169", "box170", "box171", "box172", "box173", "box174", "box175", "box176", "box177", "box178", "box179", "box180", "box181", "box182", "box183", "box184", "box185", "box186", "box187", "box188", "box189", "box190", "box191", "box192", "box193", "box194", "box195", "box196", "box197", "box198", "box199", "box200", "box201", "box202", "box203", "box204", "box205", "box206", "box207", "box208", "box209", "box210", "box211", "box212", "box213", "box214", "box215", "box216", "box217", "box218", "box219", "box220", "box221", "box222", "box223", "box224", "box225", "box226", "box227", "box228", "box229", "box230", "box231", "box232", "box233", "box234", "box235", "box236", "box237", "box238", "box239", "box240", "box241", "box242", "box243", "box244", "box245", "box246", "box247", "box248", "box249", "box250", "box251", "box252", "box253", "box254", "box255", "box256", "box257", "box258", "box259", "box260", "box261", "box262", "box263", "box264", "box265", "box266", "box267", "box268", "box269", "box270", "box271", "box272", "box273", "box274", "box275", "box276", "box277", "box278", "box279", "box280", "box281", "box282", "box283", "box284", "box285", "box286", "box287", "box288", "box289", "box290", "box291", "box292", "box293", "box294", "box295", "box296", "box297", "box298", "box299", "box300", "box301", "box302", "box303", "box304", "box305", "box306", "box307", "box308", "box309", "box310", "box311", "box312", "box313", "box314", "box315", "box316", "box317", "box318", "box319", "box320", "box321", "box322", "box323", "box324", "box325", "box326", "box327", "box328", "box329", "box330", "box331", "box332", "box333", "box334", "box335", "box336", "box337", "box338", "box339", "box340", "box341", "box342", "box343", "box344", "box345", "box346", "box347", "box348", "box349", "box350", "box351", "box352", "box353", "box354", "box355", "box356", "box357", "box358", "box359", "box360", "box361", "box362", "box363", "box364", "box365", "box366", "box367", "box368", "box369", "box370", "box371", "box372", "box373", "box374", "box375", "box376", "box377", "box378", "box379", "box380", "box381", "box382", "box383", "box384", "box385", "box386", "box387", "box388", "box389", "box390", "box391", "box392", "box393", "box394", "box395", "box396", "box397", "box398", "box399", "box400", "box401", "box402", "box403", "box404", "box405", "box406", "box407", "box408", "box409", "box410", "box411", "box412", "box413", "box414", "box415", "box416", "box417", "box418", "box419", "box420", "box421", "box422", "box423", "box424", "box425", "box426", "box427", "box428", "box429", "box430", "box431", "box432", "box433", "box434", "box435", "box436", "box437", "box438", "box439", "box440", "box441", "box442", "box443", "box444", "box445", "box446", "box447", "box448", "box449", "box450", "box451", "box452", "box453", "box454", "box455", "box456", "box457", "box458", "box459", "box460", "box461", "box462", "box463", "box464", "box465", "box466", "box467", "box468", "box469", "box470", "box471", "box472", "box473", "box474", "box475", "box476", "box477", "box478", "box479", "box480", "box481", "box482", "box483", "box484", "box485", "box486", "box487", "box488", "box489", "box490", "box491", "box492", "box493", "box494", "box495", "box496", "box497", "box498", "box499", "box500", "box501", "box502", "box503", "box504", "box505", "box506", "box507", "box508", "box509", "box510", "box511", "box512", "box513", "box514", "box515", "box516", "box517", "box518", "box519", "box520", "box521", "box522", "box523", "box524", "box525", "box526", "box527", "box528", "box529", "box530", "box531", "box532", "box533", "box534", "box535", "box536", "box537", "box538", "box539", "box540", "box541", "box542", "box543", "box544", "box545", "box546", "box547", "box548", "box549", "box550", "box551", "box552", "box553", "box554", "box555", "box556", "box557", "box558", "box559", "box560", "box561", "box562", "box563", "box564", "box565", "box566", "box567", "box568", "box569", "box570", "box571", "box572", "box573", "box574", "box575", "box576", "box577", "box578", "box579", "box580", "box581", "box582", "box583", "box584", "box585", "box586", "box587", "box588", "box589", "box590", "box591", "box592", "box593", "box594", "box595", "box596", "box597", "box598", "box599", "box600", "box601", "box602", "box603", "box604", "box605", "box606", "box607", "box608", "box609", "box610", "box611", "box612", "box613", "box614", "box615", "box616", "box617", "box618", "box619", "box620", "box621", "box622", "box623", "box624", "box625", "box626", "box627", "box628", "box629", "box630", "box631", "box632", "box633", "box634", "box635", "box636", "box637", "box638", "box639", "box640", "box641", "box642", "box643", "box644", "box645", "box646", "box647", "box648", "box649", "box650", "box651", "box652", "box653", "box654", "box655", "box656", "box657", "box658", "box659", "box660", "box661", "box662", "box663", "box664", "box665", "box666", "box667", "box668", "box669", "box670", "box671", "box672", "box673", "box674", "box675", "box676", "box677", "box678", "box679", "box680", "box681", "box682", "box683", "box684", "box685", "box686", "box687", "box688", "box689", "box690", "box691", "box692", "box693", "box694", "box695", "box696", "box697", "box698", "box699", "box700", "box701", "box702", "box703", "box704", "box705", "box706", "box707", "box708", "box709", "box710", "box711", "box712", "box713", "box714", "box715", "box716", "box717", "box718", "box719", "box720", "box721", "box722", "box723", "box724", "box725", "box726", "box727", "box728", "box729", "box730", "box731", "box732", "box733", "box734", "box735", "box736", "box737", "box738", "box739", "box740", "box741", "box742", "box743", "box744", "box745", "box746", "box747", "box748", "box749", "box750", "box751", "box752", "box753", "box754", "box755", "box756", "box757", "box758", "box759", "box760", "box761", "box762", "box763", "box764", "box765", "box766", "box767", "box768", "box769", "box770", "box771", "box772", "box773", "box774", "box775", "box776", "box777", "box778", "box779", "box780", "box781", "box782", "box783", "box784", "box785", "box786", "box787", "box788", "box789", "box790", "box791", "box792", "box793", "box794", "box795", "box796", "box797", "box798", "box799", "box800", "box801", "box802", "box803", "box804", "box805", "box806", "box807", "box808", "box809", "box810", "box811", "box812", "box813", "box814", "box815", "box816", "box817", "box818", "box819", "box820", "box821", "box822", "box823", "box824", "box825", "box826", "box827", "box828", "box829", "box830", "box831", "box832", "box833", "box834", "box835", "box836", "box837", "box838", "box839", "box840", "box841", "box842", "box843", "box844", "box845", "box846", "box847", "box848", "box849", "box850", "box851", "box852", "box853", "box854", "box855", "box856", "box857", "box858", "box859", "box860", "box861", "box862", "box863", "box864", "box865", "box866", "box867", "box868", "box869", "box870", "box871", "box872", "box873", "box874", "box875", "box876", "box877", "box878", "box879", "box880", "box881", "box882", "box883", "box884", "box885", "box886", "box887", "box888", "box889", "box890", "box891", "box892", "box893", "box894", "box895", "box896", "box897", "box898", "box899", "box900", "box901", "box902", "box903", "box904", "box905", "box906", "box907", "box908", "box909", "box910", "box911", "box912", "box913", "box914", "box915", "box916", "box917", "box918", "box919", "box920", "box921", "box922", "box923", "box924", "box925", "box926", "box927", "box928", "box929", "box930", "box931", "box932", "box933", "box934", "box935", "box936", "box937", "box938", "box939", "box940", "box941", "box942", "box943", "box944", "box945", "box946", "box947", "box948", "box949", "box950", "box951", "box952", "box953", "box954", "box955", "box956", "box957", "box958", "box959", "box960", "box961", "box962", "box963", "box964", "box965", "box966", "box967", "box968", "box969", "box970", "box971", "box972", "box973", "box974", "box975", "box976", "box977", "box978", "box979", "box980", "box981", "box982", "box983", "box984", "box985", "box986", "box987", "box988", "box989")

// console.time("indexOf")
// console.log(myArray.indexOf("box989") !== -1)
// console.timeEnd("indexOf")

// console.time("includes")
// console.log(myArray.includes("box989"))
// console.timeEnd("includes")