export function updateState(e, attr, data, work, setData) {
  const experience = [...data.experience].map((w) => {
    
    if (w.id === work.id) {
      return { ...work, [attr]: e.target.value };
    } else {

    return w
    }
  });
  setData({ ...data, experience: experience });
}

export function deleteFromState(obj, data, setData) {
  const experience = [...data.experience].filter((w) => w.id !== obj.id);
  setData({ ...data, experience: experience });
}

export function addToState(category, data, setData) {
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
    console.log('added work', experience);
    return;
  }

  const education = [...data.education, university];
  setData({ ...data, education: education });
}
