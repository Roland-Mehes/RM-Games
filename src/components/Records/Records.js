import { Ctx } from '../../context/LanguageContext';
import './records.css';

const Records = () => {
  const { userName } = Ctx();

  return (
    <div className="records-container">
      {userName ? (
        <div>
          <select>
            <option>Val1</option>
            <option>Val1</option>
            <option>Val1</option>
          </select>
          <div>
            <div className="container-win">
              <p>
                Win : <span></span>
              </p>
            </div>
            <div className="container-lose">
              <p>
                Losses : <span></span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Render the whole Record list with all the Users

        <table style={{ borderCollapse: 'collapse' }}>
          <caption>
            [CurrentGame]
            <select>
              <option> Games</option>
            </select>
          </caption>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      )}
    </div>
  );
};

export default Records;
