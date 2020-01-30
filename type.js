$(document).ready(function () {
    let keyboardLowerContainer = $('#keyboard-lower-container')
    let keyboardUpperContainer = $('#keyboard-upper-container')

    // Objective 3

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

    // Objective 4

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

    // Objective 5

    let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sampSent = $('#yellow-block'); // div
    let typingSent = $('sentence'); // div
    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];

    $('#sentence').text(currentSentence)
    $('#target-letter').text(currentLetter)
})







// let length0 = sentences[0].length // 48
// let length1 = sentences[1].length // 47
// let length2 = sentences[2].length // 48
// let length3 = sentences[3].length // 48
// let length4 = sentences[4].length // 49