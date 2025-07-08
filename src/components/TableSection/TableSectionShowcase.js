import React from 'react';
import styled from 'styled-components';
import TableSection from './TableSection';
import CodeBlockWithExpand from '../Shared/CodeBlockWithExpand';

const ShowcaseContainer = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: var(--color-gray-0);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ShowcaseTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
`;

const ExampleContainer = styled.div`
  border: 1px solid var(--color-gray-200);
  border-radius: 4px;
  margin: 1rem 0;
`;

const sectionCode = `<!-- ===== Table Section: NVIDIA-styled comparison table ===== -->
<!-- This section displays a comparison table with NVIDIA styling -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this table section -->
    <div class="nv-h--medium mb-3">Table Example</div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== SECTION DESCRIPTION ===== -->
    <!-- The descriptive text that explains what this table shows -->
    <p class="nv-text-large mb-5">This section demonstrates a table using NVIDIA's design system classes.</p>
    <!-- ===== END SECTION DESCRIPTION ===== -->
    
    <!-- ===== TABLE CONTAINER ===== -->
    <!-- The table wrapper with NVIDIA styling classes -->
    <div class="nv-table nv-table-bg-2">
      
      <!-- ===== TABLE ELEMENT ===== -->
      <!-- The main table element with proper semantic structure -->
      <table>
        <!-- ===== TABLE CAPTION ===== -->
        <!-- Optional caption for the table (empty in this example) -->
        <caption />
        <!-- ===== END TABLE CAPTION ===== -->
        
        <!-- ===== TABLE HEADER ===== -->
        <!-- The header row with column titles -->
        <thead>
          <tr>
            <!-- ===== EMPTY HEADER CELL ===== -->
            <!-- Empty cell for the row headers column -->
            <th />
            <!-- ===== END EMPTY HEADER CELL ===== -->
            
            <!-- ===== COLUMN HEADERS ===== -->
            <!-- Each th represents a column header with GPU model names -->
            <th scope="col">GeForce RTX<br />4090</th>
            <th scope="col">GeForce RTX<br />4080</th>
            <th scope="col">GeForce RTX<br />4070 Ti</th>
            <th scope="col">GeForce RTX<br />4070</th>
            <th scope="col">GeForce RTX<br />4060 Ti</th>
            <th scope="col">GeForce RTX<br />4060</th>
            <!-- ===== END COLUMN HEADERS ===== -->
          </tr>
        </thead>
        <!-- ===== END TABLE HEADER ===== -->
        
        <!-- ===== TABLE BODY ===== -->
        <!-- Contains all the data rows -->
        <tbody>
          
          <!-- ===== ROW 1: CUDA CORES ===== -->
          <!-- First data row showing CUDA core counts -->
          <tr>
            <!-- ===== ROW HEADER ===== -->
            <!-- The row title that describes what this row shows -->
            <th scope="row">NVIDIA CUDA Cores</th>
            <!-- ===== END ROW HEADER ===== -->
            
            <!-- ===== DATA CELLS ===== -->
            <!-- Each td contains the data for each GPU model -->
            <td data-col="GeForce RTX 4090">16384</td>
            <td data-col="GeForce RTX 4080">9728</td>
            <td data-col="GeForce RTX 4070 Ti">7680</td>
            <td data-col="GeForce RTX 4070">5888</td>
            <td data-col="GeForce RTX 4060 Ti">4352</td>
            <td data-col="GeForce RTX 4060">3072</td>
            <!-- ===== END DATA CELLS ===== -->
          </tr>
          <!-- ===== END ROW 1 ===== -->
          
          <!-- ===== ROW 2: BOOST CLOCK ===== -->
          <!-- Second data row showing boost clock speeds -->
          <tr>
            <!-- ===== ROW HEADER ===== -->
            <th scope="row">Boost Clock (gHz)</th>
            <!-- ===== END ROW HEADER ===== -->
            
            <!-- ===== DATA CELLS ===== -->
            <td data-col="GeForce RTX 4090">2.52</td>
            <td data-col="GeForce RTX 4080">2.51</td>
            <td data-col="GeForce RTX 4070 Ti">2.61</td>
            <td data-col="GeForce RTX 4070">2.48</td>
            <td data-col="GeForce RTX 4060 Ti">2.54</td>
            <td data-col="GeForce RTX 4060">2.46</td>
            <!-- ===== END DATA CELLS ===== -->
          </tr>
          <!-- ===== END ROW 2 ===== -->
          
          <!-- ===== ROW 3: MEMORY SIZE ===== -->
          <!-- Third data row showing memory sizes -->
          <tr>
            <!-- ===== ROW HEADER ===== -->
            <th scope="row">Memory Size (GB)</th>
            <!-- ===== END ROW HEADER ===== -->
            
            <!-- ===== DATA CELLS ===== -->
            <td data-col="GeForce RTX 4090">24</td>
            <td data-col="GeForce RTX 4080">16</td>
            <td data-col="GeForce RTX 4070 Ti">12</td>
            <td data-col="GeForce RTX 4070">12</td>
            <td data-col="GeForce RTX 4060 Ti">16 or 8</td>
            <td data-col="GeForce RTX 4060">8</td>
            <!-- ===== END DATA CELLS ===== -->
          </tr>
          <!-- ===== END ROW 3 ===== -->
          
          <!-- ===== ROW 4: MEMORY TYPE ===== -->
          <!-- Fourth data row showing memory types -->
          <tr>
            <!-- ===== ROW HEADER ===== -->
            <th scope="row">Memory Type</th>
            <!-- ===== END ROW HEADER ===== -->
            
            <!-- ===== DATA CELLS ===== -->
            <td data-col="GeForce RTX 4090">GDDR6X</td>
            <td data-col="GeForce RTX 4080">GDDR6X</td>
            <td data-col="GeForce RTX 4070 Ti">GDDR6X</td>
            <td data-col="GeForce RTX 4070">GDDR6X</td>
            <td data-col="GeForce RTX 4060 Ti">GDDR6</td>
            <td data-col="GeForce RTX 4060">GDDR6</td>
            <!-- ===== END DATA CELLS ===== -->
          </tr>
          <!-- ===== END ROW 4 ===== -->
          
        </tbody>
        <!-- ===== END TABLE BODY ===== -->
        
        <!-- ===== TABLE FOOTER ===== -->
        <!-- Optional footer section (empty in this example) -->
        <tfoot />
        <!-- ===== END TABLE FOOTER ===== -->
        
      </table>
      <!-- ===== END TABLE ELEMENT ===== -->
      
    </div>
    <!-- ===== END TABLE CONTAINER ===== -->
    
  </div>
</div>
<!-- ===== End Table Section ===== -->`;

const TableSectionShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Table Section</ShowcaseTitle>
      <p>A section with a comparison table using NVIDIA's design system.</p>

      {/* ===== Table Section: NVIDIA-styled comparison table ===== */}
      <ExampleContainer>
        <TableSection />
      </ExampleContainer>
      {/* ===== End Table Section ===== */}

      <CodeBlockWithExpand code={sectionCode} />
    </ShowcaseContainer>
  );
};

export default TableSectionShowcase; 