import React from 'react';

const BulletListSection = () => {
  return (
    <>
      {/* ===== BULLET LIST SECTION STARTS ===== */}
      {/* This section demonstrates how to create nested bullet lists using NVIDIA's design system */}
      <div className="nv-section">
        {/* Container to center and limit the width of the content */}
        <div className="nv-container">
          
          {/* ===== SECTION TITLE ===== */}
          {/* The main heading for the bullet list example */}
          <div className="nv-h--medium mb-3">Bullet List Example</div>
          {/* ===== END SECTION TITLE ===== */}
          
          {/* ===== SECTION DESCRIPTION ===== */}
          {/* The descriptive text that explains what this section demonstrates */}
          <p className="nv-text-large mb-3">This section demonstrates a bullet list using NVIDIA's design system classes.</p>
          {/* ===== END SECTION DESCRIPTION ===== */}
          
          {/* ===== MAIN BULLET LIST ===== */}
          {/* This is the main bullet list container using NVIDIA's nv-list class */}
          <ul className="nv-list">
            
            {/* ===== FIRST LEVEL LIST ITEM ===== */}
            {/* This is a top-level bullet point */}
            <li>
              Eliminate tedious set up and testing with ready-to-run, optimized AI software.
            </li>
            {/* ===== END FIRST LEVEL LIST ITEM ===== */}
            
            {/* ===== SECOND LEVEL NESTED LIST ===== */}
            {/* This list item contains a nested sub-list (second level) */}
            <li>
              {/* ===== SECOND LEVEL LIST CONTAINER ===== */}
              <ul>
                {/* ===== SECOND LEVEL LIST ITEMS ===== */}
                <li>
                  Eliminate tedious set up and testing with ready-to-run, optimized AI software.
                </li>
                <li>
                  Create better models faster with unmatched performance that enables more iterations.
                </li>
                <li>
                  Avoid time lost on systems integration and software engineering.
                </li>
                
                {/* ===== THIRD LEVEL NESTED LIST ===== */}
                {/* This list item contains another nested sub-list (third level) */}
                <li>
                  {/* ===== THIRD LEVEL LIST CONTAINER ===== */}
                  <ul>
                    {/* ===== THIRD LEVEL LIST ITEMS ===== */}
                    <li>
                      Eliminate tedious set up and testing with ready-to-run, optimized AI software.
                    </li>
                    <li>
                      Create better models faster with unmatched performance that enables more iterations.
                    </li>
                    <li>
                      Avoid time lost on systems integration and software engineering.
                    </li>
                    <li>
                      Experience simplified infrastructure design and capacity planning with one system for all AI workloads.
                    </li>
                    
                    {/* ===== PARAGRAPH IN LIST ===== */}
                    {/* This demonstrates how to include a paragraph within a list item */}
                    <li>
                      <p>
                        Achieve the highest compute density and performance in the smallest footprint.
                      </p>
                    </li>
                    {/* ===== END PARAGRAPH IN LIST ===== */}
                  </ul>
                  {/* ===== END THIRD LEVEL LIST CONTAINER ===== */}
                </li>
                {/* ===== END THIRD LEVEL NESTED LIST ===== */}
                
                <li>
                  Achieve the highest compute density and performance in the smallest footprint.
                </li>
              </ul>
              {/* ===== END SECOND LEVEL LIST CONTAINER ===== */}
            </li>
            {/* ===== END SECOND LEVEL NESTED LIST ===== */}
            
            {/* ===== REMAINING FIRST LEVEL LIST ITEMS ===== */}
            {/* These are additional top-level bullet points */}
            <li>
              Avoid time lost on systems integration and software engineering.
            </li>
            <li>
              Experience simplified infrastructure design and capacity planning with one system for all AI workloads.
            </li>
            <li>
              Achieve the highest compute density and performance in the smallest footprint.
            </li>
            {/* ===== END REMAINING FIRST LEVEL LIST ITEMS ===== */}
            
          </ul>
          {/* ===== END MAIN BULLET LIST ===== */}
          
        </div>
      </div>
      {/* ===== BULLET LIST SECTION ENDS ===== */}
    </>
  );
};

export default BulletListSection; 