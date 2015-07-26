<?php

include('db.php');

$sql = "SELECT * FROM `user` WHERE id={$_GET['id']}";

$run = mysqli_query($con,$sql);
if($run){
    $row = mysqli_fetch_assoc($run);
    echo json_encode($row);
}