import React, { useState } from 'react'
import { setSearch, clearSearch } from '../reduxStore/actions/search'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SearchButon() {

  const dispatch = useDispatch()

  const [searchString, setSearchString] = useState('')

  const search = useSelector(state => state.search)

  const handleSearchChange = (e) => setSearchString(
    e.currentTarget.value
  )


  const handleSetSearch = () => {
    dispatch(setSearch(searchString))
  }

  const handleClearSearch = () => {
    dispatch(clearSearch())
    setSearchString('')
  }
  
  return (
    <div>
      <Form inline>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value = {searchString}
          onChange={(e) => handleSearchChange(e)}/>
          {search === ''?
                  <Button
                  variant="outline-light"
                  onClick={handleSetSearch}
                  disabled= {searchString === ''? true: false}
                >Search</Button>:
                <Button
                variant="outline-light"
                onClick={handleClearSearch}
              >  Clear  </Button>
        
        }

      </Form>
    </div>
  )
}
