const VerseExkursIcon = ({ width, height, classes }) => {
  return (
    <svg
      id="VerseExkurs_Icon"
      data-name="VerseExkurs Icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3072 3072"
      width={width}
      height={height}
    >
      <filter id="grayscale">
        <feColorMatrix type="saturate" values="0.10"/>
      </filter>
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2,2079.52H69.54c32.58,69.2,56.37,140.6,86.93,213.75L317.17,2080h70.51L173.82,2362.69H118.68c-16.62-26.73-24.74-58.21-38.56-87.08-15.46-32.26-27.35-66.24-40.49-99.59-7.69-19.52-14.65-39.33-22.22-58.91-3.31-8.57-5.05-18.45-15.41-22.26Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M3072,1642.8c-12.56,27.42-13,57.52-18.75,86.4-9.55,48-17.21,96.27-25.73,144.76-17.9,3.49-34.38,1.27-52.86,1.66-16.14-24.23-32.68-49.08-49.25-73.91-17.71-26.53-34.69-53.61-53.5-79.35-9.95-13.63-12.32-27.09-9.35-43,3.09-16.58,5-33.39,8.17-55.57L2990.52,1804c11.72-65.35,22.5-125.44,33.73-188H3072Z"
      />
      <path
        className={classes === 'navbar-banner' || 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-black" : classes === 'banner' ? "fill-black" : classes}
        d="M861,1285.67c-11.36,15.81-11.36,36.35-21.07,53.53H585.29c-54.81,71.78-120.83,136-165.54,213.82h-257q368-423.23,730.53-840.21h464.61c-72.63,280.88-144.93,560.46-217.36,840.6H902.18L1113.3,883.79c-49.88,3.1-100-3.48-150.11,3.74-18.77,2.7-23.46,18.87-32.38,29.5C878.93,978.9,829,1042.34,778.12,1105.09c-8.51,10.51-18,20.22-29.22,32.74H903.38c-2.87,18.63-14.22,33.73-12.54,51.89l.7.44A325.21,325.21,0,0,0,861,1286.28Zm-292.05,27.55H815.1c22.37-48.25,34.07-100.5,54.44-153.36H696.42L947.1,859.1h210.81c-71.44,222.22-142.27,442.53-213.44,663.92h165.38l208.61-788.65H909.9C684.05,996.92,459,1258.54,231.13,1523.47H392.55Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M3024.22,1962c.09,11.48,17.93,17.73,10.83,36.37H27c-4.9.76-9-1.94-9.56-7.67,2.21-8,10.71-2.22,13.16-5.4,5.71-11.07,10.57-20.51,16-31C1038.32,1957,2030.42,1949.23,3024.22,1962Z"
      />
      <path
        className={classes === 'navbar-banner' || 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-black" : classes === 'banner' ? "fill-black" : classes}
        d="M2480.39,1558c17.54-67.62,34.24-132,50.74-195.57,7.19-5.34,14.47-3.2,21.28-3.21,74.16-.17,148.34-.57,222.49.23,18.14.19,32.76-3.31,43.19-20.89v-20.92c-25.78-26.62-59.76-44.22-91-65.31-86.32-58.29-173.37-115.49-260-173.29-31.34-20.9-52.15-70.74-43.49-107q22.39-93.76,46.78-187c8.62-32.91,29-56.93,60.86-70.35A34,34,0,0,1,2544,712c162.34-.13,324.69-.11,489.23-.11,4.11,70-27.3,131.86-39.23,199.12H2688c-30.43,0-32.74,1.6-42.56,29.17,1.19,16.83,10.43,27.1,24.18,36.11q162.32,106.42,323.86,214c42.26,28.13,58.94,77.09,45.86,125.72-15.71,58.41-30.61,117-45.13,175.76-9,36.37-45.15,66.2-82.2,66.2H2480.39Zm40.93-30.07c4.67,2.54,5.23,3.11,5.79,3.11,126,.17,251.93.57,377.89.23,26.33-.07,52.54-22.85,59.08-48.87q22.47-89.4,44.59-178.9c9-36.27-4.66-69.8-36.13-90.44q-159.67-104.73-319.08-209.88c-33.71-22.25-45.64-49.78-35.92-80.47,9.4-29.65,34.81-45.21,73.86-45.22H2968c14.07-45.81,25.14-91.14,35.41-137.47-3.43-.74-5.78-1.71-8.14-1.71-142.6-.06-285.2-.34-427.79.21-33,.13-58.39,22.1-66.17,53.32-14.72,59-29.83,118-44.23,177.11-8.25,33.89.21,63.49,28.87,84.23,34.56,25,70.41,48.26,105.93,72,76.8,51.23,153.88,102,230.54,153.5,21.27,14.27,32.08,34.59,26.94,60.76-5.18,26.44-22.64,42.11-47.79,49.34-7.18,2.06-15.17,1.77-22.78,1.78-73.44.12-146.87.07-222.72.07C2544.34,1437.05,2532.77,1482.72,2521.32,1528Z"
      />
      <path
        className={classes === 'navbar-banner' || 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-black" : classes === 'banner' ? "fill-black" : classes}
        d="M1452.57,1353.84c-17.82,68.33-35.44,135.87-53.07,203.46H1188.23c72.12-282.56,143.76-563.23,215.6-844.67h631.53c35.59,23.32,44.39,55.41,33,97.16-19.73,72.22-34.76,145.76-58.1,217-13,39.63-40.39,68.48-77.79,87.33-51,25.7-102.11,51.14-155.69,78,12.27,51.47,24.64,103.33,36.15,151.56,9.87,10.89,18.82,12.23,28.85,12.12,33.18-.38,66.38-.14,103.91-.14l-50.44,198.63c-7.33,5.89-14.65,3.69-21.44,3.72-48.59.19-97.19.1-145.78.1-46.93,0-83.42-28.49-94.46-74.32-14.47-60-28.57-120.14-42.91-180.19-1.28-5.32-3.19-10.48-4.94-16.16Zm287.72-179.29c4.75-2.55,9.11-5,13.6-7.26,54.86-27,109.84-53.73,164.54-81,17.11-8.55,31.14-20.74,43.56-35.92,20.88-25.52,25-56.36,32.85-86.33,14.28-54.49,29.43-108.75,43.62-163.26,9.87-37.93-3.55-60-39.07-65.8-5-.82-10.2-.4-15.31-.4q-265.6,0-531.21.08c-6.83,0-14.08-2-23.19,4.12q-99.93,391.38-201.16,787.81h146c12-45.72,27-89.8,34.39-135.12,7.23-44.52,27.8-71.5,70-88.22,44.06-17.43,85.48-41.5,128.88-63.07,18.87,78.13,37.33,154.35,55.67,230.59,6.93,28.82,22.7,53.68,52.65,55.93,50.7,3.8,101.89,1,153.06,1,11.92-46.79,23.39-91.83,35.51-139.44-23.8,0-45.4.43-67-.1-27.56-.69-52.08-20.2-58.37-46.59C1766.16,1286.17,1753.4,1230.68,1740.29,1174.55Z"
      />
      <path
        className={classes === 'navbar-banner' || 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-black" : classes === 'banner' ? "fill-black" : classes}
        d="M2238.77,1556.92H2024.84c72.92-282.34,145.38-562.91,218-844.15h212.5Q2346.59,1136.64,2238.77,1556.92Zm28.74-814c-68,263.51-135.85,526.39-204.14,791h148.2q101.2-394.34,203-791Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M1761.89,2080.17c5.37,22.14-7.8,40.08-3.36,61.21h-213c1.6,18-5.26,33.75-5.8,52.26h167.47c-6.74,21.52-2.6,42.71-14.54,62H1532.11c-15.71,14,.9,35.43-17.89,47.87L1520,2307h207.63c-5.63,19.5-5.36,37.41-12.95,55.06H1447q25.92-141.3,51.7-281.87Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M1298.84,2306.23c5.73,21.57-8,37.5-3,56H1084c-11.63-3.84-11.63-19.36-22.11-25.67-2.72-32.84,7.69-63.61,12.44-94.86,3.56-23.46,3.88-48.25,16.37-70.13,14.25-24.95,36-38.82,63.71-40.11,38.29-1.79,76.72-.58,115.09-.41,32.91.14,53.41,26,53.19,53.39-.25,30.67-14.8,58.53-12.71,89,.16,2.3-3.61,4.87-5.92,7.78H1132.48c-2.68,7.73-5.2,15-8.66,25Zm-34.79-111.74H1147c-1.65,7.76-12,13.48-5.16,23.65h116.05C1260.25,2209.82,1257.73,2201.79,1264.05,2194.49Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M589,2168.42c2.43,37.73-8.92,74.3-16.77,113H395.29c-6,8.46-.22,17.73-11.31,26.2H567.85c2.26,18.81-9.28,34.09-4,53.18H349.92c-22.79-18.72-25.24-33.4-16.8-66.77,6.23-24.58,8.52-50.27,11.21-75.6,4-37.76,17.13-68.47,55.51-83.68a52.91,52.91,0,0,1,20.12-3.7c31.31-.12,62.67,1,93.93-.35C545.49,2129.35,573.16,2133.85,589,2168.42ZM402.08,2218H527a43.93,43.93,0,0,1,3.32-23.62H408.57C406.34,2202.41,409.21,2211.08,402.08,2218Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2770.43,2250.11c.12-22.71-.68-44.57,5.27-66.29s42.44-52.49,66.17-52.7c40.92-.36,81.84,0,122.76-.14,23.85-.09,34,19.75,49.52,32.76V2204c-22.35-2.51-45.28,6.67-70.64-9.65H2834.93c-3.46,7.59.93,16.25-7.76,24.84,40.88,0,77.2.37,113.52-.1,31.89-.42,65.91,18.59,58.36,60.77-4.53,25.29-5,52.36-29,70.61-9.56,7.26-18.35,12.67-30.47,12.64-53.7-.14-107.4-.06-160.9-.06-9.64-6-16.33-14.51-22.9-21.67V2298h52.53c3.71,8.4,12.15,9.66,22.12,9.51,31.95-.5,63.92-.19,96.58-.19,5.35-5.92,10.15-12.15,10.35-20.34-3.88-7.77-10.39-5-15.52-5.05-30-.28-60.14-1.14-90.13.16C2805,2283.28,2783.79,2276,2770.43,2250.11Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M817.87,2363c-7.1-7.58-13.63-14.54-20.74-22.11v-42.3h54c3.16,3.6,7.36,9.4,17.08,9.12,33.83-1,67.7-.39,100.54-.39,11.17-5.7,10.39-14.34,8-25.53-33.43,0-67.16-.85-100.83.27-26.87.9-49.88-3.81-63.86-32.4,2.54-16.85-1.87-35.91,4.25-55.72,12.7-41.09,38.69-63,81.5-63,26.83,0,53.67-.19,80.5,0,43.4.38,39.24-7.14,77.64,33.7V2203h-55.84c-6.66,1.13-5-7.76-9-8.48H877.32c-5.2,7.25.91,16.38-10.84,24.66,41.73,0,78.48.32,115.22-.08,43.49-.46,69.58,29.6,56.35,76.21-6.21,21.86-10.2,41.69-28.14,56.76-8.16,6.86-16.55,11.06-27.34,11C928.28,2363,874,2363,817.87,2363Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2256,2346.42c.6,5.23,1.62,10.22-1.23,15.8H2188.6l-60.46-79.8h-36l-13.63,79.88h-62.11c18.51-101.26,36.82-201.44,55.51-303.66,19.34,1.81,40.07-4.89,60.4,5.52-15.27,51.41-17.5,103.08-29.85,154h36.73c31.93-28,65.12-55.54,92.91-86.31h59c2.84,6.3,1.9,12,1.28,17.41-32.45,37.91-74.88,65.18-107.58,104C2209,2283.24,2227.7,2317.36,2256,2346.42Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2479.26,2362.59H2299.42c-24.58-18.18-25.59-40.94-18.77-67.9,6.37-25.22,7.82-51.65,12.25-77.4,4.91-28.55,10.74-56.95,16.37-86.44,20.55,2,40.2-3.61,60.41,4.32-13.63,57.28-22.16,114-32.16,171.29h119.65c7.47-56.61,17.62-112,29.46-170,17.55-11.88,38.69-2.56,58-5.47,7.3,15.21-.9,28.14-3.33,40.09-9.76,48-14.78,96.8-25.24,144.63C2511.38,2337.26,2492.54,2347.72,2479.26,2362.59Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M1738.67,2357.54c32.71-38.66,71.71-71.71,106.55-109.53-19.94-33-43-63.2-66.38-95.51v-12.66c5.91-11.8,46.83-13.11,70.3-2.55,10.22,23.23,27.9,42.09,40.63,65.21,26.9-23,54.32-45.12,77.5-70.85h58.92c4.67,11.82-2.07,18.24-9.24,25.66-30.45,31.53-60.34,63.61-90.76,95.83,19,34.08,47.42,66.66,63.39,109.14h-71.15l-42.89-66.71-62.84,66.56h-70Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M905.92,1873.68c-20,3.67-36.55,1.64-54.79,1.87L792,1787.61H735.77c2.24-17.15,4.2-32.09,6.4-48.93H878.49c4.42-24.69,8.52-47.64,13.1-73.23H751.65c3.24-17.34.85-32.89,7.91-48.64,48.39,0,96.93-1.1,145.38.47,23.57.76,39.55,24.08,36,47.8-3.33,22.05-7.21,44-11.42,65.92-7,36.35-25.41,51.61-70.6,58.63C871.62,1818.71,898.79,1840.2,905.92,1873.68Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1737.75,1789.65c13,28.93,39.34,50.8,47.53,83.91-20.55,3.8-37.06,1.75-55.25,2-19.19-28.47-38.72-57.44-59.17-87.76H1619c-.76-17.1,2.72-31.7,5.35-48.87h133c4.47-25.13,8.55-48,13.08-73.46H1634.46c-.78-17.42,2.69-32,5.42-48.37,49.18,0,97.61-1.37,145.9.6,22.63.93,37.45,24.51,34,47.5-3.34,22-7.23,44-11.45,65.87C1801.26,1767.39,1783,1782.53,1737.75,1789.65Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2716,1665.3h-138c-3-17.63,1.64-32.17,4.24-48.49,50.29,0,100-1,149.7.5,19.9.62,36.06,21.54,32.86,42.46-8.87,57.92-18.81,115.72-30.5,173.12-4.68,22.93-22.94,39.8-45.67,41.21-45.66,2.83-91.61.84-137.55.84-3.19-16.4,2.06-30.44,3.82-46.89h132.17C2696.8,1773.63,2706.18,1720.8,2716,1665.3Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1941.55,1616.84c47,0,93.57-1.27,140,.54,22.43.88,37.95,21.86,34.25,44.95-11.28,70.34-24.16,140.42-36.53,211.29-15.77,4.11-30.72,1.58-47.59,1.71.12-29.55,10.33-56.21,12-86.1H1922.51c-5.07-17.44,2.06-31.84,2.25-48.78H2053.2c4.5-25.3,8.69-48.85,13.34-75H1937.29C1934.35,1647.71,1939,1633.17,1941.55,1616.84Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M596.2,1665.14H460.47c-1.76-16.82,2.86-31.27,4.22-45.23,6.61-5.42,13.26-3.53,19.41-3.55,39.6-.17,79.21-.5,118.8.1,29.27.44,47,22.59,42.07,51.15q-13,75.26-26.32,150.47c-6.78,38.09-30.32,57.67-68.87,57.72-32.58,0-65.15.11-97.73-.07-6.19,0-12.8,1.76-19.84-3.44,1.76-13.58,3.61-27.89,5.78-44.65H567.26C577,1773,586.33,1720.59,596.2,1665.14Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1315.78,1875.81c-3.08-17.57,3.81-31.42,2.86-48h123.89c9.7-53.93,19.12-106.28,29.08-161.6H1343.15c-3.72-18.06,2.4-32.49,3.54-50,34.85,0,69.27,1.71,103.46-.36,64.51-3.92,79.68,20.33,65.68,78.72-9.65,40.2-14.82,81.48-21.5,122.36-6.14,37.62-30.17,58.74-68.14,58.82C1389.84,1875.87,1353.49,1875.81,1315.78,1875.81Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M640.71,2362H577.17c13.69-25,9.65-52.16,16.65-77.16,10.32-36.8,7.61-76.36,23.66-112,11.06-24.54,32.88-38.72,56.78-40.72,43.59-3.66,87.71-1,130.94-1,7.1,22.46-4.34,41.12-4.14,62.06H674.36C658.36,2249,655.46,2306.74,640.71,2362Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2630.43,2192.74c-10.38,58-20.36,113.7-30.38,169.64h-61.52c8.27-48.81,18-96.91,24.63-145.6,4.13-30.21,12.12-60.14,43.91-75.71,9-4.43,18.25-9.5,27.86-9.68,42.65-.81,85.33-.35,128.17-.35,8.37,21.51-4.81,40.37-2.62,61.7Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1188.65,1665.5H1058.77c-2.34-17.46,2.47-31.85,4.93-49h99.9c12.15,0,24.33-.51,36.45.15,24.56,1.32,42.68,20.77,39.74,44.58-3.2,25.9-7.75,51.73-13.45,77.2-5.83,26-23.29,41.77-49.38,47.69-12.1,2.75-119.72,2-134.19-.86-1.84-15.25,3-29.8,4.94-46.78h129.11C1181.91,1713.83,1187.3,1691.22,1188.65,1665.5Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2258.48,1874.44h-43.11c3.79-87.43,32.69-170.15,29.76-257h163.75c-2.78,16.23-5.32,31-8.19,47.78H2295.76C2283.09,1736.31,2270.76,1805.49,2258.48,1874.44Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M169.34,1664.26l-29.28,1.91c-9.42,52.15-18.94,104.87-28.38,157.1,11.93,7.07,23.41,1.24,35,5.74,3.81,14.64-3.35,29-3.48,45.31-16.83,2.52-33.39,3.06-49.47.32-21.1-3.59-33.8-21.77-30.69-45.75,4.5-34.64,11.3-69,17.25-103.42,2.71-15.66,5.7-31.28,8.65-46.9,9.28-49.07,33.15-66.54,83.59-60.83,4.31,7.12.86,14.46-.08,21.75C171.52,1647,170.57,1654.58,169.34,1664.26Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1016.64,1735.8l17.21,4.65c1.84,15.62-1,30.35-4.82,45.9L1008.4,1789c-9.24,26.87-9.19,56.6-17.76,85-15,3.81-30.08,1-47.92,1.87,15.43-87.24,30.5-172.48,45.62-258h60.45c2.93,16-2.08,30.06-3.68,45.16l-17,5C1024.4,1690.1,1020.7,1711.88,1016.64,1735.8Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1628,1617.69c-2,16.23-3.79,30-5.61,44.34l-14.47,6.58c-3.67,21.93-7.32,43.79-10.62,63.56,3.45,8,10.64,4.63,14.55,9.59-2.48,14.28-.76,29.74-7.24,44.84l-17.53,2.57c-5.27,28.58-10.43,56.6-15.65,84.88-15.71,2.76-30.08,2.35-48.33.07,15.09-85.85,30-170.7,45.08-256.43Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1927.49,1617.65c2.32,15.88-3.09,29.89-3.82,43.57-4.9,6.78-13.2,1.55-19.79,9.14-3.4,20.27-7.26,43.2-11.3,67.24l19.25,3.55c3.18,15.49-3.19,29.86-3.76,44.07-7.34,6.23-15.88,1.25-25.17,6.11-4.76,26.15-9.82,54-15.05,82.74-15.7,3.18-30.6,1.45-48.43,1.07,4.42-25.49,8.46-49.05,12.6-72.61,7.8-44.45,15.45-88.93,23.55-133.33C1862.11,1633.34,1888.63,1614,1927.49,1617.65Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M692.46,1874.74h-48.3c15.21-86.54,30.12-171.41,45.12-256.75,19.13-2.44,36.75-1.63,55.26-.65,2.64,15-3.87,28.25-3.12,39.33-1.7,9.41-11.07,7.57-12.74,14-3.46,20.69-6.93,41.39-9.71,58,.48,11.11,9.21,8.28,11.3,14.79-1.54,12.64-3.22,26.48-4.67,38.48-4.2,8-11.84,4-17.81,9.66C703,1817.82,697.79,1845.86,692.46,1874.74Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1281.64,1825.36l24.44,3.06a104.46,104.46,0,0,1-4.11,45.33c-12.41,3.78-25.25,3.22-37.51,1.11-22.67-3.91-36-24.84-31.82-48.68q13.71-78.92,28-157.74c6.54-35.66,33.74-54.89,71.73-50.61,4.15,15.06-2,29.58-3.21,43.84-5.17,6.07-13.1,1.41-20.21,8.06C1300.2,1719.68,1291,1771.93,1281.64,1825.36Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M406.2,1823.59c7.17,5.82,14.8,1,20.61,7-3.06,14-1.36,29.45-6.72,43.32-35.42,5.17-54.11-3.64-62.37-27.58-3.4-9.84-.65-18.87,1-28.18,8.94-50.77,18.73-101.41,26.67-152.34,4.06-26,38.77-56,66.26-47.94,3.14,7.22-1,14.53-1.1,21.88-.08,7.54-2,15-2.84,20.62-4,6.52-11.57,3.45-15.12,14.42C424.39,1720.92,415.3,1772.23,406.2,1823.59Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2526,1824.9l15.58,4c3.08,15.35-3.71,29.22-3.08,43.28-39.62,11.73-67.11-10.92-60.74-49.69,8.45-51.46,17.7-102.8,27.08-154.1,5.76-31.47,30.31-51.43,62.53-51.23,5.25,14.49-4.37,28.33-1.84,41.51-3.37,7.49-11.86,8.14-13.26,16.61C2544,1724.8,2535,1774.17,2526,1824.9Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2817.13,1874.07c-17,2.74-31.47,1.86-49.38,1,15.18-86.21,30.12-171,45.15-256.32,15.81-4.46,30.67-1.91,47.24-1.85C2849.55,1704.15,2829.88,1787.78,2817.13,1874.07Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2437.94,1616.91c17.26-.4,31.76-2.22,48.33,1.64-15,85.06-29.9,169.49-44.93,254.66-16.13,5-31.64,1.77-49.16,2.2C2407.63,1788.17,2422.66,1703.22,2437.94,1616.91Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M358.17,1617.94l-8.05,46.12H183.39c-3.25-16,2.34-30.06,3.61-46.12Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M320.42,1828.7c-2,16.43-3.12,31.45-8.83,45.89h-155c-3.28-16,2.29-30,3.63-45.89Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M972.44,1163.26c13.13-4,25-1.93,39.39-1.51-15.89,50.89-31.21,100-46.49,148.94-13,3.68-24.84,2.49-38.65,1.1C942,1262.09,957,1213.3,972.44,1163.26Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M890.84,1189.72c11.89-5.37,7.74-19.91,16.07-28,11-.9,22.32-1.82,35.68,1.07q-23.6,75.51-46.67,149.32c-13.66.94-25,1.91-36.23-.44-3.07-9.18,6.78-17.21,1.28-26l.06.62c18.49-29.41,25.64-62.4,30.51-96.12Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2444.56,1394.94c14.37-2.48,26.27-2.1,41.31-.34-11.61,45.42-23,90-34.34,134.3-13.83,3-25.61,2.67-40,.27C2422.61,1484.16,2433.47,1440,2444.56,1394.94Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2313.92,1530.38c-13.64.16-25.62,2.46-39.89-2.49l35.24-134.19c14.43,0,27-2.07,40.11,1.64C2337.55,1440.38,2325.91,1484.73,2313.92,1530.38Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2378.54,1394.89c12.66-2.74,24.42-1.46,38.27-1-12.12,46.48-23.69,90.91-35.13,134.79-12.87,4.09-24.23,1.22-37.56,2.47C2351.54,1483.69,2367.12,1440,2378.54,1394.89Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M1951.76,1526.77H1914c11.86-45.82,23.46-90.68,35-135.3,13.64-2.5,24.76-2.58,37-.17C1978,1437.19,1964.44,1480.94,1951.76,1526.77Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2017.05,1391h38.37c-12.08,46.49-23.69,91.21-35.33,136-13.78-.09-25,2.17-37.47-2Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-primary" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-primary" : classes}
        d="M2234.28,1617.73c.61,15.82-2.9,30.37-5.43,46.25h-84.62c-3.62-16.14,4.23-30.09,4.46-46.25Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M568.92,1313.22,392.55,1523.47H231.13C459,1258.54,684.05,996.92,909.9,734.37h408.56L1109.85,1523H944.47c71.17-221.39,142-441.7,213.44-663.92H947.1L696.42,1159.86H869.54c-20.37,52.86-32.07,105.11-54.44,153.36Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2521.32,1528c11.45-45.23,23-90.9,34.78-137.35,75.85,0,149.28.05,222.72-.07,7.61,0,15.6.28,22.78-1.78,25.15-7.23,42.61-22.9,47.79-49.34,5.14-26.17-5.67-46.49-26.94-60.76-76.66-51.45-153.74-102.27-230.54-153.5-35.52-23.69-71.37-46.94-105.93-72-28.66-20.74-37.12-50.34-28.87-84.23,14.4-59.12,29.51-118.07,44.23-177.11,7.78-31.22,33.17-53.19,66.17-53.32,142.59-.55,285.19-.27,427.79-.21,2.36,0,4.71,1,8.14,1.71-10.27,46.33-21.34,91.66-35.41,137.47H2691.4c-39.05,0-64.46,15.57-73.86,45.22-9.72,30.69,2.21,58.22,35.92,80.47q159.39,105.16,319.08,209.88c31.47,20.64,45.18,54.17,36.13,90.44q-22.3,89.45-44.59,178.9c-6.54,26-32.75,48.8-59.08,48.87-126,.34-251.93-.06-377.89-.23C2526.55,1531.06,2526,1530.49,2521.32,1528Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M1740.29,1174.55c13.11,56.13,25.87,111.62,39.09,167,6.29,26.39,30.81,45.9,58.37,46.59,21.57.53,43.17.1,67,.1-12.12,47.61-23.59,92.65-35.51,139.44-51.17,0-102.36,2.76-153.06-1-30-2.25-45.72-27.11-52.65-55.93-18.34-76.24-36.8-152.46-55.67-230.59-43.4,21.57-84.82,45.64-128.88,63.07-42.25,16.72-62.82,43.7-70,88.22-7.36,45.32-22.42,89.4-34.39,135.12h-146q101-395.64,201.16-787.81c9.11-6.08,16.36-4.12,23.19-4.12q265.61-.18,531.21-.08c5.11,0,10.31-.42,15.31.4,35.52,5.79,48.94,27.87,39.07,65.8-14.19,54.51-29.34,108.77-43.62,163.26-7.85,30-12,60.81-32.85,86.33-12.42,15.18-26.45,27.37-43.56,35.92-54.7,27.32-109.68,54-164.54,81C1749.4,1169.5,1745,1172,1740.29,1174.55Zm-270.19-18c102.81-51.43,201.29-100.64,299.72-150,25.51-12.79,53.1-22.54,71.81-45.84,12.79-15.93,21.81-33.42,14-54.44-8.15-22-27-29-48.24-31.65-5-.63-10.2-.17-15.31-.17H1541.92C1518.1,968,1494.59,1060.3,1470.1,1156.5Z"
      />
      <path
        className={classes === 'navbar-banner' ? "transition-all duration-100 ease-linear fill-gray-300 group-hover:fill-white" : classes === 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-gray-300" : classes === 'banner' ? "fill-white" : classes}
        d="M2267.51,742.94h147q-102,397.42-203,791h-148.2C2131.66,1269.33,2199.5,1006.45,2267.51,742.94Z"
      />
      <path
        className={classes === 'navbar-banner' || 'navbar-banner-soon' ? "transition-all duration-100 ease-linear fill-black" : classes === 'banner' ? "fill-black" : classes}
        d="M1470.1,1156.5c24.49-96.2,48-188.53,71.82-282.06h250.19c5.11,0,10.28-.46,15.31.17,21.21,2.65,40.09,9.62,48.24,31.65,7.78,21-1.24,38.51-14,54.44-18.71,23.3-46.3,33-71.81,45.84C1671.39,1055.86,1572.91,1105.07,1470.1,1156.5Zm95.92-249c-16.29,64.38-32.15,127-48.46,191.44,91.73-45.76,181.42-90.27,270.85-135.3,18.57-9.35,35.87-20.87,39.27-44.12-3.13-9-10-12.06-19.11-12C1728.07,907.54,1647.58,907.51,1566,907.51Z"
      />
    </svg>
  );
};

export default VerseExkursIcon;
