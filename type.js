$(document).ready(function () {
    let keyboardLowerContainer = $('#keyboard-lower-container')
    let keyboardUpperContainer = $('#keyboard-upper-container')

    $(document).keydown(function () {
        if (event.keyCode === 16) {
            $(keyboardLowerContainer).css('display', 'none')
            $(keyboardUpperContainer).css('display', 'inherit')
            console.log('Shift letters up')
        } // else {
        //     console.log(event.which)
        // }
    })
    $(document).keyup(function () {
        if (event.keyCode === 16) {
            $(keyboardLowerContainer).css('display', 'inherit')
            $(keyboardUpperContainer).css('display', 'none')
            console.log('Shift letters down')
        }
    })

    $(document).keypress(function () {
        $(`#${event.keyCode}`).css({
            'background-color': 'darkgoldenrod',
        })
    })
    $(document).keyup(function () {
        let letter = event.key.charCodeAt(0);
        console.log(letter)
        console.log(event.code)
        $(`#${letter}`).css({
            'background-color': '#f5f5f5',
        })
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

