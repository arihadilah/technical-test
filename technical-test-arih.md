# technical-test

# Stage 1 – Take-Home Problem Solving Challenge
**Nama:** Arih Adilah Hasan  
**Posisi:** Technical Test – PT Media Niaga Teknologi  

---

## Deskripsi Solusi

Solusi ini menghitung total pembayaran dari sebuah cart belanja dengan mengikuti urutan langkah yang jelas: hitung subtotal → evaluasi diskon → tambahkan ongkir → hitung grand total.

---

## Data Input

```
cart = [
  { product: "A", price: 100.000, qty: 2 },
  { product: "B", price:  50.000, qty: 1 }
]
```

---

## Pseudocode

```
FUNCTION calculateCheckout(cart):

  LANGKAH 1: Hitung Subtotal
  subtotal = 0
  FOR EACH item IN cart:
    subtotal = subtotal + (item.price × item.qty)
  END FOR
     item 1
     subtotal = 0 + (100.000 × 2)
     subtotal = 200.000
     item 2
     subtotal = 200.000 + (50.000 × 1)
     subtotal = 200.000 + 50.000
     subtotal = 250.000


 LANGKAH 2: Hitung Diskon
  discount = 0
  IF subtotal > 200.000 THEN
    discount = subtotal × 10%
  END IF
     250.000 > 200.000 → TRUE
     discount = 250.000 × 0.10 = 25.000


 LANGKAH 3: Tentukan Ongkos Kirim
  shippingFee = 20.000 


 LANGKAH 4: Hitung Grand Total
  grandTotal = subtotal - discount + shippingFee
     grandTotal = 250.000 - 25.000 + 20.000 = 245.000


OUTPUT 
  RETURN {
    subtotal    : subtotal,     
    discount    : discount,     
    shippingFee : shippingFee,  
    grandTotal  : grandTotal    
  }

END FUNCTION
```

---

## Hasil Perhitungan

| Keterangan       | Nilai          |
|------------------|----------------|
| Subtotal         | Rp 250.000     |
| Diskon (10%)     | – Rp 25.000    |
| Ongkos Kirim     | + Rp 20.000    |
| **Grand Total**  | **Rp 245.000** |

---

## Penjelasan Logika & Urutan Langkah

### Langkah 1 – Hitung Subtotal
Iterasi seluruh item di cart dan akumulasikan hasil perkalian `price × qty` untuk setiap item. Ini adalah nilai dasar sebelum ada penyesuaian apapun.

### Langkah 2 – Evaluasi & Hitung Diskon
Diskon dihitung **setelah** subtotal diketahui, karena rule diskon bergantung pada nilai subtotal. Jika `subtotal > 200.000`, maka diskon sebesar 10% dari subtotal diterapkan.

> **Catatan desain:** Diskon dihitung dari `subtotal`, bukan dari `grandTotal`. Ini adalah pendekatan yang umum di e-commerce — diskon merupakan pengurangan atas nilai barang, sementara ongkir adalah biaya layanan yang berdiri sendiri.

### Langkah 3 – Tentukan Ongkos Kirim
Ongkir bersifat flat (Rp 20.000) dan tidak dipengaruhi oleh diskon. Ongkir ditambahkan setelah diskon dikurangi dari subtotal, sehingga diskon tidak mengubah biaya pengiriman.

### Langkah 4 – Hitung Grand Total
Grand total adalah nilai akhir yang harus dibayar user:

```
Grand Total = Subtotal − Diskon + Ongkos Kirim
            = 250.000 − 25.000 + 20.000
            = 245.000
```

---
