import React from "react"
// import React, {useEffect, createRef} from "react"
// import lottie from "lottie-web";
// import animation from "../../animations/magicWand.json"
import "./footer.scss"

const linkedIn = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.76077 9.93889H8.48024V18.1097H5.76077V9.93889ZM8.65936 7.41135C8.64171 6.6102 8.06881 6 7.1385 6C6.20819 6 5.59998 6.6102 5.59998 7.41135C5.59998 8.1959 6.19021 8.82367 7.1032 8.82367H7.12058C8.06881 8.82367 8.65936 8.1959 8.65936 7.41135ZM15.1566 9.74703C16.9461 9.74703 18.2877 10.9151 18.2877 13.4248L18.2876 18.1098H15.5682V13.7383C15.5682 12.6403 15.1747 11.8911 14.1902 11.8911C13.4389 11.8911 12.9914 12.3962 12.7949 12.8841C12.723 13.0589 12.7053 13.3025 12.7053 13.5467V18.11H9.98554C9.98554 18.11 10.0214 10.7058 9.98554 9.93912H12.7053V11.0965C13.0663 10.5401 13.7127 9.74703 15.1566 9.74703Z" fill="#C9C9C9"/>
</svg>

const behance = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.1688 9.3349H13.7791V8.36376H17.1688V9.3349ZM16.87 10.1502C17.2786 10.3299 17.6151 10.615 17.88 11.004C18.1215 11.347 18.2766 11.745 18.3473 12.1972C18.3887 12.4615 18.4053 12.8446 18.3985 13.3428H14.1366C14.1622 13.9211 14.3639 14.3273 14.7492 14.5597C14.9825 14.7044 15.2632 14.7772 15.5928 14.7772C15.9398 14.7772 16.2235 14.6888 16.441 14.5129C16.5607 14.4171 16.666 14.2849 16.7563 14.1157H18.318C18.2766 14.4572 18.0869 14.8054 17.7513 15.1588C17.2275 15.7194 16.4937 16 15.5507 16C14.7718 16 14.0847 15.7639 13.4909 15.2902C12.8941 14.8173 12.5975 14.0466 12.5975 12.9804C12.5975 11.9804 12.8662 11.2134 13.4028 10.6796C13.9409 10.1472 14.6371 9.87919 15.4943 9.87919C16.0038 9.87919 16.4621 9.96977 16.87 10.1502ZM11.8352 10.0225C11.8352 9.55992 11.714 9.16345 11.4724 8.83157C11.0698 8.29106 10.3872 8.01412 9.42238 8.00001H5.59998V15.8033H9.16425C9.56613 15.8033 9.93791 15.7691 10.2818 15.6986C10.6258 15.6273 10.923 15.4974 11.1752 15.3066C11.3994 15.1402 11.5861 14.9353 11.7351 14.6925C11.9707 14.3258 12.0881 13.9107 12.0881 13.4482C12.0881 12.9997 11.985 12.6181 11.7802 12.3048C11.5733 11.9907 11.2692 11.7613 10.8658 11.6158C11.1315 11.4821 11.3325 11.3337 11.4694 11.1718C11.714 10.8822 11.8352 10.4984 11.8352 10.0225Z" fill="#C9C9C9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.17675 9.35499V11.0768H9.10037C9.4428 11.0768 9.72201 11.0122 9.93725 10.883C10.151 10.7538 10.2586 10.5251 10.2586 10.1984C10.2586 9.83388 10.1171 9.59406 9.83414 9.47676C9.5888 9.39583 9.27723 9.35499 8.89867 9.35499H7.17675ZM14.5822 11.4539C14.3662 11.6737 14.23 11.9714 14.1743 12.3471H16.8107C16.7828 11.9462 16.6458 11.6433 16.4035 11.4346C16.1582 11.2275 15.8564 11.1243 15.4951 11.1243C15.1038 11.1243 14.7982 11.2342 14.5822 11.4539ZM7.17673 14.449V12.3679H9.12443C9.46309 12.3708 9.72725 12.4154 9.9154 12.5C10.2518 12.6522 10.4189 12.9307 10.4189 13.3375C10.4189 13.8172 10.2458 14.1409 9.89884 14.3116C9.70844 14.403 9.44052 14.449 9.09733 14.449H7.17673Z" fill="#C9C9C9"/>
</svg>

