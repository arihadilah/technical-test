// ============================================================
// Stage 1 - Take-Home Problem Solving Challenge
// Nama  : Arih Adilah Hasan
// Case  : Checkout Cart Sederhana
// ============================================================

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

function calculateCheckout(cart) {
  // VALIDASI: Cek apakah cart kosong
  if (!cart || cart.length === 0) {
    console.log("Cart kosong. Tidak ada transaksi yang bisa diproses.");
    return null;
  }

  // LANGKAH 1: Hitung Subtotal
  let subtotal = 0;
  for (const item of cart) {
    subtotal += item.price * item.qty;
  }

  // LANGKAH 2: Hitung Diskon
  // Rule: jika subtotal > 200.000 → diskon 10%
  let discount = 0;
  if (subtotal > 200000) {
    discount = subtotal * 0.1;
  }

  // LANGKAH 3: Tentukan Ongkos Kirim (flat)
  const shippingFee = 20000;

  // LANGKAH 4: Hitung Grand Total
  const grandTotal = subtotal - discount + shippingFee;

  return { subtotal, discount, shippingFee, grandTotal };
}

async function main() {
  const cart = [];

  console.log("============================================================");
  console.log("               INPUT KERANJANG BELANJA                     ");
  console.log("============================================================");

  while (true) {
    const itemNumber = cart.length + 1;
    console.log(`\n--- Item ke-${itemNumber} ---`);

    const product = await question("Nama produk (atau ketik 'selesai' untuk berhenti): ");
    if (product.toLowerCase() === "selesai") break;

    const price = parseFloat(await question("Harga satuan (Rp): "));
    const qty = parseInt(await question("Jumlah (qty): "));

    if (isNaN(price) || isNaN(qty) || price <= 0 || qty <= 0) {
      console.log("Harga dan qty harus berupa angka positif. Ulangi input item ini.");
      continue;
    }

    cart.push({ product, price, qty });
    console.log(`✓ ${product} (${qty}x ${formatRupiah(price)}) ditambahkan ke cart.`);
  }

  if (cart.length === 0) {
    console.log("\nCart kosong. Program selesai.");
    rl.close();
    return;
  }

  // Tampilkan isi cart
  console.log("\n============================================================");
  console.log("                    ISI CART                               ");
  console.log("============================================================");
  for (const item of cart) {
    const total = item.price * item.qty;
    console.log(`${item.product.padEnd(15)} ${item.qty}x ${formatRupiah(item.price).padEnd(15)} = ${formatRupiah(total)}`);
  }

  // Hitung & tampilkan hasil
  const result = calculateCheckout(cart);

  console.log("\n============================================================");
  console.log("               RINGKASAN PEMBAYARAN                        ");
  console.log("============================================================");
  console.log(`Subtotal      : ${formatRupiah(result.subtotal)}`);
  console.log(`Diskon        : - ${formatRupiah(result.discount)}${result.discount === 0 ? "  (subtotal ≤ Rp 200.000)" : "  (10%)"}`);
  console.log(`Ongkos Kirim  : + ${formatRupiah(result.shippingFee)}`);
  console.log("------------------------------------------------------------");
  console.log(`Grand Total   : ${formatRupiah(result.grandTotal)}`);
  console.log("============================================================");

  rl.close();
}

main();
