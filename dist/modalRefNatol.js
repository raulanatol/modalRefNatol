/*!
 * modal.natol.js  Simple modal window
 *
 * Copyright (c) 2015 Raul Anatol
 * http://natol.es
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

/*JS Lint helpers: */
/*global $, jQuery, window, document */
(function ($, document) {
    $(document).ready(function () {
            $('.ntl-modal').each(function (i, element) {
                var $element = $(element);
                var url = $element.attr('href');
                var modalContent = $element.attr('ntl-content');

                $element.click(function (event) {
                    event.preventDefault();
                    var containerId = modalContent + '-container';
                    var container = $('#' + containerId);
                    if (!container.length) {
                        $('body').append('<div id="' + containerId + '"></div>');
                        $('#' + containerId).load(url, function () {
                            $('#' + modalContent).modal('toggle');
                        });
                    } else {
                        $('#' + modalContent).modal('toggle');
                    }
                });
            });
        }
    );

    return this;
})(jQuery, document);