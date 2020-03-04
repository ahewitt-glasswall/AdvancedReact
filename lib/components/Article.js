import React from "react";

const styles = {
    article: {
        marginTop: "2rem",
        borderBottom: "2px solid",
        maxWidth: "50%",
        marginLeft: "auto",
        marginRight: "auto"
    },

    title: {
        fontWeight: "bold",
        fontSize: "25px",
        textAlign: "center"
    },

    date: {
        color: "grey",
        textAlign: "center"
    },

    author: {
        textAlign: "center"
    },

    body: {
        margin: "20px 0"
    }
};

const displayDate = (dateString) => new Date(dateString).toDateString();

const Article = ({ article, actions }) => {

    const author = actions.lookupAuthor(article.authorId);

    return (
        <div style={styles.article}>
            <div style={styles.title}>
                {article.title}
            </div>

            <div style={styles.date}>
                {displayDate(article.date)}
            </div>

            <div style={styles.author}>
                <a href={author.website}>{author.firstName} {author.lastName}</a>
            </div>

            <div style={styles.body}>{article.body}</div>
        </div>
    );
};

export default Article;