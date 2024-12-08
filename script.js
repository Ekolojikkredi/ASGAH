function showPage(pageId) {
    const pages = ['kayit', 'veri-goruntule', 'veri-giris', 'ekolojik-kredi', 'hazirlayanlar', 'geri-donusum', 'bize-ulasin'];
    pages.forEach(page => {
        document.getElementById(page)?.style.display = 'none';
    });
    
    document.getElementById(pageId)?.style.display = 'block';
}

// Okul Kaydı işlemi
document.getElementById('okulKayitForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const okulAdi = document.getElementById('okulAdi').value;
    const il = document.getElementById('il').value;
    const ilce = document.getElementById('ilce').value;
    const sifre = document.getElementById('okulSifre').value;

    // Okul bilgilerini localStorage'a kaydet
    const okulBilgileri = { okulAdi, il, ilce, sifre };
    localStorage.setItem('okulBilgileri', JSON.stringify(okulBilgileri));

    alert('Okul kaydınız başarıyla oluşturuldu.');
    showPage('kayit'); // Başka bir sayfaya yönlendirme yapabilirsiniz
});

// Öğrenci Kaydı işlemi
document.getElementById('ogrenciKayitForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const ogrenciAd = document.getElementById('ogrenciAd').value;
    const ogrenciSoyad = document.getElementById('ogrenciSoyad').value;
    const ogrenciOkulNo = document.getElementById('ogrenciOkulNo').value;
    const ogrenciEmail = document.getElementById('ogrenciEmail').value;
    const ogrenciTelefon = document.getElementById('ogrenciTelefon').value;
    const ogrenciSinif = document.getElementById('ogrenciSinif').value;

    // Öğrenci bilgilerini localStorage'a kaydet
    const ogrenciBilgileri = { ogrenciAd, ogrenciSoyad, ogrenciOkulNo, ogrenciEmail, ogrenciTelefon, ogrenciSinif };
    localStorage.setItem('ogrenciBilgileri', JSON.stringify(ogrenciBilgileri));

    alert('Öğrenci kaydınız başarıyla oluşturuldu.');
    showPage('kayit');
});

// Veri Girişi için okul adı ve şifresi kontrolü
document.getElementById('veriGirisForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const okulAdiGiris = document.getElementById('okulAdiGiris').value;
    const okulSifreGiris = document.getElementById('okulSifreGiris').value;

    // LocalStorage'dan okul bilgilerini kontrol et
    const storedOkulBilgileri = JSON.parse(localStorage.getItem('okulBilgileri')) || {};

    if (okulAdiGiris === storedOkulBilgileri.okulAdi && okulSifreGiris === storedOkulBilgileri.sifre) {
        // Okul doğrulandıktan sonra öğrenci verisi giriş sayfasını göster
        showPage('veri-giris-form');
    } else {
        alert('Okul adı veya şifre yanlış!');
    }
});

// Veri Giriş formunu işleme
document.getElementById('veri-giris-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Veriyi al ve kaydet
    const atikTuru = document.getElementById('atikTuru').value;
    const atikKilogram = document.getElementById('atikKilogram').value;
    const ogrenciAd = document.getElementById('ogrenciAd').value;
    const ogrenciSoyad = document.getElementById('ogrenciSoyad').value;
    const ogrenciOkulNo = document.getElementById('ogrenciOkulNo').value;
    const ogrenciSinif = document.getElementById('ogrenciSinif').value;
    const veriGiren = document.getElementById('veriGiren').value;

    // Atık bilgilerini kaydet
    const atikBilgileri = { atikTuru, atikKilogram, ogrenciAd, ogrenciSoyad, ogrenciOkulNo, ogrenciSinif, veriGiren };
    const storedAtikVerileri = JSON.parse(localStorage.getItem('atikVerileri')) || [];
    storedAtikVerileri.push(atikBilgileri);
    localStorage.setItem('atikVerileri', JSON.stringify(storedAtikVerileri));

    alert('Veri başarıyla kaydedildi!');
});
