$(function() {
  // переход с кнопок

  $('.js-button').click(function() {
    var scrollToElement = $(this).attr('data-href');
    $('html,body').animate(
      { scrollTop: $(scrollToElement).offset().top + 'px' },
      { duration: 1e3 }
    );
  });

  // типа отправка формы
  $('.form').submit(function(event) {
    event.preventDefault();

    var $form = $(this),
      $firstName = $form.find('.js-name').val(),
      $phone = $form.find('.js-phone').val(),
      $email = $form.find('.js-email').val(),
      $agreement = $form.find('#is_agreed').is(':checked');

    if (!validateEmail($email)) {
      $form
        .find('.js-email')
        .parent()
        .addClass('error');
      return;
    } else {
      $form
        .find('.js-email')
        .parent()
        .removeClass('error');
      alert(
        'Форма как-бы должна куда-то уйти, имя - ' +
          $firstName +
          ', телефон - ' +
          $phone +
          ', e-mail - ' +
          $email +
          ' Согласие на обработку персональных данных - ' +
          $agreement +
          '. Всё!'
      );
    }
  });

  // смена состояния заполненного поля
  $('.form__input-text').on('change keyup input click', function() {
    var field = $(this).val();
    var fieldtrim = $.trim(field);
    if (fieldtrim == '') {
      $(this).removeClass('active');
      $(this).val('');
    } else {
      $(this).addClass('active');
    }
  });

  // валидация email
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // маска телефона в форме

  $('.js-phone').mask('+7 (999) 999-99-99');
});
