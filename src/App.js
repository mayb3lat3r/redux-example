import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncAction/customers'
import 'antd/dist/antd.css'
import './App.scss'


const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  const getAllCash = () => {
    dispatch({ type: 'GET_ALL_CASH' })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="app">
      <div className="cash">Баланс: {cash}</div>
      <div className="buttons">
        <span><Button type="primary" onClick={() => addCash(Number(prompt()))}>Пополнить</Button></span>
        <span><Button onClick={() => getCash(Number(prompt()))}>Снять</Button></span>
        <span><Button onClick={getAllCash}>Снять все</Button></span>
      </div>

      <div className="buttons">
        <span><Button type="primary" onClick={() => addCustomer(prompt())}>Добавить клиента</Button></span>
        <span><Button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</Button></span>
      </div>

      {customers.length > 0 ?
        <div>
          <span>Наши клиенты: </span>
          {customers.map(customer => <div
            key={customer.id}
            style={{ marginRight: '0.5rem', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => removeCustomer(customer)}
          >{customer.name}</div>)}
        </div>
        :
        <div>
          <span>Клиенты отсутствуют</span>
        </div>}
    </div>
  )
}

export default App
