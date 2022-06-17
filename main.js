function addkolom (){
let qty = document.getElementById('qty').value;
let namaBarang = document.getElementById('nama-barang').value;
let detail = document.getElementById('spesifikasi').value;
let satuan = document.getElementById('satuan').value
   
let tabel =document.getElementById('barang');

let total= parseInt(qty)*parseInt(satuan);
let tema = `<tr>
        <td>${qty}</td>
        <td>${namaBarang}</td>
        <td>${detail}</td>
        <td>${satuan}</td>
        <td class='total'>${total}</td>
            </tr>`
 
 let kolomBaru = tabel.insertRow(1)
 alert('Data Berhasil Di Tambahkan')
 return kolomBaru.innerHTML=tema;

}



// function pengjumlahan total


function jumlahkan(){
  
let total= document.querySelectorAll('.total');

let u=''
  for (i=0 ; i < total.length;i++){
    
    let l=total[i].innerText+";"
   // console.log(l)
    u += l

    
  }
  //menghapus titik koma pemisah
  let re = /\s*;\s*/;
  let nameList = u.split(re);
  
 let hasilKeInteger= nameList.map(Number)

  let sum = hasilKeInteger.reduce((x, y) => {
    return x + y;
  });
  alert('Data Berhasil Di Jumlahkan')
  
 return document.querySelector('.hasil').innerText=sum;

};


//Function Deposit

function depo(){
  
  let inputDepo=document.getElementById('deposit').value;
  let inputRess = document.getElementById('res').value
  
  let ress =document.querySelector('.res')
  let depo =document.querySelector('.depo')
  
  let isiDepo = depo.textContent=inputDepo;
  let isiRess= ress.textContent=inputRess;
  
  let isideporess= parseInt(isiDepo)+parseInt(isiRess)
  
  let hasil = document.querySelector('.hasil').textContent;

  let hasilDiKurangiDepo = parseInt(hasil)-parseInt(isideporess);
  
  let bayar= document.querySelector('.dibayar');
  alert('Data Berhasil di tambahkan')
  
 return bayar.textContent=hasilDiKurangiDepo;
  
  

  
}

let namaBulan= ['Januari','Febuari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
let namaHari =['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu']

let date = new Date();
let tanggal = date.getDate();
let hari = date.getDay()
let bulan = date.getMonth()
let tahun =date.getFullYear()

let tanggalSaatIni = `${namaHari[hari]} , ${tanggal} ${namaBulan[bulan]} ${tahun}`
console.log(tanggalSaatIni)
document.querySelector('.tanggal').innerText=tanggalSaatIni;