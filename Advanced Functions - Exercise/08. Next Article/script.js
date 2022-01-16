function getArticleGenerator(articles) {

    let counterOfPage = -1;

    function showNext() {

        if (articles.length > 0) {

            const currentArticle = document.createElement('article');
            currentArticle.textContent = articles.shift();
            document.getElementById('content').appendChild(currentArticle);
            
        }
        
    }

    return showNext;

}
