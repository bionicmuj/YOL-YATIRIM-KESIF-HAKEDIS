# Yeni Yol Saha Tespit — Kurulum (Aşama 1)

Dosyalar: `index.html`, `sw.js`, `sablon.js` (yeni yol hakediş şablonu), `sablon_sy.js` (sanat yapısı keşif + hakediş şablonları), `manifest.webmanifest`, `icon-192.png`, `icon-512.png` — hepsi deponun ana dizininde durmalı.

Güncellemede yalnız değişen dosyaları (genelde `index.html`, `sw.js`, bazen `sablon.js`) GitHub'da Add file → Upload files ile üzerine yükleyin. Telefonda uygulamayı kapatıp iki kez açınca yeni sürüm gelir (Yollar ekranının altında sürüm no yazar).

## Kalıcı adres (GitHub Pages, ücretsiz)
1. github.com'da yeni bir depo açın (ör. `saha-tespit`), bu 5 dosyayı yükleyin.
2. Depo **Public** olmalı. Settings → Pages → Branch: `main` / root → Save. Custom domain boş kalır.
3. Birkaç dakika sonra adres: `https://<kullanıcı>.github.io/saha-tespit/`

## Telefona kurma
- **Android (Chrome):** adresi açın → ⋮ → *Ana ekrana ekle / Uygulamayı yükle*.
- **iPhone (Safari):** adresi açın → Paylaş → *Ana Ekrana Ekle*.
- İlk açılışta internet olsun (harita ve Excel kütüphaneleri önbelleğe alınır). Sonra internetsiz çalışır.
- Konum izni: “Uygulamayı kullanırken izin ver”.

## Sahada
- İz kaydı sırasında ekran açık tutulur (Wake Lock). Ekranı kilitlerseniz tarayıcı GPS'i durdurabilir; uygulamaya dönünce kayıt sürer.
- Veriler telefonda (IndexedDB) durur, her kayıtta otomatik yedek alınır. Ara ara **Yollar → Tümünü dışa aktar** ile yedek dosyası alın.

## Hakedişe aktarma
Özet → **JSON** → `HK<N>_tespit_okunan.json` dosyasını yolun klasörüne (ör. `YENİ YOL\410_GEYVE\`) koyun →
“410 kodlu yolun N nolu hakedişini hazırla”.

## Hakediş (v1.2)
- Her yol için **bir kez**: Özet → Hakediş → *Sözleşme bilgilerini gir* (idare, yüklenici, tarihler, imzalar, teklif cetvelinde miktar + birim fiyat).
- Devam eden bir iş için: Yollar → *Devam eden iş: son hakediş Excel'inden al* → bilgisayardaki son HK dosyası seçilir; sözleşme ve önceki etüd noktaları telefona gelir. Sonra ⋯ → *Sonraki hakediş*.
- Tespit bitince: Özet → ARA / SON → **Hakediş paylaş** (WhatsApp) ya da **Hakediş Excel indir**. Tutarlar dosya Excel'de açılınca hesaplanır; hakediş tarihi Excel'de HAKEDİŞLER sayfasından değiştirilebilir.
- Hakediş, bu yolun telefondaki HK1…HKN tespitlerinden her seferinde baştan üretilir; önceki tespit kayıtlarını silmeyin.

## Sanat yapısı keşfi (v1.3)
- Yollar ekranının üstünden **Sanat Yapısı**'na geçin → *Yeni sanat yapısı işi* (bölge, işletme, ilk yol).
- **Yollar / Fiyat:** her yolun nakliye mesafeleri (taş, demir, boru) ve ekskavatör saati; birim fiyatlar (boş olanlar uyarılır; “Varsayılan yap” yeni işlere uygular).
- **İmalatlar → + İmalat:** yol, km, cinsi (koruge Ø / kutu menfez L×H / mevcut boruya kafa duvarı), boy, giriş-çıkış var/yok, üstteki toprak (boş = açıklık kadar), su toplama çukuru / heyelan, konum ve fotoğraf (isteğe bağlı). *Öncekini kopyala* aynı tip yapılar için.
- **Özet:** yaklaşık maliyet (yol yol + icmal, pursantaj), kontroller; Keşif Excel'i indir / paylaş, konumlar (KML), fotoğraflar (zip, ayrı paylaşım).
- Kazı kuralı: gövde = boy × (iç açıklık + 2 m) × (üstteki toprak + iç açıklık); her imalata 60 m × 0,18 m² hendek + su çukuru 1 m³ + heyelan 10 m³.

## Sanat yapısı hakedişi (v1.4)
- Özet → **Sözleşme ve hakedişler** → *Sözleşme bilgilerini gir* (bir kez: yüklenici, EKAP, sözleşme bedeli, tarihler, süre, imzalar).
- **+ N. hakediş tespiti:** tarih, ARA / SON; her imalata kümülatif yüzde (0 / 25 / 50 / 75 / 100, başka %, İPTAL). Önceki yüzde gösterilir; “Hepsini %100 yap” son hakedişte işe yarar.
- **Excel / Paylaş:** hakediş şablonunun tamamı (rapor, icmal, yapılan işler, pursantaj, artan-azalan, yapı tespit tutanağı, kontrol). İPTAL edilen imalatın payı azalan işe kendiliğinden aktarılır.
- Kontroller: yüzde düşerse uyarı; SON hakedişte %100 ya da İPTAL olmayan imalat varsa dosya üretilmez.
