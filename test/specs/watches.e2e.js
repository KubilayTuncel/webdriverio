import {expect as chaiExpect} from 'chai'

describe('ebay search watches page',()=>{

    it('should have the right title', async()=>{
        await browser.url('https://ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promobanner = await $('section.b-promobanner')
        await expect(promobanner).toBeDisplayed()
    })

    it('should show banner titel', async() => {
        const infoTitle = await $('.b-promobanner_info-title') // using class name uniqe and start with point
        await expect(infoTitle).toHaveTextContaining('Extra 20% off on select watches')
    });

    it('should contain link on banner button and verify its clcikable', async () => {
        const bannerBtn = await $('.b-promobanner_info-btn')
        await expect(bannerBtn).toHaveLinkContaining('/fashion/')
        await expect(bannerBtn).toBeClickable();
    });

    it('should click on the shop button and verify new url', async() => {
        const bannerBtn = await $('.b-promobanner_info-btn')
        await bannerBtn.click()
        const url = await browser.getUrl();
        chaiExpect(url).to.include('/fashion/')
        await expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watches-sfc-4th-of-july-062920')
    });
})