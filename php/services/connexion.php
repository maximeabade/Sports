<?php

header('Content-Type: application/json');
function checkUser($username, $password) {
    $usersFile = file_get_contents('./noSQL/users.JSON');
    $usersData = json_decode($usersFile, true);

    foreach ($usersData['users'] as $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            return $user;
        }
    }

    return false;
}
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$user = checkUser($username, $password);

if ($user) {
    session_start();
    $_SESSION['username'] = $user['username'];
    $_SESSION['isAdmin'] = $user['isAdmin'];
} else {
    session_abort();
   // session_cache_expire(0);
}
