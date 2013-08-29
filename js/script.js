(function() {
    "use strict";

    /**
     * Skip "Add colleagues and start collaborating"
     *
     * https://www.yammer.com/hogefuga.com/invitations/add_colleagues
     *   -> https://www.yammer.com/hogefuga.com/
     */
    var uri = location.href;
    if(uri.match(/invitations\/add_colleagues/)) {
        location.href = uri.replace('invitations/add_colleagues', '');
    }

})();

