'use strict'

import React from 'react'
/// https://stackoverflow.com/questions/46482433/reactjs-createclass-is-not-a-function
import createReactClass from 'create-react-class'

var Title = createReactClass({
    render: function(){
        return React.createElement('h1', null, 'Título')
    }
})

export default Title