<!-- //Importamos las variables del formulario de contacto -->
<?php
  @$name = htmlspecialchars($_POST['name']);
  @$email = htmlspecialchars($_POST['email']);
  @$subject = htmlspecialchars($_POST['subject']);
  @$message = htmlspecialchars($_POST['message']);
  
  //Preparamos el mensaje de contacto
  
  $cabeceras = "From: $email\n" //La persona que envia el correo
  . "Reply-To: $email\n";
  $asunto = "From: CONTACTO MONTAJES JM $subject\n"; //asunto aparecera en la bandeja del servidor de correo
  $email_to = "montajesjm@gmail.com"; //cambiar por tu email
  $contenido = "$name ha enviado un mensaje desde el sitio web www.montajesjm.cl\n"
  . "\n"
  . "Nombre: $name\n"
  . "Asunto: $subject\n"
  . "Correo: $email\n"
  . "Mensaje: $message\n"
  . "\n";
  //Enviamos el mensaje y comprobamos el resultado -->
  if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) { 

  //Si el mensaje se envía muestra una confirmación -->
    $data = ['response' => 'ok'];
    header('Content-Type: application/json');
    echo json_encode($data);
  
  }
  else{
    $data = ['response' => 'error'];
    header('Content-Type: application/json');
    echo json_encode($data);







  //Si el mensaje no se envía muestra el mensaje de error
  // echo '<div class="modal fade" id="response" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  //   <div class="modal-dialog">
  //     <div class="alert alert-danger alert-dismissable">
  //         <button type="button" class="close" data-dismiss="modal">×</button>
  //         <strong>ERROR. Intente mas tarde.</strong>
  //     </div>    
  //   </div>
  // </div>';
  }

        // '<div class="alert alert-warning alert-dismissible fade show" role="alert">
        //   <strong>ERROR, favor inténtalo más tarde</strong>
        //   <button type="button" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        // </div>'

        // echo '<div class="modal fade" id="response2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  //   <div class="modal-dialog">
  //     <div class="alert alert-success alert-dismissable">
  //         <button type="button" class="close" data-dismiss="modal">×</button>
  //         <strong>Su mensaje ha sido enviado correctamente.</strong>
  //     </div>    
  //   </div>
  // </div>';