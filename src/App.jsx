import { useState } from "react";

function App() {
  const [tableData, setTableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const handleSortDate = () => {
    const sortbydate = [...tableData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setTableData(sortbydate);
  };
  const handleSortViews = () => {
    const sortbyViews = [...tableData].sort((a, b) => a.views - b.views);
    setTableData(sortbyViews);
  };
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button style={{ margin: "10px" }} onClick={handleSortDate}>
        Sort by date
      </button>
      <button onClick={handleSortViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;