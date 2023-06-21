
    // init controller
    var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
                    triggerElement: "#tcards",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#tcards", "visible")
                .addTo(controller);


new ScrollMagic.Scene({
                    triggerElement: "#tcards2",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#tcards2", "visible")
                .addTo(controller);


new ScrollMagic.Scene({
                    triggerElement: "#skil",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#skil", "visible")
                .addTo(controller);

new ScrollMagic.Scene({
                    triggerElement: "#about",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#about", "visible")
                .addTo(controller);


new ScrollMagic.Scene({
                    triggerElement: "#contactame",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#contactame", "visible")
                .addTo(controller);

new ScrollMagic.Scene({
                    triggerElement: "#contactx",
                    offset: 50,											
                    triggerHook: 0.9,
                })
                .setClassToggle("#contactx", "visible")
                .addTo(controller);
                

