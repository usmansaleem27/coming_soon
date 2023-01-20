/***   ------------------------------------------------------   ***/
/***     PLEASE NOTE                                            ***/
/***     THIS FILE USED TO NON YOUTUBE VIDEO BACKGROUND         ***/
/***   ------------------------------------------------------   ***/
jQuery(document).ready(function($) {

    /***   ------------------------------------------------------   ***/
    /***     CHANGE DATE                                            ***/
    /***     DATE FORMAT: Month Date, Year Hour:Minute:Second       ***/
    /***   ------------------------------------------------------   ***/
    var options = {
        startDate: new Date(),
        endDate: new Date("Februry 06, 2023")

            /***   TRANSLATION : Enable following line by delete //   ***/
            // ,titleDays : 'hari', titleHours : 'jam', titleMinutes : 'menit', titleSeconds : 'detik'

            /***   Video ID of youtube video - leave blank when wouldn't like to use youtube video as background   ***/
            ,
        videoID: ''
    };

    $('#container').bersua(options);
    if (options.videoID) {
        $('body').tubular({
            videoId: options.videoID
        });
    }

});