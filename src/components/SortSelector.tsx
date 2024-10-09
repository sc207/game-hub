import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
         Order by Relevence
          </MenuButton>
          <MenuList>
              <MenuItem>Relevent</MenuItem>
              <MenuItem>Date added</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>release date</MenuItem>
              <MenuItem>Popularity</MenuItem>
              <MenuItem>Average rating</MenuItem>
          </MenuList>
        </Menu>
        )
}

export default SortSelector