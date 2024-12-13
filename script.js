let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('noBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('siBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Anh hông ngờ tới luôn đó, iu em lắm luônnn:3';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


document.getElementById('siBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('siBtn').innerHTML = 'Cho anh cơ hội đii mầ';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('noBtn').style.fontSize = '40px';
            document.getElementById('noBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('siBtn').innerHTML = 'Anh hứa sẽ iuu bé suốt đời đó';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '45px';
            document.getElementById('noBtn').style.padding = '25px 45px';
            
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('siBtn').innerHTML = 'iuu em hết mực nữaaaa';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '50px';
            document.getElementById('noBtn').style.padding = '30px 50px';
        
          
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('siBtn').innerHTML = 'Vậy nên choo anh 1 cơ hội nhé!';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '55px';
            document.getElementById('noBtn').style.padding = '35px 55px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('siBtn').innerHTML = 'Thật sự em không đồng ý saooo?';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '60px';
            document.getElementById('noBtn').style.padding = '40px 60px';
        
            
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('siBtn').innerHTML = 'Em muốn bỏ rơi chàng trai này ư';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '65px';
            document.getElementById('noBtn').style.padding = '45px 65px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('siBtn').innerHTML = 'Đừng anhh xin emm đóooooo';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '70px';
            document.getElementById('noBtn').style.padding = '50px 70px';
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('siBtn').innerHTML = 'Thật sự anhh rất thích emm mà';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '75px';
            document.getElementById('noBtn').style.padding = '55px 75px';
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('siBtn').innerHTML = 'Anh sẽ bùnnn đóooooo';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            document.getElementById('noBtn').style.fontSize = '80px';
            document.getElementById('noBtn').style.padding = '60px 80px';
       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('siBtn').innerHTML = 'Em ơiii , cho anh cơ hội diiii';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '85px';
            document.getElementById('noBtn').style.padding = '65px 85px';
          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('siBtn').innerHTML = 'hãy chấp nhận tình iuu của anhh nhóo';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('noBtn').style.fontSize = '80px';
            document.getElementById('noBtn').style.padding = '70px 90px';
    
            noButtonState++;
            break;
        case 11:
           
            document.getElementById('siBtn').innerHTML = 'Anhh thật sự rất và rất iuu em đó';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            document.getElementById('noBtn').style.fontSize = '85px';
            document.getElementById('noBtn').style.padding = '75px 85px';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('siBtn').innerHTML = 'Đừng bỏ rơi chàng trai đáng thương này mà';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '90px';
            document.getElementById('noBtn').style.padding = '80px 90px';
    
            noButtonState++;
            break;
        
        case 13:
           
            document.getElementById('siBtn').innerHTML = 'Em đồng ý nhóooooo';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            document.getElementById('noBtn').style.fontSize = '100px';
            document.getElementById('noBtn').style.padding = '90px 100px';
         
            noButtonState++;
            break;
        
        case 14:
           
            document.getElementById('siBtn').innerHTML = 'Chỉ một lần và lần này thoaii';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '110px';
            document.getElementById('noBtn').style.padding = '100px 120px';
            
            noButtonState++;
            break;
        
        case 15:
           
            document.getElementById('siBtn').innerHTML = 'Điiiiii mà emmmmmmmm';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '120px';
            document.getElementById('noBtn').style.padding = '110px 140px';
          
            noButtonState++;
            break;
        
            case 16:
           
            document.getElementById('siBtn').innerHTML = 'em đồng ý nhưng nó màu đỏ';
            document.getElementById('siBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('noBtn').style.fontSize = '130px';
            document.getElementById('noBtn').style.padding = '120px 160px';
          
            noButtonState++;
            break;


        case 17:
                document.getElementById('siBtn').innerHTML = 'em đồng ý nhưng nó màu đỏ';
                
                document.getElementById('siBtn').style.backgroundColor = '#F1330A';
            
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';

                
                

                document.getElementById('noBtn').click();
                // Vuelve al estado 0
                noButtonState = 0;
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


