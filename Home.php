<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
 

    <title>Password WP - 3</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
<h3>Search in Table  by Title</h3>
<input type="text" id="sear" onkeyup="myFun()" placeholder="Search In Table By Title">

<table id="myTable" border=2>

<tr class="header">
<th>Title</th>
<th>Username</th>
<th>Password</th>
<th>URL</th>
</tr>

<script src="script.js"></script>

<?php
error_reporting(0);
require_once "connection.php";

$sql='SELECT * FROM `wp03ass_tab` ';

$query=mysqli_query($conn,$sql);

$row=mysqli_num_rows($query);

//echo $row;
if($row!=0){
    while($result=mysqli_fetch_assoc($query))
    {
            echo "
            <tr>
            <td>".$result[title]."</td>
            <td>".$result[username]."</td>
            <td>".$result[password]."</td>
            <td>".$result[url]."</td>
            </tr>
            ";


    }
}
else{
    echo "
    <tr>
        <th colspan=3>No Record In DataBase!</th>
    </tr>
    ";
}

?>

</table>
</body>
</html>