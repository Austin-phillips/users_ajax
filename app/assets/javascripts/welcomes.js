$(document).ready( function() {
  $(".add").hide();
  $('.create').click( function() {
    $('.add').toggle('show');
  });

  $('.users').click( function() {
    var userId = $(this).data('id');
    var userFirstName = $(this).data('first_name');
    var userLastName = $(this).data('last_name');
    var userPhoneNumber = $(this).data('phone_number');

    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/' + 'users',
      method: "GET",
      dataType: "JSON"
    }).done( function(users) {
      var $list = $('.game-item');
      $list.empty();

      users.forEach( function(person) {
        $list.append('<li class="collection item">' + person.first_name + ' ' + person.last_name + '-' + person.phone_number + '</li>')     
       });
    });
  });
  $('#button').click(function() {
    var first_name = $('#first_name');
    var last_name = $('#last_name');
    var phone_number = $('#phone_number')
    var data ={'user[first_name]': first_name[0].value, 'user[last_name]': last_name[0].value, 'user[phone_number]': phone_number[0].value}
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/users',
      type: 'POST',
      dataType: 'JSON',
      data: data
    }).done( function() {

    });
  });
});
