

export const waitForTextChange = (el, text, timeout) => {
    browser.waitUntil(
        function(){
            return el.getText() === text
        },
        {timeout}
    )
}