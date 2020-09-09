import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sem" 
                timeAgo ="Today at 4:45PM" 
                content="Nice post body!" 
                avatar={faker.image.avatar()} />
            <CommentDetail author="Alex" 
                timeAgo ="Today at 2:00PM" 
                content="You are the best dude!"
                avatar={faker.image.avatar()} />
            <CommentDetail author="Jane" 
                timeAgo ="Yesterday at 5:00PM" 
                content="Oh my god dear!"
                avatar={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));