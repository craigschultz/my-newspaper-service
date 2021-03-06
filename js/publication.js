var market = decodeURIComponent(location.search.split('market=')[1])

if (market != undefined) {
    $.getJSON("config.json", function(data) {

        $.each(data, function(key, val) {
            for (var i = 0; i < val.length; i++) {
                $.each(val[i], function(key, val) {
                    if (market == key) {
                        setParameters(val);
                    }
                });
            };
        });
    });
}


function setParameters(data) {
    $.each(data, function(key, val) {
        if (key == 'phone' && val != '') {
            var element = document.getElementById("mcis-phone-number");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode(val));
            element = document.getElementById("mcis-phone-number-link");
            element.setAttribute('href', 'tel:' + val);
        }
        if (key == 'email' && val != '') {
            var element = document.getElementById("mcis-email");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode(val.toLowerCase()));
            element = document.getElementById("mcis-email-link");
            element.setAttribute('href', 'mailto:' + val.toLowerCase());
        }
        if (key == 'workingHours' && val != '') {
            var element = document.getElementById("mcis-working-hours");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(document.createTextNode('Mon-Fri ' + val));
            element = document.getElementById("mcis-weekend-hours");
            element.innerHTML = 'Sat-Sun Limited Hours';
        }
        if (key == 'sitename' && val != '') {
            var element = document.getElementById("sh-header-image");
            var img = new Image();
            img.className = 'sh-actual-pub-logo';
            img.src = 'http://www.gannett-cdn.com/sites/' + val + '/images/footer-logo.png';
            img.setAttribute('onerror',"this.onerror=null;this.src='http://www.gannett-cdn.com/sites/" + val + "/images/footer-logo@2x.png';" )
            
            element.appendChild(img);

            element = document.getElementById("pbm-sign-in");
            element.setAttribute('href', 'https://account.' + val + '.com/personal-information');

            element = document.getElementById("pbm-member-guide");
            element.setAttribute('href', 'http://' + val + '.com/memberguide');

            element = document.getElementById("pbm-e-newspaper");
            element.setAttribute('href', 'https://account.' + val + '.com/enewspaper');

            element = document.getElementById("pbm-start-stop");
            element.setAttribute('href', 'https://account.' + val + '.com/delivery-temporary-stop');

            element = document.getElementById("pbm-report-issue");
            element.setAttribute('href', 'https://account.' + val + '.com/delivery-issue');

            element = document.getElementById("pbm-payment");
            element.setAttribute('href', 'https://account.' + val + '.com/pay');
            
            element = document.getElementById("pbm-history");
            element.setAttribute('href', 'https://account.' + val + '.com/history');
        }
        if (key == 'chatUrl' && val != '') {
            var element = document.getElementById("pbm-chat-url");
            if (val == 'NA') {
                element.removeChild(element.firstChild);
            } else {
                element.setAttribute('href', val);
            }
        }
    });
}