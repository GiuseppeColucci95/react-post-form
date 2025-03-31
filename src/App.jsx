

function App() {

  return (
    <>

      <header className="py-3 bg-warning">
        <div className="container">
          <h1>Post Form</h1>
        </div>
      </header>

      <div className="container py-5">

        <form>

          <div className="row">

            <div className="col-6">

              <div class="mb-3">
                <label for="author" class="form-label">Author</label>
                <input
                  type="text"
                  class="form-control"
                  name="author"
                  id="author"
                  aria-describedby="authorHelper"
                  placeholder="Type your author here..."
                />
                <small id="authorHelper" class="form-text text-muted">Type your author above</small>
              </div>

            </div>

            <div className="col-6">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="title"
                  aria-describedby="titleHelper"
                  placeholder="Type your title here..."
                />
                <small id="titleHelper" class="form-text text-muted">Type your title above</small>
              </div>
            </div>

            <div className="col-12">
              <div class="mb-3">
                <label for="body" class="form-label">Testo</label>
                <textarea class="form-control" name="body" id="body" rows="5"></textarea>
                <small id="bodyHelper" class="form-text text-muted">Type your request above</small>
              </div>
            </div>

            <div className="col d-flex justify-content-center align-items-center gap-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="check" />
                <label class="form-check-label" for="check">Public post</label>
              </div>

              <button type="submit" class="btn btn-primary">Send</button>

            </div>

          </div>

        </form>
      </div>

    </>
  )
}

export default App;
