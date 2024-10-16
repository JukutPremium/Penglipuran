$(document).ready(function() {
    // const navButton = $("#logoPenglipuran");
    // console.log(navButton)
    // navButton.on("click", function() {
    //     let showColor = false;
    //     console.log("Haa");
    // })
    
    $(document).on('scroll', function() {
        const documentWidth = $(window).width();
        console.log(documentWidth)
        if (documentWidth > 992) {
            const scrollValue = $(this).scrollTop();
            const navbarContainer = $(".navbar");
            
            if (scrollValue >= 250) {
                navbarContainer.css({
                    backgroundColor: "#3c6c52",
                })
            } else {
                navbarContainer.css({
                    backgroundColor: "rgba(0,0,0,0)"
                })
            }   
        }
    });
})