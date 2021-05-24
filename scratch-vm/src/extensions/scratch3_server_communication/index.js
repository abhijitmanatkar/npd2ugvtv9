const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const axios = require("axios");

class Scratch3ServerCommunication {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: "servercomm",
            name: "Server Communication",
            blocks: [
                {
                    opcode: "checkString",
                    blockType: BlockType.REPORTER,
                    text: "Check string [TEXT]",
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello",
                        },
                    },
                },
            ],
            menus: {},
        };
    }

    checkString(args) {
        const text = Cast.toString(args.TEXT);
        let url = "http://localhost:5000/stringcheck";
        let data = { str: text };
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        return axios
            .post(url, data, config)
            .then((response) => {
                //console.log(response);
                return response.data.result;
            })
            .catch(() => {
                return false;
            });
    }
}

module.exports = Scratch3ServerCommunication;
