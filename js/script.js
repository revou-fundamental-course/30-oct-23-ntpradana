var heightInput = document.querySelector(".height"); //mengambil angka tinggi yang diinput
var weightInput = document.querySelector(".weight"); //mengambil angka berat yang diinput
var calculateButton = document.querySelector(".calculate"); //membuat tombol hitung berfungsi sebagai tombol mulai 
var resetButton = document.querySelector(".reset"); //menghapus angka yang telah diinput
var result = document.querySelector(".result"); //menampilkan hasil hitung BMI pada box dengan class result
var statementSatu = document.querySelector(".statement1"); //menampilkan statemen hasil function di html
var statementDua = document.querySelector(".statement2"); //menampilkan statemen hasil function di html
var description = document.querySelector(".description"); //menampilkan deskripsi hasil function di html
var effectPrediction = document.querySelector(".effect-prediction"); //menampilkan deskripsi hasil function di html
var ageInput = document.querySelector(".age") //mengambil angka umur yang diinput
var ageResult = document.querySelector(".age-result") //menampilkan angka umur yang diinput pada box dengan class age-result
var BMI, height, weight; //varible untuk proses hitung function

calculateButton.addEventListener("click", ()=>{ //tombol akan mendengar perintah untuk menjalankan function saat tombol ditekan
    
    height = heightInput.value; //untuk validasi nilai tinggi
    weight = weightInput.value; //untuk validasi nilai berat 
    BMI = (weight/(height**2)).toFixed(1); //BMI dihitung berdasarkan berat dibagi kuadrat dari tinggi, lalu hasilnya dibulatkan 1 angka di belakang koma
    result.innerText = BMI; //menampilkan teks hasil hitung BMI pada variabel result
    ageResult.innerText = ageInput.value + " Tahun"; //menampilkan teks umur yang diinput pada variabel ageResult
    
    if(BMI < 18.5){ //statemen jika nilai BMI kurang dari 18.5
        statementSatu.innerHTML = "Berat Badan Kurang"; //teks yang ditampilkan jika BMI kurang dari 18.5
        statementDua.innerHTML = "Anda kekurangan berat badan"; //teks yang ditampilkan jika BMI kurang dari 18.5
        description.innerHTML = "Hasil BMI kurang dari 18.5<br>Anda berada dalam kategori kekurangan berat badan.<br>Cara terbaik untuk menambah berat badan adalah dengan mengkonsumsi makanan yang kaya nutrisi, makan lebih sering dengan porsi sedikit, memilih makanan padat kalori, mengkonsumsi camilan sehat, rutin berolahraga, minum di waktu yang tepat, serta memperbanyak air mineral dan susu.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal."; //teks yang ditampilkan jika BMI kurang dari 18.5
        effectPrediction.innerHTML = "Beberapa penyakit yang berasal dari kekurangan berat badan<br>Kekurangan nutrisi<br>Osteoporosis<br>Kekebalan terganggu<br>Sering merasa lelah<br>Anemia<br>Masalah kesuburan"; //teks yang ditampilkan jika BMI kurang dari 18.5
    }else if((BMI > 18.5) && (BMI <= 24.9)){ //statemen jika nilai BMI diantara 18.5 dan 24.9
        statementSatu.innerHTML = "Berat Badan Normal"; //teks yang ditampilkan jika BMI diantara 18.5 dan 24.9
        statementDua.innerHTML = "Anda memiliki berat badan Ideal"; //teks yang ditampilkan jika BMI diantara 18.5 dan 24.9
        description.innerHTML = "Hasil BMI diantara 18.5-24.9<br>Anda berada dalam kategori berat badan ideal.<br>Cara terbaik untuk menjaga berat badan ideal adalah dengan mengurangi cemilan tinggi GGL dan mengkonsumsi lebih banyak buah dan sayur, melakukan aktivitas fisik 30 menit per hari serta istirahat yang cukup.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan anda di batas normal.";  //teks yang ditampilkan jika BMI diantara 18.5 dan 24.9
        effectPrediction.innerHTML = "Beberapa manfaat berat badan ideal<br>Menurunkan risiko diabetes<br>Menurunkan risiko kanker payudara<br>Meningkatkan kesehatan jantung<br>Meningkatkan kesuburan<br>Tidur lebih nyenyak<br>Umur lebih panjang"; //teks yang ditampilkan jika BMI diantara 18.5 dan 24.9
    }else if((BMI >= 25) && (BMI <= 29.9 )){ //statemen jika nilai BMI diantara 25 dan 29.9
        statementSatu.innerHTML = "Berat Badan Lebih"; //teks yang ditampilkan jika BMI diantara 25 dan 29.9
        statementDua.innerHTML = "Anda kelebihan berat badan"; //teks yang ditampilkan jika BMI diantara 25 dan 29.9
        description.innerHTML = "Hasil BMI diantara 25.0-29.9<br>Anda berada dalam kategori berat badan berlebih<br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."; //teks yang ditampilkan jika BMI diantara 25 dan 29.9
        effectPrediction.innerHTML = "Beberapa penyakit yang berasal dari kegemukan<br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthrisis"; //teks yang ditampilkan jika BMI diantara 25 dan 29.9
    }else{ //statemen jika nilai BMI di atas 30
        statementSatu.innerHTML = "Berat Badan Obesitas"; //teks yang ditampilkan jika BMI di atas 30
        statementDua.innerHTML = "Anda sangat kelebihan berat badan"; //teks yang ditampilkan jika BMI di atas 30
        description.innerHTML = "Hasil BMI lebih dari 30.0<br>Anda berada dalam kategori obesitas.<br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";  //teks yang ditampilkan jika BMI di atas 30
        effectPrediction.innerHTML = "Beberapa penyakit yang berasal dari kegemukan<br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthrisis"; //teks yang ditampilkan jika BMI di atas 30
    }    
    var ele = document.getElementsByName('gender'); // mengambil jenis kelamin yang dipilih pada class gender
    for (i = 0; i < ele.length; i++) { 
        if (ele[i].checked)
            document.getElementById("gender").innerHTML //menampilkan teks jenis kelamin yang dipilih
                = ele[i].value;
    }  
});

resetButton.addEventListener("click", ()=>{ //mengaktifkan fungsi saat tombol reset ditekan
    
    var age = document.getElementById('age'); //mengambil data dari id age
    var weight = document.getElementById('weight'); //mengambil data dari id weight
    var height = document.getElementById('height'); //mengambil data dari id height
    weight.value = ""; //saat reset ditekan maka nilai weight menjadi kosong
    height.value = ""; //saat reset ditekan maka nilai height menjadi kosong
    age.value = ""; //saat reset ditekan maka nilai age menjadi kosong
    
});
