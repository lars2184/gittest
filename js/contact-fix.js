var newCloseContactForm, contactFormSubmit, newContactFormSubmitCallback;

newCloseContactForm = void 0;

contactFormSubmit = void 0;

newContactFormSubmitCallback = void 0;

contactFormSubmit = function() {
  var data, emailPattern, firstName, firstNameField, from, fromField, lastName, lastNameField, message, method, phone, phoneField, subject;
  data = void 0;
  emailPattern = void 0;
  firstName = void 0;
  firstNameField = void 0;
  from = void 0;
  fromField = void 0;
  lastName = void 0;
  lastNameField = void 0;
  message = void 0;
  method = void 0;
  phone = void 0;
  phoneField = void 0;
  subject = void 0;
  fromField = $('#-cf-form-field-from');
  firstNameField = $('#-cf-form-field-firstname');
  lastNameField = $('#-cf-form-field-lastname');
  phoneField = $('#-cf-form-field-phone');
  from = $.trim(fromField.val().replace('Enter Your Email Address', ''));
  subject = $.trim($('#-cf-form-field-subject').val().split(' ').join('+'));
  firstName = $.trim(firstNameField.val());
  lastName = $.trim(lastNameField.val());
  phone = $.trim(phoneField.val());
  method = $('#-cf-form-field-method').val();
  message = $.trim($('#-cf-form-field-message').val());
  emailPattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2}[a-zA-Z0-9]*$/;
  if (!from.match(emailPattern)) {
    alert('Please enter a valid email address.');
    fromField.focus();
    return false;
  }
  if (firstName.length === 0) {
    alert('Please enter your first name.');
    firstNameField.focus();
    return false;
  }
  if (lastName.length === 0) {
    alert('Please enter your last name.');
    lastNameField.focus();
    return false;
  }
  data = 'from=' + from + '&subject=' + subject + '&first=' + firstName + '&last=' + lastName + '&phone=' + phone + '&contactby=' + method + '&message=' + escape(message);
  $.ajax('/' + companyAbbr + '/modules/global/contact.asp?accountid=' + accountId + '&action=sendmail', {
    data: data,
    type: 'POST',
    success: newContactFormSubmitCallback
  });
  newContactFormSubmitCallback();
  return false;
};

newContactFormSubmitCallback = function() {
  var formArea;
  formArea = void 0;
  formArea = $('#contactModalForm');
  formArea.empty();
  formArea.addClass('text-center').html('<h6>Thank you, your email has been sent.</h6><button onclick="newCloseContactForm()" type="button" class="tiny radius alert">Close</button>');
};

newCloseContactForm = function() {
  $(window).trigger('contactformclose');
};

listen = function(el, event, handler) {
  if (el.addEventListener) {
    return el.addEventListener(event, handler);
  } else {
    return el.attachEvent('on' + event, function() {
      return handler.call(el);
    });
  }
};