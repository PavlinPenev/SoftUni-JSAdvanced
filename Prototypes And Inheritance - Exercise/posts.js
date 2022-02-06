function posts() {

    class Post {

        constructor(title, content) {

            this.title = title;
            this.content = content;

        }

        toString() {

            return `Post: ${this.title}\nContent: ${this.content}`;

        }

    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {

            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];

        }

        addComment(comment) {

            this.comments.push(comment);

        }

        toString() {

            let returnString = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;

            let comments = this.comments.map(com => ` * ${com}`).join('\n');
        
            return this.comments.length > 0 ? returnString + `\nComments:\n${comments}` : returnString;
            
        }

    }

    class BlogPost extends Post{

        constructor(title, content, views) {

            super(title, content);
            this.views = Number(views);

        }

        view() {

            this.views++;

            return this;

        }

        toString() {

            return super.toString() + `\nViews: ${this.views}`;

        }

    }

    return {

        Post, 
        SocialMediaPost,
        BlogPost

    }

}
