// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible
$("#close").click(function(){
    $("p").hide();
})
$("#show").click(function(){
    $("p").show();
})




// Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$("#ajax").click(function(){
    $.ajax({//ajax
        url: "https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("showajax").innerText = response.title;// change in text we use innerText 
            // document.getElementById("learn").innerHTML = response.userId;
        }
    })
})