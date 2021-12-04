$("#left").click(function (e) { 
    $("#block").animate({"marginLeft":"-=100px"}, "slow");
    
});

$("#right").click(function (e) { 
    $("#block").animate({"marginLeft":"+=100px"}, "slow");
    
});