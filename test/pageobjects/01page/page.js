export default class Page {

   async open(path){
       await browser.url(path)
    }

    async waitUntilElementFound(element){
        await browser.waitUntil(
            function () {
                return element.isDisplayed()
            },
            {timeout:30000}
        )
    }


}

