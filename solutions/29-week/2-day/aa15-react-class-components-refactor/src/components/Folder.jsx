// import React from 'react';
import { useState } from 'react';

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });

  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

// class Folder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentTab: 0
//     };
//   }

//   selectTab = (num) => {
//     this.setState({ currentTab: num });
//   }

//   render() {
//     const folder = this.props.folders[this.state.currentTab];
//     const titles = this.props.folders.map((folder) => folder.title);

//     return (
//       <section className="tabs-section">
//         <h1>Tabs</h1>
//         <div className='tabs'>
//           <Headers
//             titles={titles}
//             currentTab={this.state.currentTab}
//             selectTab={this.selectTab}
//           />
//           <div className='tab-content'>
//             {folder.content}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

function Folder({folders}) {
  const [currentTab, setCurrentTab] = useState(0);

  const folder = folders[currentTab];
  const titles = folders.map((folder) => folder.title);

  const selectTab = (num) => {
    setCurrentTab(num);
  }

  return (
    <section className="tabs-section">
      <h1>Tabs</h1>
      <div className='tabs'>
        <Headers
          titles={titles}
          currentTab={currentTab}
          selectTab={selectTab}
        />
        <div className='tab-content'>
          {folder.content}
        </div>
      </div>
    </section>
  );

}

export default Folder;
