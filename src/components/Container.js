import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'

const quotesURL = 'http://localhost:3333/api/quotes'

const initialFormState = {
  id: '',
  text: '',
  author: '',
}

export default function Container() {
  ////////////// SLICES OF STATE //////////////
  ////////////// SLICES OF STATE //////////////
  ////////////// SLICES OF STATE //////////////
  const [quotes, setQuotes] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)

  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  const getQuotes = () => {

    axios.get(quotesURL)
      .then(res => {
        setQuotes(quotes => quotes.concat(res.data))
      })
      .catch(err => {
        handleError(err)
      })


  }

  const postQuote = ({ text, author }) => {

    axios.post(quotesURL, {
      text: text, author: author
    })
      .then(res => {
        setQuotes(quotes => quotes.concat(res.data))
      })
      .catch(err => {
        handleError(err)
      })

    resetForm()
  }

  const putQuote = ({ id, text, author }) => {


    axios.put(quotesURL + '/' + id, {
      text: text, author: author
    })
      .then(res => {
        let updatedQuotes = quotes.map(q => {
          if (q.id === id) {
            q.text = res.data.text
            q.author = res.data.author
          }

          return q
        })

        setQuotes(updatedQuotes)
      })
      .catch(err => {
        handleError(err)
      })

    resetForm()
  }

  const deleteQuote = (id) => {

    axios.delete(quotesURL + '/' + id)
      .then(res => {
        setQuotes(quotes => quotes.filter(q => q.id !== res.data))
      })
      .catch(err => {
        handleError(err)
      })

    resetForm()
  }

  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  const editQuote = (id) => {

    const quote = quotes.find(q => q.id == id)

    setFormValues({
      id: quote.id,
      text: quote.text,
      author: quote.author
    })
  }

  const handleError = err => { debugger } // eslint-disable-line

  const resetForm = () => setFormValues(initialFormState)

  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  useEffect(() => getQuotes(), [])

  return (
    <div className='container'>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map((q, i) => (
            <li key={q.id}>
              <div>{q.text} ({q.author})</div>
              <button onClick={() => editQuote(q.id)}>Edit</button>
              <button onClick={() => deleteQuote(q.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <Form
        values={formValues}
        setValues={setFormValues}
        submitHandlers={{ postQuote, putQuote }}
        reset={resetForm}
      />
    </div>

  )

}
import React, { useState, useEffect } from 'react'
import Form from './Form'
import axios from 'axios'

const quotesURL = 'http://localhost:3333/api/quotes'

const initialFormState = {
  id: '',
  text: '',
  author: '',
}

export default function Container() {
  ////////////// SLICES OF STATE //////////////
  ////////////// SLICES OF STATE //////////////
  ////////////// SLICES OF STATE //////////////
  const [quotes, setQuotes] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)

  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  ////////////// NETWORK HELPERS //////////////
  const getQuotes = () => {

    axios.get(quotesURL)
      .then(res => {
        setQuotes(quotes => quotes.concat(res.data))
      })
      .catch(err => {
        handleError(err)
      })


  }

  const postQuote = ({ text, author }) => {

    axios.post(quotesURL, {
      text: text, author: author
    })
      .then(res => {
        setQuotes(quotes => quotes.concat(res.data))
      })
      .catch(err => {
        handleError(err)
      })

    resetForm()
  }

  const putQuote = ({ id, text, author }) => {


    axios.put(quotesURL + '/' + id, {
      text: text, author: author
    })
      .then(res => {
        let updatedQuotes = quotes.map(q => {
          if (q.id === id) {
            q.text = res.data.text
            q.author = res.data.author
          }

          return q
        })

        setQuotes(updatedQuotes)
      })
      .catch(err => {
        handleError(err)
      })

    resetForm()
  }

  const deleteQuote = (id) => {

    axios.delete(quotesURL + '/' + id)
      .then(res => {
        setQuotes(quotes => quotes.filter(q => q.id !== res.data))
      })
      .catch(err => {
        handleError(err)
      })

    resetForm()
  }

  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  ////////////// OTHER HELPERS //////////////
  const editQuote = (id) => {

    const quote = quotes.find(q => q.id == id)

    setFormValues({
      id: quote.id,
      text: quote.text,
      author: quote.author
    })
  }

  const handleError = err => { debugger } // eslint-disable-line

  const resetForm = () => setFormValues(initialFormState)

  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  ////////////// SIDE EFFECTS //////////////
  useEffect(() => getQuotes(), [])

  return (
    <div className='container'>
      <h3>Quotes</h3>
      <ul>
        {
          quotes.map((q, i) => (
            <li key={q.id}>
              <div>{q.text} ({q.author})</div>
              <button onClick={() => editQuote(q.id)}>Edit</button>
              <button onClick={() => deleteQuote(q.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <Form
        values={formValues}
        setValues={setFormValues}
        submitHandlers={{ postQuote, putQuote }}
        reset={resetForm}
      />
    </div>

  )

}
