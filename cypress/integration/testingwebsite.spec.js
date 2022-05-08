describe('Get HomePage button)', () => {
    before(() => {
        cy.visit('https://dieta.hpba.pl/');
    });
    //  Checking clickability of button "Kup dietę i treningi" and assertion "Dieta + trening"
    it('Click  Kup dietę i treningi', () => {
        cy.get('.d-none').contains('dietę i treningi').click();  
        cy.xpath('/html/body/div/div[1]/div/main/section[19]/section/div/section[1]/div/div[1]/h3').should('have.text','Dieta + trening');
    });
    //  Checking clickability of button "Zacznij teraz" and assertion "Plan diety i treningów Max100"
    it('Click  Zacznij teraz', () => { 
        cy.xpath('/html/body/div/div[1]/div/main/section[1]/div/div/div/button').contains('Zacznij teraz').click();
        cy.xpath('/html/body/div[1]/div[1]/div/main/section[19]/section/div/section[1]/div/div[2]/div/div[3]/div/div[1]/span/strong').should('have.text','Plan diety i treningów Max100');
    });
    // 
    it('Click on Menu', () => { 
        cy.get('.dropdown-toggler').contains('Menu').click();
        cy.xpath('/html/body/div/div[1]/div/section/nav/div/div[2]/div/div/div[2]/a').contains('Wiedza').click();
        cy.xpath('/html/body/div/div[2]/main/header/h1').should('have.text','Wiedza'); 
        cy.get('.logo').click();
    });
    // Checking clickability of button "Kup" and assertion "Plan Diety Starter30" 
    it('Click Kup', () => { 
        cy.xpath('/html/body/div[1]/div[1]/div/main/section[19]/section/div/section[3]/div/div[2]/div/div[1]/div/div[3]/a').contains('Kup').click();
        cy.get('.product-name').should('have.text','Plan Diety Starter30');
    });

});  