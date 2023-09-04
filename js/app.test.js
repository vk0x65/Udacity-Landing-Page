const rewire = require("rewire")
const app = rewire("./app")
const runLandPage = app.__get__("runLandPage")
const jsdom = require("jsdom")
// @ponicode
describe("runLandPage", () => {
    test("0", () => {
        const dom = new jsdom.JSDOM()
        document = dom.window.document
        document.body.innerHTML = undefined
        app.__set__('document', document)
        const $ = require("jquery")(dom.window)
        app.__set__('$', $)
        let result = runLandPage()
        expect(result).toMatchSnapshot()
        expect(app.__get__('document')).toMatchSnapshot()
    })
})
