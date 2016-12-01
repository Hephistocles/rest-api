"use strict";
let mocker = requireLib("mocker");
let mocker_express = (props) =>
    ((req, res) =>
        mocker(props)
            .then((data) => res.status(props.response).send(data && data.responses))
            .catch((err) => res.status(500).send(err))
    );

module.exports = {
    post: mocker_express({
        path: "/context/user/{chatuser_id}/{context_name}/{context_value}",
        operation: "post",
        response: 200
    })
};
