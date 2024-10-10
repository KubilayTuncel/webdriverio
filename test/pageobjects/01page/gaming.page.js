import Page from "./page"

class GamingPage extends Page {
    get elektronikLink() {
        return $$('.vl-flyout-nav__js-tab a[href*="Elektronik"]')[0]
    }

    get gamingLink() {
        return $('.vl-flyout-nav__sub-cats a[href*="Gaming"]')
    }

    get playStationLink() {
        return $('//div[text()="PlayStation"]')
    }

    get itemsForPlayStation() {
        return $$('.b-visualnav__title')
    }

    open(){
        super.open(
            'https://ebay.de/'
        )
    }

    async getItemsForPSname(){
        const itemsName = []
        await this.itemsForPlayStation.map((el)=>itemsName.push(el.getText()))
        /*
        for (let i = 0; i < this.itemsForPlayStation.length; i++) {
            const element = await this.itemsForPlayStation[i];
            const getTextList = await element.getText();
            itemsName.push(getTextList);
          }
        */

        return itemsName
    }


}

export default new GamingPage()