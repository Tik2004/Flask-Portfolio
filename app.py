from datetime import datetime  # datetime for posts
from flask import Flask, render_template, request, redirect  # stuff from flask
from flask_sqlalchemy import SQLAlchemy  # database

app = Flask(__name__)  # set up our server with name of our app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'  # configure database
db = SQLAlchemy(app)  # enable our database for our app


class BlogPost(db.Model):  # model in our database
    id = db.Column(db.Integer, primary_key=True)  # id of post
    title = db.Column(db.String(100), nullable=False)  # title of post
    content = db.Column(db.Text, nullable=False)  # content of post
    author = db.Column(db.String(20), nullable=False, default='Anonym')  # author of post, anonym by default
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.now())   # date of post
    is_edited = db.Column(db.Boolean, default=False)  # check if the post was edited
    time_edited = db.Column(db.DateTime, default=None)  # if post was not edited, change time equals to post time

    def __repr__(self):
        return 'Post number  ' + str(self.id)  # comes in server every time we create new Post object


all_posts = [
    {
        'title': 'Post 1',
        'content': 'Why nobody loves me? :(',
        'author': 'Tigran'
    },
    {
        'title': 'Post 2',
        'content': 'I love you bro ;)'
    }
]  # hard coded not real db, which I left only for example


@app.route('/')  # about page
def index():
    return render_template('index.html')  # load about page

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/posts', methods=['GET', 'POST'])  # posts page
def posts():
    if request.method == 'POST':  # creating new post, only if request method is post
        post_title = request.form['title']
        post_author = request.form['author']
        post_content = request.form['content']
        new_post = BlogPost(title=post_title, content=post_content, author=post_author, date_posted=datetime.now())
        db.session.add(new_post)  # adding new post to database for current session
        db.session.commit()  # commit session changes for it to stay on database
        return redirect('/posts')  # redirect to posts page to see all posts
    else:
        all_posts = BlogPost.query.order_by(BlogPost.date_posted).all()[::-1]  # define all pages, with newest first
        return render_template('posts.html', posts=all_posts)  # load posts.html, and give it our all posts to load


@app.route('/posts/delete/<int:id>')  # post deleting page
def delete(id):
    post = BlogPost.query.get_or_404(id)  # getting our post, or if id is invalid, get 404
    db.session.delete(post)  # delete post from db in our session
    db.session.commit()  # commit session changes
    return redirect('/posts')  # redirect then to posts page


@app.route('/posts/edit/<int:id>', methods=['GET', 'POST'])  # post edit page
def edit(id):
    post = BlogPost.query.get_or_404(id)  # getting our post, or if id is invalid, get 404
    if request.method == 'POST':  # checking request method
        post.title = request.form['title']  # change title of post to title that came from page
        post.author = request.form['author']  # change author of post to author that came from page
        post.content = request.form['content']  # change content of post to content that came from page
        post.is_edited = True  # we mark that the post was changed, to make it easier to display
        post.time_edited = datetime.now()  # we set time at it was changed
        db.session.commit()  # commit session changes
        return redirect('/posts')  # redirect to posts page
    else:
        return render_template('edit.html', post=post)  # return post after changes

if __name__ == "__main__":  # run our file in debug mode only if we are calling it there
    app.run(debug=True)
