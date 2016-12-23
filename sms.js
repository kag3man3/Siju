$(document).ready(function () {

});
function sendSms() {
    if (validate())
        $.ajax({
            url: 'https://www.cubalan.com/send.php',
            type: 'POST',
            data: {enviar: 1, message: text, recipients: number},
            dataType: 'json',
            success: function (datos) {
                notify("", "SMS enviado satisfactoriamente", 2);
                $('#text').val('');
                $('#number').val('');
            },
            error: function (jqXHR, status, error) {
                notify("", "SMS enviado satisfactoriamente", 2);
                $('#text').val('');
                $('#number').val('');
            }
        });
}
function validate() {
    text = $('#text').val();
    number = $('#number').val();
    if (number == '' || text == '') {
        notify("", "Existen datos en blancos.", 1);
        return false;
    }
    else if(!isFinite(number)){
        notify("",'El número no es correcto.',1);
    }
    else {
        number = '+53' + number;
        return true;
    }
}
function notify(title, texto, tipo) {
    if (tipo == 1) {
        tipo = 'red darken-1';
    }
    else if (tipo == 2)
        tipo = 'green darken-1';
    else
        tipo = ' orange lighten-1';
    Materialize.toast(texto, 4000, tipo);
    return false;
}