function list (task) {
  this.item = task ;
};

$(function () {
  $('form').submit(function () {
      event.preventDefault();

      newItem = $('input#task').val();
      newTask = new list(newItem);

  $('#result').append('<li>' + newTask.item + '</li>');
  $('input#task').val('')

  // $('li').click(function () {
  //   if (window.confirm('Would you like to remove this list item?')) {
  //     this.remove();
  //   };

    $('li').click(function () {
      if (window.confirm('Would you like to cross this item out?')) {
        $(this).css('text-decoration', 'line-through')
      } else {
        if (window.confirm('Would you like to remove this item from your list?'))
        $(this).remove();
    };
  });
  });
});


// if (window.confirm('Would you like to remove this list item?')) {
//   this.remove();
