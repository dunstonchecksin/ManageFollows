var accessToken = location.href.split('access_token=')[1];
console.log(accessToken);
// $.ajax({url: "https://api.instagram.com/v1/users/self/follows?access_token="+accessToken+'&callback=?', success: function(result){
//         console.log(result);
//     }});
$.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "https://api.instagram.com/v1/users/self/follows?access_token="+accessToken, 
            success: function(data) {
                console.log(data);
            }
        });
// $.getJSON(
//         'https://api.instagram.com/v1/users/25025320/media/recent/?client_id=YOUR CLIENT ID&callback=?',
//         function(data) {
//             console.log(data);
//         }
//     );