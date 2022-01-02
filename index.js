// $("#registration_form").on('submit', (e)=>{
//   e.preventDefault();
  
 
//   async function get_user_data(){
//     let userData = null;
//     userData = await $.get({
//       url: "https://t-math-t-default-rtdb.europe-west1.firebasedatabase.app/users.json",
//       success: function(data) {
//         return data;
//         //console.log(data) // Resolve promise and go to then()
//       },
//       error: function(err) {
//         console.log(err) // Reject the promise and go to catch()
//       }
//     });
//     return userData;
//   }
//     var flag = false;
//     const start = async function() {
//       const result = await get_user_data();
//       $.each(result, function(i,val){if(val["email"] === user_email){alert("error!"); flag = true}})
//       if(flag != true){
//         $.ajax({
//           url: "https://t-math-t-default-rtdb.europe-west1.firebasedatabase.app/users.json",
//           method:"POST",
//           crossDomain: true,
//           data: JSON.stringify({
//               user_name: $('#first_name').val(),
//               last_name:$('#last_name').val(),
//               email:$('#email').val(),
//               password:$('#password').val()
//           }),
//           contentType:"json",
//           beforeSend:function(){
//                 alert("YA");
//               },
//           success: function(res){
//             console.log(res);
//           },
//           error: function(res){
//             console.log(res)
//           }
//         })
//       }else {
//         flag = false;
//         return;
//       }
//     }
    
//     start();
//     var user_email = $('#email').val();

  // if(flag != true){
  //   $.ajax({
  //       url: "https://t-math-t-default-rtdb.europe-west1.firebasedatabase.app/users.json",
  //       method:"POST",
  //       crossDomain: true,
  //       data: JSON.stringify({
  //           user_name: $('#first_name').val(),
  //           last_name:$('#last_name').val(),
  //           email:$('#email').val(),
  //           password:$('#password').val()
  //       }),
  //       contentType:"json",
  //       beforeSend:function(){
  //             alert("YA");
  //           },
  //       success: function(res){
  //         console.log(res);
  //       },
  //       error: function(res){
  //         console.log(res)
  //       }
  //     })
  //   }
// })
