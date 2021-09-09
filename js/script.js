//Click the button the get the a simple alert
function myFunction() {
    alert("hello world");
}

//Click the button the get a simple Message on the console.
function myConsole() {
    console.log("Hello Programmer")
}

//Click the button the get a simple Message on the screen.
function mydemo3() {
    document.getElementById('demo3').innerHTML = "Hello Porgrammer";
}

//4. Click the button to hide a simple Message on the screen.
function myDemo4() {
    document.getElementById("demo4").style.display = "none";
}

//5. Click the button to show image.
function catImage5() {
    document.getElementById("cat_img").style.display = "none";
}

//5. Click the  button to hide image.
function catImag() {
    document.getElementById("cat_img").style.display = "inline";
}

//6. Click the both to get my address
function myAddress() {
    document.getElementById('address_1').innerHTML = "Address.";
    document.getElementById('address_2').innerHTML = "Name: MD.Rakib Hossen.";
    document.getElementById('address_3').innerHTML = "Mobile: 013 1674 3490";
    document.getElementById('address_4').innerHTML = "Road No: 01 House No: 06 3rd floor.";
    document.getElementById('address_5').innerHTML = "District: Lakshmipur.";

}

//7. Click the button to Change the color.
function changeColor() {
    document.getElementById("circle").style.backgroundColor = "green";
}

//Click the button to repeat the text.
function repetFunction() {
    let data = "Hello Programmer!";
    document.getElementById("demo8").innerHTML = data.repeat(5);
}

//9. Click the button to Change the images.
function imgOne() {
    document.getElementById("demo9").src = "images/ons.gif"
}
function imgTwo() {
    document.getElementById("demo9").src = "images/offs.gif"
}

//10. Click the button to show the time.
function timeFunction(){
    document.getElementById("demo10").innerHTML= Date();
}

//11. Click the button to Change the text color.
function myColor(){
    document.getElementById("demo11").style.color="red";
}


//Jeguery
$(document).ready(function(){

//12.Click the button to get a simple alert.
    $('#btn1').click(function(){
        alert('hello');
    });

//13.Click the button to hide the heading
    $('#btn2').click(function(){
        $('#heading2').hide(2000);
    });
    //hide
    $('#imgbtn1').click(function(){
        $('.img14').fadeOut();
    });
    //show
    $('#imgbtn2').click(function(){
        $('.img14').fadeIn();
    });
    //toggle
    $('#imgbtn3').click(function(){
        $('.img14').fadeToggle(2000);

    });

    //15.Click the button to slide the content
    $('.slihe').click(function(){
        $('.slicont').slideToggle();
    });
    //16.Click the button to show a text.
    $('#btn16').click(function(){
        document.write('hello Programmer! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, molestiae!');
    });
    //17.Click the button to show a text on the console.
    $('#btn17').click(function(){
        console.log('Hello Console')
    });
    //18.Click the button to get my address.
    $('#btn18').click(function(){
        document.write(' hello');
        document.write(' Name: MD.Rakib Hossen. </br>');
        document.write(' Mobile: 013 1674 3490  </br>');
        document.write('Road No: 01 House No: 06 3rd floor.  </br>');
        document.write('District: Lakshmipur.  </br>');
    });
    //18.Click the button to change the box color.
    $('#btn18').click(function(){
        $('.boxx').css( "background", "yellow" );
    });
    //19.Click the button to hide the box.
    $('#btn19').click(function(){
        $('.one1, .one2, .one3').hide(1000);
    });
    $('#btn20').click(function(){
        $('.one1, .one2, .one3').show(1000);
    });
    //20.Click me to hide this heading on the screen
    $('.ele1').click(function(){
        $(this).hide();
    });
    //21.Click me to Allow elements to be moved using the mouse.
    $( "#draggable" ).draggable();
    //22.Click me to Create targets for draggable elements.
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });

        //23.Use the mouse to select elements, individually or in a group.
        $( "#selectable" ).selectable();

        //Displays collapsible content panels for presenting information in a limited amount of space.
        $( "#accordion" ).accordion();
        //Adds class(es) to elements while animating all style changes.
          $( "#button" ).on( "click", function() {
            $( "#effect" ).addClass( "newClass", 1000, callback );
          });
       
          function callback() {
            setTimeout(function() {
              $( "#effect" ).removeClass( "newClass" );
            }, 1500 );
          }






});

 