var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lectus mauris ultrices eros in. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium lectus quam id leo in vitae turpis. Aliquam eleifend mi in nulla posuere. Tortor consequat id porta nibh venenatis cras. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ac placerat vestibulum lectus mauris ultrices."
    }, 
    {
        name: "Desert Mesa", 
        image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lectus mauris ultrices eros in. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium lectus quam id leo in vitae turpis. Aliquam eleifend mi in nulla posuere. Tortor consequat id porta nibh venenatis cras. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ac placerat vestibulum lectus mauris ultrices."
    }, 
    {
        name: "Canyon Floor", 
        image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Lectus mauris ultrices eros in. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Diam sit amet nisl suscipit adipiscing bibendum est. Pretium lectus quam id leo in vitae turpis. Aliquam eleifend mi in nulla posuere. Tortor consequat id porta nibh venenatis cras. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ac placerat vestibulum lectus mauris ultrices."
    }, 
]

function seedDB(){
    Campground.deleteMany({}, function(err){ //NEED TO USE .deleteMany instead of .remove due to mongodb deprciation of .remove
        if(err){
            console.log("err");
        } 
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err){ //NEED TO USE .deleteMany instead of .remove due to mongodb deprciation of .remove
            if(err){
                console.log("err");
            } 
        })
        console.log("removed comments!")
        /*
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err) {
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great but I wish thre was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        })
                }
            })
        }) */
    });
}

module.exports = seedDB;