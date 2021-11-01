$(document).ready(loadPage);

var personalVisible = false;
var educationVisible = false;
var workVisible = false;

function loadPage() {
    // hide the sections
    $("#personal").hide();
    $("#education").hide();
    $("#work").hide();

    // set on click methods
    $("#personalButton").click(
        function() {
            if (personalVisible) {
                $("#personal").hide();
                personalVisible = false;
            }
            else {
                $("#personal").show();
                $("#education").hide();
                $("#work").hide(); 
                personalVisible = true;
            }

        }

    )
    $("#educationButton").click(
        function() {
            if (educationVisible) {
                $("#education").hide();
                educationVisible = false;
            }
            else {
                $("#education").show();
                $("#personal").hide();
                $("#work").hide(); 
                educationVisible = true;
            }
        }

    )
    $("#workButton").click(
        function() {
            if (workVisible) {
                $("#work").hide();
                workVisible = false;
            }
            else {
                $("#work").show();
                $("#education").hide();
                $("#personal").hide(); 
                workVisible = true;
            }
        }

    )
}
