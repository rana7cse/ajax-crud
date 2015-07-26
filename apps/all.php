<?php
include('db.php');

$sql = "SELECT * FROM `user` ";

$run = mysqli_query($con,$sql);

$data = array();
if($run){
    while($row = mysqli_fetch_array($run,2)){
        $data[]= $row;
    }
}

echo json_encode(array('data'=>$data));