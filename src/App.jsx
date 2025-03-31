import { useState } from "react";

const endpoint_url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {

  //logic
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    check: false
  });
  const [error, setError] = useState({
    author: '',
    title: '',
    body: '',
    check: ''
  });
  const [formSent, setFormSent] = useState(false);

  function formValidate() {
    const newError = {
      author: '',
      title: '',
      body: '',
      check: ''
    }

    setFormSent(false);
    let errorsCounter = 0;

    if (formData.author.trim().length < 2) {
      newError.author = "Please insert an author with minimum 2 characters";
      errorsCounter++;
    }
    if (formData.title.trim().length < 5) {
      newError.title = "Please insert a title with minimum 5 characters";
      errorsCounter++;
    }
    if (formData.body.trim().length < 20) {
      newError.body = "Please insert a body with minimum 20 characters";
      errorsCounter++;
    }

    console.log(newError);

    setError(newError);
    if (errorsCounter > 0) {
      return false;
    }
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    return true;
  }

  function handleFormDataChange(e) {

    console.log(e.target.value);
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [key]: value
    });
  }

  function handleSubmit(e) {

    //prevent default refresh browser behavior
    e.preventDefault();

    const isValid = formValidate();

    //if not valid form return
    if (!isValid) {
      return;
    }

    //else fetch ajax call
    fetch(endpoint_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setFormData({
          author: '',
          title: '',
          body: '',
          check: false
        });
      })
      .catch(err => {
        console.error(err);
      });

  }

  //template
  return (
    <>

      <header className="py-3 bg-warning">
        <div className="container">
          <h1>Post Form</h1>
        </div>
      </header>

      <div className="container py-5">

        <div className={`${formSent === false ? 'd-none' : 'alert alert-success'}`} role="alert">
          Form sent!
        </div>

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-6">

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className={`form-control ${error.author ? 'is-invalid' : ''}`}
                  name="author"
                  id="author"
                  aria-describedby="authorHelper"
                  placeholder="Type your author here..."
                  value={formData.author}
                  onChange={handleFormDataChange} />
                {error.author ?
                  (<div className="invalid-feedback">{error.author}</div>)
                  :
                  (<small id="authorHelper" className="form-text text-muted">Type your author above</small>)
                }
              </div>

            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className={`form-control ${error.title ? 'is-invalid' : ''}`}
                  name="title"
                  id="title"
                  aria-describedby="titleHelper"
                  placeholder="Type your title here..."
                  value={formData.title}
                  onChange={handleFormDataChange} />
                {error.title ?
                  (<div className="invalid-feedback">{error.title}</div>)
                  :
                  <small id="titleHelper" className="form-text text-muted">Type your title above</small>
                }
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="body" className="form-label">Testo</label>
                <textarea
                  className={`form-control ${error.body ? 'is-invalid' : ''}`}
                  name="body"
                  id="body"
                  rows="5"
                  value={formData.body}
                  onChange={handleFormDataChange}>
                </textarea>
                {error.body ?
                  (<div className="invalid-feedback">{error.body}</div>)
                  :
                  <small id="bodyHelper" className="form-text text-muted">Type your request above</small>
                }
              </div>
            </div>

            <div className="col d-flex justify-content-center align-items-center gap-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check"
                  name="check"
                  value={formData.check}
                  onChange={handleFormDataChange} />
                <label className="form-check-label" htmlFor="check">Public post</label>
              </div>

              <button type="submit" className="btn btn-primary">Send</button>

            </div>

          </div>

        </form>
      </div>

    </>
  )
}

export default App;