const dribble = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM18.2694 13.2775C18.3559 12.8562 18.4 12.4239 18.4 11.9911C18.4 11.558 18.3559 11.1248 18.2694 10.7044C18.185 10.2931 18.06 9.88871 17.8962 9.50332C17.7362 9.12388 17.5378 8.75812 17.3059 8.41733C17.0775 8.07844 16.8143 7.76136 16.5252 7.47145C16.2356 7.18308 15.9168 6.92129 15.5783 6.69223C15.2364 6.46098 14.8705 6.26281 14.4911 6.1018C14.1045 5.93858 13.6998 5.81346 13.2888 5.72981C12.8669 5.64369 12.4332 5.59999 11.9997 5.59999C11.566 5.59999 11.1322 5.64369 10.7109 5.72981C10.2993 5.81344 9.89462 5.93856 9.50835 6.1018C9.12896 6.26284 8.76268 6.46098 8.42079 6.69223C8.08234 6.92129 7.76357 7.18308 7.47449 7.47145C7.18511 7.76136 6.92196 8.07844 6.6932 8.41733C6.46256 8.75812 6.26379 9.12385 6.10317 9.50332C5.93939 9.88871 5.81409 10.2931 5.72939 10.7044C5.64372 11.1248 5.59998 11.558 5.59998 11.9911C5.59998 12.4239 5.64375 12.8562 5.72937 13.2775C5.81406 13.6888 5.93936 14.0926 6.10314 14.4786C6.26376 14.8578 6.46254 15.2232 6.69318 15.564C6.92194 15.9026 7.18509 16.2203 7.47447 16.5098C7.76355 16.7982 8.08231 17.0606 8.42077 17.29C8.76265 17.5203 9.12894 17.7184 9.50832 17.8792C9.8946 18.0421 10.2993 18.1669 10.7109 18.2511C11.1322 18.3379 11.5659 18.3822 11.9997 18.3822C12.4331 18.3822 12.8669 18.3379 13.2888 18.2511C13.6998 18.1669 14.1045 18.0421 14.4911 17.8792C14.8705 17.7184 15.2364 17.5203 15.5783 17.29C15.9168 17.0606 16.2355 16.7982 16.5252 16.5098C16.8143 16.2203 17.0775 15.9026 17.3059 15.564C17.5378 15.2232 17.7362 14.8578 17.8962 14.4786C18.06 14.0926 18.185 13.6888 18.2694 13.2775Z" fill="#C9C9C9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 6.53374C13.3835 6.53374 14.647 7.04768 15.6093 7.89496L15.6088 7.89568C15.583 7.9343 14.8004 9.10462 12.755 9.87032C11.846 8.20364 10.8501 6.87163 10.7207 6.69854L10.7118 6.68665C11.1246 6.58742 11.5556 6.53374 11.9997 6.53374ZM13.5388 11.475C13.4254 11.2087 13.3026 10.9438 13.1757 10.6836C15.3198 9.80915 16.199 8.55488 16.2203 8.5245L16.2206 8.52407C16.9875 9.45369 17.4509 10.6411 17.4634 11.9349L17.457 11.9336C17.3135 11.9037 15.4986 11.5263 13.657 11.7577C13.6186 11.6641 13.5792 11.5705 13.5388 11.475ZM17.3959 12.8562C17.1527 14.3772 16.2811 15.6904 15.0539 16.5173C14.9983 16.1884 14.707 14.5863 13.9901 12.619C15.7542 12.3366 17.2834 12.82 17.3959 12.8562ZM12.966 12.8718L12.9527 12.876L12.9527 12.876C12.945 12.8784 12.9373 12.8808 12.9297 12.8836C9.70495 14.0062 8.65184 16.2686 8.64045 16.2932C9.56833 17.0138 10.7321 17.4485 11.9997 17.4485C12.7566 17.4485 13.4776 17.2946 14.1335 17.016C14.0526 16.5392 13.7351 14.8677 12.966 12.8718ZM12.15 11.0399C9.33579 11.8812 6.63533 11.8207 6.53846 11.817L6.53675 11.8711C6.53541 11.911 6.53407 11.9506 6.53407 11.9911C6.53407 13.3932 7.06379 14.6714 7.93446 15.6379C7.93258 15.6351 9.4283 12.9853 12.3778 12.0329C12.4491 12.0092 12.5216 11.988 12.5935 11.9674C12.4563 11.6572 12.3066 11.3464 12.15 11.0399ZM6.65126 10.8658C7.00597 9.17567 8.14353 7.77325 9.66769 7.05455C9.74051 7.15162 10.7512 8.52125 11.6972 10.1995C9.10057 10.8885 6.8433 10.8676 6.65651 10.8659L6.65126 10.8658Z" fill="#C9C9C9"/>
</svg>

