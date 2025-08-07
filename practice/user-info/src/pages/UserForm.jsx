import React, { useState } from 'react';

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState([]);

  function handleHobbyChange(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    if (checked)
    setHobbies((h)=>[...h,name]);
  else
    setHobbies((h)=>h.filter((h)=>h!== name));
  }

  function handleSubmit(e) {
    e.preventDefault();


    alert(
      'First Name: ' + firstName + '\n' +
      'Last Name: ' + lastName + '\n' +
      'Gender: ' + gender + '\n' +
      'Age: ' + age + '\n' +
      'Hobbies: ' + hobbies
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        First Name: <input type="text" value={firstName}
         onChange={function(e) 
         { setFirstName(e.target.value); }} />
      </p>

      <p>
        Last Name: <input type="text" value={lastName}
         onChange={function(e)
          { setLastName(e.target.value); }} />
      </p>

      <p>
        Gender:
        <input type="radio" 
        name="gender" 
        value="Male" 
        onChange={function(e) 
        { setGender(e.target.value); }} /> Male

        <input type="radio" 
        name="gender" value="Female" 
        onChange={function(e)
         { setGender(e.target.value); }} /> Female
      </p>

      <p>
        Age: <input type="number" 
        value={age}
        onChange={function(e)
        { setAge(e.target.value); }} />
      </p>

      <p>
        Hobbies: <br />
        <input type="checkbox"
         name="music"
         onChange={handleHobbyChange} /> Music <br />
         
        <input type="checkbox"
         name="football"
         onChange={handleHobbyChange} /> Football <br />

        <input type="checkbox" 
        name="drawing" 
        onChange={handleHobbyChange} /> Drawing <br />
        
        <input type="checkbox" 
        name="swimming" 
        onChange={handleHobbyChange} /> Swimming
      </p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
