'use strict';

$(document).ready(function () {
  const selectors = $('.amenity_select');
  let amenities = {};
  
  $.each(selectors, function(index, element) {
    $(element).click(function() {
      const id = $(this).attr('data-id');
      if ($(this).prop('checked')) {
        amenities[id] = $(this).attr('data-name');
      } else {
        delete amenities[id];
      }
      let text = Object.values(amenities).toString();
      if (text.length > 30) {
        text = text.slice(0, 30) + '...';
      }
      $('.amenities h4').text(text);
    });
  });

  $.get('http://0.0.0.0:5001/api/v1/status', function(data) {
    if (data['status'] === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
