$("#registration_form").on('submit', (e)=>{
  e.preventDefault();
  
 
 function get_user_data(){
  $.ajax({
      url:"https://t-math-t-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      method:"GET",
      beforeSend:function(){
        alert("YA");
      },
      success: function(res){
        console.log(res);
        return res;
      }
    });
  } 

  let users_json =  get_user_data()
  

   if(JSON.parse(users_json).filter(function (i,n){ return n.email === "etamar1122@gmail.com";}))
      {
        console.log("alreadyExists!"); 
        return 0; 
      };

  $.ajax({
      url: "https://t-math-t-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      method:"POST",
      crossDomain: true,
      data: JSON.stringify({
          user_name: $('#first_name').val(),
          last_name:$('#last_name').val(),
          email:$('#email').val(),
          password:$('#password').val()
      }),
      contentType:"json",
      beforeSend:function(){
            alert("YA");
          },
      success: function(res){
        console.log(res);
      },
      error: function(res){
        console.log(res)
      }
      
  })
})