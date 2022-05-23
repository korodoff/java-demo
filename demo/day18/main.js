console.log("jquery + AJAX")

// JS library which provide effective methid for doing somthing in frontend and essential feature
// like DOM manipulation,Ajax interaction and so on

$("#cls").click(function(){
    // $("p").hide();
    $("#learn").toggle();
});

$("#hide").click(function(){
    // $("p").hide();
    $(".learn1").toggle();
});

$("button").click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("learn").innerHTML = response.title;
            document.getElementById("learn1").innerHTML = response.userId;
        }
    })
})


