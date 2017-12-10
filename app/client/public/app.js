$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/calendar'
	}).then((res) => {
		console.log(res)
	    $('#calendar').fullCalendar({
	    	schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
	    	// defaultView: 'agendaDay',
		    events: res,
		    resources: [
		        { id: 'a', title: 'Room A' },
		        { id: 'b', title: 'Room B' },
		        { id: 'c', title: 'Room C' },
		        { id: 'd', title: 'Room D' }
		    ],
		    dayClick: function(date, jsEvent, view) {

		        //console.log('Clicked on: ' + date.format());
		        // console.log('jsEvent: ' + jsEvent);
		        
		       	//console.log(view)
		       // console.log(jsEvent)

		        //$(this).css('background-color', 'red');
		       	//console.log($(this))

		    },
		    eventClick: function(event, element) {

		    	console.log(event.title)
		        // event.title = "CLICKED!";

		        // $('#calendar').fullCalendar('updateEvent', event);

		    }

	    });

	    // var arr = $('#calendar').fullCalendar('clientEvents');
	    // console.log(arr)
	})

});