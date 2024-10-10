describe('ebay product search',()=>{

    it('should have the right title', async()=>{
        await browser.url('https://ebay.com/');
        await expect(browser).toHaveTitle(
            'Electronics, Cars, Fashion, Collectibles & More | eBay'
        )
    })

    it('should search product and verify product value', async()=>{
       const searchInput = await $('#gh-ac') // with # meaning is id for web element
       const searchButton = await $('#gh-btn')

       await searchInput.addValue('Laptop')
       await searchButton.click();

       //Assertion
       await expect(searchInput).toHaveValue('Laptop')
       
       // with contains
       await expect(myInput).toHaveValue(expect.stringContaining('Laptop'), { ignoreCase: true })
    })

    it(' should redirect to a new page and verfiy the title', async()=>{
       await expect(browser).toHaveTitle('Laptop | eBay')
    })

    it('should update the search category', async()=>{
        const category = await $('#gh-cat option:nth-child(1)')

        await expect(category).toHaveText('PC Laptops & Netbooks')
    })
})