const twitter = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.6658 10.169L11.6406 9.75374C11.5651 8.67754 12.2282 7.69456 13.2774 7.31323C13.6635 7.17764 14.3182 7.16069 14.7463 7.27933C14.9142 7.33017 15.2331 7.49965 15.4598 7.65219L15.8711 7.93183L16.3243 7.78777C16.5761 7.7115 16.9119 7.58439 17.063 7.49965C17.2057 7.42339 17.3316 7.38102 17.3316 7.40644C17.3316 7.5505 17.021 8.04199 16.7608 8.31316C16.4083 8.69449 16.509 8.72839 17.2224 8.47417C17.6505 8.33011 17.6589 8.33011 17.575 8.49111C17.5246 8.57585 17.2644 8.87245 16.9874 9.14361C16.5174 9.60968 16.4922 9.66053 16.4922 10.0503C16.4922 10.652 16.2068 11.9061 15.9214 12.5925C15.3926 13.8806 14.2595 15.211 13.1263 15.8805C11.5315 16.8211 9.40786 17.0583 7.61999 16.5075C7.02404 16.3211 6 15.8466 6 15.7618C6 15.7364 6.31057 15.7025 6.68829 15.694C7.4773 15.6771 8.26631 15.4568 8.93781 15.067L9.39108 14.7958L8.87066 14.6178C8.13201 14.3636 7.46891 13.7789 7.30103 13.2281C7.25067 13.0501 7.26746 13.0417 7.73751 13.0417L8.22434 13.0332L7.81305 12.8383C7.32621 12.5925 6.88134 12.1773 6.66311 11.7536C6.50362 11.4485 6.30218 10.6774 6.36093 10.6181C6.37772 10.5927 6.55399 10.6435 6.75544 10.7113C7.33461 10.9232 7.41015 10.8723 7.0744 10.5164C6.44487 9.87238 6.25181 8.91481 6.55399 8.00809L6.69668 7.60134L7.25067 8.15215C8.38383 9.26225 9.71843 9.92322 11.2461 10.1181L11.6658 10.169Z" fill="#C9C9C9"/>
</svg>

