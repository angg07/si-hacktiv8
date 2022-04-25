<?php
    $i = 1;
    while($i < 11)
    {
        if($i%2==0)
        {
            echo "angka " . $i . " <span style='color:red;'> Genap </span><br>";
        } else {
            echo "angka " . $i . " <span style='color:blue;'> Ganjil </span><br>";
        }
        $i++;
    }
    echo "Perulangan Selesai";
?>
