import React from 'react';
import Person from './person';

// export default function PersonList() {
//     return (
//         <div className="person-list">
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//             <Person />
//         </div>
//     );
// }

// Produces same output a code above

// export default function PersonList() {
//     const people = [];
//     for (let i=0; i<5; i++) {
//         people.push(<Person />);
//     }
//     return (
//         <div className="person-list">
//             {people}
//         </div>
//     );
// }

// Stateful component

export default class PersonList extends React.Component {
    render() {
        const people = [];
        for (let i=0; i<5; i++) {
            people.push(<Person />);
        }
        return (
            <div className="person-list">
                {people}
            </div>
        );
    }
}
