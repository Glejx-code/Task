<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $request = $_POST['request'];
  if ($request === 'generate_image') {
    $response = generateRandomImage();
    echo json_encode($response);
    exit;
  }
}

function generateRandomImage() {
  $width = 700;  
  $height = 700; 
  //Strona,która generuje losowe obrazy. Nie mam jednak dostępu do nazw obrazów, aby były wyświetlane.
  $imageUrl = "https://picsum.photos/{$width}/{$height}?random=" . uniqid();
  
  return [
    'url' => $imageUrl
  ];
}
?>