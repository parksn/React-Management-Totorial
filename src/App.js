import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '980101',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '김태희',
    'birthday' : '900202',
    'gender' : '여자',
    'job' : '연예인'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '비',
    'birthday' : '920101',
    'gender' : '남자',
    'job' : '가수'
  }
]

class App extends Component {
  render() {   
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.birthday}
                job={c.job}
              />
            )
          })
        }
      </div>
     );
  }
}

export default App;
