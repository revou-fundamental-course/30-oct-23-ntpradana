var heightInput = document.querySelector(".height");
var weightInput = document.querySelector(".weight");
var calculateButton = document.querySelector(".calculate");
var resetButton = document.querySelector(".reset");
var result = document.querySelector(".result");
var statementSatu = document.querySelector(".statement1");
var statementDua = document.querySelector(".statement2");
var description = document.querySelector(".description");
var effectPrediction = document.querySelector(".effect-prediction")
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight/(height**2)).toFixed(1); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statementSatu.innerHTML = "Berat Badan Kurang";
        statementDua.innerHTML = "Anda kekurangan berat badan";
        description.innerHTML = "Hasil BMI kurang dari 18.5<br>Anda berada dalam kategori kekurangan berat badan.<br>Cara terbaik untuk menambah berat badan adalah dengan mengkonsumsi makanan yang kaya nutrisi, makan lebih sering dengan porsi sedikit, memilih makanan padat kalori, mengkonsumsi camilan sehat, rutin berolahraga, minum di waktu yang tepat, serta memperbanyak air mineral dan susu.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal."; 
        effectPrediction.innerHTML = "Beberapa penyakit yang berasal dari kekurangan berat badan<br>Kekurangan nutrisi<br>Osteoporosis<br>Kekebalan terganggu<br>Sering merasa lelah<br>Anemia<br>Masalah kesuburan";
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statementSatu.innerHTML = "Berat Badan Normal";
        statementDua.innerHTML = "Anda memiliki berat badan Ideal";
        description.innerHTML = "Hasil BMI diantara 18.5-24.9<br>Anda berada dalam kategori berat badan ideal.<br>Cara terbaik untuk menjaga berat badan ideal adalah dengan mengurangi cemilan tinggi GGL dan mengkonsumsi lebih banyak buah dan sayur, melakukan aktivitas fisik 30 menit per hari serta istirahat yang cukup.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menjaga berat badan anda di batas normal."; 
        effectPrediction.innerHTML = "Beberapa manfaat berat badan ideal<br>Menurunkan risiko diabetes<br>Menurunkan risiko kanker payudara<br>Meningkatkan kesehatan jantung<br>Meningkatkan kesuburan<br>Tidur lebih nyenyak<br>Umur lebih panjang";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statementSatu.innerHTML = "Berat Badan Lebih";
        statementDua.innerHTML = "Anda kelebihan berat badan";
        description.innerHTML = "Hasil BMI diantara 25.0-29.9<br>Anda berada dalam kategori berat badan berlebih<br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."; 
        effectPrediction.innerHTML = "Beberapa penyakit yang berasal dari kegemukan<br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthrisis";
    }else{
        statementSatu.innerHTML = "Berat Badan Obesitas";
        statementDua.innerHTML = "Anda sangat kelebihan berat badan";
        description.innerHTML = "Hasil BMI lebih dari 30.0<br>Anda berada dalam kategori obesitas.<br>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."; 
        effectPrediction.innerHTML = "Beberapa penyakit yang berasal dari kegemukan<br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthrisis";
    }      
});

resetButton.addEventListener("click", ()=>{
    
    var age = document.getElementById('age');
    var weight = document.getElementById('weight');
    var height = document.getElementById('height');
    weight.value = "";
    height.value = "";
    age.value = "";
    
});

