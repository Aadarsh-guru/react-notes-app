import { useState } from "react"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"


const defaultObj = {
    id: 0,
    title: '',
    description: '',
    date: (new Date().toLocaleString().toString())
}

const AddNote = ({ addNotes }) => {

    const [note, setNote] = useState(defaultObj)

    const navigate = useNavigate()

    const saveNote = () => {
        addNotes({ ...note, id: uuid() })
        setNote(defaultObj)
        navigate('/notes')
    }

    const onInputChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='form' >
            <h3 className="text-center m-2">Add New Note</h3>
            <div className="row m-2" id="title" >
                <input type="text" name='title' className='form-control' value={note.title} placeholder='Enter Title' onChange={(e) => onInputChange(e)} />
            </div>
            <div className="row m-2" id="description" >
                <textarea name="description" className='form-control' value={note.description} placeholder='Enter Description' onChange={(e) => onInputChange(e)} cols="30" rows="10"></textarea>
            </div>
            <div className=" button m-2">
                <button disabled={!note.title || !note.description} className="btn btn-success" onClick={() => saveNote()} style={{padding:'5 10 5 10'}} >Save Note</button>
            </div>
        </div>
    )
}

export default AddNote