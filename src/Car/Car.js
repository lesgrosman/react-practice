import React from 'react';

export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
) 

// export default class Car extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h3>Car name: {this.props.name}</h3>
//                 <p>Year: <strong>{this.props.year}</strong></p>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

