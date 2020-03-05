import React, { memo } from "react";

import Article from "./Article";

const ArticleList = ({ articles }) => {
    return (
        <div>
            {Object.values(articles).map(article =>
                <Article key={article.id} article={article} />)}
        </div>
    );
};

export default memo(ArticleList);