# USPA E-Commerce Campaign Widget

## Case Study

USPA E-Commerce web sitesi için hazırlanan on-site kampanya widget'ı case çalışmasıdır.

Çalışma; desktop ve responsive ekranlarda kampanya iletişiminin gösterilmesi, kampanya içeriklerinin animasyonlu şekilde değiştirilmesi, modal etkileşimi ve kupon kodu kopyalama deneyimini kapsar.

## Kullanılan Teknolojiler

- React
- JavaScript
- CSS
- Vite

## Özellikler

### Desktop

- Sayfa açılışından 5 saniye sonra kampanya widget'ı görüntülenir.
- Kampanya alanı ekranın sol alt kısmında fixed olarak konumlanır.
- Kampanya mesajları otomatik olarak değişir.
- Widget üzerinden kampanya modalı açılabilir.
- Modal içerisinde kampanya banner'ları gösterilir.
- Kupon kodu kopyalama fonksiyonu bulunur.
- Kopyalama sonrasında buton `KOPYALANDI` durumuna geçer ve 5 saniye sonra tekrar `KOPYALA` olur.
- Modal X ikonu üzerinden kapatılabilir.

### Responsive

- Kampanya widget'ı ekranın alt kısmında fixed olarak konumlanır.
- Kampanya mesajları animasyonlu şekilde değiştirilir.
- Kampanya alanı üzerinden modal açılabilir.
- Kampanya banner'ları yatay olarak görüntülenebilir/kaydırılabilir.
- Kupon kopyalama davranışı responsive görünümde de çalışır.
- Mobil ekranlara uygun header ve modal davranışları uygulanmıştır.

## Kurulum

```bash
npm install
```

## Development

```bash
npm run dev
```

Terminalde gösterilen local adres üzerinden projeyi görüntüleyebilirsiniz.

## Production Build

```bash
npm run build
```

Build çıktısını kontrol etmek için:

```bash
npm run preview
```

## Proje Yapısı

```text
src/
├── assets/
│   ├── logo.png
│   ├── modal-01.*
│   ├── modal-02.*
│   ├── modal-03.*
│   └── modal-04.*
│
├── App.jsx
├── App.css
└── main.jsx
```

## Geliştirme Yaklaşımı

Çalışmada React state yönetimi kullanılarak kampanya görünürlüğü, modal durumu, kampanya geçişleri ve kupon kopyalama durumu yönetilmiştir.

Responsive davranışlar CSS media query'leri üzerinden ele alınmış; desktop ve mobil deneyimler ayrı layout davranışlarıyla kurgulanmıştır.

Animasyonlarda CSS transition ve keyframe yapıları kullanılmıştır.

## Kullanım

1. Sayfanın açılmasını bekleyin.
2. Kampanya widget'ının görünmesini bekleyin.
3. Kampanya alanına tıklayarak modalı açın.
4. Kampanya banner'larını inceleyin.
5. Kupon bulunan banner üzerindeki `KOPYALA` butonunu kullanın.
6. Modalı X ikonu üzerinden kapatın.
7. Responsive davranışı farklı ekran genişliklerinde test edin.

## Not

Proje, case çalışması kapsamında hazırlanmış çalışan demo/prototip olarak sunulmuştur.
