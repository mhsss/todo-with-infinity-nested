import React, { useState, useEffect, memo } from 'react'
import style from '../css/Todo.module.css'
import { Form } from './Form'
import { SubList } from './SubList'


export const List = memo((props) => {

  const [listText, setListText] = useState(null)
  const [SubListText, setSubListText] = useState(null)
  let [listCount, setListCount] = useState([])
  let [listId, setListId] = useState(-1)

  useEffect(() => {
    setListText(props.text)
  }, [])

  const onListAdd = (e) => {
    e.preventDefault()
    if (e.target[0].value) {
      setSubListText(e.target[0].value)
      setListId(listId += 1)
      setListCount(listCount = [...listCount, { id: listId }])
      e.target.reset()
    }
  }

  const onListsDel = () => {
    setListText(null)
  }

  const onUpBtn = () => {
    let arr = props.listCount
    arr.splice(props.index - 1, 0, arr.splice(props.index, 1)[0])
    props.setListCount([...arr])
  }

  const onDownBtn = () => {
    let arr = props.listCount
    arr.splice(props.index + 1, 0, arr.splice(props.index, 1)[0])
    props.setListCount([...arr])
  }

  return (
    <>
      {
        listText
          ? <li className={style.subList__box}>

            <Form onDelClick={onListsDel} addStyle={style.addList__btn} delStyle={style.delList__btn} style={style.subList__form}
              onDelClick={onListsDel} deleteCondition={listText} addName={'SUBLIST'}
              delName={'DELETE'} onSubmit={onListAdd} />

            {props.index !== 0
              ? <button onClick={onUpBtn} className={style.upBtn}>UP</button>
              : null}

            {props.index !== props.listCount.length - 1
              ? <button onClick={onDownBtn} className={style.downBtn}>DOWN</button>
              : null}

            <p className={style.subList__box_text}>
              {listText}
            </p>

            {
              listCount.map((item, index) => <SubList className={style.subList__box} itemId={item.id}
                text={SubListText} key={item.id} index={index} listCount={listCount} setListCount={setListCount} />)
            }

          </li>
          : null
      }
    </>
  )
})