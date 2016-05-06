define(["jquery"],function($){
    function ajax_request(url, data, successCallback, errorCallback, completeCallback, method) {
        var async_ = true;

        if (data.async != undefined && !data.async) {
            async_ = false;
            delete data.async;
        }
        if (!successCallback) {
            successCallback = function (data) {
                return;
            }
        }
        if (!errorCallback) {
            errorCallback = function (XMLHttpRequest, textStatus, errorThrown) {
                return;
            }
        }
        if (!completeCallback) {
            completeCallback = function (XMLHttpRequest, textStatus) {
                var status = XMLHttpRequest.status;
                if (status == 200) {
                    return;
                } else {
                    console.log(XMLHttpRequest.statusText);
                }
            }
        }

        return $.ajax({
            type: method,
            url: url,
            data: data,
            async: async_,
            dataType: 'json',
            cache: false,
            success: successCallback,
            error: errorCallback,
            complete: completeCallback
        })
    }
    (function ($) {
        $.extend({
            put_: function (url, data, successCallback, errorCallback, completeCallback) {
                return ajax_request(url, data, successCallback, errorCallback, completeCallback, 'PUT');
            },
            delete_: function (url, data, successCallback, errorCallback, completeCallback) {
                return ajax_request(url, data, successCallback, errorCallback, completeCallback, 'DELETE');
            },
            post_: function (url, data, successCallback, errorCallback, completeCallback) {
                return ajax_request(url, data, successCallback, errorCallback, completeCallback, 'POST');
            },
            get_: function (url, data, successCallback, errorCallback, completeCallback) {
                return ajax_request(url, data, successCallback, errorCallback, completeCallback, 'GET');
            }
        });
    })(jQuery);
});