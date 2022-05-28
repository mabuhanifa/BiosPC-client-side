import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-40 text-lg'>
                <h1 className='text-2xl font-bold text-center' >
                How will you improve the performance of a React Application?
                </h1>
                <ol>
                    <li className='font-bold my-5'>Using Immutable Data Structures</li>
                    <p>
                    Immutable data structures are data structures that are not mutable.
                    This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.

                    </p>
                    <li className='font-bold my-5'>Keeping component state local where necessary</li>
                    <p>
                    If you have a component that is not stateful, you can use a local state variable.
                    This is a good practice because it allows you to keep your component state local.
                    </p>
                    <li className='font-bold my-5'>Memoizing React components to prevent unnecessary re-renders</li>
                    <p>
                    Memoizing React components is a good practice because it prevents unnecessary re-renders.
                    </p>
                    <li className='font-bold my-5'>Multiple Chunk Files</li>
                    <p>
                    Multiple chunk files are a good practice because it allows you to split your application into smaller files.
                    </p>
                    <li className='font-bold my-5'>Dependency optimization</li>
                    <p>
                    Dependency optimization is a good practice because it allows you to optimize your application for the best performance.
                    </p>

                </ol>
                
            </div>
            <div className='m-40 text-lg'>
                <h1 className='text-2xl font-bold text-center py-10' >What are the different ways to manage a state in a React application?</h1>

                <p>There are four main types of state Which can be applied to manage state in React apps. They are :




                    <ul className='list-disc'>

                     <li>Local state</li>
                     <li>Global state</li>
                     <li>Server state</li>
                     <li>URL state</li>

                     </ul>
                     </p>


            </div>
            <div className='m-40 text-lg'>
                <h1 className='text-2xl font-bold text-center py-10' >How does prototypical inheritance work?</h1>

                <p>Prototypical inheritance is a way to inherit properties from one object to another.
                    The prototype chain is a chain of objects that are linked to each other.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    setPrototypeOf. But in ES6, we can use Object.prototype.__proto__.
                    </p>


            </div>
            <div className='m-40 text-lg'>
                <h1 className='text-xl font-bold text-center py-10' >Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>

                <p>
                    The reason why you do not set the state directly in React is because you are not allowed to modify the state directly.
                    You can only modify the state by using the setProducts function. This is a good practice because it prevents you from modifying the state directly. 
                    </p>
            </div>
            <div className='m-40 text-lg'>
                <h1 className='text-2xl font-bold text-center py-10' >You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>

                <p>
                    You can use the filter method to filter the array of products by name. The filter method takes a callback function as an argument.
                    The callback function takes an element as an argument and returns true or false. If the callback function returns true, the element is included in the filtered array. If the callback function returns false, the element is excluded from the filtered array and is not included in the filtered array. 
                    </p>

            </div>
        </div>
    );
};

export default Blogs;