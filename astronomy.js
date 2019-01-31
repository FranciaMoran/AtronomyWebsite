
$(meteorVideoPopUp)

function meteorVideoPopUp () {
	$('#meteor-button').on('click', function(event) {
		$('#meteor-dialog').html(theMeteorVideo());

		$('#meteor-dialog').dialog({
            autoOpen: false, 
            draggable: true,
            resizable: false,
            modal: false,
            closeText: 'Close',
            dialogClass: 'noTitleStuff', 
            hide: { effect: "explode", duration: 1000 }
            });

		$('#meteor-dialog').dialog('open');
		$('#meteor-dialog').parent().css('position','absolute');
            $('#meteor-dialog').parent().css('top', $(window).height()*.07); 
            $('#meteor-dialog').parent().css('left', $(window).width()*.20);
})
}

function theMeteorVideo () {
	return	`<div>
	<p id="video-text">video</p>
	</div>`;
}

let countDownDate = new Date("Apr 23, 2019").getTime();
let x = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("meteor-shower-countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("meteor-shower-countdown").innerHTML = "EXPIRED";
  }
}, 1000);


