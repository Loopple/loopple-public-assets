
// $(function () {

//   var start = moment().subtract(29, 'days');
//   var end = moment();

//   function cb(start, end) {
//     $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//   }

//   $('#reportrange').daterangepicker({
//     startDate: start,
//     endDate: end,
//     ranges: {
//       'Today': [moment()],
//       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//       'This Month': [moment().startOf('month'), moment().endOf('month')],
//       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//     }
//   }, cb);

//   cb(start, end);

// });

var createDateRangePickers = function() {
  // Check if jQuery included
  if (typeof jQuery == 'undefined') {
      return;
  }

  // Check if daterangepicker included
  if (typeof $.fn.daterangepicker === 'undefined') {
      return;
  }

  var elements = [].slice.call(document.querySelectorAll('[daterangepicker]'));
  var start = moment().subtract(29, 'days');
  var end = moment();
  
  elements.map(function (element) {

      var display = element.querySelector('[daterangepicker] span');
      var attrOpens  = element.hasAttribute('daterangepicker-opens') ? element.getAttribute('daterangepicker-opens') : 'left';
      var range = element.getAttribute('daterangepicker-range');

      var cb = function(start, end) {
          if (display) {
               if (start.format('D MMM YYYY') == end.format('D MMM YYYY')) {
                  display.innerHTML = start.format('D MMM YYYY');
              } else {
                  display.innerHTML = start.format('D MMM YYYY') + ' - ' + end.format('D MMM YYYY');
              }                    
          }
      }

      if ( range === "today" ) {
          start = moment();
          end = moment();
      }

      $(element).daterangepicker({
          startDate: start,
          endDate: end,
          opens: attrOpens,
          ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          }
      }, cb);

      cb(start, end);

  });
}
createDateRangePickers();