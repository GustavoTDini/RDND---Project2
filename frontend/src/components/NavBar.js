import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti"

export function NavBar() {

  const sortMethods = [{name:'Time', option:'time'}, {name:'Score', option:'score'}, {name:'Author´s Name', option:'authorName'} ]
  const [sort, setSort] = useState(sortMethods[0].name)
  const [category, setCategory] = useState(null)
  const [ascending, setAscending] = useState(true)

  // useEffect(() => {
    
  // })
  
  const categories = useSelector(state => state.categories)
  console.log(typeof(categories))
  console.log(categories)

  return (
    <Navbar bg="primary" variant="dark" style={{ marginBottom: 30 }}>
      <Navbar.Brand>Readable</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/newPost">New</Nav.Link>
      </Nav>
      <DropdownButton style={{ marginRight: 20 }} id="dropdown-basic-button" title="Categories">
        {Array.isArray(categories) && categories.map((category) => (
          <Dropdown.Item 
          key={category.path}
          onClick={() => setCategory(category.path)}
          >{category.name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton style={{ marginRight: 20 }} id="dropdown-filter" title="Filter">
        { sortMethods.map((sort) => (
          <Dropdown.Item 
          key={sort.option}
          onClick={() => setSort(sort.option)}
          >{sort.name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <Button 
        onClick={() => setAscending(!ascending)}
        style={{ marginRight: 20 }}>
          {ascending ?
          <TiArrowUpOutline/>:
          <TiArrowDownOutline/>}
        </Button>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}