$(document).ready(function () {
    let keyboardLowerContainer = $('#keyboard-lower-container')
    let keyboardUpperContainer = $('#keyboard-upper-container')

    // Objective 5

    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];
    // let length = [sentences[0].length, sentences[1].length, sentences[2].length, sentences[3].length, sentences[4].length]
    // sentences[0].length = 48
    // sentences[1].length = 47
    // sentences[2].length = 48
    // sentences[3].length = 48
    // sentences[4].length = 49

    $('#sentence').text(currentSentence)
    $('#target-letter').text(currentLetter) // Objective 7

    // Objective 3 Complete

    $(document).keydown(function (e) {
        if (e.keyCode === 16) {
            $(keyboardLowerContainer).css('display', 'none')
            $(keyboardUpperContainer).css('display', 'inherit')
            console.log('Shift letters up')
        }
    })

    $(document).keyup(function (e) {
        if (e.keyCode === 16) {
            $(keyboardLowerContainer).css('display', 'inherit')
            $(keyboardUpperContainer).css('display', 'none')
            console.log('Shift letters down')
        }
        
    //  Objective 4 Complete

        else {
            let letter = event.key.charCodeAt(0);
            // console.log(letter)
            // console.log(event.code)
            $(`#${letter}`).css('background-color', '#f5f5f5')
        }
    })

    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css('background-color', 'darkgoldenrod')
        //Objective 6
        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>') // Objective 8
            $('#yellow-block').css('left', '+=17.5px')
            letterIndex++
            currentLetter = currentSentence[letterIndex];
            $('#target-letter').text(currentLetter);
            console.log(letterIndex)
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>') // Objective 8
        }
        if (letterIndex == currentSentence.length) {
            console.log('This should change the sentence')
            letterIndex = 0;
            sentIndex++
            currentSentence = sentences[sentIndex];
            currentLetter = currentSentence[letterIndex]
            $('#sentence').text(sentences[sentIndex])
            $('#feedback').text('')
            $('#target-letter').text(currentLetter) // Objective 7
            $('#yellow-block').css('left', '17.5px') // Objective 6
        }

        // if game ends ... what am do?
    })
    console.log(currentSentence.length)
})





