import { expect } from "chai";
import "mocha";

import HelloWorld from "../src/index";
import "../etc/rand";
import { Game } from "../etc/node_modules/regal";

// TODO: Write new tests

describe("Project", function() {
    it("Prints Hello, World!", function() {
        expect(HelloWorld("World")).to.equal("Hello, World!");
    });

    // it("etc", () => {
    //     Game.init({ name: "test", author: "joe" });
    //     const r = Game.postStartCommand();
    // });
});
