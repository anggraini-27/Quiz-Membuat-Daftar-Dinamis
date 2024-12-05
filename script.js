// Ambil elemen input, tombol, dan daftar
const inputField = document.getElementById('itemInput');
const addButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

// Tambahkan event listener untuk tombol klik
addButton.addEventListener('click', function() {
    // Ambil teks dari input field
    const itemText = inputField.value;

    // Pastikan input tidak kosong
    if (itemText.trim() !== '') {
        // Buat elemen li baru
        const listItem = document.createElement('li');
        listItem.textContent = itemText;

        // Tambahkan elemen li ke ul
        itemList.appendChild(listItem);

        // Kosongkan input field
        inputField.value = '';
    } else {
        alert('Masukkan teks sebelum menambahkan item!');
    }
});
