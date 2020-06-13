
document.getElementById("button").addEventListener("click", getValue);
const totalHarga = {
    wisata : "",
    totalHarga : null,
    jumlahOrang : null,
    lastHarga : null
};
function getValue(){
    totalHarga.wisata = document.getElementById("wisata").value;
    totalHarga.jumlahOrang = document.getElementById("number").value;
    if(totalHarga.jumlahOrang<=0 || totalHarga.jumlahOrang==null){
        document.getElementById("hargasatuan").innerHTML=0;
        document.getElementById("displayNumber").innerHTML=0;
        return alert("Input Jumlah orang tidak boleh Kosong atau negativ");
    }
    setHarga(totalHarga.wisata);
    calculation();
}
function calculation(){
    totalHarga.totalHarga = totalHarga.lastHarga*totalHarga.jumlahOrang;
    display();
}
function setHarga(value){
/*parangtritis =5000
timang = 10000
nglambor = 5000
tamanSari =10000
prambanan = 15000*/
    if(value==="parangtritis"){
        totalHarga.lastHarga = 5000;
    }
    else if(value==="timang"){
        totalHarga.lastHarga = 10000;
    }
    else if(value==="nglambor"){
        totalHarga.lastHarga = 5000;
    }
    else if(value==="tamanSari"){
        totalHarga.lastHarga = 10000;
    }
    else{
        totalHarga.lastHarga = 15000;
    }
}
function display(){
    document.getElementById("hargasatuan").innerHTML=totalHarga.lastHarga;
    document.getElementById("displayNumber").innerHTML=totalHarga.totalHarga;
}