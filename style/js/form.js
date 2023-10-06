$(document).ready(function () {
    $("#enquiryForm").on('submit', function (e) {
      e.preventDefault();
      var dataString = $("#enquiryForm").serialize();
      $.ajax({
        type: "POST",
        url: "contact.php",
        data: dataString,
        validation: function () {
          $(".thanks").text('Please enter correct data').css('color', 'red');
        },
        success: function (data) {
          $("#contactbutton").hide();
          $(".inf").hide();
          location.href = "thankyou.html";
        }

      });
    });
  });

$(document).ready(function () {
        $('.mobile-valid').on('keyup', function (e) {
            var data = $(this).val();
            if(data.length > 10){
                data = data.slice(0, 9); 
                $(this).val(data);
            }
            if(!Number.isInteger(data)){
                var newVal = parseInt(data);
                if(newVal >= 0){
                    $(this).val(newVal);
                }else{
                    $(this).val('');
                }
            }
        });
   });

  $(document).ready(function () {
    $('#name').on('keyup', function (e) {
      var data = $(this).val();
      if (data) {
        $("#error").text('This field is required.')
      }

    });
  });