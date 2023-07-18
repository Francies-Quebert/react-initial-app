import React, { useEffect } from 'react'


function Header(props: PropsHeader) {


    const getData = <Type extends TEvent['type']>(
        ...args: Extract<TEvent, { type: Type }> extends { payload: infer Tpayload }
            ? [type: Type, payload: Tpayload] :
            [type: Type]

    ): getDataReturn => {
        let data = 1
        return { data }
    }


    useEffect(() => {

        let abc: myObj = {}
        if (!abc.foo) abc.foo = []
        abc.foo.push('1')
        getData('login', { userId: 'asx' })
        getData('signout')
    }, [])

    return (
        <div>{props.IconSize}</div>
    )
}

export default Header