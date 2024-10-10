import GamingPage from "../pageobjects/01page/gaming.page";


describe('gaming state', () => {
    
    it('get playstation items name', async() => {
        
        GamingPage.open();
        await GamingPage.elektronikLink.moveTo()
        await GamingPage.gamingLink.click()
        await GamingPage.playStationLink.click()

        const items = await GamingPage.getItemsForPSname()
        await GamingPage.itemsForPlayStation[0].waitForDisplayed({timeout:2000})
        //browser.pause(5000)
        console.log(items);
        

    });
});