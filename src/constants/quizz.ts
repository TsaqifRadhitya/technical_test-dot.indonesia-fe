import type { questionType } from "@/types/question";

const questions_batch_1: questionType[] = [
    {
        type: "multiple",
        difficulty: "easy",
        category: "Frontend",
        question: "Apa fungsi utama dari CSS dalam pengembangan web?",
        correct_answer: "Mengatur tampilan dan gaya elemen",
        incorrect_answers: [
            "Mengelola database",
            "Menangani request server",
            "Menjalankan logika backend"
        ]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Programming",
        question: "Variabel dalam JavaScript dapat berubah tipe datanya.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "Protokol apa yang umum digunakan untuk komunikasi API?",
        correct_answer: "HTTP/HTTPS",
        incorrect_answers: ["FTP", "SMTP", "SSH"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "HTML",
        question: "Elemen HTML untuk membuat hyperlink adalah?",
        correct_answer: "<a>",
        incorrect_answers: ["<link>", "<href>", "<p>"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Metode Agile menekankan siklus pengembangan yang iteratif.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Database",
        question: "Manakah yang termasuk perintah untuk mengambil data dari database?",
        correct_answer: "SELECT",
        incorrect_answers: ["INSERT", "UPDATE", "REMOVE"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Software Engineering",
        question: "Dokumen mana yang biasanya menjelaskan kebutuhan sistem secara detail?",
        correct_answer: "SRS (Software Requirement Specification)",
        incorrect_answers: ["UML Class Diagram", "System Blueprint", "Project Charter"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "JavaScript",
        question: "Array di JavaScript dapat menyimpan nilai dengan tipe berbeda.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "React",
        question: "Hook React yang digunakan untuk efek samping adalah?",
        correct_answer: "useEffect",
        incorrect_answers: ["useState", "useRef", "useMemo"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "API",
        question: "Status code HTTP 201 berarti?",
        correct_answer: "Created",
        incorrect_answers: ["Success", "Bad Request", "Unauthorized"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Git",
        question: "Perintah `git init` digunakan untuk membuat repository baru.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Security",
        question: "Serangan yang menyisipkan skrip berbahaya ke halaman web disebut?",
        correct_answer: "XSS",
        incorrect_answers: ["CSRF", "SQL Injection", "Bruteforce"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "Programming",
        question: "Operator aritmatika untuk sisa pembagian di JavaScript adalah?",
        correct_answer: "%",
        incorrect_answers: ["//", "**", "mod"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Networking",
        question: "HTTP adalah protokol berbasis stateless.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "Package manager default di Node.js adalah?",
        correct_answer: "npm",
        incorrect_answers: ["yarn", "bun", "pip"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Normal form yang mengharuskan tidak ada ketergantungan transitif adalah?",
        correct_answer: "3NF",
        incorrect_answers: ["1NF", "2NF", "BCNF"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "HTML",
        question: "Tag <br> digunakan untuk membuat garis baru.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "CSS",
        question: "Property CSS untuk membuat jarak di luar elemen adalah?",
        correct_answer: "margin",
        incorrect_answers: ["padding", "border", "gap"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "Framework JavaScript yang menggunakan konsep virtual DOM adalah?",
        correct_answer: "React",
        incorrect_answers: ["Vue", "Angular", "Svelte"]
    },
    {
        type: "boolean",
        difficulty: "hard",
        category: "Security",
        question: "HTTPS menjamin data terenkripsi end-to-end dari browser ke server.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "Backend",
        question: "Bahasa pemrograman yang berjalan di Node.js adalah?",
        correct_answer: "JavaScript",
        incorrect_answers: ["Java", "Python", "Go"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Git",
        question: "Perintah untuk mengunggah commit ke remote repository adalah?",
        correct_answer: "git push",
        incorrect_answers: ["git pull", "git add", "git clone"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Software Engineering",
        question: "Scrum adalah salah satu metode Agile.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Backend",
        question: "Metode HTTP yang digunakan untuk memperbarui sebagian resource adalah?",
        correct_answer: "PATCH",
        incorrect_answers: ["PUT", "POST", "HEAD"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Programming",
        question: "Paradigma pemrograman yang berfokus pada objek adalah?",
        correct_answer: "OOP (Object-Oriented Programming)",
        incorrect_answers: [
            "Functional Programming",
            "Logical Programming",
            "Procedural Programming"
        ]
    }
];

const questions_batch_2: questionType[] = [
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "Property CSS yang digunakan untuk mengatur tata letak grid adalah?",
        correct_answer: "display: grid",
        incorrect_answers: ["position: grid", "flex-direction: grid", "align-items: grid"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Programming",
        question: "JavaScript mendukung penulisan fungsi secara anonim (anonymous function).",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "Bahasa pemrograman populer untuk membuat API REST adalah?",
        correct_answer: "JavaScript (Node.js)",
        incorrect_answers: ["HTML", "CSS", "SQL"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Transaksi database yang memenuhi ACID memastikan?",
        correct_answer: "Konsistensi dan keandalan data",
        incorrect_answers: ["Hanya kecepatan", "Hanya keamanan", "Hanya ketersediaan"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Waterfall adalah metode pengembangan yang bersifat linier.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "HTML",
        question: "Elemen HTML untuk membuat daftar bernomor adalah?",
        correct_answer: "<ol>",
        incorrect_answers: ["<ul>", "<li>", "<dl>"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "JavaScript",
        question: "Method array yang digunakan untuk menambahkan elemen baru di akhir array?",
        correct_answer: "push()",
        incorrect_answers: ["pop()", "shift()", "unshift()"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Git",
        question: "Branch default saat membuat repository baru biasanya bernama main atau master.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "Framework Node.js yang populer untuk membuat server adalah?",
        correct_answer: "Express.js",
        incorrect_answers: ["React", "Angular", "Vue"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Security",
        question: "Serangan CSRF menargetkan?",
        correct_answer: "Pengguna yang sudah login untuk mengeksekusi aksi tanpa izin",
        incorrect_answers: [
            "Server untuk mencuri database",
            "Browser untuk mencuri cookies tanpa login",
            "DNS untuk memalsukan alamat IP"
        ]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Frontend",
        question: "React menggunakan virtual DOM untuk optimisasi rendering.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "HTTP method yang digunakan untuk membuat resource baru adalah?",
        correct_answer: "POST",
        incorrect_answers: ["GET", "PUT", "DELETE"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Index dalam database digunakan untuk?",
        correct_answer: "Mempercepat pencarian data",
        incorrect_answers: ["Meningkatkan ukuran tabel", "Menyimpan backup data", "Menambah kolom baru"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "CSS",
        question: "Property padding mengatur jarak di dalam elemen.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "React",
        question: "State di React digunakan untuk?",
        correct_answer: "Menyimpan data yang dapat berubah dan mempengaruhi tampilan",
        incorrect_answers: [
            "Menyimpan data konstan",
            "Menyimpan konfigurasi server",
            "Mengatur CSS global"
        ]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Test-driven development (TDD) menulis test sebelum kode implementasi.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "Programming",
        question: "Tipe data boolean hanya memiliki nilai?",
        correct_answer: "True dan False",
        incorrect_answers: ["0 dan 1", "Yes dan No", "On dan Off"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "File konfigurasi package di Node.js bernama?",
        correct_answer: "package.json",
        incorrect_answers: ["package.js", "node.json", "config.json"]
    },
    {
        type: "boolean",
        difficulty: "hard",
        category: "Security",
        question: "HTTPS menggunakan sertifikat SSL/TLS untuk enkripsi komunikasi.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Git",
        question: "Perintah untuk mengambil update dari remote repository adalah?",
        correct_answer: "git pull",
        incorrect_answers: ["git push", "git clone", "git fetch"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Software Engineering",
        question: "Diagram UML yang menunjukkan aliran aktivitas disebut?",
        correct_answer: "Activity Diagram",
        incorrect_answers: ["Class Diagram", "Sequence Diagram", "Use Case Diagram"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "HTML",
        question: "Form HTML dapat menggunakan method GET atau POST.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "CSS property untuk mengubah warna teks adalah?",
        correct_answer: "color",
        incorrect_answers: ["background-color", "font-size", "text-decoration"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Programming",
        question: "Paradigma pemrograman yang menekankan fungsi sebagai first-class citizen adalah?",
        correct_answer: "Functional Programming",
        incorrect_answers: ["OOP", "Procedural Programming", "Logical Programming"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Backend",
        question: "REST API menggunakan HTTP sebagai protokol komunikasi.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    }
];

const questions_batch_3: questionType[] = [
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "Property CSS yang digunakan untuk mengatur jarak di dalam elemen adalah?",
        correct_answer: "padding",
        incorrect_answers: ["margin", "border", "gap"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Programming",
        question: "Python menggunakan indentasi untuk menandai blok kode.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "Metode HTTP yang digunakan untuk menghapus resource adalah?",
        correct_answer: "DELETE",
        incorrect_answers: ["GET", "POST", "PUT"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Constraint yang mencegah nilai duplikat dalam kolom adalah?",
        correct_answer: "UNIQUE",
        incorrect_answers: ["PRIMARY KEY", "FOREIGN KEY", "CHECK"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Extreme Programming (XP) termasuk metodologi Agile.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "HTML",
        question: "Tag HTML untuk membuat paragraf adalah?",
        correct_answer: "<p>",
        incorrect_answers: ["<div>", "<span>", "<h1>"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "JavaScript",
        question: "Keyword untuk membuat variabel yang nilainya tetap di JavaScript adalah?",
        correct_answer: "const",
        incorrect_answers: ["let", "var", "static"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Git",
        question: "Perintah `git clone` digunakan untuk membuat salinan repository lokal.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "Module Node.js yang digunakan untuk membuat server HTTP adalah?",
        correct_answer: "http",
        incorrect_answers: ["fs", "path", "express"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Security",
        question: "Metode serangan yang memanfaatkan celah validasi input user disebut?",
        correct_answer: "Injection",
        incorrect_answers: ["Phishing", "Bruteforce", "DDoS"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Frontend",
        question: "Framework Vue.js menggunakan virtual DOM.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "Format pertukaran data paling umum pada API adalah?",
        correct_answer: "JSON",
        incorrect_answers: ["XML", "CSV", "YAML"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Transaksi yang gagal dan dikembalikan ke keadaan awal disebut?",
        correct_answer: "Rollback",
        incorrect_answers: ["Commit", "Savepoint", "Checkpoint"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "CSS",
        question: "Property color mengubah warna teks elemen.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "React",
        question: "Properti untuk menambahkan class CSS di React adalah?",
        correct_answer: "className",
        incorrect_answers: ["class", "id", "style"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Pair programming dilakukan oleh dua developer pada satu workstation.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "Programming",
        question: "Tipe data untuk menyimpan teks di JavaScript adalah?",
        correct_answer: "String",
        incorrect_answers: ["Number", "Boolean", "Object"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "Perintah untuk menginstall package baru menggunakan npm adalah?",
        correct_answer: "npm install",
        incorrect_answers: ["npm add", "npm create", "npm init"]
    },
    {
        type: "boolean",
        difficulty: "hard",
        category: "Security",
        question: "Enkripsi simetris menggunakan kunci yang sama untuk enkripsi dan dekripsi.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Git",
        question: "Perintah untuk membuat branch baru di Git adalah?",
        correct_answer: "git branch <nama_branch>",
        incorrect_answers: ["git checkout <nama_branch>", "git push <nama_branch>", "git merge <nama_branch>"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Software Engineering",
        question: "Diagram UML yang menampilkan interaksi objek dari waktu ke waktu disebut?",
        correct_answer: "Sequence Diagram",
        incorrect_answers: ["Class Diagram", "Activity Diagram", "Use Case Diagram"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "HTML",
        question: "Form HTML dapat memiliki atribut enctype untuk mengatur tipe data form.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "Property CSS yang digunakan untuk menampilkan teks tebal adalah?",
        correct_answer: "font-weight: bold",
        incorrect_answers: ["text-decoration: bold", "font-style: bold", "text-style: bold"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Programming",
        question: "Paradigma pemrograman yang menekankan logika deklaratif adalah?",
        correct_answer: "Logical Programming",
        incorrect_answers: ["OOP", "Procedural", "Functional"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Backend",
        question: "REST API menggunakan metode HTTP untuk operasi CRUD.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    }
];

const questions_batch_4: questionType[] = [
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "Property CSS yang digunakan untuk menyembunyikan elemen tanpa menghapus ruangnya adalah?",
        correct_answer: "visibility: hidden",
        incorrect_answers: ["display: none", "opacity: 0", "hidden: true"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Programming",
        question: "Loop for di JavaScript dapat digunakan untuk mengulang array.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "Framework Laravel ditulis menggunakan bahasa pemrograman?",
        correct_answer: "PHP",
        incorrect_answers: ["Python", "JavaScript", "Ruby"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Transaksi yang dijamin konsisten meskipun sistem gagal adalah bagian dari prinsip?",
        correct_answer: "ACID",
        incorrect_answers: ["BASE", "CRUD", "REST"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Kanban menggunakan board visual untuk memantau progres pekerjaan.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "HTML",
        question: "Tag HTML untuk menampilkan gambar adalah?",
        correct_answer: "<img>",
        incorrect_answers: ["<picture>", "<image>", "<src>"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "JavaScript",
        question: "Method array untuk memfilter elemen tertentu adalah?",
        correct_answer: "filter()",
        incorrect_answers: ["map()", "reduce()", "forEach()"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Git",
        question: "Perintah `git status` menampilkan status repository saat ini.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "Module Node.js untuk membaca file adalah?",
        correct_answer: "fs",
        incorrect_answers: ["http", "path", "os"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Security",
        question: "Jenis serangan yang menimpa session dan mencuri token disebut?",
        correct_answer: "Session Hijacking",
        incorrect_answers: ["XSS", "SQL Injection", "CSRF"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Frontend",
        question: "Angular menggunakan dua-way data binding secara default.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Backend",
        question: "Format data API yang mendukung nested object dan array adalah?",
        correct_answer: "JSON",
        incorrect_answers: ["CSV", "TXT", "HTML"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Database",
        question: "Perintah SQL untuk membuat index di tabel adalah?",
        correct_answer: "CREATE INDEX",
        incorrect_answers: ["CREATE UNIQUE", "ADD INDEX", "MAKE INDEX"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "CSS",
        question: "Property font-size digunakan untuk mengubah ukuran huruf.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "React",
        question: "Properti React untuk menghubungkan state ke elemen input adalah?",
        correct_answer: "value",
        incorrect_answers: ["default", "name", "type"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "Software Engineering",
        question: "Code review membantu menemukan bug sebelum produksi.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "easy",
        category: "Programming",
        question: "Operator logika AND di JavaScript adalah?",
        correct_answer: "&&",
        incorrect_answers: ["||", "!", "&"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Node.js",
        question: "Perintah untuk menjalankan file JavaScript di Node.js adalah?",
        correct_answer: "node <nama_file>.js",
        incorrect_answers: ["npm run <nama_file>", "node run <nama_file>", "node execute <nama_file>"]
    },
    {
        type: "boolean",
        difficulty: "hard",
        category: "Security",
        question: "Enkripsi asimetris menggunakan kunci publik dan privat.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Git",
        question: "Perintah untuk menggabungkan branch di Git adalah?",
        correct_answer: "git merge",
        incorrect_answers: ["git push", "git commit", "git rebase"]
    },
    {
        type: "multiple",
        difficulty: "hard",
        category: "Software Engineering",
        question: "Diagram UML yang menunjukkan hubungan antar kelas disebut?",
        correct_answer: "Class Diagram",
        incorrect_answers: ["Activity Diagram", "Sequence Diagram", "Use Case Diagram"]
    },
    {
        type: "boolean",
        difficulty: "medium",
        category: "HTML",
        question: "Tag <input> dapat memiliki tipe 'checkbox', 'radio', dan 'text'.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Frontend",
        question: "CSS property untuk membuat teks rata tengah adalah?",
        correct_answer: "text-align: center",
        incorrect_answers: ["align-text: center", "justify-content: center", "text-center: true"]
    },
    {
        type: "multiple",
        difficulty: "medium",
        category: "Programming",
        question: "Paradigma pemrograman yang menekankan prosedur disebut?",
        correct_answer: "Procedural Programming",
        incorrect_answers: ["OOP", "Functional Programming", "Logical Programming"]
    },
    {
        type: "boolean",
        difficulty: "easy",
        category: "Backend",
        question: "REST API dapat digunakan oleh berbagai klien seperti web, mobile, atau IoT.",
        correct_answer: "True",
        incorrect_answers: ["False"]
    }
];

export const questions = [...questions_batch_1, ...questions_batch_2, ...questions_batch_3, ...questions_batch_4]

export function getRandomQuizzes(n: number): questionType[] {
    if (n >= questions.length) {
        return [...questions];
    }

    const copy = [...questions];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy.slice(0, n);
}
