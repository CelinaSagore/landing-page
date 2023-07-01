function display() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>NAME: </b>" + document.form-contact.name.value;
    message += "<li><b>Email: </b>" + document.form-contact.email.value;
    message += "<li><b>Message: </b>" + document.form-contact.message.value + "</ul>";
    DispWin.document.write(message);
}