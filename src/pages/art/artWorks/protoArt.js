import React, {useEffect, useState} from "react"
import './protoArt.scss'


const ProtoArt = () => {

      // Define state variables and their setters using the useState hook
const [count, setCount] = useState(0);

// Define a function to handle the button click event
const handleButtonClick = (x) => {
    // Toggle the state using the setter function
    if(x % 2 === 0) return "pallete0"
    else return "pallete1"   
};

useEffect(() => {
  const intervalId = setInterval(() => {
      let prev = count;
      if (count < 5) {
          prev++;
          setCount(prev++);
      } else {
          clearInterval(intervalId); // Stop the interval when count reaches 20
      }
  }, 2000); // 4 seconds

  // Clean up function to clear the interval when component unmounts or re-renders
  return () => clearInterval(intervalId);
}, [count]); // useEffect depends on count state

    return (
        <div className='ProtoArtFrame' onMouseEnter={() => setCount(count + 1)} onMouseLeave={() => setCount(count + 1)} >
        <svg id="protoArt" className={handleButtonClick(count)} width="393.13" height="526.17" viewBox="0 0 1309 1752" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="firstLady" clip-path="url(#clip0_4067_2300)">
            <rect width="1309" height="1752" fill="black"/>
            <g id="bg_patterns">
            <path class="part6" id="6" d="M1247 1679C1229 1695.4 1197.5 1735.83 1184 1754H1311V1605C1270 1641 1269.5 1658.5 1247 1679Z" fill="#BDD0D4"/>
            <path class="part5" id="5" d="M562 1679H399L414.5 1752.5H543L562 1679Z" fill="#D9D9D9"/>
            <path class="part4" id="4" d="M110.5 1657.5C69.3 1633.1 20.3333 1577.33 1 1552.5V1751H242C233 1736 162 1688 110.5 1657.5Z" fill="#6D0003"/>
            <path class="part3" id="3" d="M595 1704C596.2 1727.6 578.833 1745.83 570 1752H1125.5C1120.17 1745 1112.7 1729.8 1125.5 1725C1141.5 1719 1189.5 1688 1201 1656C1212.5 1624 1223 1600.5 1256.5 1566C1283.3 1538.4 1301.33 1494.17 1307 1475.5V990.5C1291.83 972.833 1253.8 933.8 1223 919C1184.5 900.5 1164 876 1125.5 867C1087 858 1040.5 846 1001 847.5C961.5 849 913.5 815.5 867.5 816.5C821.5 817.5 804.5 864.5 795 919C785.5 973.5 798.5 1030 823 1083C847.5 1136 836.5 1243.5 844 1277C851.5 1310.5 819.5 1384.5 823 1443.5C826.5 1502.5 730.5 1535 693.5 1591.5C656.5 1648 593.5 1674.5 595 1704Z" fill="#A13846"/>
            <path class="part2" id="2" d="M58 1144C35.6 1141.6 10 1123.67 0 1115L2 1472.5L19 1490.5C47 1524 98.5 1560 121 1592.5C143.5 1625 221.5 1697.5 247.5 1701.5C268.3 1704.7 285.5 1734.5 291.5 1749C310.333 1750 351.3 1751.4 364.5 1749C381 1746 373 1705 374 1660C375 1615 355.5 1600 348 1567.5C340.5 1535 349.5 1531 336.5 1457C323.5 1383 342 1336 329 1316.5C316 1297 307.5 1256.5 291.5 1187C278.7 1131.4 261.833 1106.83 255 1101.5C263 1111.5 243.333 1137.67 232.5 1149.5C212.1 1166.3 156.333 1164.17 131 1161C85 1169 63.1667 1153 58 1144Z" fill="#982C3B"/>
            <path class="part1" id="1" d="M1219.5 850.5C1249.5 874.9 1293.33 891 1309 892.5V-1H804L880 183C896.167 232 930.8 333 940 345C951.5 360 937.5 392 933.5 416C930.3 435.2 962.167 467 978.5 480.5C975.167 493 969.4 523.8 973 547C985 590.2 968 637.667 958 656C957 678.5 957.7 726.9 968.5 740.5C979.3 754.1 1053.67 777.167 1089.5 787C1120.33 798 1189.5 826.1 1219.5 850.5Z" fill="#BDD0D4"/>
            <path class="part0" id="0" d="M56 8.25L-3 57V-3H52.1759L56 8.25Z" fill="#A8B4B0"/>
            </g>
            <g id="skinColor">
            <path class="skinColor" id="2_2" d="M366.5 1089.5C351.3 1090.7 328.833 1104.67 319.5 1111.5C329.607 1155.78 359.998 1186.57 373.5 1229C380.5 1251 400 1278.5 416.5 1311.5C450.99 1380.48 482.664 1468.57 502 1543.5C458.909 1533.16 433.83 1420.23 400 1389C389.6 1379.4 384.667 1396.33 383.5 1406C389.216 1483.58 403.597 1557.66 409 1636C423.833 1642.67 463.2 1654 502 1646C540.8 1638 582.833 1642.67 599 1646C608.833 1626.17 632.7 1583.3 649.5 1570.5C697.7 1533.78 819.884 1432.2 802.5 1359.5C792.091 1315.97 791.199 1269.23 783.5 1224C766.464 1123.92 714.597 1030.14 722 926.5C718.5 928.167 710.6 932.5 707 936.5C687 958.5 675.5 945 660 966C603.5 1041 385.5 1088 366.5 1089.5Z" fill="#D49C45"/>
            <path class="skinColor" id="1_2" d="M832 554.5C809.6 612.9 822.667 654.167 832 667.5C856 677 862 697.5 902 621C942 544.5 928.5 497.5 915 490C901.5 482.5 860 481.5 832 554.5Z" fill="#D49C45"/>
            <g id="0_2">
            <path class="skinColor" d="M530.5 510.871C531.99 517.292 541.743 528.52 568.835 522.064C600.541 514.509 598.17 505.129 596.849 499.905C596.759 499.549 596.674 499.213 596.605 498.897C594.409 488.876 534.157 481.327 530.5 510.871Z" fill="#D49C45"/>
            <path class="skinColor" d="M114 512C141.092 518.455 152.818 504.473 154.308 498.053C150.651 468.508 93.5 472.5 88.2032 486.079C88.1455 486.226 88.0851 486.379 88.0226 486.537C85.7935 492.174 81.0575 504.151 114 512Z" fill="#D49C45"/>
            <path class="skinColor" fill-rule="evenodd" clip-rule="evenodd" d="M537.499 170.5C491.099 146.9 488.166 99 492.499 78C485.166 104.667 448.6 157.3 361 154.5C251.5 151 169 170.5 76.4995 267C-16.0005 363.5 12.4995 623.5 35.9995 705C59.4995 786.5 184.5 998.5 305 1031.5C425.5 1064.5 570.5 973.5 680 873.5C789.5 773.5 792.5 515.5 777 401.5C761.5 287.5 595.499 200 537.499 170.5ZM463 527C468.5 551.667 504.5 594.8 604.5 570C721.529 540.977 712.776 504.942 707.901 484.872L707.9 484.867C707.568 483.502 707.255 482.21 707 481C698.895 442.5 476.5 413.5 463 527ZM82.5079 548.5C154.299 579.5 212.192 551.319 216 517C225.616 430.351 64.6096 423.5 56.5044 462C56.3983 462.504 56.0228 464.75 55.5963 467.301L55.5957 467.305L55.5955 467.306C54.9964 470.89 54.2971 475.073 54.1032 475.872C53.0897 480.044 51.011 483.992 48.9179 487.967C40.943 503.113 32.7608 518.652 82.5079 548.5ZM70 367L82 398.5C188 390.5 260 398.5 280.5 468C290.395 501.547 282.001 560.488 274.154 615.586C265.744 674.638 257.963 729.274 274 743.5C305 771 375 750 401 737C421.8 726.6 403.667 707.333 392 699C368.833 707.333 322.2 720.9 321 708.5C320.718 705.59 321.741 696.441 323.251 682.935C329.781 624.506 345.425 484.541 304 415.5C263.2 347.5 131 354.833 70 367ZM432.501 417C458.501 378.667 539.801 316.6 657.001 375C644.667 381.667 607.001 395.2 555.001 396C525.514 396.454 496.027 410.489 473.309 421.303C445.947 434.328 428.403 442.679 432.501 417Z" fill="#D49C45"/>
            </g>
            </g>
            <path className="lips" id="lips" d="M232.5 844C259.3 801.6 320 812.833 345 822C414.5 790 469.833 832.5 489.5 860.5C477.833 882 433.8 924.7 351 923.5C268.2 922.3 237.5 870 232.5 844Z" fill="#B73021"/>
            <g id="eye_highlight">
            <path class="eye_highlight" id="1_3" d="M500.501 418C461.701 430.4 473.834 453.333 484.501 466.5C501.001 486.867 549.5 437.5 668.501 453.5C695.333 457.108 715.001 395 668.501 392C622.001 389 549.001 402.5 500.501 418Z" fill="#B696A5"/>
            <path class="eye_highlight" id="0_3" d="M233.499 429C272.299 441.4 258.666 472.333 247.999 485.5C223.499 496 191.978 458.054 171.5 451C142.467 441 138.033 409.081 167.032 411.421C199 414 184.999 413.5 233.499 429Z" fill="#B696A5"/>
            </g>
            <g id="eye_iris">
            <path id="0_4" d="M136 500C136 510.493 123.016 519 107 519C90.9837 519 81 510.493 81 500C81 489.507 83.9837 480 100 480C116.016 480 136 489.507 136 500Z" fill="white"/>
            <path id="1_4" d="M585 513C585 525.15 576.016 538 560 538C543.984 538 529 526.65 529 514.5C529 502.35 545 493.5 562 490C578.016 490 585 500.85 585 513Z" fill="white"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_4067_2300">
            <rect width="1309" height="1752" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
    )
    
}

export default ProtoArt;