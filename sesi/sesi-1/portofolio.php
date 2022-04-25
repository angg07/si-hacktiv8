<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Learn HTML</title>
</head>
<body>
    <!-- Heading-->
    <h1> Heading 1</h1>
    <h2> Heading 2</h2>
    <h3> Heading 3</h3>

    <!-- Text Formating -->
    <b>Ini Tag Bold</b>
    <i>Ini Tag Italic</i>
    <div> Ini tag div</div>
    <div>
        <p>Ini tag Paragraph di dalam div</p>
    </div>
    <div>
        <p>
            Ini tag Paragraph di dalam div dan tebal di kata <b>bold</b>
        </p>
    </div>

    <!-- Hyperlink -->
    <a href="https://kampusmerdeka.kemdikbud.go.id/" target="_blank"> Ke Website Kampus Merdeka</a>

    <br><br><br>
    <!-- Table -->
    <table border="1">
        <tr>
            <td> Nama </td>
            <td> Umur </td>
        </tr>
        <tr>
            <td> Muhammad Angga </td>
            <td> 21 </td>
        </tr>
    </table>

    <!-- List HTML -->
    <ul>
        <li> Heading </li>
        <li> Formating</li>
    </ul>
     <ol>
        <li> HMTL </li>
        <li> JAVASCRIPT </li>
    </ol>

    <br><br><br>
    <form action="#">
        <div>
            <label for="first-name"> First Name </label>
            <input type="text" id="first-name" name="fname">
        </div>
        <div>
            <label for="last-name"> Last Name </label>
            <input type="text" id="last-name" name="lname">
        </div>
        <div>
            <label for="pnumber"> Phone Number </label>
            <input type="number" id="pnumber" name="phone">
        </div>
        <div>
            <label for="password"> Password </label>
            <input type="password" id="password" names="password">
        </div>
        <div>
            <input type="radio" name="gender" value="female"> 	&#9792; Female
            <input type="radio" name="gender" value="male"> &#9794; Male
        </div>
        <div>
            <input type="checkbox" name="hobi" value="HTML"/>Belajar HTML
            <input type="checkbox" name="hobi" value="sepeda"/>Bersepeda
            <input type="checkbox" name="hobi" value="js"/>Belajar JAVASCRIPT
        </div>
        <input type="submit" value="Simpan">
    </form>

    <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="Javascript Logo">
</body>
</html>