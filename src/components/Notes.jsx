import Note from './Note'

const Notes = ({ notes, deleteNote }) => {
  return (
    <>
      <h4 className='text-center m-2'>Your Notes</h4>
      <div className='row'>
        {
          notes.map(note => (
            <div key={note.id} className="col-md-3 mt-3"><Note note={note} deleteNote={deleteNote} /></div>
          ))
        }
      </div>
    </>
  )
}

export default Notes