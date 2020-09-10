import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure??</ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sem" 
                    timeAgo ="Today at 4:45PM" 
                    content="Nice post body!" 
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" 
                    timeAgo ="Today at 2:00PM" 
                    content="You are the best dude!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" 
                    timeAgo ="Yesterday at 5:00PM" 
                    content="Oh my god dear!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));