var buttons = $(".available");
var selectedTable = $('#formTable');
var closeButton = $('.material-icons');
var saveButton = $('.save');
var customerInput;
var partyInput;


buttons.on("click", function tableFinder() {
  $('#newRes').slideDown();
  $('#newRes').show();
  currentTable = $(this).attr('id');
  selectedTable.text(`Table Number: ${currentTable}`);
});
closeButton.on("click", function close() {
  $('#newRes').slideUp();
  $('#formHeader')[0].reset();
});

saveButton.on("click", function submission() {
  $('#' + currentTable).attr("class", "table reserved");
  $('#newRes').fadeOut();
  customerInput = $('#customer').val();
  partyInput = $('#partySize').val();
  $('#' + currentTable).prepend('<div class="popup">' + '<span>Name: </span>' + customerInput + '<br><span>Size of Party:</span>' + partyInput + '</div>');
  $('.popup').hide();
  $('.reserved').hover(function() {
      $(this).find('.popup').show();
    },
    function() {
      $('.popup').hide();
    });
  $('#formHeader')[0].reset();
});
