//import React, { Component } from 'react';
import React from 'react';
import './Hello.css'


/*
 *  In the index.js file we want to render the component "<Hello />" on the element which has id named as 'root'. So here we created the "Hello.js" file and extends the Component to render our html elements. 
 */

// // Class representation

// class Hello extends Component{
//     render(){
//         // We use className instead of class because class is a property of javascript
//         // We used tachyons for adding some extra style to our html. We imported 'tachyons' in //// the index.js file
//         return(
//             <div className="f1 tc"> 
//                 <h1>Hello World</h1>
//                 <p>Welcome to React</p>
//                 {/* Here we are saying "this" class has a property "props" named as "greeting" which will be shown in the p tag. that greeting property we set at the index.js while rendering the component "<Hello />" */}
//                 <p>{this.props.greeting}</p>
//             </div>
            
//         );
//     }
// }


// We can do the whole thing using a function as well. The above code is nothing but a fucntion.

const Hello = (props) => {
    return(
        <div className="f1 tc"> 
            <h1>Hello World</h1>
            <p>Welcome to React</p>
            {/* Here we are ommiting "this" because Hello is not a class. We accept the property "props" named as "greeting" which will be shown in the p tag. that greeting property we set at the index.js while rendering the component "<Hello />" */}
            <p>{props.greeting}</p>
        </div>
        
    );
}
// Exporting the Hello component
export default Hello;