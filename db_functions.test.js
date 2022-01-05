const db_functions = require('./db_functions') 

test('shouldnt get users array',async () => {
    return await db_functions.get_users().then(data => {
      expect(data).toBeUndefined();
    });
  });

  test('shouldnt get questions array',async () => {
    return await db_functions.get_questions().then(res => {
      expect(res).toBeUndefined();
    });
  });
 
  test('append question to the db',async () => {
    const question = '2+2';
    const choice1 = '4';
    const choice2 = '5';
    const choice3 = '2';
    const choice4 = '12';
    const answer = '1';
    data = JSON.stringify({
        question,
        choice1,
        choice2,
        choice3,
        choice4,
        answer
    })
    return await db_functions.add_Question(data).then(res => {
      expect(res).toBeUndefined();
    });
  });
  
  test('append new feedback',async () => {
    const email = 'email@gmail.com';
    const first_name = 'example';
    const last_name = 'example';
    const feedback = 'great app';
    
    data = JSON.stringify({
        email,
        first_name,
        last_name,
        feedback
    })
    
    return await db_functions.add_feedback(data).then(res => {
      expect(res).toBeUndefined();
    });
  });

  test('update user score',async () => {
    const score = 10;
    data = JSON.stringify({
        score,
    })
    
    return await db_functions.update_user_score(data).then(res => {
      expect(res).toBeUndefined();
    });
  });
  
  test('update user fields',async () => {
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
    
    return await db_functions.update_user(data).then(res => {
      expect(res).toBeUndefined();
    });
  });

  test('get user by id',async () => {
    const id = 3;

    
    return await db_functions.get_user_by_id(id).then(res => {
      expect(res).toBeUndefined();
    });
  });

  test('update question',async () => {
    const question = '2+2';
    const choice1 = '4';
    const choice2 = '5';
    const choice3 = '2';
    const choice4 = '12';
    const answer = '1';
    data = JSON.stringify({
        question,
        choice1,
        choice2,
        choice3,
        choice4,
        answer
    })
    
    return await db_functions.update_question(data).then(res => {
      expect(res).toBeUndefined();
    });
  });

  test('get question by id',async () => {
    const id = 5;

    return await db_functions.get_question_by_id(5).then(res => {
      expect(res).toBeUndefined();
    });
  });

  test('delete question',async () => {
    const id = 10;

    return await db_functions.delete_question(id).then(res => {
      expect(res).toBeUndefined();
    });
  });


  test('delete user',async () => {
    const id = 10;

    return await db_functions.delete_user(id).then(res => {
      expect(res).toBeUndefined();
    });
  });


 