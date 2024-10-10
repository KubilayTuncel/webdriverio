import Page from "./page"

class WatchesPage extends Page{

    get watchesCategoryList() {
        return $$('section[id="s0-17-12-0-1[0]-0-0"] ul li') //$$ means findelements
    }

    get watchesNameList() {
        return $$('b-visualnav__title')
    }

    

    open(){
        super.open(
            'https://ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'
        )
    }

    async getWatchesCategoryListText(){
        const watchesList = []
        await this.watchesCategoryList.map((el)=>watchesList.push(el.getText()))
        return watchesList
    }

    async getWatchesNameListText() {
        const watchesList = []
        await this.watchesNameList.map((el)=>watchesList.push(el.getText()))
        return watchesList
    }


}

export default new WatchesPage()