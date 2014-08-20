<?php
  if(isset($_POST['address'])) {
    $json = $_POST['address'];
    $obj = json_decode($json);
    echo '<p>';
    echo $obj->{'city'};
    echo '</p>';
    echo '<p>';
    echo $obj->{'state'};
    echo '</p>';
    echo '<p>';
    echo $obj->{'zipcode'};
    echo '</p>';
  } else {
    echo "Failure to get POST values";
  }
?>