const instagram = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.36162 5.63866C10.0443 5.60759 10.2624 5.59999 12.0006 5.59999H11.9986C13.7373 5.59999 13.9546 5.60759 14.6373 5.63866C15.3186 5.66986 15.784 5.77773 16.192 5.93599C16.6133 6.09933 16.9693 6.318 17.3253 6.674C17.6813 7.02974 17.9 7.38681 18.064 7.80775C18.2213 8.21469 18.3293 8.67976 18.3613 9.3611C18.392 10.0438 18.4 10.2619 18.4 12.0001C18.4 13.7382 18.392 13.9558 18.3613 14.6385C18.3293 15.3196 18.2213 15.7848 18.064 16.1918C17.9 16.6126 17.6813 16.9697 17.3253 17.3254C16.9697 17.6815 16.6132 17.9007 16.1924 18.0641C15.7852 18.2224 15.3196 18.3303 14.6382 18.3615C13.9555 18.3925 13.7381 18.4001 11.9998 18.4001C10.2618 18.4001 10.0438 18.3925 9.36109 18.3615C8.67988 18.3303 8.21468 18.2224 7.80747 18.0641C7.3868 17.9007 7.02973 17.6815 6.67413 17.3254C6.31826 16.9697 6.09959 16.6126 5.93599 16.1917C5.77785 15.7848 5.66998 15.3197 5.63865 14.6384C5.60772 13.9557 5.59998 13.7382 5.59998 12.0001C5.59998 10.2619 5.60798 10.0436 5.63852 9.36096C5.66918 8.67989 5.77718 8.21468 5.93585 7.80761C6.09985 7.38681 6.31852 7.02974 6.67453 6.674C7.03026 6.31813 7.38734 6.09946 7.80827 5.93599C8.21521 5.77773 8.68028 5.66986 9.36162 5.63866Z" fill="#C9C9C9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4265 6.75335C11.538 6.75318 11.6579 6.75323 11.7873 6.75329L12.0006 6.75335C13.7094 6.75335 13.912 6.75948 14.5868 6.79015C15.2108 6.81868 15.5495 6.92295 15.7751 7.01055C16.0737 7.12655 16.2867 7.26522 16.5105 7.48923C16.7345 7.71323 16.8732 7.92656 16.9895 8.22523C17.0771 8.45057 17.1815 8.78924 17.2099 9.41324C17.2405 10.0879 17.2472 10.2906 17.2472 11.9986C17.2472 13.7066 17.2405 13.9093 17.2099 14.584C17.1813 15.208 17.0771 15.5466 16.9895 15.772C16.8735 16.0706 16.7345 16.2833 16.5105 16.5072C16.2865 16.7312 16.0739 16.8699 15.7751 16.9859C15.5497 17.0739 15.2108 17.1779 14.5868 17.2064C13.9121 17.2371 13.7094 17.2437 12.0006 17.2437C10.2917 17.2437 10.0891 17.2371 9.41447 17.2064C8.79046 17.1776 8.45179 17.0733 8.22605 16.9857C7.92738 16.8697 7.71405 16.7311 7.49005 16.5071C7.26604 16.283 7.12738 16.0702 7.01111 15.7714C6.92351 15.5461 6.81911 15.2074 6.79071 14.5834C6.76004 13.9088 6.75391 13.7061 6.75391 11.997C6.75391 10.2879 6.76004 10.0863 6.79071 9.41164C6.81924 8.78764 6.92351 8.44897 7.01111 8.22337C7.12711 7.9247 7.26604 7.71136 7.49005 7.48736C7.71405 7.26336 7.92738 7.12469 8.22605 7.00842C8.45166 6.92042 8.79046 6.81642 9.41447 6.78775C10.0049 6.76108 10.2337 6.75308 11.4265 6.75175V6.75335ZM15.4169 7.81599C14.9929 7.81599 14.6489 8.15959 14.6489 8.58373C14.6489 9.00773 14.9929 9.35174 15.4169 9.35174C15.8409 9.35174 16.1849 9.00773 16.1849 8.58373C16.1849 8.15972 15.8409 7.81572 15.4169 7.81572V7.81599ZM8.71392 12.0001C8.71392 10.185 10.1855 8.71346 12.0005 8.71338C13.8156 8.71338 15.2868 10.185 15.2868 12.0001C15.2868 13.8152 13.8157 15.2861 12.0006 15.2861C10.1855 15.2861 8.71392 13.8152 8.71392 12.0001Z" fill="#C9C9C9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0006 9.86669C13.1787 9.86669 14.134 10.8218 14.134 12C14.134 13.1782 13.1787 14.1334 12.0006 14.1334C10.8223 14.1334 9.86725 13.1782 9.86725 12C9.86725 10.8218 10.8223 9.86669 12.0006 9.86669V9.86669Z" fill="#C9C9C9"/>
</svg>

