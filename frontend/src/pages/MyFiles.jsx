import { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./MyFiles.css";

function MyFiles() {
    const [searchTerm, setSearchTerm] = useState("");
const [fileType, setFileType] = useState("All Files");

  const files = [
    {
      name: "project-report.pdf",
      type: "PDF",
      owner: "Admin",
      size: "2.4 MB",
      date: "15 Sep 2026",
      status: "Secure",
    },
    {
      name: "presentation.pptx",
      type: "PPTX",
      owner: "Tashneet",
      size: "8.7 MB",
      date: "14 Sep 2026",
      status: "Secure",
    },
    {
      name: "database.xlsx",
      type: "XLSX",
      owner: "Manager",
      size: "4.2 MB",
      date: "13 Sep 2026",
      status: "Secure",
    },
    {
      name: "website-backup.zip",
      type: "ZIP",
      owner: "Admin",
      size: "24.8 MB",
      date: "12 Sep 2026",
      status: "Secure",
    },
    {
      name: "user-data.csv",
      type: "CSV",
      owner: "Admin",
      size: "1.8 MB",
      date: "10 Sep 2026",
      status: "Secure",
    },
  ];
  
   const [fileList, setFileList] = useState(files);

   const fileInputRef = useRef(null);
const [selectedFile, setSelectedFile] = useState(null);

 const filteredFiles = fileList.filter((file) => {

   

    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      fileType === "All Files" || file.type === fileType;

    return matchesSearch && matchesType;
  });
  const handleDelete = (fileName) => {
  const confirmDelete = window.confirm(
    `Are you sure you want to delete ${fileName}?`
  );

  if (confirmDelete) {
    setFileList((currentFiles) =>
      currentFiles.filter((file) => file.name !== fileName)
    );
  }
};

const handleUploadClick = () => {
  fileInputRef.current?.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    setSelectedFile(file);
  }
};

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <div className="files-page">

          {/* Page Header */}
          <div className="files-header">
            <div>
              <h1>My Files</h1>
              <p>Manage and secure your stored files.</p>
            </div>

            <button
  className="upload-button"
  onClick={handleUploadClick}
>
  + Upload File
</button>

<input
  type="file"
  ref={fileInputRef}
  onChange={handleFileChange}
  style={{ display: "none" }}
/>
          </div>

          {/* Search and Filter */}
          <div className="files-toolbar">
            <div className="files-search">
              🔍
              <input
  type="text"
  placeholder="Search files..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
            </div>

           <select
  className="file-filter"
  value={fileType}
  onChange={(event) => setFileType(event.target.value)}
>
  <option>All Files</option>
  <option>PDF</option>
  <option>PPTX</option>
  <option>XLSX</option>
  <option>ZIP</option>
  <option>CSV</option>
</select>
          </div>

          {/* Files Table */}
          {selectedFile && (
  <div className="upload-preview">
    <div>
      <strong>Selected File</strong>
      <p>{selectedFile.name}</p>
    </div>

    <button
      className="remove-file-button"
      onClick={() => setSelectedFile(null)}
    >
      Remove
    </button>
  </div>
)}
          <div className="files-table-card">

            <div className="files-table-header">
              <h3>All Files</h3>
              <span>{filteredFiles.length} files</span>
            </div>

            <div className="files-table">

              <div className="file-row file-row-heading">
                <span>File Name</span>
                <span>Owner</span>
                <span>Size</span>
                <span>Uploaded</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {filteredFiles.map((file, index) => (
                <div className="file-row" key={index}>

                  <div className="file-name">
                    <div className="file-icon">
                      📄
                    </div>
                    {filteredFiles.length === 0 && (
  <div className="no-files">
    <div>📁</div>
    <strong>No files found</strong>
    <p>Try a different search or filter.</p>
  </div>
)}

                    <div>
                      <strong>{file.name}</strong>
                      <small>{file.type}</small>
                    </div>
                  </div>

                  <span>{file.owner}</span>

                  <span>{file.size}</span>

                  <span>{file.date}</span>

                  <span className="file-status">
                    ✓ {file.status}
                  </span>

                  <div className="file-actions">

                    <button
  title="Download"
  onClick={() => alert(`Downloading ${file.name}`)}
>
  ⬇️
</button>

                    <button
  title="Share"
  onClick={() => alert(`Share option opened for ${file.name}`)}
>
  🔗
</button>

                    <button
  title="Delete"
  onClick={() => handleDelete(file.name)}
>
  🗑️
</button>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default MyFiles;