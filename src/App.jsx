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

    e.preventDefault();

    fetch(endpoint_url, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
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

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-6">

              <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  id="author"
                  aria-describedby="authorHelper"
                  placeholder="Type your author here..."
                  value={formData.author}
                  onChange={handleFormDataChange} />
                <small id="authorHelper" className="form-text text-muted">Type your author above</small>
              </div>

            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  aria-describedby="titleHelper"
                  placeholder="Type your title here..."
                  value={formData.title}
                  onChange={handleFormDataChange} />
                <small id="titleHelper" className="form-text text-muted">Type your title above</small>
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="body" className="form-label">Testo</label>
                <textarea
                  className="form-control"
                  name="body"
                  id="body"
                  rows="5"
                  value={formData.body}
                  onChange={handleFormDataChange}>
                </textarea>
                <small id="bodyHelper" className="form-text text-muted">Type your request above</small>
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
