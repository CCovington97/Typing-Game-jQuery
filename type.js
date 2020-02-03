$(document).ready(function () {
    let keyboardLowerContainer = $('#keyboard-lower-container')
    let keyboardUpperContainer = $('#keyboard-upper-container')

    // Objective 5 Complete

    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate', // 11 words
        'Too ato too nOt enot one totA not anot tOO aNot', // 11 words
        'oat itain oat tain nate eate tea anne inant nean', // 10 words
        'itant eate anot eat nato inate eat anot tain eat', // 10 words
        'nee ene ate ite tent tiet ent ine ene ete ene ate']; // 12 words
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
    $('#target-letter').text(currentLetter) // Objective 7 Complete
    let start = new Date() // Objective 9

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
            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>') // Objective 8 Complete
            $('#yellow-block').css('left', '+=17.5px')
            letterIndex++
            currentLetter = currentSentence[letterIndex];
            $('#target-letter').text(currentLetter);
            console.log(letterIndex)
        } else {
            $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>') // Objective 8 Complete
        } // Objective 6
        // Objective 9
        if (letterIndex === 1) {
            console.log(start)
        } // Objective 9
        if (letterIndex == currentSentence.length) {
            speed(); // Objective 9
            
            console.log('This should change the sentence')
            letterIndex = 0;
            sentIndex++
            currentSentence = sentences[sentIndex];
            currentLetter = currentSentence[letterIndex]
            $('#sentence').text(sentences[sentIndex])
            $('#feedback').text('')
            $('#target-letter').text(currentLetter) // Objective 7 Complete
            $('#yellow-block').css('left', '17.5px') // Objective 6 Complete
        
            
            // gameEnd();
        } 

        // if game ends ... what am do?
    })

    // Objective 9

    function speed () {

        let words = [11, 11, 10, 10, 12]
        let end = new Date();
        console.log(end)
        let time = (end-start)/60000;
        console.log(time)
        let mistakes = $('.glyphicon-remove').children().length;
        console.log(mistakes) 
        for (i === 0; i < words.length; i++) {
            let roundSpeed = Math.round((words[i]/time) - (2 * mistakes))
            console.log(roundSpeed)
            alert(`Your speed is ${roundSpeed} per minute`)
        }
        
    }

    // Objective 10

    // function gameEnd() {
    //     if (currentSentence === 4, currentLetter === 49) {
    //         console.log('Game end')
    //     }
    // }
}) 