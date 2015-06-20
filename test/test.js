/**
 * Created by mario (https://github.com/hyprstack) on 07/06/15.
 */

var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var server = require("../");

describe("Landing page", function () {
    it("returns a 200 statusCode and an html file", function (done) {
        var options = {
            method: "GET",
            url: "/"
        };

        server.inject(options, function(response) {
            var result = response.result;

            expect(response.statusCode).to.equal(200);
            expect(result).contains("<!DOCTYPE html>");
            expect(result).contains("AVSR");
            done();
        });
    });
});