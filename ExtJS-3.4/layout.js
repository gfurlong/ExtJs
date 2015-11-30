Ext.onReady(function () {
    // Render everything!
    var viewport = new Ext.Viewport({
        layout: "border",
        title: document.title,
        items: [
        {
            xtype: "box",
            region: "north",
            applyTo: "header",
            height: 30
        },
        {
            id: "accordian-panel",
            autoHeight: false,
            collapsible: true,
            layout: "accordion",
            region: "west",
            split: true,
            bodyBorder: false,
            bodyStyle: "background-color:#DFE8F6",
            defaults: { bodyStyle: "padding:15px" },
            minWidth: 205,
            width: 205,
            items: [
                {
                    title: "Message Box",
                    html: Ext.get("panelMessageBox").dom.innerHTML,
                    autoHeight: true
                },
                {
                    title: "Animations",
                    html: Ext.get("panelAnimations").dom.innerHTML,
                    autoHeight: true
                }
            ],
            renderTo: Ext.getBody()
        },
        {
            layout: "border",
            id: "layout-browser2",
            region: "center",
            border: false,
            split: true, 
            minSize: 100,
            maxSize: 500,
            html: '<div style="text-align:center;text-valign:middle;font-style:italic"><br/><br/>&lt;This is intentionally blank&gt;</div>',
            width: "100%",
            height: "100%",

            items: [
            ]
            
        }]
    });

    viewport.render();
});