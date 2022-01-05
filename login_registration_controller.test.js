const login_reg_control = require('./login_registration_controller') 

test('register user ',async () => {
    return await login_reg_control.register_user().then(data => {
      expect(data).toBeUndefined();
    });
  });

  test('user authentication failed',async () => {
    return await login_reg_control.get_questions().then(res => {
      expect(res).toBeUndefined();
    });
  });
 
  test('get user field of none user',async () => {
    return await login_reg_control.get_user_field('role').then(res => {
      expect(res).toBeUndefined();
    });
  });
  
  test('user is logged out', () => {
    assert(login_reg_control.is_logged_in())
    expect(res).toBe('false');
    });


  test('no users array',async () => {
    return await login_reg_control.get_users().then(res => {
      expect(res).toBeUndefined();
    });
  });
  
  test('admin user registration failed not an admin',async () => {
    const email = 'email@gmail.com';
    const first_name = 'example';
    const last_name = 'example';
    const role = 'student';
    
    data = JSON.stringify({
        email,
        first_name,
        last_name,
        role
    })
    
    return await login_reg_control.register_user_admin(data).then(res => {
      expect(res).toBeUndefined();
    });
  });

 


 