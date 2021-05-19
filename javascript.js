//  ========================= Selector =====================

// $(document).ready(function() {
    //     $('.header').css('color', 'red');
    //     $('.header').css('background-color', 'blue');
    
    //     // // seleksi h4 index ke 1
    //     // $('h4:eq(1)').css('background-color', 'yellow');
    
    //     // // seleksi input tipe submit
    //     // $('input:submit').css('background-color', 'blue');
    // })

//  ========================= Akhir Selector =====================



// //  ========================= Event =====================
// $(document).ready(function() {
//     $('#click').click(function() {
//         $(this).css('background-color', 'red');
//         $(this).css('padding', '50px');
//     });

//     $('#mouse').mouseleave(function() {
//         $(this).css('background-color', 'yellow');
//         $(this).css('font-size', '50px');
//     });

//     $('#keyup').keyup(function() {
//         $('#pesan_keyup').text($(this).val());
//     })
// })
// //  ========================= Akhir Event =====================




//  ========================= Efek =====================
$(document).ready(function() {
    // fade
    $('#sembunyi').click(function() {
        $('#efekHideShow').fadeOut()
    });

    $('#tampilkan').click(function() {
        $('#efekHideShow').fadeIn(3000)
    });

    $('#hideShow').click(function() {
        $('#efekHideShow').fadeToggle()
    })

    // animasi
    $('#animasi').click(function() {
        $('div').animate({right: '250px'});
    });

    // flip
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    // chaining
    $("#chaining").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });

    // focus
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
      });
      $("input").blur(function(){
        $(this).css("background-color", "white");
      });
})
//  ========================= Akhir Efek =====================