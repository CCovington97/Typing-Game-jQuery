$(document).ready(function () {
    let keyboardLowerContainer = $('#keyboard-lower-container')
    let keyboardUpperContainer = $('#keyboard-upper-container')

    $(document).keydown(function () {
        if (event.keyCode === 16) {
            $(keyboardLowerContainer).css('display', 'none')
            $(keyboardUpperContainer).css('display', 'inherit')
            console.log('Shift letters up')
        }
    })
    $(document).keyup(function () {
        if (event.keyCode === 16) {
            $(keyboardLowerContainer).css('display', 'inherit')
            $(keyboardUpperContainer).css('display', 'none')
            console.log('Shift letters down')
        }
    })

})
        // keyboardLowerContainer.shiftKeys(function (event) {
        //     if (event.keyCode === 16) {
        //         $(document).keydown(function () {
        //             $(keyboardLowerContainer).css('display', 'none')
        //             $(keyboardUpperContainer).css('display', 'inherit')
        //             console.log('Pressing buttons')
        //             console.log(event.keyCode)
        //         })
        //         $(document).keyup(function () {
        //             $(keyboardLowerContainer).css('display', 'inherit')
        //             $(keyboardUpperContainer).css('display', 'none')
        //         })
        //     }
        // })

