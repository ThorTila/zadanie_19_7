import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import CommentsFormContainer from './CommentsFormContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsFormContainer/>
      <CommentsListContainer />
    </div>
  );
};

export default App;