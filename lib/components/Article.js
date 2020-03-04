import React from "react";
import PropTypes from "prop-types";
import storeProvider from "./storeProvider";

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

const Article = ({ article, author }) => {    
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

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

function extraProps(store, originalProps) {
    return {
        author: store.lookupAuthor(originalProps.article.authorId)
    };
}

export default storeProvider(extraProps)(Article);