const youtube = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.0008 7.8747C17.5515 8.02583 17.9853 8.47114 18.1325 9.03665C18.4 10.0616 18.4 12.2 18.4 12.2C18.4 12.2 18.4 14.3384 18.1325 15.3634C17.9853 15.9289 17.5515 16.3742 17.0008 16.5254C16.0027 16.8 12 16.8 12 16.8C12 16.8 7.99729 16.8 6.99911 16.5254C6.44835 16.3742 6.0146 15.9289 5.8674 15.3634C5.59998 14.3384 5.59998 12.2 5.59998 12.2C5.59998 12.2 5.59998 10.0616 5.8674 9.03665C6.0146 8.47114 6.44835 8.02583 6.99911 7.8747C7.99729 7.60004 12 7.60004 12 7.60004C12 7.60004 16.0027 7.60004 17.0008 7.8747Z" fill="#C9C9C9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 14.4V10.4L14 12.4L10.8 14.4Z" fill="#C9C9C9"/>
</svg>

const hand = <svg width="308" height="256" viewBox="0 0 308 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M201.803 143.145C202.251 143.424 202.84 143.286 203.118 142.839C203.397 142.391 203.259 141.802 202.811 141.523L201.803 143.145ZM39.0319 39.6991C38.5841 39.4207 37.9953 39.558 37.7169 40.0059C37.4384 40.4537 37.5758 41.0425 38.0236 41.3209L39.0319 39.6991ZM4.41748 13.1052L4.74703 12.209L1.98891 11.1947L3.62411 13.6365L4.41748 13.1052ZM17.1729 32.1519L17.9233 32.7422L18.3523 32.197L17.9662 31.6206L17.1729 32.1519ZM3 50.1687L2.24953 49.5784L0.432615 51.8881L3.26014 51.0875L3 50.1687ZM25.0561 43.9234L25.8495 43.3921L25.4635 42.8157L24.796 43.0047L25.0561 43.9234ZM37.8115 62.9701L37.0182 63.5014L38.6534 65.9432L38.7657 63.0066L37.8115 62.9701ZM38.6876 40.0636L38.4275 39.1449L37.76 39.3339L37.7334 40.0271L38.6876 40.0636ZM60.7437 33.8182L61.0039 34.737L63.8314 33.9363L61.0733 32.9221L60.7437 33.8182ZM39.229 25.9066L38.2749 25.8701L38.2484 26.5633L38.8995 26.8027L39.229 25.9066ZM40.1051 3L41.0592 3.03649L41.1715 0.0999444L39.3546 2.40965L40.1051 3ZM25.9322 21.0169L25.6026 21.913L26.2537 22.1525L26.6827 21.6072L25.9322 21.0169ZM293.873 255.008C294.321 255.287 294.91 255.151 295.189 254.704C295.469 254.257 295.333 253.668 294.885 253.388L293.873 255.008ZM152.551 195.924C152.208 195.524 151.605 195.477 151.204 195.82C150.804 196.163 150.757 196.765 151.1 197.166L152.551 195.924ZM247.891 157.366C247.638 156.903 247.058 156.732 246.595 156.985C246.133 157.237 245.962 157.817 246.214 158.28L247.891 157.366ZM238.83 196.261C238.514 196.684 238.601 197.282 239.024 197.597C239.447 197.913 240.045 197.826 240.36 197.403L238.83 196.261ZM235.387 195.371C235.372 194.844 234.933 194.429 234.406 194.443C233.878 194.458 233.463 194.897 233.478 195.424L235.387 195.371ZM215.352 219.79C214.883 220.031 214.698 220.606 214.939 221.075C215.18 221.544 215.756 221.729 216.225 221.488L215.352 219.79ZM160.717 119.101L161.233 118.297L161.233 118.297L160.717 119.101ZM182.229 134.303L181.669 135.077L181.669 135.077L182.229 134.303ZM141.213 143.482L140.287 143.247L140.287 143.247L141.213 143.482ZM154.12 161.265L154.527 160.401L154.527 160.401L154.12 161.265ZM187.392 160.691L188.34 160.81L187.392 160.691ZM156.701 181.343L157.108 180.479L157.108 180.479L156.701 181.343ZM185.671 177.328L186.619 177.446L185.671 177.328ZM170.182 185.273L170.085 186.223L170.085 186.223L170.182 185.273ZM145.802 185.072L144.881 184.821L144.881 184.821L145.802 185.072ZM157.562 198.84L157.276 199.751L157.562 198.84ZM175.632 194.824L174.684 194.71L174.684 194.71L175.632 194.824ZM306.782 190.878C307.296 190.998 307.81 190.679 307.93 190.166C308.05 189.652 307.731 189.139 307.218 189.018L306.782 190.878ZM241.316 142.621L240.452 143.026L240.465 143.056L240.481 143.084L241.316 142.621ZM202.021 111.93L202.46 111.083L202.312 111.006L202.148 110.984L202.021 111.93ZM167.116 107.242L166.989 108.188L166.989 108.188L167.116 107.242ZM164.408 110.23L163.481 110.462L163.481 110.462L164.408 110.23ZM186.245 127.132L186.416 126.193L186.39 126.188L186.365 126.185L186.245 127.132ZM190.092 134.617C190.424 135.027 191.025 135.09 191.435 134.758C191.845 134.427 191.908 133.825 191.576 133.416L190.092 134.617ZM202.811 141.523L39.0319 39.6991L38.0236 41.3209L201.803 143.145L202.811 141.523ZM3.62411 13.6365L16.3795 32.6832L17.9662 31.6206L5.21085 12.5739L3.62411 13.6365ZM16.4224 31.5615L2.24953 49.5784L3.75047 50.7591L17.9233 32.7422L16.4224 31.5615ZM3.26014 51.0875L25.3163 44.8421L24.796 43.0047L2.73986 49.25L3.26014 51.0875ZM24.2628 44.4547L37.0182 63.5014L38.6049 62.4388L25.8495 43.3921L24.2628 44.4547ZM38.7657 63.0066L39.6417 40.1001L37.7334 40.0271L36.8574 62.9336L38.7657 63.0066ZM38.9477 40.9823L61.0039 34.737L60.4836 32.8995L38.4275 39.1449L38.9477 40.9823ZM61.0733 32.9221L39.5586 25.0104L38.8995 26.8027L60.4142 34.7144L61.0733 32.9221ZM40.1832 25.943L41.0592 3.03649L39.1509 2.96351L38.2749 25.8701L40.1832 25.943ZM39.3546 2.40965L25.1817 20.4265L26.6827 21.6072L40.8555 3.59035L39.3546 2.40965ZM26.2617 20.1207L4.74703 12.209L4.08793 14.0013L25.6026 21.913L26.2617 20.1207ZM294.885 253.388C284.363 246.812 260.603 224.56 224.68 224.56V226.47C259.89 226.47 282.979 248.199 293.873 255.008L294.885 253.388ZM224.68 224.56C207.065 224.56 191.118 219.848 178.514 213.895C165.892 207.935 156.693 200.765 152.551 195.924L151.1 197.166C155.467 202.269 164.912 209.584 177.698 215.622C190.503 221.669 206.728 226.47 224.68 226.47V224.56ZM246.214 158.28C249.454 164.22 251.258 179.595 238.83 196.261L240.36 197.403C253.173 180.223 251.535 164.047 247.891 157.366L246.214 158.28ZM233.478 195.424C233.569 198.719 232.954 202.775 230.389 207.007C227.822 211.243 223.261 215.722 215.352 219.79L216.225 221.488C224.378 217.295 229.235 212.595 232.022 207.997C234.811 203.395 235.486 198.961 235.387 195.371L233.478 195.424ZM161.233 118.297C157.421 115.853 153.433 116.493 150.652 118.59C147.915 120.655 146.256 124.212 147.174 127.665L149.019 127.174C148.341 124.623 149.55 121.813 151.802 120.115C154.009 118.45 157.129 117.934 160.201 119.905L161.233 118.297ZM147.174 127.665C147.622 129.351 148.902 131.55 150.669 133.862C152.456 136.199 154.806 138.737 157.493 141.107C162.831 145.816 169.657 150.005 176.139 150.458L176.272 148.553C170.422 148.144 163.991 144.293 158.756 139.675C156.157 137.382 153.893 134.934 152.186 132.702C150.461 130.445 149.369 128.489 149.019 127.174L147.174 127.665ZM176.139 150.458C182.528 150.903 186.678 148.527 187.872 144.775C189.045 141.088 187.146 136.685 182.789 133.53L181.669 135.077C185.631 137.945 186.887 141.573 186.052 144.196C185.238 146.754 182.217 148.967 176.272 148.553L176.139 150.458ZM182.789 133.53C176.15 128.722 166.329 121.567 161.233 118.297L160.201 119.905C165.24 123.137 174.999 130.247 181.669 135.077L182.789 133.53ZM153.22 134.783C150.948 134.878 148.113 135.586 145.66 136.941C143.212 138.293 141.02 140.364 140.287 143.247L142.138 143.717C142.693 141.533 144.395 139.821 146.583 138.612C148.767 137.406 151.312 136.775 153.299 136.691L153.22 134.783ZM140.287 143.247C139.903 144.757 139.438 147.725 141.048 151.233C142.656 154.735 146.264 158.624 153.713 162.129L154.527 160.401C147.347 157.023 144.149 153.409 142.783 150.436C141.421 147.468 141.816 144.986 142.138 143.717L140.287 143.247ZM153.713 162.129C161.113 165.611 169.276 167.809 175.79 167.956C179.04 168.03 181.969 167.595 184.196 166.474C186.468 165.33 188.008 163.464 188.34 160.81L186.445 160.573C186.203 162.508 185.125 163.869 183.337 164.768C181.503 165.691 178.929 166.117 175.833 166.047C169.654 165.907 161.755 163.803 154.527 160.401L153.713 162.129ZM188.34 160.81C188.851 156.722 186.957 153.832 184.479 151.944C182.038 150.084 178.989 149.15 176.918 148.847L176.641 150.737C178.49 151.007 181.206 151.852 183.321 153.463C185.398 155.045 186.852 157.318 186.445 160.573L188.34 160.81ZM156.882 161.478C154.025 160.929 151.192 161.605 148.935 162.728C146.709 163.836 144.88 165.463 144.14 167.002L145.861 167.83C146.349 166.815 147.77 165.441 149.786 164.438C151.773 163.449 154.177 162.903 156.521 163.353L156.882 161.478ZM144.14 167.002C143.807 167.693 143.452 168.598 143.386 169.683C143.318 170.783 143.551 172.009 144.303 173.334C145.779 175.937 149.238 178.886 156.295 182.207L157.108 180.479C150.147 177.203 147.14 174.465 145.964 172.392C145.389 171.379 145.248 170.52 145.292 169.8C145.337 169.065 145.579 168.415 145.861 167.83L144.14 167.002ZM186.619 177.446C187.131 173.349 185.227 170.591 182.726 168.844C180.276 167.131 177.228 166.354 175.197 166.057L174.92 167.946C176.809 168.223 179.526 168.937 181.632 170.409C183.687 171.845 185.129 173.964 184.724 177.209L186.619 177.446ZM156.295 182.207C161.051 184.445 165.802 185.785 170.085 186.223L170.28 184.323C166.237 183.91 161.694 182.637 157.108 180.479L156.295 182.207ZM170.085 186.223C174.358 186.66 178.234 186.205 181.181 184.774C184.167 183.324 186.191 180.868 186.619 177.446L184.724 177.209C184.387 179.907 182.831 181.85 180.347 183.056C177.824 184.281 174.338 184.738 170.28 184.323L170.085 186.223ZM153.76 178.957C149.886 179.255 145.902 181.075 144.881 184.821L146.723 185.323C147.423 182.758 150.323 181.137 153.907 180.861L153.76 178.957ZM144.881 184.821C144.548 186.041 143.715 188.662 145.077 191.573C146.439 194.484 149.854 197.422 157.276 199.751L157.848 197.929C150.642 195.668 147.838 192.967 146.807 190.764C145.776 188.561 146.377 186.594 146.723 185.323L144.881 184.821ZM157.276 199.751C164.686 202.075 169.395 201.854 172.355 200.488C175.366 199.098 176.379 196.615 176.58 194.938L174.684 194.71C174.544 195.881 173.836 197.701 171.554 198.754C169.222 199.831 165.067 200.193 157.848 197.929L157.276 199.751ZM176.58 194.938C177.034 191.156 176.191 188.546 174.529 186.813C172.903 185.118 170.644 184.426 168.6 184.127L168.323 186.017C170.199 186.291 171.956 186.89 173.151 188.135C174.309 189.343 175.091 191.322 174.684 194.71L176.58 194.938ZM307.218 189.018C299.765 187.273 287.513 182.824 275.104 175.16C262.697 167.497 250.193 156.657 242.151 142.158L240.481 143.084C248.731 157.957 261.516 169.012 274.101 176.785C286.685 184.557 299.129 189.086 306.782 190.878L307.218 189.018ZM242.181 142.216C238.625 134.631 231.25 128.201 223.564 123.021C215.859 117.827 207.697 113.797 202.46 111.083L201.581 112.778C206.861 115.514 214.905 119.487 222.497 124.604C230.109 129.735 237.123 135.926 240.452 143.026L242.181 142.216ZM202.148 110.984L167.243 106.295L166.989 108.188L201.893 112.877L202.148 110.984ZM163.481 110.462C164.269 113.618 165.564 117.508 168.901 120.874C172.246 124.247 177.537 126.991 186.125 128.08L186.365 126.185C178.081 125.135 173.227 122.525 170.257 119.53C167.281 116.528 166.093 113.037 165.334 109.999L163.481 110.462ZM186.074 128.072C187.208 128.278 187.828 128.633 188.193 128.993C188.557 129.352 188.759 129.803 188.893 130.381C188.96 130.673 189.007 130.983 189.052 131.324C189.096 131.65 189.14 132.025 189.2 132.381C189.319 133.093 189.527 133.919 190.092 134.617L191.576 133.416C191.329 133.11 191.188 132.688 191.083 132.065C191.031 131.752 190.994 131.438 190.945 131.072C190.899 130.72 190.842 130.336 190.753 129.951C190.574 129.173 190.249 128.337 189.533 127.632C188.819 126.929 187.806 126.446 186.416 126.193L186.074 128.072ZM167.243 106.295C164.91 105.982 162.902 108.141 163.481 110.462L165.334 109.999C165.091 109.024 165.955 108.049 166.989 108.188L167.243 106.295Z" fill="#C2C2C2"/>
</svg>


