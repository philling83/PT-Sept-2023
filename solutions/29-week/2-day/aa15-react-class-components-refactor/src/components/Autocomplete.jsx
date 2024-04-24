import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect, useRef } from 'react';
// class Autocomplete extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputVal: '',
//       showList: false
//     };
//     this.inputRef = React.createRef();
//   }

//   componentDidUpdate() {
//     if (this.state.showList) {
//       document.addEventListener('click', this.handleOutsideClick);
//     } else {
//       console.log("Removing Autocomplete listener on update!");
//       document.removeEventListener('click', this.handleOutsideClick);
//     }
//   }

//   componentWillUnmount () {
//     console.log("Cleaning up event listener from Autocomplete!");
//     document.removeEventListener('click', this.handleOutsideClick);
//   }

//   handleInput = (e) => {
//     this.setState({ inputVal: e.target.value });
//   }

//   selectName = e => {
//     e.stopPropagation();
//     this.setState({ inputVal: e.target.innerHTML, showList: false });
//   }

//   handleOutsideClick = () => {
//     // Leave dropdown visible as long as input is focused
//     if (document.activeElement === this.inputRef.current) return;
//     else this.setState({ showList: false });
//   }

//   matches = () => {
//     const { inputVal } = this.state;
//     const { names } = this.props;
//     const inputLength = inputVal.length;
//     const matches = [];

//     if (inputLength === 0) return names;

//     names.forEach(name => {
//       const nameSegment = name.slice(0, inputLength);
//       if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
//         matches.push(name);
//       }
//     });

//     if (matches.length === 0) matches.push('No matches');

//     return matches;
//   }

//   render() {
//     const results = this.matches().map((result) => {
//       const nodeRef = React.createRef();
//       return (
//         <CSSTransition
//           nodeRef={nodeRef}
//           key={result}
//           classNames="result"
//           timeout={{ enter: 500, exit: 300 }}
//         >
//           <li ref={nodeRef} className="nameLi" onClick={this.selectName}>
//             {result}
//           </li>
//         </CSSTransition>
//       )
//     });

//     return (
//       <section className="autocomplete-section">
//         <h1>Autocomplete</h1>
//         <div className="auto">
//           <input
//             placeholder="Search..."
//             ref={this.inputRef}
//             onChange={this.handleInput}
//             value={this.state.inputVal}
//             onFocus={() => this.setState({ showList: true })}
//           />
//           {this.state.showList && (
//             <ul className="auto-dropdown">
//               <TransitionGroup>
//                 {results}
//               </TransitionGroup>
//             </ul>
//           )}
//         </div>
//       </section>
//     );
//   }
// }

const TransitionItem = ({selectName, result, ...props}) => {
  const nodeRef = useRef();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      key={result}
      classNames="result"
      timeout={{ enter: 500, exit: 300 }}
      {...props}
    >
      <li ref={nodeRef} className="nameLi" onClick={selectName}>
        {result}
      </li>
    </CSSTransition>
  )
}

const Autocomplete = ({ names }) => {
  const [inputVal, setInputVal] = useState('');
  const [showList, setShowList] = useState(false);
  const inputRef = useRef();


  useEffect(() => {

    if (showList) {
      document.addEventListener('click', handleOutsideClick);
    }
    else {
      console.log("Removing Autocomplete listener on update!");
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      console.log("Cleaning up event listener from Autocomplete!");
      document.removeEventListener('click', handleOutsideClick);
    }

  }, [showList])

  const handleInput = (e) => {
    // this.setState({ inputVal: e.target.value });
    setInputVal(e.target.value)
  }

  const selectName = e => {
    e.stopPropagation();
    setInputVal(e.target.innerHTML);
    setShowList(false);
;  }

  const handleOutsideClick = () => {
    // Leave dropdown visible as long as input is focused
    if (document.activeElement === inputRef.current) return;
    else setShowList(false);
  }

  const matches = () => {
    // const { inputVal } = this.state;
    // const { names } = this.props;
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;

    names.forEach(name => {
      const nameSegment = name.slice(0, inputLength);
      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }

  const results = matches().map((result) => {
    // const nodeRef = React.createRef();
    return (
      <TransitionItem result={result} selectName={selectName} key={result} />
    )
  });



  return (
    <section className="autocomplete-section">
      <h1>Autocomplete</h1>
      <div className="auto">
        <input
          placeholder="Search..."
          ref={inputRef}
          onChange={handleInput}
          value={inputVal}
          onFocus={() => setShowList(true)}
        />
        {showList && (
          <ul className="auto-dropdown">
            <TransitionGroup>
              {results}
            </TransitionGroup>
          </ul>
        )}
      </div>
    </section>
  );

}

export default Autocomplete;
