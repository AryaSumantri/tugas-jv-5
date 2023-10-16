//membuat perulanagn data array

function GanjilGenap(){
    let angka = prompt("Masukkan Bilangan : ");
    
    if (angka % 2 === 0){
        alert( angka + " " + "Angka Bilangan Genap");
    }
    else {
        alert (angka + " " + "Adalah Bilangan Ganjil");
    }
    }
    
    const tombol = document.getElementById("Masuk")
    tombol.addEventListener("click", GanjilGenap)


















//membuat perulanagn sebanayak 10

// let angka = 10
// for(i=1;i<11;i++){
//     alert("angka: " + i)
// }

// // pariabel untuk menandai batoon
// let simpan = document.getElementById("click");

// function saveUsername(){
//     //pariabel untuk menyimpan username dari pengguna
// let username = document.getElementById("username").value;
//     let saveuser = username.trim()
//     alert(saveuser)
// }


// simpan.addEventListener("click",saveUsername)