// let anim;

const Footer = () => {

    // let animationContainer = createRef();
    
    // console.log('load anim', {anim})

//   useEffect(()=> {
    
//   anim = lottie.loadAnimation({
//     container: animationContainer.current, // current instance of our container!
//     animationData: animation, // animation file!
//     renderer: "svg",
//     loop: true,
//     autoplay: true
//   });
//   console.log(anim)
// },[]);
   
  return (
    <footer>
    <div className='footerWrapper' >
      <h1>Lets make Magic</h1>
      <p>
      Life is all about experiences, and I strive to create positive ones by paying
      attention to Human Behaviour, as I strongly believe Design is more science than Art. 
      Lets make magic on your next project.
      </p>
      <a className='emailMe' href="mailto:dareony@gmail.com">Send An Email</a>
      
        {/* <div className='magicWand' ref={animationContainer}/> */}
        <div className='magicWand'>
          {hand}
        </div>

      <div className='connectMe'>
        <div>
          <a href="#">{linkedIn}</a> 
          <a href="#">{behance}</a> 
          <a href="https://dribbble.com/godDray">{dribble}</a>
          <a href="#">{twitter}</a>
          <a href="#">{instagram}</a>
          <a href="#">{youtube}</a>  
        </div>
        <span> Designed and Coded by me. © {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
  );
}

export default Footer
