
//Version 1: we're adding a click handler onto all the list items. 
jQuery.fn.tabs_v1 = function (control) {
    var element = $(this);
    control = $(control);

    element.find("li").bind("click", function(){
        
        //Add/remove active class from the list-item
        element.find("li").removeClass("active");
        $(this).addClass("active");

        //Add/remove active class from tableContent
        var tabName=$(this).attr("data-tab");
        control.find(">[data-tab]").removeClass("active");
        control.find(">[data-tab='" + tabName +"']").addClass("active");

    });


    // Activate first tab
    element.find("li:first").addClass("active");
    // Return 'this' to enable chaining
    return this;
};

// Version 2: using delegate
jQuery.fn.tabs = function (control) {
    var element = $(this);
    control = $(control);

    element.delegate("li", "click", function(){
        var tabName = $(this).attr("data-tab");

        element.trigger("change.tabs", tabName);
    });

    element.bind("change.tabs", function(e, tabName){
        element.find("li").removeClass("active");
        element.find("[data-tab='" + tabName + "']").addClass("active");
    });

    element.bind("change.tabs", function(e, tabName){
        control.find("[data-tab]").removeClass("active");
        control.find("[data-tab='" + tabName + "']").addClass("active");
    });

    // Activate first tab
    var firstName = element.find("li:first").attr("data-tab");
    element.trigger("change.tabs", firstName);
    return this;
};

$(document).ready(function () {
    $("ul#tabs").tabs("#tabContent");
});

