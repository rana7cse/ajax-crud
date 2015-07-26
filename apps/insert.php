<?php

include('db.php');

// [name] => Salahuddin Rana
// [addr] => Address
// [phone] => 0172405718


$sql = "INSERT INTO `user`(`name`, `add`, `phone`) VALUES ('{$_POST['name']}','{$_POST['addr']}','{$_POST['phone']}')";
$run = mysqli_query($con,$sql);
if($run){
    echo "success";
}else{
    echo $con->error;
}