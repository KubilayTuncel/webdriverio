import {expect as chaiExpert} from 'chai'
import 'chai/register-should'

describe('example for chai', () => {
    
    it('test new for should', async()=>{
        await browser.url('https://ebay.com/');
        const searchInput = await $('#gh-ac') // with # meaning is id for web element
        const searchButton = await $('#gh-btn')
        const tag = await searchButton.getTagName()

        await searchInput.addValue('Laptop')
        await searchButton.click();
        chaiExpert(tag).to.equal('input')
        await tag.should.be.equal('input')
    })

});