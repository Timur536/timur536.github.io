import { useNavigate } from "react-router-dom"
import { useState } from "react"

function HomePage({ onLogOut }) {
  const [user] = useState(localStorage.getItem("auth"))
  const key = `notes_${user}`
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem(key)) || []
  )
  const [isCreating, setIsCreating] = useState(false)
  const [newNote, setNewNote] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [activeNote, setActiveNote] = useState(null);
  const navigate = useNavigate()

  const handleDelete = (index) => {
    const updated = [...notes]
    updated.splice(index, 1)
    setNotes(updated)
    localStorage.setItem(key, JSON.stringify(updated))
  }

  const handleLogout = () => {
    localStorage.removeItem("auth")
    onLogOut()
    navigate("/login")
  }

  const handleSave = () => {
    const date = new Date()

    let updatedNotes
    if (editIndex !== null) {

      updatedNotes = [...notes]
      updatedNotes[editIndex].text = newNote
      setEditIndex(null)
    } else {

      updatedNotes = [
        ...notes,
        { text: newNote, createdAt: date.toLocaleDateString() },
      ]
      setIsCreating(false)
    }

    setNotes(updatedNotes)
    localStorage.setItem(key, JSON.stringify(updatedNotes))
    setNewNote("")
  }

  const handleCancel = () => {
    setNewNote("")
    setEditIndex(null)
    setIsCreating(false)
  }

  const renderNotes = (arr) => {
    return arr.map((note, index) => {
      if (index === editIndex) {
        return (
          <li key={index} className="note__item">
            <textarea
              className="note__textarea"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <div className="note__button-wrap">
              <button className="note__button button" onClick={handleSave}>
                Сохранить
              </button>
              <button className="note__button button" onClick={handleCancel}>
                Отмена
              </button>
            </div>
          </li>
        )
      }

      return (
        <li key={index} className="note__item">
          <p className="note__text" onClick={() => setActiveNote(note)}>{note.text}</p>
          <div className="note__icon-wrap">
            <svg
              onClick={() => handleDelete(index)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="note__icon"
            >
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
              <path
                fillRule="evenodd"
                d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>

            <svg
              onClick={() => {
                setEditIndex(index)
                setNewNote(note.text)
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="note__icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
              />
            </svg>

            <span className="note__date">{note.createdAt}</span>
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <div className="note-create">
        {isCreating && (
          <>
            <textarea
              value={newNote}
              className="note-create__textarea"
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <div className="note-create__buttons">
              <button className="note-create__button button" onClick={handleSave}>
                Сохранить
              </button>
              <button className="note-create__button button" onClick={handleCancel}>
                Отмена
              </button>

            </div>
          </>
        )}
      </div>
      <h1 className="title">Ваши заметки</h1>
      <ul className="note">{renderNotes(notes)}</ul>

      {activeNote && (
  <div
    className="modal"
    onClick={() => setActiveNote(null)} 
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} 
    >
      <p className="modal__text">{activeNote.text}</p>
      <button className="modal__button button" onClick={() => setActiveNote(null)}>
        Закрыть
      </button>
    </div>
  </div>
)}


      <div className="buttons">
        <div className="buttons__wrap">
        <button className="buttons__main button" onClick={handleLogout}>
          Выйти
        </button>
        <button onClick={() => setIsCreating(true)} className="buttons__main button">
          Создать заметку
        </button>

        </div>
      </div>
    </>
  )
}

export default HomePage


