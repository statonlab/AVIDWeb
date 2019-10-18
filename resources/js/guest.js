// Include jQuery and Bootstrap's JS files
require('./bootstrap')

$(document).ready(() => {
    $(document).on('click', '#logout-btn', () => {
        $('#logout-form').submit()
    })
})
