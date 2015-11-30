function error() {
    var msg = "An error has occurred!";

    Ext.MessageBox.show({
        title: document.title,
        msg: msg,
        buttons: Ext.MessageBox.OK,
        icon: Ext.MessageBox.ERROR
    });
}

function prompt() {
	var msg = "Please enter some text";
	var myCallback = function(btn, text) {
		console.info("You pressed " + btn);

		if(text) {
			console.info("You entered " + text);
		}
	}

	Ext.MessageBox.prompt(document.title, msg, myCallback);
}

function multilinePrompt() {
    var msg = "Please enter some text";
    var myCallback = function(btn, text) {
        console.info("You pressed " + btn);

        if (text) {
            console.info("You entered " + text);
        }
    }

    Ext.MessageBox.show({
        title : document.title,
        msg : msg,
        width: 300,
        height: 100,
        multiline : 20,
        value : "Yodah",
        buttons : Ext.MessageBox.YESNOCANCEL,
        fn: myCallback,
        icon: Ext.MessageBox.WARNING
    });
}

function confirm() {
	var myCallback = function(btn, text) {
		console.info("You pressed " + btn);

		if(text) {
			console.info("You entered " + text);
		}
	}

	Ext.MessageBox.show({
	    title: document.title,
		msg: "Are you sure?",
		width: 300,
		buttons: Ext.MessageBox.YESNOCANCEL,
		fn: myCallback,
		icon: Ext.MessageBox.QUESTION
	});
}

function createAjaxWindow() {
    var win = new Ext.Window({
        id: "my_window"
        , title: document.title
        , width: 300
        , height: 150
        , layout: "fit"
        , autoLoad: {
            url: "b.html"
            , scripts: true
        }
    });
    win.show();
}

function highlightWindow() {
    var win = Ext.getCmp('my_window');
    // var win = $('#my_window'); // (jQuery equivalent to Ext.getCmp)
    win.body.highlight();
}
