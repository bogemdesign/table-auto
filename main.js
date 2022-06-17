// Titik Pada Angka untuk Rupiah

function titikRupiah(angka) {
  let reverse = angka.toString().split('').reverse().join(''),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return ribuan;
}

// hilangkan titik pada angka string to.hasilKeInteger
function hilangkanTitik(angkaTitik) {
  let jadiAngkaTanpaTitik = parseFloat(angkaTitik.replaceAll('.', ''))
  return jadiAngkaTanpaTitik;
}


// Tamabh kolom
function addkolom (){
let qty = document.getElementById('qty').value;
let namaBarang = document.getElementById('nama-barang').value;
let detail = document.getElementById('spesifikasi').value;
let satuan = document.getElementById('satuan').value
 let bahan = document.getElementById('bahan').value
let tabel =document.getElementById('barang');

let total= parseInt(qty)*parseInt(satuan);

// ubah pake titik
let tqty= titikRupiah(qty)
let tsatuan = titikRupiah(satuan)
let  tTotal = titikRupiah(total)

let tema = `<tr>
        <td>${tqty}</td>
        <td>${namaBarang}</td>
        <td>${bahan}</td>
        <td>${detail}</td>
        <td>${tsatuan}</td>
        <td class='total'>${tTotal}</td>
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
   console.log(hilangkanTitik(l))
   let tanpaTitik= hilangkanTitik(l)
    u += l.replaceAll('.','')

    
  }
  //menghapus titik koma pemisah Array
  let re = /\s*;\s*/;
  let nameList = u.split(re);
  console.log(nameList)
 let hasilKeInteger= nameList.map(Number)
console.log(hasilKeInteger)
  let sum = hasilKeInteger.reduce((x, y) => {
    return x + y;
  });
  alert('Data Berhasil Di Jumlahkan')
  
 return document.querySelector('.hasil').innerText=titikRupiah(sum);

};


//Function Deposit

function depo(){
  
  let inputDepo=document.getElementById('deposit').value;
 
 
  
  // let ress =document.querySelector('.res')
  let depo =document.querySelector('.depo')
  
  let isiDepo = depo.textContent=titikRupiah(inputDepo);
  // let isiRess= ress.textContent=titikRupiah(inputRess);
  let isideponotitik = hilangkanTitik(isiDepo)
  
  // let isideporess= hilangkanTitik(isiDepo)+hilangkanTitik(isiRess);
  
  let hasil = document.querySelector('.hasil').textContent;

  let hasilDiKurangiDepo = hilangkanTitik(hasil)-parseInt(isideponotitik);
   let namaPelanggan =document.getElementById('nama-pelanggan').value
  
  document.querySelector('.nama').textContent=namaPelanggan
  
  
  
  let bayar= document.querySelector('.dibayar');
  
  
  alert('Data Berhasil di tambahkan')
  
 return bayar.textContent=titikRupiah(hasilDiKurangiDepo);
  

  
}



// Tanggal Otomatis
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