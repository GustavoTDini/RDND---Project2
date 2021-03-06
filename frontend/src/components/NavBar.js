import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSortingType, setSortingDirection } from '../reduxStore/actions/sorting'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti"
import SearchButon from './SearchButon'
import { SORT_METHODS } from '../Utilities/constants'
import { capitalizeString } from '../Utilities/helperFunctions'

export default function NavBar(props) {

  // set the initial sorting methods
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSortingType(SORT_METHODS[0].option))
    dispatch(setSortingDirection())
  }, [dispatch])

  const categories = useSelector(state => state.categories)
  const descending = useSelector(state => state.sorting.direction)

  return (
    <Navbar bg="primary" variant="dark" style={{ marginBottom: 30 }}>
      <Navbar.Brand>Readable</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/newPost">New</Nav.Link>
        <DropdownButton style={{ marginRight: 20 }} id="dropdown-basic-button" title="Categories">
          {Array.isArray(categories) && categories.map((category) => (
            <LinkContainer
              to={`/${category.path}`}
              key={category.path}>
              <Dropdown.Item>
                {capitalizeString(category.name)}
              </Dropdown.Item>
            </LinkContainer>
          ))}
        </DropdownButton>
      </Nav>
      {props.sortable ?
        <div style={{ display: 'flex' }}>
          <DropdownButton style={{ marginRight: 20 }} id="dropdown-filter" title="Sort By">
            {SORT_METHODS.map((sort) => (
              <Dropdown.Item
                key={sort.option}
                onClick={() => dispatch(setSortingType(sort.option))}
              >{sort.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <Button
            onClick={() => dispatch(setSortingDirection())}
            style={{ marginRight: 20 }}>
            {'Direction  '}
            {descending ?
              <TiArrowDownOutline /> :
              <TiArrowUpOutline />}
          </Button>
          <SearchButon/>
        </div> : null}
    </Navbar >
  )
}