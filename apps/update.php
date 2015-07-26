<?php
include "db.php";
$sql = "UPDATE `user` SET `name` = '{$_POST['name']}', `add` = '{$_POST['addr']}', `phone` = '{$_POST['phone']}' WHERE `id` = {$_POST['id']};";
$run = mysqli_query($con,$sql);
if($run){
    echo "success";
}else{
    echo $con->error;
}