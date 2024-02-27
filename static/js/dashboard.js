console.log("dashboard.js");
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.press-start-text').addEventListener('click', function () {
        console.log("click")
        document.querySelector('.game_options_div').hidden = false;
        document.querySelector('.press-start-text').style.display = 'None';
        document.querySelector('.game_options_div').focus();
    });


    $(document).ready(function () {
        $("#btnSubmit").click(function () {
            var selectedRadio = document.querySelector('input[name="answer"]:checked').value;
            var url;

            switch (selectedRadio) {
                case 'github':
                    url = 'https://github.com/zeroconnect';
                    break;
                case 'portfolio':
                    // url = 'https://yourportfolio.com';
                    break;
                case 'linked_in':
                    url = 'https://www.linkedin.com/in/nileshkm/';
                    break;
                case 'bored':
                    url = '/static/documents/NileshKM-Resume.pdf';
                    break;
            }

            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});

document.addEventListener('keydown', function (event) {
    const optionRadios = document.querySelectorAll('.option-radio');
    if (event.key === ' ') {
        console.log("sapce bar")
        document.querySelector('.game_options_div').hidden = false;
        document.querySelector('.press-start-text').style.display = 'None';
        document.querySelector('.game_options_div').focus();

    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        const checkedIndex = Array.from(optionRadios).findIndex(radio => radio.checked);
        let nextIndex;
        if (event.key === 'ArrowUp') {
            nextIndex = (checkedIndex - 1 + optionRadios.length) % optionRadios.length;
        } else {
            nextIndex = (checkedIndex + 1) % optionRadios.length;
        }
        optionRadios[nextIndex].checked = true;
        optionRadios[nextIndex].focus();
    }

});

document.addEventListener('keydown', function (event) {
    console.log("inside envet listner")
    if (event.key === 'Enter') {
        var selectedRadio = document.querySelector('input[name="answer"]:checked').value;
        var url;

        switch (selectedRadio) {
            case 'github':
                url = 'https://github.com/zeroconnect';
                break;
            case 'portfolio':
                // url = 'https://yourportfolio.com';
                break;
            case 'linked_in':
                url = 'https://www.linkedin.com/in/yourusername/';
                break;
            case 'bored':
                url = '/static/documents/NileshKM-Resume.pdf';
                break;
        }
        
        if (url) {
            if (selectedRadio === 'bored') {
                var link = document.createElement('a');
                link.href = url;
                link.download = 'NileshKM-Resume.pdf'; // replace with the name you want the downloaded file to have
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(url, '_blank');
            }
        }
    }
});


window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
});

