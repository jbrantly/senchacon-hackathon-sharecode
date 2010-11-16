var validation = require('./validation');

Ext.onReady(function() {
    
    Ext.QuickTips.init();

    var simple = new Ext.FormPanel({
        labelWidth: 75,
        url: 'validate',
        frame: true,
        title: 'Simple Form',
        bodyStyle: 'padding:5px 5px 0',
        width: 350,
        defaults: {width: 230},
        defaultType: 'textfield',

        items: [{
            fieldLabel: 'Email',
            name: 'email',
            getErrors: validation.validateEmail
        }],
        
        buttons: [{
            text: 'Save',
            handler: function() {
                simple.getForm().submit({
                    clientValidation: false,
                    success: function() {
                        Ext.Msg.alert('Success', 'Success!');
                    },
                    failure: function(form, action) {
                        switch (action.failureType) {
                            case Ext.form.Action.SERVER_INVALID:
                               Ext.Msg.alert('Failure', action.result.msg);
                       }
                    }
                });
            }
        }]
    });

    simple.render(document.body);
    
});