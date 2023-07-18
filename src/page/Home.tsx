import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function Home() {
    let { id } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(id, searchParams.get('cde'), 'searchParams')

    console.log(id)
    return (
        <div>
            <div>{id}</div>
            <div>{searchParams.get('cde')}</div>
            <div>{searchParams.get('abc')}</div>
        </div>
    )
}

export default Home