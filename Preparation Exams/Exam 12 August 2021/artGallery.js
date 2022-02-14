class ArtGallery {

    constructor(creator) {

        this.creator = creator;
        this.possibleArticles = {

            picture: 200,
            photo: 50,
            item: 250

        };
        this.listOfArticles = [];
        this.guests = [];

    }

    addArticle(articleModel, articleName, quantity) {

        if (!(articleModel.toLowerCase() in this.possibleArticles)) {
            
            throw new Error('This article model is not included in this gallery!');

        }

        if (!this.listOfArticles.some(art => art.articleName === articleName)) {
            
            this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity: 0});

        }

        const article = this.listOfArticles.find(art => art.articleName === articleName);
        article.quantity += Number(quantity);

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }

    inviteGuest(guestName, personality) {

        if (this.guests.some(g => g.guestName === guestName)) {
            
            throw new Error(`${guestName} has already been invited.`);

        }

        switch (personality) {
            case 'Vip':
                this.guests.push({guestName, points: 500, purchaseArticle: 0});
                break;
            case 'Middle':
                this.guests.push({guestName, points: 250, purchaseArticle: 0});
                break;
            default:
                this.guests.push({guestName, points: 50, purchaseArticle: 0});
                break;
        }

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {

        if (!this.listOfArticles.some(art => art.articleName === articleName)
            || !(articleModel in this.possibleArticles)) {
            
                throw new Error('This article is not found.');

        }

        const article = this.listOfArticles.find(art => art.articleName === articleName);

        if (article.articleModel !== articleModel) {
            
            throw new Error('This article is not found.');

        }
        if (article.quantity === 0) {
            
            return `The ${articleName} is not available.`;

        }

        if (!this.guests.some(g => g.guestName === guestName)) {

            return `This guest is not invited.`
            
        }

        const guest = this.guests.find(g => g.guestName === guestName);

        if (guest.points < this.possibleArticles[articleModel]) {
            
            return `You need to more points to purchase the article.`;

        }

        guest.points -= Number(this.possibleArticles[articleModel]);
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria) {

        let returnStringType = '';
        let returnArrayJoinString = '';

        switch (criteria) {
            case 'article':
                returnStringType = 'Articles information:';
                returnArrayJoinString = this.listOfArticles.length > 0 
                ? `\n${this.listOfArticles
                    .map(art => `${art.articleModel} - ${art.articleName} - ${art.quantity}`)
                    .join('\n')}` 
                    : '';
                break;        
            case 'guest':
                returnStringType = 'Guests information:';
                returnArrayJoinString = this.guests.length > 0 
                ? `\n${this.guests
                    .map(g => `${g.guestName} - ${g.purchaseArticle}`)
                    .join('\n')}` 
                    : '';
                break;
        }

        return returnStringType + returnArrayJoinString;
    }
}