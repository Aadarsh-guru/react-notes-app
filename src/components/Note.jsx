

const Note = ({ note, deleteNote }) => {
  return (
    <>
      <div id="card" >
        <div className="card text-center " style={{ width: '18rem' }}>
          <div className="row">
            <div className="col-8"><p style={{ color: '#878787', fontSize: '14px', textAlign: 'center', padding: 14 }} >{note.date}</p></div>
           <div className="col-4"> <button className='btn btn-danger m-2' onClick={() => deleteNote(note.id)} ><i className="bi bi-trash3-fill"></i></button></div>
            </div>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Note

