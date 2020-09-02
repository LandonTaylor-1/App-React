$(document).ready(function() {
    $('.questionContainer script').each(function(index) {
        try {
            $(this).after('<pre class="prettyprint">' + $(this).html() + '</pre>');
        }
        catch(err) {
            //console.log(err);
        }
    });
    $('pre').each(function(index) {
        try {
            // starting with the beginning of the string, grab all white space up to and excluding the first non-white space
            var result = /^\s+(?=\S)/.exec( $(this).html() );
            $(this).html($.trim($(this).html().replace(new RegExp(result[0], 'mg'), "")));
        }
        catch(err) {
           //console.log(err);
        }
    });
    prettyPrint();
})





















