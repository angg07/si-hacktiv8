<html>
<head>
    <title>Menghitung Luas Lingkaran</title>
</head>
<body>
<!--
    READ and STORE "r" FROM input user
    luas = 22/7 * (r*r);

    write(luas);
-->
    <h1>Form Hitung Luas Lingkaran Dengan PHP</h1>
    <form action="" method="POST" enctype="multipart/form-data">
        <table>
            <tr>
                <td>Jari-jari Lingkaran</td>
                <td>:</td>
                <td><input type="text" name="jari" required></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><input type="submit" name="submit" value="Hitung"></td>
            </tr>
        </table>
    </form>
    <?php
        if(isset($_POST['submit'])){
            $jari   =$_POST['jari'];
            $phie    =22/7;
            
            // menghitung luas lingkaran
            $luas_lingkaran = $phie*($jari*$jari);
            
            echo "Hasil hitung luas lingkaran adalah sebagai berikut:<br />";
            echo "Diketahui;<br />";
            echo "Jari-jari lingkaran = $jari<br />";
            echo "Phie = $phie<br />";
            echo "Maka luas lingkaran sama dengan [ $phie x $jari x $jari ] = $luas_lingkaran";
        }
    ?>
</body>
</html>

