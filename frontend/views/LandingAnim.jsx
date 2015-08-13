var React = require('react/addons');
var config = require('../config.js');
var Classnames = require('classnames');
var ScenicStore = require('../stores/Stores.jsx');
var Actions = require('../stores/Actions.jsx');


var LandingAnim = React.createClass({
  render: function() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
         viewBox="0 0 640 2264.1" width="100%" height="100%" preserveAspectRatio="none">
      <g>
        <polygon className="st45" points="0,0 0,1696.3 0,1708.2 0,2264.6 640,2264.6 640,1708.2 640,1696.3 640,0   "/>
        <g>
          <path className="st28" d="M179.5,1768.7h48.4c0-3.6,0-6.5,0-6.5s0.1-2.2-1.9-3.3c-1.6-0.9-11.5-5.1-15.3-6.7c-1-0.4-1-0.4-1.3-0.8
            c-0.3-0.4-0.4-1.3-0.4-1.3l-4-74.2c0,0-0.2-2.2-1.3-2.2s-1.3,2.2-1.3,2.2l-3.9,73.4c0,0-0.1,1.2-0.4,1.7c-0.3,0.5-0.5,0.8-1.5,1.2
            c-3.9,1.6-13.6,5.7-15.2,6.6c-2,1.2-1.9,3.3-1.9,3.3S179.5,1765.1,179.5,1768.7z"/>
          <path className="st28" d="M179.5,1776.8c0,2.2,0,3.9,0,4.5c0,1.9,1.8,2.7,1.8,2.7l13.8,8.9c0,0,0.7,0.5,0.9,1c0.2,0.5,0.2,1.5,0.2,1.5
            l-14.8,231.4l22.4-1.5l22.4,1.5l-14.9-231.9c0,0-0.1-0.7,0.1-1.1c0.2-0.5,0.6-0.7,0.6-0.7l14.1-9.1c0,0,1.8-0.8,1.8-2.7
            c0-0.5,0-2.3,0-4.5H179.5z"/>
        </g>
        <path className="st13-intro" d="M91.1,1633.5c-1.4,0-2.7,0.2-3.9,0.6c-1.3-11.9-11.4-21.2-23.6-21.2c-2.3,0-4.6,0.3-6.7,1
          c-1.3-5.8-6.4-10.1-12.5-10.1c-1.8,0-3.6,0.4-5.2,1.1c-5.2-5.3-12.4-8.5-20.4-8.5c-15.9,0-28.7,12.9-28.7,28.7
          c0,2.8,0.4,5.6,1.2,8.2c-0.4,0-0.8-0.1-1.2-0.1c-8.1,0-14.6,6.6-14.6,14.6s6.6,14.6,14.6,14.6v0.2H91.1v-0.4
          c7.9,0,14.4-6.4,14.4-14.4S99,1633.5,91.1,1633.5z"/>
        <rect x="116.5" y="1856.4" className="st28" width="58.5" height="150.7"/>
        <polygon className="st28" points="640,2033.8 500.1,2009.1 500.1,1904.5 640,1904.5   "/>
        <rect x="0" y="1931.7" className="st28" width="59.5" height="114.2"/>
        <polygon className="st28" points="105.8,2027.1 47.6,2027.1 47.6,1836.4 105.8,1816.4   "/>
        <polygon className="st28" points="434.9,1854.6 388.8,1834.6 388.8,1990.1 434.9,1990.1   "/>
        <polygon className="st28" points="467.7,1879.6 467.7,1884.3 444.8,1884.3 444.8,2003.3 487.8,2003.3 487.8,1912.9 487.8,1884.3 
          487.8,1879.6  "/>
        <path className="st28" d="M305.6,1914.5c-40,0-72.5,22.8-72.5,42.6v42.6h145v-42.6C378.1,1937.3,345.6,1914.5,305.6,1914.5z"/>
        <rect x="421" y="1935.2" className="st28" width="59.5" height="110.8"/>
        <rect x="472.9" y="1970.1" className="st28" width="59.5" height="33.2"/>
        <path className="st46" d="M640,2264.1H0v-235c0,0,115.5-50,320-50s320,50,320,50V2264.1z"/>
        <path className="st47" d="M640,2264.1l0-28.5c0,0-258.1-8.7-350.3-30.4c-30.4-7.1-63.6-15-88.9-34.4c-17.9-13.7-22.6-35.9-3.9-52.8
          c18.7-16.9,48.8-26,77.4-35.1c41.4-13.2,81.3-23,122.1-38c17.7-6.5,58.7-23,51.3-42.8c-6-16.3-35.6-19.4-35.6-19.4s-6.1-0.6-12.8-1
          c-6-0.3-11.9-0.8-17.9-0.9c8.9,0.3,28.6,6.6,33.2,14.9c9.2,16.6-76,34.6-84.7,36.6c-49.6,11.5-99.7,20.8-149.3,32.6
          c-9.5,2.3-19,4.6-28.5,7c-40.2,10.3-113.1,34.4-113.1,83.3c0,38.7,50.7,81.6,90.4,109L640,2264.1z"/>
        <circle className="st48" cx="484" cy="1283.9" r="55.6"/>
        <g>
          <circle className="st13-intro" cx="586" cy="1350.8" r="11.4"/>
          <circle className="st13-intro" cx="452.9" cy="1355.6" r="6.6"/>
          <circle className="st13-intro" cx="566.7" cy="1336" r="14.8"/>
          <circle className="st13-intro" cx="542.5" cy="1321" r="23.5"/>
          <circle className="st13-intro" cx="516.3" cy="1329.1" r="16.2"/>
          <circle className="st13-intro" cx="500" cy="1336.3" r="13.9"/>
          <circle className="st13-intro" cx="478.4" cy="1343.6" r="12.9"/>
          <circle className="st13-intro" cx="462.6" cy="1350.1" r="6.6"/>
          <polygon className="st13-intro" points="586,1362.2 452.9,1362.2 464.2,1345.8 506.5,1339.5 553.6,1329.1 588.6,1354.9     "/>
        </g>
        <rect x="497" y="2151.7" className="st2" width="30.7" height="4.3"/>
        <ellipse className="st2" cx="496.1" cy="2153.9" rx="11.8" ry="2.2"/>
        <rect x="557.4" y="2188.5" className="st2" width="56.5" height="4.6"/>
        <path className="st2" d="M586.7,2190.8c0,1.3-24.5,2.3-30.2,2.3s-10.2-1-10.2-2.3c0-1.3,4.5-2.3,10.2-2.3S586.7,2189.5,586.7,2190.8z"
          />
        <rect x="201.6" y="2013" className="st2" width="15.6" height="4"/>
        <ellipse className="st2" cx="201.2" cy="2015" rx="4.3" ry="2"/>
        <rect x="467.9" y="2008" className="st2" width="11" height="2.8"/>
        <ellipse className="st2" cx="467.7" cy="2009.4" rx="3.1" ry="1.4"/>
        <rect x="557.9" y="2042.1" className="st2" width="16.4" height="2.7"/>
        <ellipse className="st2" cx="557.5" cy="2043.5" rx="4.6" ry="1.4"/>
        <g>
          <line className="st49" x1="478.1" y1="1972.6" x2="478.1" y2="2010.8"/>
          <path className="st4-intro" d="M478.1,1996.9c0,0-7.7,0.1-7.7-9.3c0-7.5,7.7-24.6,7.7-24.6s7.7,17,7.7,24.6
            C485.8,1997,478.1,1996.9,478.1,1996.9z"/>
          <path className="st5-intro" d="M478.1,1963.1v33.8c0,0,7.7,0.1,7.7-9.3C485.8,1980.1,478.1,1963.1,478.1,1963.1z"/>
        </g>
        <g>
          <line className="st50" x1="215.6" y1="1963.1" x2="215.6" y2="2017"/>
          <path className="st4-intro" d="M215.6,1997.4c0,0-10.9,0.1-10.9-13.1c0-10.7,10.9-34.7,10.9-34.7s10.9,24,10.9,34.7
            C226.4,1997.5,215.6,1997.4,215.6,1997.4z"/>
          <path className="st5-intro" d="M215.6,1949.7v47.8c0,0,10.9,0.1,10.9-13.1C226.4,1973.7,215.6,1949.7,215.6,1949.7z"/>
        </g>
        <rect x="147.7" y="2038.1" className="st2" width="26.3" height="4"/>
        <path className="st13-intro" d="M306.2,1283.8c-1.4,0-2.7,0.2-4,0.6c0.7-1.9,1.1-4,1.1-6.1c0-10-8.1-18.1-18.1-18.1c-1.5,0-2.9,0.2-4.3,0.5
          c0-0.2,0-0.5,0-0.7c0-17.9-14.5-32.4-32.4-32.4c-1.1,0-2.2,0.1-3.2,0.2c0.3-2.3,0.5-4.6,0.5-7c0-28-22.7-50.7-50.7-50.7
          c-28,0-50.7,22.7-50.7,50.7c0,2.2,0.2,4.4,0.4,6.5c-5.8-3.5-12.6-5.6-19.9-5.6c-21.2,0-38.4,17.2-38.4,38.4c0,4.2,0.7,8.3,2,12.1
          c-1.8-0.5-3.7-0.8-5.6-0.8c-10.5,0-19,8.5-19,19c0,10.5,8.5,19,19,19h223.1c7.1,0,12.8-5.7,12.8-12.8
          C319,1289.6,313.3,1283.8,306.2,1283.8z"/>
        <g>
          <line className="st51" x1="174" y1="1956.3" x2="174" y2="2042.1"/>
          <path className="st4-intro" d="M174,2012.5c0,0-17.8,0.2-17.8-21.4c0-17.5,17.8-56.9,17.8-56.9s17.8,39.4,17.8,56.9
            C191.9,2012.7,174,2012.5,174,2012.5z"/>
          <path className="st5-intro" d="M174,1934.2v78.3c0,0,17.8,0.2,17.8-21.4C191.9,1973.6,174,1934.2,174,1934.2z"/>
        </g>
        <ellipse className="st2" cx="147.1" cy="2040.1" rx="5" ry="2"/>
        <rect x="53.1" y="2075.5" className="st2" width="22.6" height="3.4"/>
        <g>
          <line className="st52" x1="75.1" y1="2020.5" x2="75.1" y2="2078.9"/>
          <path className="st4-intro" d="M75.1,2043c0,0-23.6,0.2-23.6-28.3c0-23.1,23.6-75.2,23.6-75.2s23.6,52.1,23.6,75.2
            C98.6,2043.2,75.1,2043,75.1,2043z"/>
          <path className="st5-intro" d="M75.1,1939.5V2043c0,0,23.6,0.2,23.6-28.3C98.6,1991.6,75.1,1939.5,75.1,1939.5z"/>
        </g>
        <g>
          <line className="st51" x1="526" y1="2079.7" x2="526" y2="2156"/>
          <path className="st4-intro" d="M526,2105.2c0,0-26.6,0.3-26.6-32c0-26.1,26.6-85,26.6-85s26.6,58.9,26.6,85
            C552.6,2105.4,526,2105.2,526,2105.2z"/>
          <path className="st5-intro" d="M526,1988.2v117c0,0,26.6,0.3,26.6-32C552.6,2047.1,526,1988.2,526,1988.2z"/>
        </g>
        <g>
          <line className="st51" x1="573.3" y1="1991.8" x2="573.3" y2="2044.8"/>
          <path className="st4-intro" d="M573.3,2025.6c0,0-10.7,0.1-10.7-12.9c0-10.5,10.7-34.2,10.7-34.2s10.7,23.7,10.7,34.2
            C584,2025.7,573.3,2025.6,573.3,2025.6z"/>
          <path className="st5-intro" d="M573.3,1978.5v47.1c0,0,10.7,0.1,10.7-12.9C584,2002.2,573.3,1978.5,573.3,1978.5z"/>
        </g>
        <g>
          <line className="st51" x1="612.4" y1="2104.1" x2="612.4" y2="2193.1"/>
          <path className="st4-intro" d="M612.4,2137.6c0,0-35,0.3-35-42.1c0-34.3,35-111.8,35-111.8s35,77.4,35,111.8
            C647.4,2138,612.4,2137.6,612.4,2137.6z"/>
          <path className="st5-intro" d="M612.4,1983.8v153.9c0,0,35,0.3,35-42.1C647.4,2061.2,612.4,1983.8,612.4,1983.8z"/>
        </g>
        <g>
          <path className="st53" d="M197.7,1530.8h-2.4l-0.4-1.6c-0.2-0.2-0.6-0.4-0.9-0.5c-0.4-0.1-0.8-0.2-1.2-0.2c-0.6,0-1.1,0.1-1.5,0.4
            c-0.4,0.3-0.5,0.6-0.5,1.1c0,0.4,0.2,0.7,0.5,1c0.3,0.3,1,0.5,2.1,0.7c1.6,0.3,2.8,0.8,3.6,1.4c0.8,0.6,1.2,1.5,1.2,2.6
            c0,1.2-0.5,2.2-1.5,2.9c-1,0.8-2.4,1.1-4,1.1c-1,0-2-0.1-2.8-0.4c-0.9-0.3-1.6-0.7-2.3-1.3l0-3h2.5l0.5,1.7
            c0.2,0.2,0.5,0.3,0.9,0.4c0.4,0.1,0.7,0.1,1.1,0.1c0.7,0,1.3-0.1,1.7-0.4c0.4-0.3,0.6-0.6,0.6-1.1c0-0.4-0.2-0.7-0.6-1
            c-0.4-0.3-1.1-0.5-2.1-0.8c-1.6-0.3-2.7-0.8-3.5-1.4c-0.8-0.6-1.2-1.5-1.2-2.5c0-1.1,0.5-2.1,1.4-2.9c0.9-0.8,2.2-1.2,3.9-1.2
            c1,0,2,0.1,2.9,0.4c0.9,0.3,1.6,0.6,2.2,1.1L197.7,1530.8z"/>
          <path className="st53" d="M206.1,1539.7c-1.9,0-3.4-0.6-4.6-1.8c-1.1-1.2-1.7-2.8-1.7-4.7v-0.5c0-2,0.5-3.6,1.6-4.8
            c1.1-1.3,2.5-1.9,4.3-1.9c1.8,0,3.2,0.5,4.2,1.6c1,1.1,1.5,2.5,1.5,4.4v1.9h-7.9l0,0.1c0.1,0.9,0.4,1.6,0.9,2.1
            c0.5,0.6,1.2,0.8,2.1,0.8c0.8,0,1.4-0.1,2-0.2c0.5-0.2,1.1-0.4,1.7-0.8l1,2.2c-0.5,0.4-1.3,0.8-2.1,1.1
            C208.1,1539.6,207.2,1539.7,206.1,1539.7z M205.8,1528.7c-0.7,0-1.2,0.3-1.6,0.8c-0.4,0.5-0.6,1.2-0.7,2l0,0.1h4.4v-0.3
            c0-0.8-0.2-1.4-0.5-1.8C207,1529,206.5,1528.7,205.8,1528.7z"/>
          <path className="st53" d="M219.4,1539.7c-1.9,0-3.4-0.6-4.6-1.8c-1.1-1.2-1.7-2.8-1.7-4.7v-0.5c0-2,0.5-3.6,1.6-4.8
            c1.1-1.3,2.5-1.9,4.3-1.9c1.8,0,3.2,0.5,4.2,1.6c1,1.1,1.5,2.5,1.5,4.4v1.9h-7.9l0,0.1c0.1,0.9,0.4,1.6,0.9,2.1
            c0.5,0.6,1.2,0.8,2.1,0.8c0.8,0,1.4-0.1,2-0.2c0.5-0.2,1.1-0.4,1.7-0.8l1,2.2c-0.5,0.4-1.3,0.8-2.1,1.1
            C221.5,1539.6,220.5,1539.7,219.4,1539.7z M219.1,1528.7c-0.7,0-1.2,0.3-1.6,0.8c-0.4,0.5-0.6,1.2-0.7,2l0,0.1h4.4v-0.3
            c0-0.8-0.2-1.4-0.5-1.8C220.4,1529,219.8,1528.7,219.1,1528.7z"/>
          <path className="st53" d="M237.8,1523v3.2h2.3v2.5h-2.3v6.7c0,0.5,0.1,0.9,0.3,1.1s0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.6,0
            c0.2,0,0.4-0.1,0.6-0.1l0.3,2.6c-0.4,0.1-0.8,0.2-1.2,0.3c-0.4,0.1-0.8,0.1-1.3,0.1c-1.2,0-2.2-0.3-2.8-1c-0.7-0.7-1-1.7-1-3.2
            v-6.7h-1.9v-2.5h1.9v-3.2H237.8z"/>
          <path className="st53" d="M241.7,1537.3l1.7-0.4v-14l-1.9-0.4v-2.1h5.5v7.5c0.4-0.6,0.9-1.1,1.5-1.4c0.6-0.3,1.3-0.5,2-0.5
            c1.4,0,2.5,0.5,3.3,1.4c0.8,0.9,1.2,2.3,1.2,4.2v5.3l1.7,0.4v2.1h-6.8v-2.1l1.5-0.4v-5.4c0-1-0.2-1.8-0.5-2.2
            c-0.4-0.4-0.9-0.6-1.6-0.6c-0.5,0-0.9,0.1-1.3,0.3c-0.4,0.2-0.7,0.4-0.9,0.8v7.2l1.5,0.4v2.1h-6.8V1537.3z"/>
          <path className="st53" d="M264,1539.7c-1.9,0-3.4-0.6-4.6-1.8c-1.1-1.2-1.7-2.8-1.7-4.7v-0.5c0-2,0.5-3.6,1.6-4.8
            c1.1-1.3,2.5-1.9,4.3-1.9c1.8,0,3.2,0.5,4.2,1.6c1,1.1,1.5,2.5,1.5,4.4v1.9h-7.9l0,0.1c0.1,0.9,0.4,1.6,0.9,2.1
            c0.5,0.6,1.2,0.8,2.1,0.8c0.8,0,1.4-0.1,2-0.2c0.5-0.2,1.1-0.4,1.7-0.8l1,2.2c-0.5,0.4-1.3,0.8-2.1,1.1
            C266,1539.6,265,1539.7,264,1539.7z M263.7,1528.7c-0.7,0-1.2,0.3-1.6,0.8c-0.4,0.5-0.6,1.2-0.7,2l0,0.1h4.4v-0.3
            c0-0.8-0.2-1.4-0.5-1.8C264.9,1529,264.4,1528.7,263.7,1528.7z"/>
          <path className="st53" d="M283.3,1537c0.6,0,1.1-0.2,1.5-0.6c0.4-0.4,0.6-0.9,0.6-1.5h3.2l0,0.1c0,1.3-0.5,2.5-1.5,3.4
            c-1,0.9-2.3,1.3-3.9,1.3c-2,0-3.5-0.6-4.6-1.9s-1.6-2.8-1.6-4.8v-0.4c0-1.9,0.5-3.5,1.6-4.8c1.1-1.3,2.7-1.9,4.7-1.9
            c1.1,0,2,0.2,2.9,0.5s1.6,0.8,2.1,1.3l0,3.5h-2.9l-0.6-2.1c-0.2-0.2-0.4-0.3-0.7-0.4c-0.3-0.1-0.6-0.2-0.9-0.2
            c-1,0-1.7,0.4-2.1,1.1s-0.6,1.7-0.6,2.8v0.4c0,1.2,0.2,2.1,0.6,2.9C281.7,1536.6,282.3,1537,283.3,1537z"/>
          <path className="st53" d="M290.2,1537.3l1.7-0.4v-8.2l-1.9-0.4v-2.1h5.5v10.7l1.7,0.4v2.1h-7V1537.3z M295.4,1523.1h-3.6v-2.7h3.6
            V1523.1z"/>
          <path className="st53" d="M303.6,1523v3.2h2.3v2.5h-2.3v6.7c0,0.5,0.1,0.9,0.3,1.1s0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.6,0
            c0.2,0,0.4-0.1,0.6-0.1l0.3,2.6c-0.4,0.1-0.8,0.2-1.2,0.3c-0.4,0.1-0.8,0.1-1.3,0.1c-1.2,0-2.2-0.3-2.8-1c-0.7-0.7-1-1.7-1-3.2
            v-6.7h-1.9v-2.5h1.9v-3.2H303.6z"/>
          <path className="st53" d="M321.3,1528.4l-1.2,0.2l-4.9,12.9c-0.4,1-0.9,1.7-1.5,2.4c-0.6,0.6-1.6,1-2.9,1c-0.3,0-0.6,0-0.8-0.1
            s-0.6-0.1-0.9-0.2l0.4-2.6c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.3,0c0.6,0,1.1-0.1,1.4-0.4c0.3-0.3,0.6-0.6,0.7-1.1l0.4-1l-4.2-10.9
            l-1.2-0.2v-2.1h6.5v2.1l-1.5,0.2l1.8,5.3l0.2,1l0.1,0l2.1-6.2l-1.5-0.2v-2.1h6.5V1528.4z"/>
          <path className="st53" d="M337.2,1537.8c-0.4,0.6-0.9,1.1-1.5,1.4s-1.2,0.5-1.9,0.5c-1.6,0-2.9-0.6-3.8-1.8c-0.9-1.2-1.3-2.8-1.3-4.7
            v-0.3c0-2.1,0.5-3.8,1.4-5c0.9-1.3,2.2-1.9,3.8-1.9c0.7,0,1.3,0.1,1.8,0.4c0.5,0.3,1,0.7,1.4,1.2v-4.7l-1.9-0.4v-2.1h1.9h3.6v16.5
            l1.7,0.4v2.1h-4.8L337.2,1537.8z M332.2,1533.2c0,1.2,0.2,2.1,0.6,2.7c0.4,0.7,1,1,1.9,1c0.5,0,1-0.1,1.4-0.3
            c0.4-0.2,0.7-0.5,0.9-0.9v-5.6c-0.2-0.4-0.6-0.8-0.9-1c-0.4-0.2-0.8-0.3-1.3-0.3c-0.9,0-1.5,0.4-1.9,1.2c-0.4,0.8-0.6,1.8-0.6,3
            V1533.2z"/>
          <path className="st53" d="M343.3,1537.3l1.7-0.4v-8.2l-1.9-0.4v-2.1h5.5v10.7l1.7,0.4v2.1h-7V1537.3z M348.5,1523.1H345v-2.7h3.6
            V1523.1z"/>
          <path className="st53" d="M351.6,1537.3l1.7-0.4v-8.2h-2v-2.5h2v-1.5c0-1.5,0.4-2.6,1.3-3.4c0.9-0.8,2.1-1.2,3.6-1.2
            c0.3,0,0.6,0,0.9,0.1c0.3,0,0.7,0.1,1,0.2l-0.3,2.6c-0.2,0-0.4-0.1-0.6-0.1c-0.2,0-0.4,0-0.6,0c-0.6,0-1,0.2-1.3,0.5
            s-0.4,0.8-0.4,1.4v1.5h2.6v2.5h-2.6v8.2l1.7,0.4v2.1h-7V1537.3z"/>
          <path className="st53" d="M360.9,1537.3l1.7-0.4v-8.2h-2v-2.5h2v-1.5c0-1.5,0.4-2.6,1.3-3.4c0.9-0.8,2.1-1.2,3.6-1.2
            c0.3,0,0.6,0,0.9,0.1c0.3,0,0.7,0.1,1,0.2l-0.3,2.6c-0.2,0-0.4-0.1-0.6-0.1c-0.2,0-0.4,0-0.6,0c-0.6,0-1,0.2-1.3,0.5
            s-0.4,0.8-0.4,1.4v1.5h2.6v2.5h-2.6v8.2l1.7,0.4v2.1h-7V1537.3z"/>
          <path className="st53" d="M376.1,1539.7c-1.9,0-3.4-0.6-4.6-1.8c-1.1-1.2-1.7-2.8-1.7-4.7v-0.5c0-2,0.5-3.6,1.6-4.8
            c1.1-1.3,2.5-1.9,4.3-1.9c1.8,0,3.2,0.5,4.2,1.6c1,1.1,1.5,2.5,1.5,4.4v1.9h-7.9l0,0.1c0.1,0.9,0.4,1.6,0.9,2.1
            c0.5,0.6,1.2,0.8,2.1,0.8c0.8,0,1.4-0.1,2-0.2c0.5-0.2,1.1-0.4,1.7-0.8l1,2.2c-0.5,0.4-1.3,0.8-2.1,1.1
            C378.1,1539.6,377.1,1539.7,376.1,1539.7z M375.7,1528.7c-0.7,0-1.2,0.3-1.6,0.8c-0.4,0.5-0.6,1.2-0.7,2l0,0.1h4.4v-0.3
            c0-0.8-0.2-1.4-0.5-1.8C377,1529,376.5,1528.7,375.7,1528.7z"/>
          <path className="st53" d="M383.3,1537.3l1.7-0.4v-8.2l-1.9-0.4v-2.1h5.2l0.2,1.9c0.3-0.7,0.7-1.2,1.2-1.6c0.5-0.4,1.1-0.6,1.7-0.6
            c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0.1,0.5,0.1l-0.4,3.2l-1.5,0c-0.5,0-1,0.1-1.3,0.3c-0.3,0.2-0.6,0.5-0.8,0.9v6.4l1.7,0.4v2.1h-7
            V1537.3z"/>
          <path className="st53" d="M399.7,1539.7c-1.9,0-3.4-0.6-4.6-1.8c-1.1-1.2-1.7-2.8-1.7-4.7v-0.5c0-2,0.5-3.6,1.6-4.8
            c1.1-1.3,2.5-1.9,4.3-1.9c1.8,0,3.2,0.5,4.2,1.6c1,1.1,1.5,2.5,1.5,4.4v1.9h-7.9l0,0.1c0.1,0.9,0.4,1.6,0.9,2.1
            c0.5,0.6,1.2,0.8,2.1,0.8c0.8,0,1.4-0.1,2-0.2c0.5-0.2,1.1-0.4,1.7-0.8l1,2.2c-0.5,0.4-1.3,0.8-2.1,1.1
            C401.7,1539.6,400.7,1539.7,399.7,1539.7z M399.4,1528.7c-0.7,0-1.2,0.3-1.6,0.8c-0.4,0.5-0.6,1.2-0.7,2l0,0.1h4.4v-0.3
            c0-0.8-0.2-1.4-0.5-1.8C400.6,1529,400.1,1528.7,399.4,1528.7z"/>
          <path className="st53" d="M406.5,1537.3l1.7-0.4v-8.2l-1.9-0.4v-2.1h5.2l0.2,1.9c0.4-0.7,1-1.2,1.6-1.6c0.6-0.4,1.4-0.6,2.2-0.6
            c1.3,0,2.4,0.4,3.1,1.3c0.7,0.8,1.1,2.2,1.1,3.9v5.7l1.7,0.4v2.1h-6.8v-2.1l1.5-0.4v-5.7c0-0.9-0.2-1.5-0.5-1.9
            c-0.4-0.4-0.9-0.6-1.6-0.6c-0.5,0-0.9,0.1-1.3,0.3c-0.4,0.2-0.7,0.5-0.9,0.8v7.1l1.4,0.4v2.1h-6.7V1537.3z"/>
          <path className="st53" d="M427.8,1523v3.2h2.3v2.5h-2.3v6.7c0,0.5,0.1,0.9,0.3,1.1s0.5,0.3,0.9,0.3c0.2,0,0.5,0,0.6,0
            c0.2,0,0.4-0.1,0.6-0.1l0.3,2.6c-0.4,0.1-0.8,0.2-1.2,0.3c-0.4,0.1-0.8,0.1-1.3,0.1c-1.2,0-2.2-0.3-2.8-1c-0.7-0.7-1-1.7-1-3.2
            v-6.7h-1.9v-2.5h1.9v-3.2H427.8z"/>
          <path className="st53" d="M431.5,1522.6v-2.1h5.5v16.5l1.7,0.4v2.1h-7v-2.1l1.7-0.4v-14L431.5,1522.6z"/>
          <path className="st53" d="M453.5,1528.4l-1.2,0.2l-4.9,12.9c-0.4,1-0.9,1.7-1.5,2.4c-0.6,0.6-1.6,1-2.9,1c-0.3,0-0.6,0-0.8-0.1
            s-0.6-0.1-0.9-0.2l0.4-2.6c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.3,0c0.6,0,1.1-0.1,1.4-0.4c0.3-0.3,0.6-0.6,0.7-1.1l0.4-1l-4.2-10.9
            l-1.2-0.2v-2.1h6.5v2.1l-1.5,0.2l1.8,5.3l0.2,1l0.1,0l2.1-6.2l-1.5-0.2v-2.1h6.5V1528.4z"/>
        </g>
        <g>
          
            <ellipse transform="matrix(-0.103 0.9947 -0.9947 -0.103 2311.9026 1404.7927)" className="st25" cx="522.5" cy="1744.9" rx="28.2" ry="23.5"/>
          
            <ellipse transform="matrix(-0.9783 -0.2074 0.2074 -0.9783 583.3419 3611.4121)" className="st25" cx="480.9" cy="1775.1" rx="28.2" ry="23.5"/>
          
            <ellipse transform="matrix(-6.587160e-02 0.9978 -0.9978 -6.587160e-02 2343.8896 1409.5961)" className="st25" cx="512.1" cy="1801.9" rx="18" ry="15"/>
          
            <ellipse transform="matrix(-0.9699 -0.2436 0.2436 -0.9699 624.7035 3643.9121)" className="st25" cx="537.7" cy="1783.3" rx="18" ry="15"/>
          
            <rect x="499.1" y="1765.1" transform="matrix(0.5886 0.8084 -0.8084 0.5886 1649.9432 314.6427)" className="st25" width="33.5" height="27"/>
          
            <ellipse transform="matrix(-0.103 0.9947 -0.9947 -0.103 2316.7688 1411.5432)" className="st54" cx="521.9" cy="1750.4" rx="18.1" ry="12.2"/>
          
            <ellipse transform="matrix(0.9783 0.2074 -0.2074 0.9783 379.0677 -61.9858)" className="st54" cx="485.2" cy="1777.2" rx="18.1" ry="12.2"/>
          
            <ellipse transform="matrix(0.103 -0.9947 0.9947 0.103 -1333.028 2125.4949)" className="st54" cx="511.9" cy="1801.8" rx="10.6" ry="7.1"/>
          
            <ellipse transform="matrix(0.9783 0.2074 -0.2074 0.9783 381.4128 -72.7709)" className="st54" cx="537.8" cy="1783" rx="10.6" ry="7.1"/>
          <path className="st55" d="M531.3,1801.4L531.3,1801.4c-2.1,1.5-5,1-6.5-1l-24.8-34.1c-1.5-2.1-1-5,1-6.5l0,0c2.1-1.5,5-1,6.5,1
            l24.8,34.1C533.9,1797,533.4,1799.9,531.3,1801.4z"/>
        </g>
        <path className="st56" d="M359.5,2006.3l0-0.8c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4"/>
        <path className="st56" d="M471,2204.2l0-0.8c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4
          c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4l0,0.8"/>
        <path className="st56" d="M370.2,2093.1l0-0.8c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4
          c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4l0,0.8"/>
        <path className="st56" d="M472.8,2057.4c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4l0,0.8"/>
        <path className="st56" d="M482.3,2053.2c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4l0,0.8"/>
        <path className="st56" d="M142.3,2030.4c0-3,2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4l0,0.8"/>
        <path className="st56" d="M132.1,2027.3c0-3,2.4-5.4,5.4-5.4c3,0,5.4,2.4,5.4,5.4l0,0.8"/>
        <path className="st56" d="M270.1,2003.6c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4l0,0.8"/>
        <path className="st56" d="M290.6,2001.3l0-0.8c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4c0-3-2.4-5.4-5.4-5.4c-3,0-5.4,2.4-5.4,5.4"/>
        <g>
          <line className="st51" x1="36.2" y1="2072.1" x2="36.2" y2="2264.1"/>
          <path className="st4-intro" d="M36.2,2220.8c0,0-47.1,0.5-47.1-56.7c0-46.2,47.1-150.5,47.1-150.5s47.1,104.3,47.1,150.5
            C83.3,2221.2,36.2,2220.8,36.2,2220.8z"/>
          <path className="st5-intro" d="M36.2,2013.6v207.2c0,0,47.1,0.5,47.1-56.7C83.3,2117.9,36.2,2013.6,36.2,2013.6z"/>
        </g>
        <g>
          <path className="st13-intro" d="M242.3,499.9c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.5-0.9-2.6V496c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4
            c0.5-0.3,1-0.5,1.6-0.5c1,0,1.7,0.3,2.2,1s0.8,1.5,0.8,2.7v0.5h-5c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,0.9,0.7,1.6,0.7
            c0.4,0,0.8-0.1,1.1-0.3s0.6-0.4,0.8-0.7l0.8,0.6C244.5,499.4,243.5,499.9,242.3,499.9z M242.1,493.2c-0.5,0-0.9,0.2-1.3,0.6
            c-0.3,0.4-0.6,0.9-0.6,1.6h3.7v-0.1c0-0.6-0.2-1.1-0.5-1.5C243.1,493.4,242.7,493.2,242.1,493.2z"/>
          <path className="st13-intro" d="M250,495l1.6-2.7h1.5l-2.4,3.7l2.5,3.7h-1.5L250,497l-1.7,2.8h-1.5l2.5-3.7l-2.4-3.7h1.5L250,495z"/>
          <path className="st13-intro" d="M261.5,496.1c0,1.1-0.3,2-0.8,2.7s-1.2,1-2.1,1c-0.9,0-1.6-0.3-2.1-0.9v3.6h-1.3v-10.2h1.2l0.1,0.8
            c0.5-0.6,1.2-1,2.1-1c0.9,0,1.6,0.3,2.1,1s0.8,1.6,0.8,2.8V496.1z M260.3,496c0-0.8-0.2-1.5-0.5-2s-0.8-0.7-1.5-0.7
            c-0.8,0-1.3,0.3-1.7,1v3.5c0.4,0.7,1,1,1.7,1c0.6,0,1.1-0.2,1.4-0.7C260.1,497.6,260.3,496.9,260.3,496z"/>
          <path className="st13-intro" d="M267,499.9c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.5-0.9-2.6V496c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4
            c0.5-0.3,1-0.5,1.6-0.5c1,0,1.7,0.3,2.2,1s0.8,1.5,0.8,2.7v0.5h-5c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,0.9,0.7,1.6,0.7
            c0.4,0,0.8-0.1,1.1-0.3s0.6-0.4,0.8-0.7l0.8,0.6C269.2,499.4,268.3,499.9,267,499.9z M266.9,493.2c-0.5,0-0.9,0.2-1.3,0.6
            c-0.3,0.4-0.6,0.9-0.6,1.6h3.7v-0.1c0-0.6-0.2-1.1-0.5-1.5C267.8,493.4,267.4,493.2,266.9,493.2z"/>
          <path className="st13-intro" d="M275.8,493.5c-0.2,0-0.4,0-0.6,0c-0.8,0-1.4,0.4-1.7,1.1v5.2h-1.3v-7.4h1.2l0,0.9c0.4-0.7,1-1,1.8-1
            c0.2,0,0.4,0,0.6,0.1V493.5z"/>
          <path className="st13-intro" d="M277.8,490.4c0-0.2,0.1-0.4,0.2-0.5s0.3-0.2,0.6-0.2s0.4,0.1,0.6,0.2s0.2,0.3,0.2,0.5s-0.1,0.4-0.2,0.5
            s-0.3,0.2-0.6,0.2s-0.4-0.1-0.6-0.2S277.8,490.6,277.8,490.4z M279.2,499.7h-1.3v-7.4h1.3V499.7z"/>
          <path className="st13-intro" d="M285.1,499.9c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.5-0.9-2.6V496c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4
            c0.5-0.3,1-0.5,1.6-0.5c1,0,1.7,0.3,2.2,1s0.8,1.5,0.8,2.7v0.5h-5c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,0.9,0.7,1.6,0.7
            c0.4,0,0.8-0.1,1.1-0.3s0.6-0.4,0.8-0.7l0.8,0.6C287.3,499.4,286.3,499.9,285.1,499.9z M284.9,493.2c-0.5,0-0.9,0.2-1.3,0.6
            c-0.3,0.4-0.6,0.9-0.6,1.6h3.7v-0.1c0-0.6-0.2-1.1-0.5-1.5C285.9,493.4,285.5,493.2,284.9,493.2z"/>
          <path className="st13-intro" d="M291.5,492.3l0,0.9c0.6-0.7,1.3-1.1,2.2-1.1c1.6,0,2.4,0.9,2.4,2.6v4.9h-1.3v-4.9c0-0.5-0.1-0.9-0.4-1.2
            s-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.1,0.3s-0.6,0.5-0.7,0.9v5.3h-1.3v-7.4H291.5z"/>
          <path className="st13-intro" d="M301.8,498.8c0.5,0,0.8-0.1,1.2-0.4s0.5-0.6,0.6-1h1.2c0,0.4-0.2,0.8-0.4,1.2s-0.6,0.7-1.1,0.9
            s-0.9,0.3-1.4,0.3c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.6-0.9-2.8v-0.2c0-0.7,0.1-1.4,0.4-1.9s0.6-1,1.1-1.3s1.1-0.5,1.8-0.5
            c0.8,0,1.5,0.2,2.1,0.7s0.8,1.1,0.9,1.9h-1.2c0-0.5-0.2-0.9-0.5-1.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.6,0-1.1,0.2-1.5,0.7
            c-0.4,0.5-0.5,1.1-0.5,2v0.2c0,0.9,0.2,1.5,0.5,2S301.2,498.8,301.8,498.8z"/>
          <path className="st13-intro" d="M310.1,499.9c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.5-0.9-2.6V496c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4
            c0.5-0.3,1-0.5,1.6-0.5c1,0,1.7,0.3,2.2,1s0.8,1.5,0.8,2.7v0.5h-5c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,0.9,0.7,1.6,0.7
            c0.4,0,0.8-0.1,1.1-0.3s0.6-0.4,0.8-0.7l0.8,0.6C312.3,499.4,311.3,499.9,310.1,499.9z M309.9,493.2c-0.5,0-0.9,0.2-1.3,0.6
            c-0.3,0.4-0.6,0.9-0.6,1.6h3.7v-0.1c0-0.6-0.2-1.1-0.5-1.5C310.9,493.4,310.5,493.2,309.9,493.2z"/>
          <path className="st13-intro" d="M319.3,496c0-1.1,0.3-2,0.8-2.7c0.5-0.7,1.2-1,2.1-1c0.9,0,1.6,0.3,2.1,0.9v-3.9h1.3v10.5h-1.2l-0.1-0.8
            c-0.5,0.6-1.2,0.9-2.1,0.9c-0.9,0-1.6-0.4-2.1-1.1S319.3,497.2,319.3,496L319.3,496z M320.5,496.1c0,0.8,0.2,1.5,0.5,2
            s0.8,0.7,1.4,0.7c0.8,0,1.4-0.4,1.8-1.1v-3.4c-0.4-0.7-1-1-1.7-1c-0.6,0-1.1,0.2-1.4,0.7S320.5,495.2,320.5,496.1z"/>
          <path className="st13-intro" d="M331.4,499.9c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.5-0.9-2.6V496c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4
            c0.5-0.3,1-0.5,1.6-0.5c1,0,1.7,0.3,2.2,1s0.8,1.5,0.8,2.7v0.5h-5c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,0.9,0.7,1.6,0.7
            c0.4,0,0.8-0.1,1.1-0.3c0.3-0.2,0.6-0.4,0.8-0.7l0.8,0.6C333.6,499.4,332.6,499.9,331.4,499.9z M331.2,493.2
            c-0.5,0-0.9,0.2-1.3,0.6c-0.3,0.4-0.6,0.9-0.6,1.6h3.7v-0.1c0-0.6-0.2-1.1-0.5-1.5C332.2,493.4,331.8,493.2,331.2,493.2z"/>
          <path className="st13-intro" d="M340.9,497.8c0-0.3-0.1-0.6-0.4-0.8c-0.3-0.2-0.7-0.4-1.3-0.5c-0.6-0.1-1.1-0.3-1.5-0.5
            c-0.4-0.2-0.7-0.4-0.8-0.7c-0.2-0.3-0.3-0.6-0.3-0.9c0-0.6,0.3-1.1,0.8-1.5c0.5-0.4,1.2-0.6,2-0.6c0.8,0,1.5,0.2,2,0.6
            c0.5,0.4,0.8,1,0.8,1.7h-1.3c0-0.3-0.1-0.6-0.4-0.9c-0.3-0.3-0.7-0.4-1.1-0.4c-0.5,0-0.8,0.1-1.1,0.3s-0.4,0.5-0.4,0.8
            c0,0.3,0.1,0.5,0.4,0.7s0.7,0.3,1.3,0.4c0.6,0.1,1.1,0.3,1.5,0.5s0.7,0.4,0.9,0.7c0.2,0.3,0.3,0.6,0.3,1c0,0.7-0.3,1.2-0.8,1.6
            c-0.5,0.4-1.2,0.6-2.1,0.6c-0.6,0-1.1-0.1-1.6-0.3s-0.8-0.5-1.1-0.9c-0.3-0.4-0.4-0.8-0.4-1.2h1.3c0,0.4,0.2,0.8,0.5,1
            c0.3,0.2,0.7,0.4,1.3,0.4c0.5,0,0.9-0.1,1.2-0.3C340.7,498.4,340.9,498.1,340.9,497.8z"/>
          <path className="st13-intro" d="M344.6,490.4c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.6-0.2s0.4,0.1,0.6,0.2s0.2,0.3,0.2,0.5
            s-0.1,0.4-0.2,0.5s-0.3,0.2-0.6,0.2s-0.4-0.1-0.6-0.2C344.7,490.8,344.6,490.6,344.6,490.4z M346,499.7h-1.3v-7.4h1.3V499.7z"/>
          <path className="st13-intro" d="M348.6,496c0-1.2,0.3-2.1,0.8-2.8c0.5-0.7,1.2-1,2.1-1c0.9,0,1.6,0.3,2.1,1l0.1-0.8h1.2v7.2
            c0,1-0.3,1.7-0.9,2.3c-0.6,0.6-1.3,0.8-2.3,0.8c-0.5,0-1.1-0.1-1.6-0.3s-0.9-0.5-1.2-0.9l0.7-0.8c0.5,0.7,1.2,1,2,1
            c0.6,0,1.1-0.2,1.4-0.5c0.3-0.3,0.5-0.8,0.5-1.5V499c-0.5,0.6-1.2,0.9-2.1,0.9c-0.9,0-1.6-0.3-2.1-1
            C348.8,498.1,348.6,497.2,348.6,496z M349.8,496.1c0,0.8,0.2,1.5,0.5,2c0.3,0.5,0.8,0.7,1.4,0.7c0.8,0,1.4-0.4,1.8-1.1v-3.4
            c-0.4-0.7-1-1.1-1.7-1.1c-0.6,0-1.1,0.2-1.4,0.7S349.8,495.2,349.8,496.1z"/>
          <path className="st13-intro" d="M358.8,492.3l0,0.9c0.6-0.7,1.3-1.1,2.2-1.1c1.6,0,2.4,0.9,2.4,2.6v4.9h-1.3v-4.9c0-0.5-0.1-0.9-0.4-1.2
            c-0.2-0.3-0.6-0.4-1.1-0.4c-0.4,0-0.8,0.1-1.1,0.3s-0.6,0.5-0.7,0.9v5.3h-1.3v-7.4H358.8z"/>
          <path className="st13-intro" d="M369.2,499.9c-1,0-1.8-0.3-2.4-1c-0.6-0.7-0.9-1.5-0.9-2.6V496c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4
            c0.5-0.3,1-0.5,1.6-0.5c1,0,1.7,0.3,2.2,1s0.8,1.5,0.8,2.7v0.5h-5c0,0.7,0.2,1.3,0.6,1.8c0.4,0.4,0.9,0.7,1.6,0.7
            c0.4,0,0.8-0.1,1.1-0.3s0.6-0.4,0.8-0.7l0.8,0.6C371.4,499.4,370.4,499.9,369.2,499.9z M369.1,493.2c-0.5,0-0.9,0.2-1.3,0.6
            c-0.3,0.4-0.6,0.9-0.6,1.6h3.7v-0.1c0-0.6-0.2-1.1-0.5-1.5C370,493.4,369.6,493.2,369.1,493.2z"/>
          <path className="st13-intro" d="M374.1,496c0-1.1,0.3-2,0.8-2.7c0.5-0.7,1.2-1,2.1-1c0.9,0,1.6,0.3,2.1,0.9v-3.9h1.3v10.5h-1.2l-0.1-0.8
            c-0.5,0.6-1.2,0.9-2.1,0.9c-0.9,0-1.6-0.4-2.1-1.1C374.4,498.1,374.1,497.2,374.1,496L374.1,496z M375.4,496.1
            c0,0.8,0.2,1.5,0.5,2s0.8,0.7,1.4,0.7c0.8,0,1.4-0.4,1.8-1.1v-3.4c-0.4-0.7-1-1-1.7-1c-0.6,0-1.1,0.2-1.4,0.7
            S375.4,495.2,375.4,496.1z"/>
          <path className="st13-intro" d="M393.7,496.1c0,1.1-0.3,2-0.8,2.7c-0.5,0.7-1.2,1-2.1,1c-0.9,0-1.7-0.3-2.2-1l-0.1,0.9h-1.2v-10.5h1.3v3.9
            c0.5-0.6,1.2-1,2.1-1s1.6,0.3,2.1,1c0.5,0.7,0.8,1.6,0.8,2.8V496.1z M392.4,496c0-0.9-0.2-1.5-0.5-2s-0.8-0.7-1.4-0.7
            c-0.8,0-1.4,0.4-1.8,1.2v3.2c0.4,0.8,1,1.2,1.8,1.2c0.6,0,1.1-0.2,1.4-0.7S392.4,496.9,392.4,496z"/>
          <path className="st13-intro" d="M398.5,497.9l1.7-5.5h1.4l-3,8.5c-0.5,1.2-1.2,1.8-2.2,1.8l-0.2,0l-0.5-0.1v-1l0.3,0c0.4,0,0.8-0.1,1-0.3
            c0.2-0.2,0.4-0.5,0.6-1l0.3-0.8l-2.6-7.3h1.4L398.5,497.9z"/>
        </g>
        <rect x="212.5" y="530.9" className="st60" width="215" height="46.7"/>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path className="st13-intro" d="M254.8,549.8h1.3c1.2,0,2,0.5,2,1.9c0,1.5-1.2,2-2.4,2h-1V549.8z M253.1,559.9h1.7V555h0.9
                      c1.6,0,1.8,0.7,2.3,2.4l0.7,2.5h1.5l-0.7-3.2c-0.2-1.2-0.4-2.2-2-2.5v0c1.2-0.3,2.3-0.9,2.3-2.7c0-2.2-1.6-3-3.4-3h-3.3
                      V559.9z"/>
                    <path className="st13-intro" d="M267.7,548.5h1.7v11.5h-1.7V548.5z"/>
                    <path className="st13-intro" d="M279.2,549.8h-2.9v-1.3h7.4v1.3h-2.9v10.1h-1.7V549.8z"/>
                    <path className="st13-intro" d="M290.8,548.5h1.7v11.5h-1.7V548.5z"/>
                    <path className="st13-intro" d="M319.1,550L319.1,550l1.6,5.3h-3.3L319.1,550z M314.2,559.9h1.8l1.1-3.3h4.1l1.1,3.3h1.8l-3.9-11.5h-2
                      L314.2,559.9z"/>
                    <path className="st13-intro" d="M331.2,548.5h1.7v10.1h4.4v1.3h-6.1V548.5z"/>
                  </g>
                  <g>
                    <path className="st13-intro" d="M346.2,548.5h2.3l3.3,9.4h0l3.3-9.4h2.3v11.5h-1.5v-9.5h0l-3.3,9.5H351l-3.3-9.5h0v9.5h-1.5V548.5z"/>
                    <path className="st13-intro" d="M369.4,550L369.4,550l1.6,5.3h-3.3L369.4,550z M364.5,559.9h1.8l1.1-3.3h4.1l1.1,3.3h1.8l-3.9-11.5h-2
                      L364.5,559.9z"/>
                    <path className="st13-intro" d="M385.7,553.7c1.1,0.6,2.4,1.3,2.4,3.1c0,2.2-1.8,3.3-4.1,3.3c-1.4,0-2.6-0.3-2.9-0.4v-1.7
                      c0.7,0.4,1.8,0.8,3,0.8c1.1,0,2.2-0.4,2.2-1.7c0-1.2-1-1.7-1.9-2.2l-1-0.6c-1.1-0.6-2.5-1.3-2.5-3c0-2,1.7-3,3.8-3
                      c1.1,0,2.2,0.2,2.6,0.3v1.6c-0.2-0.1-1.5-0.6-2.7-0.6c-1.1,0-1.9,0.5-1.9,1.5c0,0.9,1,1.4,1.9,1.9L385.7,553.7z"/>
                    <path className="st13-intro" d="M399.7,553.7c1.1,0.6,2.4,1.3,2.4,3.1c0,2.2-1.8,3.3-4.1,3.3c-1.4,0-2.6-0.3-2.9-0.4v-1.7
                      c0.7,0.4,1.8,0.8,3,0.8c1.1,0,2.2-0.4,2.2-1.7c0-1.2-1-1.7-1.9-2.2l-1-0.6c-1.1-0.6-2.5-1.3-2.5-3c0-2,1.7-3,3.8-3
                      c1.1,0,2.2,0.2,2.6,0.3v1.6c-0.2-0.1-1.5-0.6-2.7-0.6c-1.1,0-1.9,0.5-1.9,1.5c0,0.9,1,1.4,1.9,1.9L399.7,553.7z"/>
                  </g>
                </g>
              </g>
            </g>
            <path className="st13-intro" d="M242.8,549.6c1.4,0,2.4,0.7,2.7,0.9V549c-0.5-0.2-1.7-0.7-3-0.7c-2.5,0-4.5,1.5-4.6,5.9h0
              c0,4.4,2.1,5.9,4.6,5.9c1.3,0,2.5-0.5,3-0.7v-1.5c-0.3,0.2-1.3,0.9-2.7,0.9c-2.3,0-3-1.9-3.1-4.6h0
              C239.8,551.5,240.6,549.6,242.8,549.6z"/>
            <path className="st13-intro" d="M305.1,549.6c1.4,0,2.4,0.7,2.7,0.9V549c-0.5-0.2-1.7-0.7-3-0.7c-2.5,0-4.5,1.5-4.6,5.9h0
              c0,4.4,2.1,5.9,4.6,5.9c1.3,0,2.5-0.5,3-0.7v-1.5c-0.3,0.2-1.3,0.9-2.7,0.9c-2.3,0-3-1.9-3.1-4.6h0
              C302.1,551.5,302.9,549.6,305.1,549.6z"/>
          </g>
        </g>
        <g id="Layer_4_1_">
          <g>
            <g>
              <path className="st4-intro" d="M143.9,1452.4c7.5-1.7,15.3-3.7,23-3.5c-1.4-2.1-2.9-4.1-4.3-6.1c-3.1,11-4.9,23.6-4.2,35
                c0.4,6.4,1.8,13.5,6.4,18c4.7,4.6,11.9,5.1,17.4,1.6c5.4-3.4,8.8-9.7,11.2-15.8c2.8-7,4.6-14.4,5.9-21.8
                c0.9-5.1,1.9-10.6,1.8-15.8c-0.1-6.9-10.1-15.4-16.2-10.7c-2.5,1.9-3.9,6.2-4.7,9.1c-1.1,4.2-1.1,9.3,2,12.7
                c3.4,3.7,9.4,3.9,14,4.2c5.6,0.5,11.3,0.5,16.9-0.6c-1.7-2.4-3.4-4.7-5.1-7.1c-3.8,7.5-6.5,15.1-7.5,23.6
                c-1,8-1.4,17.8,6.3,22.4c5.8,3.4,12.9,1.1,18.4-1.7c5.4-2.8,10.1-6.8,14.4-11.3c5.6-6,11.4-13.5,12.9-22.1
                c1.3-7.5-2.2-14.4-9.7-15.4c-15.2-2.2-22.9,17.9-20.5,31.1c3,16.1,17.9,22.9,32,20.8c7.7-1.2,13.8-5,19.4-10.6
                c3.3-3.3,6.3-7,9.4-10.6c2.7-3.1,5.4-6.3,7.1-10.2c3.7-8.5,0.2-18.5-9-20.1c-8.3-1.4-15.6,4.4-19.2,12.1
                c-3.4,7.3-4.7,16.7-1.8,24.5c2.8,7.6,8.9,13.7,16.7,14.9c22.7,3.6,32.6-23,34.2-42.7c0.1-1.3,0.2-2.6,0.1-3.9
                c-0.2-6.2-9.1-6.2-9.1,0c0,14.2-0.9,28.5-1.3,42.7c-0.2,6.2,8.9,6.2,9.1,0c0.2-7.8,0.7-15.6,2.5-23.2c0.7-3,1.7-6,2.8-8.8
                c0.9-2.3,2.1-5.2,4.1-6.5c1-0.6,2-0.7,3.1-0.6c-0.7-0.1,0.4,0.1,0.5,0.2c0.7,0.3-0.4-0.3,0.5,0.3c0.8,0.4,0.1,0,0.2,0.1
                c0.3,0.2,0.8,1.1,0.3,0.3c0.2,0.3,0.4,0.6,0.5,1c-0.4-0.9,0.1,0.2,0.1,0.5c0.1,0.4,0.2,0.8,0.3,1.2c0.1,0.2,0-0.4,0.1,0.5
                c0.1,1,0.1,2.1,0.1,3.2c-0.1,2.3-0.3,4.7-0.5,7c-0.9,7.8-3.8,19.5,2.2,25.8c3.7,3.9,9.8,4.1,14.5,2.3c6.9-2.6,11.3-9.2,14.4-16
                c8-17.4,14.1-36.4,16.3-55.7c1-8.7,1.6-19.2-1.8-27.5c-2.7-6.7-9.7-8.1-14.1-2.4c-3.2,4.1-4.9,9.3-6.4,14.3
                c-2.5,8.4-3.9,17.1-4.6,25.7c-1.2,13.8-1.4,28.5,1.6,42.1c1.3,5.7,3.3,11.9,7.4,16.1c4.6,4.8,11.5,6.2,16.8,1.8
                c5.5-4.6,8.8-12.5,11.8-19.1c3.1-6.8,6.2-15.2,13-18.5c3.4-1.7,7.4-2.1,11.1-1.4c5.7,1,8.2-8,2.4-9.3
                c-19.1-4.1-35.3,13.3-33.8,33.5c0.4,4.6,1.4,9.2,4.3,12.7c3.3,4,8.4,5,13.1,3.7c4.2-1.2,8.7-4.1,11.2-7.9
                c1.8-2.7,2.8-6.1,3.7-9.3c2.2-7.9,3.3-16,5.2-23.9c-2.9-0.8-5.8-1.7-8.8-2.6c-1.8,7.7-3.2,15.6-4.3,23.5
                c-0.5,3.9-1.2,7.5,0.4,11.3c1.7,4.1,5.1,7.5,9.2,8.8c9.7,3.1,15-5.9,18.5-13.9c2.2-4.9,3.6-9.5,4.2-14.9
                c0.7-5.3,0.6-10.8,1.4-16.1c-3-0.5-5.9-0.8-8.9-1.3c0,14.2-0.6,28.4-0.4,42.5c0.1,5.2,8,6.8,8.9,1.3c1.8-10.3,2.4-21.2,6.2-31
                c0.8-2,3.1-8.2,6.3-7.3c1.2,0.3,0.8,2.3,0.8,3.4c0,3.5-0.2,7-0.5,10.6c-0.4,6.1-1.5,13.3,0.5,19.2c1.9,5.4,6.8,9.1,12.2,9.3
                c10.1,0.5,19.2-9.1,25.9-15.9c7.2-7.3,16.6-19.1,10.6-30.3c-2.7-5-8.2-7.3-13.4-6.1c-5.3,1.3-9.5,5.9-12.4,10.6
                c-5.4,8.9-7.3,22.1-0.8,31c6.2,8.2,17.1,10.6,26.5,9.7c11.2-1,21.7-6.3,27.9-16.5c5.4-8.9,8.7-21.6,5.3-32
                c-1.9-5.9-10.7-3.3-8.8,2.6c2.4,7.1,0.3,15.4-2.9,21.9c-3.8,7.7-10,12-17.9,13.8c-6.9,1.5-16.2,1.3-21.8-4.2
                c-5.9-5.9-3.2-16.5,1.1-22.6c1.7-2.4,6-7.2,8.9-4.1c2.9,3.1,0.1,8.3-1.8,11.1c-2.6,4.1-6.1,7.5-9.5,10.8c-3.1,3-6.3,6-10,8.3
                c-2.7,1.7-6.5,3.5-9.3,1.2c-1.6-1.4-1.7-3.4-1.8-5.5c-0.1-2.9,0.1-5.8,0.2-8.7c0.5-8.3,3.9-23.8-6.4-27
                c-9.5-2.9-15.5,7.4-18.2,15.3c-3.2,9.5-4,19.7-5.7,29.6c3,0.5,5.9,0.8,8.9,1.3c-0.2-14.2,0.4-28.4,0.4-42.5
                c0-5.3-8.1-6.8-8.9-1.3c-1.3,8.5-0.3,18-3.4,26c-1.1,3-2.6,6.2-4.2,8.9c-1.3,2.2-2.7,4.2-5.3,3.3c-5.6-2-3.3-8.3-2.5-12.8
                c1-6.3,2.1-12.7,3.6-18.9c1.4-6.1-7.2-8.6-8.8-2.6c-1.7,7-2.7,14-4.4,21c-0.8,3.2-1.6,6.5-3.1,9.1c-0.3,0.5-0.3,0.5,0,0.1
                c-0.2,0.3-0.5,0.6-0.8,0.8c-0.8,0.7-1.6,1.4-2.5,1.9c-1.6,1-3.7,2.1-5.6,1.5c-3-1-3.3-6.1-3.4-8.8c-0.1-4,0.5-8,2.2-11.5
                c3.9-7.9,11.8-12.8,20.2-11c0.8-3.1,1.6-6.2,2.4-9.3c-8-1.4-16.3-0.1-22.7,5.5c-5.6,4.8-8.6,12-11.6,18.8
                c-1.3,3-2.8,5.9-4.3,8.7c-1.3,2.4-3.1,7-5.8,8.1c-3.4,1.5-6.3-4-7.4-6.9c-3.9-9.9-3.9-21.8-3.8-32.4c0.2-14.1,1.6-28.9,6.7-42
                c0.7-1.9,1.8-4.1,2.8-5.4c0.1-0.1,0.2-0.3,0.4-0.4c0.4-0.4,0.5-0.5,0.1-0.1c0.1,0-1.3,0.2-1.3,0.2c-0.9,0.5,0.1-0.6-0.3,0.1
                c-0.2,0.4,0.8,3,0.9,3.5c1.6,8.2,0.8,16.9-0.5,25.1c-1.5,9.1-3.9,18-6.8,26.6c-2.7,8-5.6,16.4-9.7,23.7c-1.4,2.4-3,4.8-5.2,6.4
                c-1.2,0.8-2.5,1.5-4,1.7c-0.6,0.1-1.2,0.1-1.8,0.1c-0.7,0,0.2,0.2-0.9-0.1c-0.8-0.3-0.1,0.1,0.1,0.1c-0.3-0.1-0.6-0.4-0.9-0.6
                c0.9,0.5,0.1,0.1-0.1-0.2c0.7,1,0.1,0-0.1-0.2c-0.5-1.1,0.3,1-0.1-0.2c-0.1-0.4-0.2-0.8-0.3-1.2c-0.1-0.1-0.2-1.5-0.1-0.4
                c-0.1-0.5-0.1-0.9-0.1-1.4c-0.4-8.5,2.4-16.9,1.8-25.4c-0.4-4.8-1.8-9.6-5.9-12.2c-5.3-3.3-12.3-2.1-16.4,2.6
                c-4.3,4.8-6.9,12.6-8.3,19c-1.8,8.3-2.4,16.9-2.7,25.4c3,0,6,0,9.1,0c0.4-14.2,1.3-28.5,1.3-42.7c-3,0-6,0-9.1,0
                c0.2,5.7-0.8,10.1-2.4,16.1c-1.9,6.7-4.9,14.1-10,18.2c-6.6,5.2-16.4,3.8-20.5-4.6c-2.5-5.1-1.8-11.7,0.3-16.9
                c1.7-4.2,6.5-10.5,11.5-7.9c7.7,4.1-15.1,25.9-18.5,28.4c-7.2,5.1-19.4,5.9-26.4-0.3c-7.2-6.4-6.9-19.5-0.4-26.2
                c1.5-1.5,6.4-4.8,8-1.5c0.8,1.5-0.4,4.4-0.8,5.9c-1.1,3.1-2.9,6-4.8,8.6c-3.4,4.6-7.8,9.3-12,12.3c-3.6,2.5-8.3,5.5-12.7,5.3
                c-5.9-0.4-4.2-9.3-3.7-13.5c0.8-7.1,3.3-13.4,6.4-19.6c1.9-3.9-1.3-7.9-5.1-7.1c-3.6,0.7-7.3,0.6-10.9,0.5
                c-3.5-0.1-7.3-0.2-10.7-1.4c-0.2-0.1-0.7-0.6-0.4-0.3c0.3,0.4-0.2-0.4-0.2-0.8c0-0.3,0.2-1.8,0.5-2.8c0.4-1.2,0.5-1.7,1-2.6
                c0.2-0.5,0.5-0.8,0.7-1.3c0.5-1.2-0.1-0.2-1,0.4c-1.3,1-1.1,0-0.5,0.6c0.4,0.5,1.2,0.7,1.7,1.1c0.3,0.3,0.9,1.2,1.3,1.2
                c0.7,0.2-0.5-0.6,0-0.9c-0.2,0.1-0.1,3.5-0.1,3.9c-0.4,4.8-1,8.9-2.1,14c-1.1,5.7-2.6,11.4-4.7,16.7c-1,2.5-2.2,5-3.7,7.2
                c-0.9,1.4-2.5,3.1-3.7,3.9c-1.2,0.8-0.7,0.5-2.1,0.8c-0.8,0.2,0.4,0.1-0.5,0.1c-0.2,0-1.8-0.1-1.1,0c-1.3-0.2-1.4-0.3-2.2-0.7
                c-0.2-0.1-0.4-0.2-0.5-0.3c-0.6-0.4,0.5,0.5-0.1-0.1c-0.4-0.3-0.7-0.7-1-1.1c0.5,0.6-0.3-0.5-0.4-0.6c-0.2-0.5-0.5-1-0.7-1.4
                c-0.2-0.5-0.6-1.7-0.8-2.9c-0.6-2.5-0.7-4.4-0.8-7.2c-0.3-10.2,1.1-20.5,4-30.4c0.9-3.1-1.5-6.1-4.3-6.1
                c-8.4-0.2-17.2,1.9-25.4,3.9C135.8,1444.4,138.2,1453.7,143.9,1452.4L143.9,1452.4z"/>
            </g>
            <g>
              <path className="st4-intro" d="M169.3,1416.2c0.6-1.9,0.7-4.1,0.8-6.1c0.2-4.7,0.1-10-1.4-14.4c-2.5-7.5-9.1-12-16.5-11.7
                c-8.3,0.5-14.5,5.8-19.7,12.2c-6.6,8.2-11.6,17.5-15.3,27.6c-5.2,14.2-7.6,29.7-5.6,44.8c2,14.8,10.3,28.5,25.1,30.4
                c25.5,3.4,32.2-30.7,31.9-51c-0.1-6.2-9.1-6.2-9.1,0c0.1,8.6-0.6,17.3-3.3,25.4c-2.4,7.3-6.9,14.9-14.8,16
                c-11.6,1.7-18.6-9.5-20.6-20c-2.1-10.7-1-22.4,1.8-32.9c2.2-8.2,5.3-16.2,9.5-23.6c3.6-6.4,8.4-14.1,14.8-17.6
                c4-2.3,9.8-2.8,12.6,1.7c1.9,3.3,1.8,8,1.6,11.8c-0.1,2.2,0.1,2.8-0.5,4.6C158.8,1419.5,167.5,1422,169.3,1416.2L169.3,1416.2z"
                />
            </g>
          </g>
        </g>
      </g>
      <g id="grid" className="st74">
      </g>
      </svg>

    );
  }
});

module.exports = LandingAnim;
