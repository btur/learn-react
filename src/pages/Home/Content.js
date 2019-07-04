import React from 'react'
import Counter from './components/Counter'
import StudentList from './components/StudentList';

class Content extends React.Component {

  render() {
    console.log('render dijalanin')
    return (
      <div>
        <Counter />
        <StudentList />
      </div>
    );
  }
}

export default Content;