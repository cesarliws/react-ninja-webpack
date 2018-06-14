'use strict'

import React from 'react'
/// https://stackoverflow.com/questions/46482433/reactjs-createclass-is-not-a-function
import createReactClass from 'create-react-class'

var Title = createReactClass({
    render: function(){
        return <h1>Título</h1>
    }
})

export default Title