let turno = false;

let victoria = false;

let contador = 0;

const handleClick = (event) => {
    const { id } = event.target;
    const div = document.getElementById(id);
    if (div.innerText === "" && victoria === false) {
        div.innerText = turno ? "O" : "X"
        verificarVictoria ();
        turno = !turno;
    }     
} 

const verificarVictoria = () => {
    contador ++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = 
    div1.innerText === div2.innerText && 
    div1.innerText === div3.innerText &&
    div1.innerText !== "";

    const forma2 = 
    div4.innerText === div5.innerText && 
    div4.innerText === div6.innerText &&
    div4.innerText !== "";

    const forma3 = 
    div7.innerText === div8.innerText && 
    div7.innerText === div9.innerText &&
    div7.innerText !== "";

    const forma4 = 
    div1.innerText === div4.innerText && 
    div1.innerText === div7.innerText &&
    div1.innerText !== "";

    const forma5 = 
    div2.innerText === div5.innerText && 
    div2.innerText === div8.innerText &&
    div2.innerText !== "";

    const forma6 = 
    div3.innerText === div6.innerText && 
    div3.innerText === div9.innerText &&
    div3.innerText !== "";

    const forma7 = 
    div1.innerText === div5.innerText && 
    div1.innerText === div9.innerText &&
    div1.innerText !== "";

    const forma8 = 
    div3.innerText === div5.innerText && 
    div3.innerText === div7.innerText &&
    div3.innerText !== "";

    const line = document.getElementById("line");
    if (
        forma1) {
        

        line.style.width = "100%";
        line.style.height = "5px";
        line.style.top = "15%";

        declararGanador();
    }   else
    if (
        forma2) {

        line.style.width = "100%";
        line.style.height = "5px";
        line.style.top = "48%";

        declararGanador();
    }   else
    if (
        forma3) {

        line.style.width = "100%";
        line.style.height = "5px";
        line.style.top = "83%";

        declararGanador();
    }   else
    if (
        forma4) {
        line.style.height = "100%";
        line.style.width = "5px";
        line.style.left = "15.5%";

        declararGanador();
    }   else
    if (
        forma5) {

        line.style.height = "100%";
        line.style.width = "5px";
        line.style.left = "49%";

        declararGanador();
    }   else
    if (
        forma6) {

        line.style.height = "100%";
        line.style.width = "5px";
        line.style.left = "83%";

        declararGanador();
    }   else
    if (
        forma7) {

        line.style.width = "90%";
        line.style.height = "5px";
        line.style.top = "50%";
        line.style.left = "5%";
        line.style.transform = "skewY(45deg)";

        declararGanador();
    }   else
    if (
        forma8) {
        line.style.width = "90%";
        line.style.height = "5px";
        line.style.top = "50%";
        line.style.left = "5%";
        line.style.transform = "skewY(-45deg)";

        declararGanador();
    }   else
     {
        if(contador === 9) {
          alert("Empate")
        }
    }

}
    const declararGanador = () => {
        victoria = true;

        setTimeout(()=> alert(`Los ganadores son las ${turno ? "X" : "O"}`), 100) ;
        //alert(`Los ganadores son las ${turno ? "O" : "X"}`);
    }
const reload = () => {
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const line = document.getElementById("line");

        line.style.width = "0%";
        line.style.height = "0px";
        line.style.top = "0%";
        line.style.transform = "skewY(0deg)";

    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turno = false;
    victoria = false;
    contador = 0;
}

