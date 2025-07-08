import React from 'react';

const TableSection = () => {
  return (
    <>
      {/* ===== TABLE SECTION STARTS ===== */}
      {/* This section demonstrates how to create a data table using NVIDIA's design system */}
      <div className="nv-section">
        {/* Container to center and limit the width of the content */}
        <div className="nv-container">
          
          {/* ===== SECTION TITLE ===== */}
          {/* The main heading for the table example */}
          <div className="nv-h--medium mb-3">Table Example</div>
          {/* ===== END SECTION TITLE ===== */}
          
          {/* ===== SECTION DESCRIPTION ===== */}
          {/* The descriptive text that explains what this section demonstrates */}
          <p className="nv-text-large mb-5">This section demonstrates a table using NVIDIA's design system classes.</p>
          {/* ===== END SECTION DESCRIPTION ===== */}
          
          {/* ===== TABLE CONTAINER ===== */}
          {/* This is the main table container using NVIDIA's table classes */}
          <div className="nv-table nv-table-bg-2">
            
            {/* ===== TABLE ELEMENT ===== */}
            {/* The actual HTML table element */}
            <table>
              
              {/* ===== TABLE CAPTION ===== */}
              {/* Optional caption for the table (currently empty) */}
              <caption />
              {/* ===== END TABLE CAPTION ===== */}
              
              {/* ===== TABLE HEADER ===== */}
              {/* Contains the column headers (top row of the table) */}
              <thead>
                {/* ===== HEADER ROW ===== */}
                {/* The row containing all the column titles */}
                <tr>
                  {/* ===== EMPTY HEADER CELL ===== */}
                  {/* This empty cell creates the top-left corner of the table */}
                  <th />
                  {/* ===== END EMPTY HEADER CELL ===== */}
                  
                  {/* ===== COLUMN HEADERS ===== */}
                  {/* These are the headers for each GPU model column */}
                  <th scope="col">
                    GeForce RTX<br />4090
                  </th>
                  <th scope="col">
                    GeForce RTX<br />4080
                  </th>
                  <th scope="col">
                    GeForce RTX<br />4070 Ti
                  </th>
                  <th scope="col">
                    GeForce RTX<br />4070
                  </th>
                  <th scope="col">
                    GeForce RTX<br />4060 Ti
                  </th>
                  <th scope="col">
                    GeForce RTX<br />4060
                  </th>
                  {/* ===== END COLUMN HEADERS ===== */}
                </tr>
                {/* ===== END HEADER ROW ===== */}
              </thead>
              {/* ===== END TABLE HEADER ===== */}
              
              {/* ===== TABLE BODY ===== */}
              {/* Contains all the data rows of the table */}
              <tbody>
                
                {/* ===== DATA ROW 1: CUDA CORES ===== */}
                {/* This row shows the NVIDIA CUDA Cores for each GPU model */}
                <tr>
                  {/* ===== ROW HEADER ===== */}
                  {/* The label for this row (leftmost column) */}
                  <th scope="row">NVIDIA CUDA Cores</th>
                  {/* ===== END ROW HEADER ===== */}
                  
                  {/* ===== DATA CELLS ===== */}
                  {/* The actual data values for each GPU model */}
                  <td data-col="GeForce RTX 4090">16384</td>
                  <td data-col="GeForce RTX 4080">9728</td>
                  <td data-col="GeForce RTX 4070 Ti">7680</td>
                  <td data-col="GeForce RTX 4070">5888</td>
                  <td data-col="GeForce RTX 4060 Ti">4352</td>
                  <td data-col="GeForce RTX 4060">3072</td>
                  {/* ===== END DATA CELLS ===== */}
                </tr>
                {/* ===== END DATA ROW 1 ===== */}
                
                {/* ===== DATA ROW 2: BOOST CLOCK ===== */}
                {/* This row shows the Boost Clock speeds for each GPU model */}
                <tr>
                  {/* ===== ROW HEADER ===== */}
                  <th scope="row">Boost Clock (gHz)</th>
                  {/* ===== END ROW HEADER ===== */}
                  
                  {/* ===== DATA CELLS ===== */}
                  <td data-col="GeForce RTX 4090">2.52</td>
                  <td data-col="GeForce RTX 4080">2.51</td>
                  <td data-col="GeForce RTX 4070 Ti">2.61</td>
                  <td data-col="GeForce RTX 4070">2.48</td>
                  <td data-col="GeForce RTX 4060 Ti">2.54</td>
                  <td data-col="GeForce RTX 4060">2.46</td>
                  {/* ===== END DATA CELLS ===== */}
                </tr>
                {/* ===== END DATA ROW 2 ===== */}
                
                {/* ===== DATA ROW 3: MEMORY SIZE ===== */}
                {/* This row shows the Memory Size for each GPU model */}
                <tr>
                  {/* ===== ROW HEADER ===== */}
                  <th scope="row">Memory Size (GB)</th>
                  {/* ===== END ROW HEADER ===== */}
                  
                  {/* ===== DATA CELLS ===== */}
                  <td data-col="GeForce RTX 4090">24</td>
                  <td data-col="GeForce RTX 4080">16</td>
                  <td data-col="GeForce RTX 4070 Ti">12</td>
                  <td data-col="GeForce RTX 4070">12</td>
                  <td data-col="GeForce RTX 4060 Ti">16 or 8</td>
                  <td data-col="GeForce RTX 4060">8</td>
                  {/* ===== END DATA CELLS ===== */}
                </tr>
                {/* ===== END DATA ROW 3 ===== */}
                
                {/* ===== DATA ROW 4: MEMORY TYPE ===== */}
                {/* This row shows the Memory Type for each GPU model */}
                <tr>
                  {/* ===== ROW HEADER ===== */}
                  <th scope="row">Memory Type</th>
                  {/* ===== END ROW HEADER ===== */}
                  
                  {/* ===== DATA CELLS ===== */}
                  <td data-col="GeForce RTX 4090">GDDR6X</td>
                  <td data-col="GeForce RTX 4080">GDDR6X</td>
                  <td data-col="GeForce RTX 4070 Ti">GDDR6X</td>
                  <td data-col="GeForce RTX 4070">GDDR6X</td>
                  <td data-col="GeForce RTX 4060 Ti">GDDR6</td>
                  <td data-col="GeForce RTX 4060">GDDR6</td>
                  {/* ===== END DATA CELLS ===== */}
                </tr>
                {/* ===== END DATA ROW 4 ===== */}
                
              </tbody>
              {/* ===== END TABLE BODY ===== */}
              
              {/* ===== TABLE FOOTER ===== */}
              {/* Optional footer for the table (currently empty) */}
              <tfoot />
              {/* ===== END TABLE FOOTER ===== */}
              
            </table>
            {/* ===== END TABLE ELEMENT ===== */}
            
          </div>
          {/* ===== END TABLE CONTAINER ===== */}
          
        </div>
      </div>
      {/* ===== TABLE SECTION ENDS ===== */}
    </>
  );
};

export default TableSection; 