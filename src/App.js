import React from 'react'
import style from './css/Todo.module.css'
import { List } from './components/List'
import { Form } from './components/Form'


function App() {

  let [listCount, setListCount] = React.useState([])
  const [listText, setListText] = React.useState(null)
  let [listId, setListId] = React.useState(-1)

  const onListsDel = () => {
    setListCount([])
    setListId(-1)
    setListText(null)
  }

  const onListSubmit = (e) => {
    e.preventDefault()
    if (e.target[0].value) {
      setListText(e.target[0].value)
      setListId(listId += 1)
      setListCount(listCount = [...listCount, { id: listId }])
      e.target.reset()
    }
  }

  return (
    <ul className={style.list__inner}>
      <div>
      <Form addStyle={style.addList__btn} delStyle={style.delList__btn} style={style.subList__mainForm}
          onDelClick={onListsDel} deleteCondition={listText}
          delName={'DELETE ALL'} addName={'ADD LIST'} onSubmit={onListSubmit} />
        {
          listCount.map((item, index) => {
            return <List className={style.list__box} setListCount={setListCount} listCount={listCount} index={index} itemId={item.id} text={listText} key={item.id} />
          })
        }
  
      </div>
    </ul>
  )
}

export default App
