/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />
/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../helpers/messageSender.ts"/>
var _this = this;
var fakeResponse = (function () {
    function fakeResponse() {
        var _this = this;
        this.messageSent = "none";
        this.send = function (msg) {
            _this.messageSent = msg;
        };
    }
    return fakeResponse;
})();
var chai = require('chai');
var expect = chai.expect;
var s = require('../helpers/MessageSender');
describe("The Message Sender", function () {
    beforeEach(function () {
        _this.messageSender = new s.MessageSender();
        _this.response = new fakeResponse();
    });
    it("should respond with a message", function () {
        _this.messageSender.send(_this.response, "test");
        expect(_this.response.messageSent).to.equal("test");
    });
    it("should not allow empty input", function () {
        _this.messageSender.send(_this.response);
        expect(_this.response.messageSent).to.equal("none");
    });
});