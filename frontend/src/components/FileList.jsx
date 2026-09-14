function FileList() {
  const files = [
    { name: "Q3_Report.pdf", size: "2.4 MB", date: "12 Sep 2026" },
    { name: "Employee_Handbook.docx", size: "1.1 MB", date: "10 Sep 2026" },
    { name: "Budget_2026.xlsx", size: "890 KB", date: "08 Sep 2026" },
  ];

  return (
    <div className="file-list">
      <h3>Recent Files</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.size}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileList;