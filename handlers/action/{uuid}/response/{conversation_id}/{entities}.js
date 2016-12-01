"use strict";

let mocker = requireLib("mocker");
let mocker_express = (props) =>
    ((req, res) =>
        mocker(props)
            .then((a) => {
                switch (a.responses.messages[0] && a.responses.messages[0].type) {
                  case "TextMessage":
                    a.responses.messages[0].content = "Hello World! :)";
                    break;
                  case "PictureMessage":
                    a.responses.messages[0].content = "http://manner.ai/logo.png";
                    break;
                }
                return a;
            })
            .then((data) => res.status(props.response).send(data && data.responses))
            .catch((err) => res.status(500).send(err))
    );


/**
 * Operations on /pets
 */
module.exports = {
    get: mocker_express({
        path: "/action/{uuid}/response/{conversation_id}/{entities}",
        operation: "get",
        response: 200
    })
};
