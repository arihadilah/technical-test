# Stage 2 – Take-Home Problem Solving Challenge
**Nama:** Arih Adilah Hasan  
**Posisi:** Technical Test Stage 2 – PT Media Niaga Teknologi  

---

## Deskripsi
UPDATE REQUIREMENT

Terdapat perubahan rule discount menjadi:

Total > 200.000 → diskon 10%

Total > 300.000 → diskon 15%

Discount tidak boleh double / ditumpuk

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
  IF subtotal > 300.000 THEN
    discount = subtotal × 15%
  ELSE IF subtotal > 200.000 THEN
    discount = subtotal x 10%
  ELSE 
    discount = 0
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

## PENJELASAN SINGKAT
**Perubahan dari requirement sebelumnya**
Pada requirement sebelumnya, rule diskon hanya satu: jika subtotal > 200.000 maka diskon 10%. Pada requirement baru, terdapat dua threshold diskon — subtotal > 200.000 mendapat diskon 10%, dan subtotal > 300.000 mendapat diskon 15%. Ditambahkan juga aturan bahwa diskon tidak boleh double atau ditumpuk, artinya hanya satu rule diskon yang boleh aktif dalam satu transaksi.

**Perubahan pada logic**
Logic if/else perlu diubah urutannya. Karena diskon tidak boleh ditumpuk, kondisi yang lebih besar harus dicek lebih dulu. Jika subtotal > 300.000, langsung gunakan diskon 15% dan berhenti. Jika tidak memenuhi, baru cek apakah subtotal > 200.000 untuk diskon 10%. Jika keduanya tidak terpenuhi, diskon tetap 0.
