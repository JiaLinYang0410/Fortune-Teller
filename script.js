$('button').click(function(){
    var name = $(".name").val();
    var year= $(".year").val();
    var hour =$(".hour").val();
    var total=$(("2052" - year) * "288264").val();
    $("body").append("<h1>By the year 2052 " + name + " would have wasted" + total + " sleeping.</h1>");
});