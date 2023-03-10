import React from 'react';
import { Fragment, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { SearchBarSVG } from 'icons';
import styled from 'styled-components';
const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },

]

export default function SearchBar() {
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    const searchAction = React.useCallback((e) => {
        setSelected(e)
    }, [selected])
    

    return (
        <SearchbarWrapper>
     
        </SearchbarWrapper>
    )
}

const SearchbarWrapper = styled.div`
width:100%;
margin-top:8px !important;
box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
padding:4px;
margin-top:5px;
font-weight:600;
background:#F6FBFE ;
  border-radius:20px;
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
`;