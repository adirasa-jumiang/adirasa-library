const books = [
  {
    title: "Orkes Kentongan (Fahrudin)",
    file: "https://drive.google.com/file/d/1eKzDSaHa6xVqpFr4vmSLFjkH2XuiMKqU/preview",
    cover: "covers/Orkes Kentongan.PNG",
    description: "Panduan belajar Python dari nol hingga membuat program sederhana."
  },
  {
    title: "Kisah Petualangan Binatang Hutan",
    file: "https://drive.google.com/file/d/1swqgPRj7-hm2fWJGMi68uvtaltcdKEFZ/preview",
    cover: "covers/Kisah Petualangan Binatang Hutan.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Ayo Bersih-bersih Rumah",
    file: "https://drive.google.com/file/d/1XYfqQkZ4bCrKebm1JWgOJfNRifPnsqYC/preview",
    cover: "covers/Ayo Bersih-bersih Rumah.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Balas Budi Kupu-kupu Biru",
    file: "https://drive.google.com/file/d/1v7EXEvn4a7LfWAdwBw9Cjt4_f4tnrC0g/preview",
    cover: "covers/Balas Budi Kupu-kupu Biru.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Beri Beruang Juga Bisa",
    file: "https://drive.google.com/file/d/1ROeYMyxSpFxr8SWBxBpZ3pXr4opQi0w7/preview",
    cover: "covers/Beri Beruang Juga Bisa.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Kemana Balon itu Pergi",
    file: "https://drive.google.com/file/d/1POJSuu0osLlg6XpVasyq2xKtDbtedaw6/preview",
    cover: "covers/Kemana Balon Itu Pergi.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Bukan Salah Laba-laba",
    file: "https://drive.google.com/file/d/1imry16xPo34mOLl2RYFOyIF514JJxjlq/preview",
    cover: "covers/Bukan Salah Laba-laba.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Serangan Semut ( Fitri Restiana )",
    file: "https://drive.google.com/file/d/1LtTL9pMqmgx0W6y9Pm6qtU5923IgiSMN/preview",
    cover: "covers/Serangan Semut.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Saki Sakit Gigi (Sri Widiyastuti)",
    file: "https://drive.google.com/file/d/1F8aypvTOTK17VAQv6rOGANBLVGw7MV1H/preview",
    cover: "covers/Sakit sakit Gigi.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Meong-Meong ( Dinni Tresnadewi )",
    file: "https://drive.google.com/file/d/1wY5pI5he7JQPZ-LAEbYg8BkyUucF3kcP/preview",
    cover: "covers/Meong-meong.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Mainan dari Alam ( Dini W Tamam )",
    file: "https://drive.google.com/file/d/1MBDDoahh9jhWF-YOV4EsH6btpOIIIQ8K/preview",
    cover: "covers/Mainan Dari Alam.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Ayo Kenali Bakteri dan Virus ( KEMDIKBUD RI 2020 )",
    file: "https://drive.google.com/file/d/1ja0l6OOtOo3ByFrZyELKsvOE1yekJQ6y/preview",
    cover: "covers/Ayo Kenali Bakteri Virus.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Penerbangan Seumur Hidup ( Hello English )",
    file: "https://drive.google.com/file/d/1DRdaLuZMqlj-yQV_NhmHzrLgP80xmVm3/preview",
    cover: "covers/Penerbangan Seumur Hidup.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  },
    {
    title: "Benda Ajaib di Dapur Nenek ( Hasta Indriyana )",
    file: "https://drive.google.com/file/d/1NDbmOgSwSHIejU_vEqj4_YzusLjmD7Cn/preview",
    cover: "covers/Benda Ajaib di Dapur Nenek.PNG",
    description: "Contoh buku PDF yang di-host di Google Drive, bisa dibaca langsung di browser."
  }
];

const container = document.getElementById("book-list");
const searchInput = document.getElementById("search");

function renderBooks(filter = "") {
  container.innerHTML = "";
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" class="cover">
      <h3>${book.title}</h3>
      <p class="desc">${book.description}</p>
      <a href="${book.file}" target="_blank">📖 Baca</a>
    `;
    container.appendChild(card);
  });
}

renderBooks();

searchInput.addEventListener("input", () => {
  renderBooks(searchInput.value);
});
