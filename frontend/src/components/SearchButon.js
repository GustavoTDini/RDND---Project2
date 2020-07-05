import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch, clearSearch } from '../reduxStore/actions/search'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function SearchButon() {

  const dispatch = useDispatch()
  const search = useSelector(state => state.search)

  const [searchString, setSearchString] = useState(search)

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
