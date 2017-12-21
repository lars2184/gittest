
/* Contact Pop Up */
var listen, newCloseContactForm, newContactFormSubmit, newContactFormSubmitCallback;

listen = void 0;

newCloseContactForm = void 0;

newContactFormSubmit = void 0;

newContactFormSubmitCallback = void 0;

$(document).ready(function() {
  var addMask, closeContactMe, contactMe, contactMeCallback;
  addMask = void 0;
  closeContactMe = void 0;
  contactMe = void 0;
  contactMeCallback = void 0;
  closeContactMe = function() {
    $('#contactMask').remove();
    $('#contactForm').remove();
  };
  addMask = function() {
    $('<div id="contactMask" class="rn-contact-modal-mask"></div>').appendTo($('body'));
  };
  contactMe = function(evnt) {
    addMask();
    $.ajax({
      url: '/' + companyAbbr + '/modules/internet/contactMeForm.aspx?webSessionID=' + randomNumber + '&contentID=230&accountid=' + accountId,
      success: contactMeCallback
    });
  };
  contactMeCallback = function(response) {
    $('<div id="contactForm" class="rn-contact-modal"></div>').append(response).appendTo($('body'));
    if ($('#contactForm').length > 0) {
      $('#-cf-column-form').attr('id', 'contactModalForm').addClass('rn-contact-modal-form-section');
      $('#-cf-column-info').attr('id', 'contactModalInfo').addClass('rn-contact-modal-info-section').removeAttr('style');
      $('#-cf-form-close').attr('id', 'contactModalClose').addClass('rn-contact-modal-close').html('<i class="rn-icon-close"></i>').appendTo('#contactForm');
      $('#contactModalForm > div > form').attr('onsubmit', 'return newContactFormSubmit();').removeAttr('style').unwrap();
      $('.-cf-clear').remove();
      $('.-cf-form-required-indicator').remove();
      $('label[for="-cf-form-field-from"]').append('*');
      $('label[for="-cf-form-field-firstname"]').append('*');
      $('label[for="-cf-form-field-lastname"]').append('*');
      $('#-cf-form > div:first-child').attr('id', 'fromRow');
      $('#-cf-form > div:nth-child(2)').attr('id', 'subjectRow');
      $('#-cf-form > div:nth-child(3)').attr('id', 'textareaRow');
      $('#-cf-form > div:nth-child(4)').attr('id', 'firstNamePhoneRow');
      $('#-cf-form > div:nth-child(5)').attr('id', 'lastNameContactRow');
      $('#-cf-form > div:nth-child(6)').attr('id', 'buttonRow').removeAttr('style');
      $('#-cf-form').children().addClass('rn-contact-form-row').unwrap();
      $('#fromRow > div:first-child').attr('class', 'rn-contact-form-from');
      $('#-cf-form-field-from').removeAttr('class').removeAttr('onfocus').removeAttr('onblur').removeAttr('value').attr('placeholder', 'Enter Your Email Address').unwrap().appendTo('label[for="-cf-form-field-from"]');
      $('#subjectRow > div:first-child').attr('class', 'rn-contact-form-subject');
      $('#-cf-form-field-subject').removeAttr('class').appendTo('label[for="-cf-form-field-subject"]');
      $('#-cf-form-field-message').attr('placeholder', 'Enter your message here...').wrap('<div class="rn-contact-form-message">').removeAttr('style');
      $('#firstNamePhoneRow > div:first-child').attr('class', 'rn-contact-form-first-name');
      $('#-cf-form-field-firstname').removeAttr('class').unwrap().appendTo('label[for="-cf-form-field-firstname"]');
      $('#firstNamePhoneRow > div:nth-child(2)').attr('class', 'rn-contact-form-phone');
      $('#-cf-form-field-phone').removeAttr('class').unwrap().appendTo('label[for="-cf-form-field-phone"]');
      $('#lastNameContactRow > div:first-child').attr('class', 'rn-contact-form-last-name');
      $('#-cf-form-field-lastname').removeAttr('class').unwrap().appendTo('label[for="-cf-form-field-lastname"]');
      $('#lastNameContactRow > div:nth-child(2)').attr('class', 'rn-contact-form-contact-method');
      $('#-cf-form-field-method').removeAttr('class').appendTo('label[for="-cf-form-field-method"]');
      $('#buttonRow').append('<div class="rn-contact-form-buttons"></div>');
      $('#-cf-form-button-submit').appendTo('#buttonRow .rn-contact-form-buttons').replaceWith('<button type="submit" class="rn-contact-form-button-submit">Submit</button> ');
      $('button.small').after('<br>');
      $('#-cf-form-button-reset').appendTo('#buttonRow .rn-contact-form-buttons').replaceWith('<button type="reset" class="rn-contact-form-button-reset">Reset</button> ');
      $('#-cf-form-button-cancel').appendTo('#buttonRow .rn-contact-form-buttons').replaceWith('<button onclick="closeContactForm()" type="button" class="rn-contact-form-button-cancel">Cancel</button>');
      $('#contactForm form div:nth-child(7)').replaceWith('<div id="formFooter" class="rn-contact-form-legend"><p class="rn-contact-form-required">* = Required Field</p></div>');
      $('#-cf-disclaimer').attr('id', 'formDisclaimer').addClass('rn-contact-form-disclaimer').appendTo('#formFooter');
      $('#formDisclaimer span').removeAttr('style');
      $('#formDisclaimer span a').removeAttr('style');
      $('#-cf-info-name').wrapInner('<h3>');
      $('#-cf-info-name h3').unwrap();
      $('#-cf-info-photo').remove();
      $('#-cf-info-office-heading').wrapInner('<h4>');
      $('#-cf-info-numbers-heading').wrapInner('<h4>');
      $('#-cf-info-website-heading').wrapInner('<h4>');
      $('#-cf-info-mobile-heading').wrapInner('<h4>');
      $('#-cf-info-office-heading h3').unwrap();
      $('#-cf-info-numbers-heading h3').unwrap();
      $('#-cf-info-website-heading h3').unwrap();
      $('#-cf-info-mobile-heading h3').unwrap();
      $('#-cf-info-company-name').replaceWith('<p id="officeInfo">' + $('#-cf-info-company-name').html() + '<br></p>');
      $('#-cf-info-address-1').appendTo('#officeInfo').replaceWith($('#-cf-info-address-1').html() + '<br>');
      $('#-cf-info-address-city').appendTo('#officeInfo').replaceWith($('#-cf-info-address-city').html() + ' ');
      $('#-cf-info-address-state').appendTo('#officeInfo').replaceWith($('#-cf-info-address-state').html() + ' ');
      $('#-cf-info-address-zip').appendTo('#officeInfo').replaceWith($('#-cf-info-address-zip').html() + '<br>');
      $('#-cf-info-office-phone').appendTo('#officeInfo').replaceWith($('#-cf-info-office-phone').html() + '</p>');
      $('#-cf-form-field-phone').removeAttr('id');
      $('#-cf-info-numbers-info div:first-child').replaceWith('<p id="contactNumbers">' + $('#-cf-info-numbers-info div:first-child').html() + '<br>');
      $('#-cf-info-numbers-info div:nth-child(2)').appendTo('#contactNumbers').replaceWith('' + $('#-cf-info-numbers-info div:nth-child(2)').html() + '<br>');
      $('.-cf-info-numbers-number').appendTo('#contactNumbers').replaceWith('' + $('.-cf-info-numbers-number').html() + '</p>');
      $('#-cf-info-website-info').replaceWith('<p id="websiteInfo">' + $('#-cf-info-website-info').html() + '</p>');
      $('#-cf-info-mobile-info').replaceWith('<p id="mobileInfo">' + $('#-cf-info-mobile-info').html() + '</p>');
    }
  };
  $(window).bind('contactmeclick', contactMe);
  $(window).bind('contactformclose', closeContactMe);
});

newContactFormSubmit = function() {
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
