'use strict';
let mocker = require('../mocker');
let mocker_express = (props) =>
    ((req, res, next) => {
        mocker(props)
            .then((data) => res.status(props.response).send(data && data.responses))
            .catch((err) => res.status(500).send(err))
    })

/**
 * Operations on /pets
 */
module.exports = {

    get: mocker_express({
        path: '/status',
        operation: 'get',
        response: 200
    })
}
