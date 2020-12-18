 <?php
require_once "connection.php";


if ($_SERVER['REQUEST_METHOD'] == "POST"){

    $title=$username=$password=$url="";
    
    $title=$_POST['title'];
    $username=$_POST['username'];
    $url=$_POST['url'];

   
    $sql = "INSERT INTO wp03ass_tab (title, username, password, url) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    if ($stmt)
    {
        
         
        mysqli_stmt_bind_param($stmt, "ssss",$param_title ,$param_username, $param_password,$param_url);

         $param_title = $title;
         $param_username = $username;
         $param_password = password_hash($password, PASSWORD_DEFAULT);
         $param_url = $url;
 
          if (mysqli_stmt_execute($stmt))
        {
            //echo $param_title;
            header("location: master.php");
        }
        else{
           /* echo $password;
            echo "kk";
            echo $param_title;
            echo $param_password;*/
            echo "Sorry something went wrong............................cannot redirect!";
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);


?>




<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta author="Huzaifa Ashraf" description="Assignment 3 Web programming">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Password Manager</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div style="margin-bottom:2%">
    </div>
   
    <div class="container">
        <header>Enter Password or Generate one</header>

        <br>
        <div class="error-text"></div>
        <br>

        <form autocomplete="off"  method="post">
            <div class="foo">
                <input class="iin"  type="text" name="title" id="title"  placeholder="Enter Title" required>
            </div>
            <br>

            <div class="foo">
                <input class="iin"  type="text" name="username" id="username" placeholder="Enter Username" required>

            </div>
            <br>

            <div class="field">
                <input class="in" onkeyup="trigger()" name="password" type="password" placeholder="Enter Password" required>
                <span class="showBtn">SHOW</span>
            </div>
            <br>
            <p>Password Strength</p>
            <br>
            <div class="indicator">
                <span class="weak"></span>
                <span class="medium"></span>
                <span class="strong"></span>
            </div>
            <div class="text"></div>

         

            <div class="field">
                <input class="in" onkeyup="active_2()" id="pswrd_2" disabled type="password" placeholder="Enter again to confirm password">
                <span class="showBtn">
                    SHOW</span>
            </div>

            <br>
            <div class="foo">
                <input class="iin" name="url" type="text" id="Url"  placeholder="Enter URL" required>
            </div>
            <br><br>
            <button class="btn1">Generate Your Password</button>
            <br><br>

            <br>

            <a href="Home.php">
                <button type="submit" class="btn" disabled>Check Password</button>
            </a>



        </form>
    </div>
    <script src="script.js"></script>

</body>

</html>