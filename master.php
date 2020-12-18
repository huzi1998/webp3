<?php
require_once "connection.php";
?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Password WP - 3</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <header>Master Password</header>

        <br>
        <div class="error-text"></div>
        <br>

        <form autocomplete="off" method="post">

            <div class="field">
                <input class="in" id="pop" onkeyup="check()" name="password" type="password" placeholder="Enter Master Password" required>
                <br>
                <span id="error-p" style="color:red;"></span>
            </div>

            <br>
            <p>Master Password is 1234</p>

        </form>
    </div>

    <script>
        const f = document.querySelector("#pop");

        function check() {
            if (f.value == "1234") {
                window.location.href = "Home.php";

            } else {
                document.querySelector("#error-p").innerHTML = "Wrong Master Password!";

            }
        }
    </script>

</body>

</html>