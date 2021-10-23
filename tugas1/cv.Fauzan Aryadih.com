<!DOCTYPE html>
<html lang="en">
    <head>
        <style>   
        </style>
        <meta charset="UTF-8" />
        <title>Curriculum Vitae</title>
    </head>
    <body style="margin: 0; background-color: #fff; letter-spacing: 0.0083em;">
        <div style="width: 100%; max-width: none;">
            <img
            src="file:///C:/Users/LENOVO/Documents/Fauzn%20Aryadih.jpg" 
            alt="Foto Fauzn Aryadih." style="width: 150px; height: 200px; display: block;">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                <h1>
                    <span style="font-family: Lato, 'Open sans', helvetica, Arial; font-weight: 900; line-height: 1.1; display: inline-block; border-bottom: 0.30em solid;">Fauzan Aryadih</span>
                    <br>
                    <span style="font-size: medium; font-weight: 400;">Mahasiswa STT Terpadu Nurul Fikri, NIM 0110121316</span>
                </h1>
            </div>
        </div>

    <section>
        <h2>About Me</h2>
        <div>
            <p></p>Saya merupakan seorang individu yang terbiasa bersosialisasi, bertemu serta berkerja sama dengan orang baru itu hal biasa bagi saya. Hal menarik dari diri saya adalah sangat dikenal sebagai seorang pendengar yang baik untuk setiap orang yang ada di sekeliling saya.
*Saya merupakan orang yang dapat mengambil keputusan yang tepat bahkan saat dalam tekanan. Semua pekerjaan yang di serahkan pada saya, pasti akan selalu saya kerjakan dengan detail dan selesai tepat waktu. .</p>
        </div>
    </section>

    <section>
        <h2>Education</h2>
        <div>
            <ul>
                <li>
                <li>SD Al azhar 4 Kebayoran Lama</li>
                <li>SMPN 31 Jakarta</li> 
                <li>SMKN 18 JAkarta</li>
                <li> Sistem Informasi STT NF</li>
            </ul>
        </div>
    </section>
    <section>
        <h2>Interests</h2>
        <div>
            <p>bicycle, Coffee, Travel, Swimming,Book</p>
        </div>
    </section>
    <footer>
        <div>Contact Me</div>
        <div>
        <a href="instagram.com/fauzanaryadihh" target="_blank">Instagram</a>
        <a href="mailto:fauzanaryadih77@gmail.com" target="_blank">Email me</a>
        </div>
    </footer>
    </body>
</html>
