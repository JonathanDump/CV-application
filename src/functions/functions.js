export function updateState({target: {value}}, attr, data, object, setData, category) {
//   if (category === 'work') {
//    const experience = [...data.experience].map((w) => {
//      return w.id === object.id ? { ...object, [attr]: value } : w;
//    });
    
//     setData({ ...data, experience: experience }); 
//     return
//   }
  
// const education = [...data.education].map((ed) => {  
//     if (ed.id === object.id) {
//       return { ...object, [attr]: e.target.value };
//     } else {

//     return ed
//     }
//   });
//   setData({ ...data, education: education }); 
  

  const part = category === 'work' ? 'experience' : 'education';
  const result = [...data[part]].map((obj) => {
     return obj.id === object.id ? { ...object, [attr]: value } : obj;
  });
  
  setData({ ...data, [part]: result }); 
}

export function deleteFromState( obj, data, setData, category) {
  if (category === 'work') {
    const experience = [...data.experience].filter((w) => w.id !== obj.id);
    setData({ ...data, experience: experience });
    return
  }
  console.log('deleteFrom',data);
  const education = [...data.education].filter((ed) => ed.id !== obj.id);
    setData({ ...data, education: education });

}

export function addToState( data, setData, category) {
  const work = {
    id: crypto.randomUUID(),
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
  };

  const university = {
    id: crypto.randomUUID(),
    university: '',
    city: '',
    degree: '',
    subject: '',
    from: '',
    to: '',
  };

  if (category === 'work') {
    const experience = [...data.experience, work];
    setData({ ...data, experience: experience });
  
    return;
  }

  const education = [...data.education, university];
  setData({ ...data, education: education });
}
