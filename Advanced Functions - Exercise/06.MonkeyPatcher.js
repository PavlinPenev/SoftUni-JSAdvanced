function solution(action) {

    switch(action) {

        case 'upvote':
            upvote.call(this);
            break;
        case 'downvote':
            downvote.call(this);
            break;
        case 'score':
            const report = score.call(this);
            return report;

    }

    function upvote() {
        
        this.upvotes++;

    }

    function downvote() {
        
        this.downvotes++;

    }

    function score() {

        const totalVotes = this.upvotes + this.downvotes;
        const tallyScoreVotes = this.upvotes - this.downvotes;
        const obfuscation = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        const upvotesObfuscated = totalVotes > 50 ? this.upvotes + obfuscation : this.upvotes;
        const downvotesObfuscated = totalVotes > 50 ? this.downvotes + obfuscation : this.downvotes;
        const report = [upvotesObfuscated, downvotesObfuscated, tallyScoreVotes , rating.call(this)]

        function rating() {

            let rating = 'new';

            if (totalVotes < 10) {
                
                rating = 'new';
    
            } else if (this.upvotes > totalVotes * 0.66) {
                
                rating = 'hot';
    
            } else if (tallyScoreVotes >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
                
                rating = 'controversial';
    
            } else if (tallyScoreVotes < 0) {
    
                rating = 'unpopular';
    
            }
    
            return rating;
        };

        return report;

    }
    
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let index = 0; index < 50; index++) {
    solution.call(post, 'downvote');
    
}         // (executed 50 times)
score = solution.call(post, 'score');   
console.log(score);
