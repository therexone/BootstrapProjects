//Check off Todos by click
$("ul").on("click", "li", function () {
    $(this).toggleClass("done")
})

//Delete list if X is clicked
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type=text]").on("keypress", function (event) {
    if (event.which === 13) {
        todoText = $(this).val();
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li");
        $(this).val("");
    }
})
$(".fa-plus").on("click", function(){
    $("input[type=text]").fadeToggle(100);
})