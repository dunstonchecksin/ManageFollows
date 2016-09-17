var accessToken = location.href.split('access_token=')[1];
console.log(accessToken);
$.ajax({url: "https://api.instagram.com/v1/users/self/follows?access_token="+accessToken, success: function(result){
        console.log(result);
    }});
