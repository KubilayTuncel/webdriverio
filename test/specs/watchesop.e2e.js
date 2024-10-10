
import WatchesPage from "../pageobjects/01page/WatchesPage";


describe('', () => {
    
    it('', async() => {
        WatchesPage.open();
        const list = await WatchesPage.getWatchesCategoryListText()
        const watchesName = await WatchesPage.getWatchesNameListText()
        console.log(list);
        console.log(watchesName);
        
        
    });

});