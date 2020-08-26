

function Outro() {
    var job = window.document.querySelector("select#job")

    job.addEventListener('change', (event) => {
        var outro = window.document.querySelector("div#outro")

        if (job.value == "Outro") {
            outro.innerHTML = `<br></br>`
            outro.innerHTML +=
            `<label for="outro"><p><strong>Insira a sua profissão <em>(caso não tenha encontrado na lista acima)</em></strong></p></label>
            <input type="text" placeholder="Insira a sua profissão aqui" id="outro">`;
        } else {
            outro.innerHTML = ""
        }
    })
}

function Ofcoord() {
    var camp = window.document.querySelector("select#camp")

    camp.addEventListener('change', (event) => {
        var ofcoord = window.document.querySelector("div#ofcoord")

        if (camp.value != "parang") {
            ofcoord.innerHTML = `<br></br>`
            ofcoord.innerHTML += 
            `<label for="ofcoord" class="custom-file-label"><p><strong>Anexe um ofício da Coordenação do seu campus:</strong></p></label>
            <input type="file" class="custom-file" id="ofcoord" multiple size="50" onchange="Anexa()" required>`;

        } else {
            ofcoord.innerHTML = ""
        }
    })
}

function Aprv() {
    var aprv = window.document.querySelector("select#aprv")

    aprv.addEventListener('change', (event) => {
        var pubpriv = window.document.querySelector("div#pubpriv")
        var tce     = window.document.querySelector("div#tce")
        var ceoab   = window.document.querySelector("div#ceoab")

        if (aprv.value == "s") {

            pubpriv.innerHTML = 
            `<div id="input"><!--Instituição de aproveitamento é pública ou privada?-->
                <label for="aprv"><p><strong>A instituição onde será feito o aproveitamento é pública ou privada?</strong></p></label>
                <select id="aprv" class="custom-select" onclick="Aprv()">
                    <option value="">Indique se a instituição é pública ou privada.</option>
                    <option value="pu">Pública</option>
                    <option value="pr">Privada</option>
                </select>
            </div>`;
            
            tce.innerHTML = `<br></br>`
            tce.innerHTML += 
            `<label for="ofcoord" class="custom-file-label"><p><strong>Anexe o Termo de Compromisso de estágio:</strong></p></label>
            <input type="file" class="custom-file-input" id="tce" multiple size="50" onchange="Anexa()" required>`;

            ceoab.innerHTML = `<br></br>`
            ceoab.innerHTML +=
            `<label for="ofcoord" class="custom-file-label"><p><strong>Anexe a sua Carteira de Estudante da OAB (ou o protocolo de entrada para obtenção do documento):</strong></p></label>
            <input class="custom-file-input" type="file" id="tce" multiple size="50" onchange="Anexa()" required>`;

        } else {
            pubpriv.innerHTML = ""
            tce.innerHTML = ""
        }
    })
    
}

function Estg() {
    var estg = window.document.querySelector("select#estg")

    estg.addEventListener('change', (event) => {
        var tnda = window.document.querySelector("div#tnda")

        if (estg.value == "EPJ12" || estg.value == "EPJ34") {
            tnda.innerHTML = `<br></br>`
            tnda.innerHTML +=
            `<label for="tnda"><p><strong>Anexe o Termo de Não Desistência Assinado:</strong></p></label>
            <input type="file" id="tnda" multiple size="50" onchange="Anexa()" required>`;
        } else {
            tnda.innerHTML = ""
        }
    })
}

function check_form(){
	var inputs = document.getElementsByClassName('required');
    var len = inputs.length;
    var valid = true;
    for(var i=0; i < len; i++){
        if (!inputs[i].value){ valid = false; }
        }
        if (!valid){
  	        alert('Por favor preencha todos os campos.');
            return false;
        } else { return true; }
}

function Continuar1() {//Não está sendo utilizada (grava o objeto aluno)

    let aluno = {
        nome:       window.document.querySelector("input#name"),      //Nome
        mat:        window.document.querySelector("input#mat"),       //Matrícula   
        email:      window.document.querySelector("input#email"),     //Email     
        tel:        window.document.querySelector("input#tel"),       //Telefone
        job:        window.document.querySelector("select#job"),      //Profissão
        camp:       window.document.querySelector("select#camp"),     //Campus de origem
        hist:       window.document.querySelector("input#hist"),      //Histórico
        foto34:     window.document.querySelector("input#foto34"),    //Foto 3x4
        cgc:        window.document.querySelector("input#cgc"),       //RG e CPF
        decmat:     window.document.querySelector("input#decmat"),    //Declaração de matrícula
        ofcoord:    window.document.querySelector("input#ofcoord"),   //Ofício da Coordenação (caso não seja da Parangaba)
    }

}

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function Anex() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);
  }

function newPopup() {
    varWindow = window.open ('popup.html', 'popup')
}
