import React from 'react';
const styles = {
  color: 'black',
}

class FullNewSingle extends Component {

  const NewSingle = ({item}) => (
    <div style={styles} className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
          <span className='card-title'>{item.source.name}</span>
        </div>
        <div className="card-content">
          <p style={{fontSize:'12px'}}>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target='_blank'>Full Article</a>
        </div>
      </div>
    </div>
  );


}



export default FullNewSingle;
